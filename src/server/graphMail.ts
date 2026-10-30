import path from 'node:path';

interface GraphMailAttachment {
  filename: string;
  contentType: string;
  content: Buffer;
}

interface SendInquiryEmailOptions {
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: GraphMailAttachment[];
}

interface TokenResponse {
  access_token?: string;
  error?: string;
  error_description?: string;
}

class GraphMailError extends Error {
  constructor(
    message: string,
    readonly statusCode: number,
  ) {
    super(message);
    this.name = 'GraphMailError';
  }
}

export async function sendInquiryEmail({
  subject,
  text,
  replyTo,
  attachments = [],
}: SendInquiryEmailOptions): Promise<void> {
  const tenantId = process.env.MS_TENANT_ID;
  const clientId = process.env.MS_CLIENT_ID;
  const clientSecret = process.env.MS_CLIENT_SECRET;
  const mailbox = process.env.CONTACT_EMAIL || 'Info@buildmateusa.com';

  if (!tenantId || !clientId || !clientSecret) {
    throw new GraphMailError('Microsoft Graph email configuration is incomplete.', 503);
  }

  const tokenResponse = await fetch(
    `https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
      }),
      signal: AbortSignal.timeout(15000),
    },
  );
  const tokenData = await tokenResponse.json() as TokenResponse;

  if (!tokenResponse.ok || !tokenData.access_token) {
    console.error('Microsoft Graph token request failed:', tokenResponse.status, tokenData.error, tokenData.error_description);
    throw new GraphMailError('Microsoft Graph authentication failed.', 502);
  }

  const graphResponse = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(mailbox)}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: {
          subject,
          body: { contentType: 'Text', content: text },
          toRecipients: [{ emailAddress: { address: mailbox } }],
          ...(replyTo ? { replyTo: [{ emailAddress: { address: replyTo } }] } : {}),
          ...(attachments.length ? {
            attachments: attachments.map((attachment) => ({
              '@odata.type': '#microsoft.graph.fileAttachment',
              name: path.basename(attachment.filename).replace(/[^\w.-]/g, '_'),
              contentType: attachment.contentType,
              contentBytes: attachment.content.toString('base64'),
            })),
          } : {}),
        },
        saveToSentItems: true,
      }),
      signal: AbortSignal.timeout(20000),
    },
  );

  if (!graphResponse.ok) {
    const errorDetails = (await graphResponse.text()).slice(0, 2000);
    console.error('Microsoft Graph sendMail request failed:', graphResponse.status, errorDetails);
    throw new GraphMailError('Microsoft Graph could not send the inquiry email.', 502);
  }
}

export function inquiryEmailErrorStatus(error: unknown): number {
  return error instanceof GraphMailError ? error.statusCode : 502;
}
