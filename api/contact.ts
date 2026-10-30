import type { VercelRequest, VercelResponse } from '@vercel/node';
import { inquiryEmailErrorStatus, sendInquiryEmail } from '../src/server/graphMail.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body as Record<string, unknown> : {};
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const serviceCategory = typeof body.serviceCategory === 'string' ? body.serviceCategory.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (
    !name || name.length > 120 ||
    (!email && !phone) ||
    (email && (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) ||
    phone.length > 40 || serviceCategory.length > 160 || message.length > 5000
  ) {
    return res.status(400).json({
      success: false,
      error: 'Please provide your name, a valid email address or phone number, and a message.',
    });
  }

  try {
    await sendInquiryEmail({
      subject: `BuildMate inquiry${serviceCategory ? `: ${serviceCategory}` : ''}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Service: ${serviceCategory || 'Not specified'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      replyTo: email || undefined,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact email delivery failed:', error);
    return res.status(inquiryEmailErrorStatus(error)).json({
      success: false,
      error: 'We could not send your message right now. Please email us directly.',
    });
  }
}
