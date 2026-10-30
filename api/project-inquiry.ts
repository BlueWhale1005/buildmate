import multer from 'multer';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { Request as ExpressRequest, Response as ExpressResponse } from 'express';
import { inquiryEmailErrorStatus, sendInquiryEmail } from '../src/server/graphMail.js';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { files: 3, fileSize: 700 * 1024 },
  fileFilter: (_request, file, callback) => {
    const acceptedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'];
    if (!acceptedTypes.includes(file.mimetype)) {
      callback(new Error('Only PDF, JPG, PNG, and WebP attachments are accepted.'));
      return;
    }
    callback(null, true);
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

function parseMultipart(req: VercelRequest, res: VercelResponse): Promise<void> {
  return new Promise((resolve, reject) => {
    upload.array('documents', 3)(
      req as unknown as ExpressRequest,
      res as unknown as ExpressResponse,
      (error: unknown) => {
        if (error) reject(error);
        else resolve();
      },
    );
  });
}

type ParsedVercelRequest = VercelRequest & { files?: Express.Multer.File[] };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }

  try {
    await parseMultipart(req, res);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to process attachments.';
    return res.status(400).json({ success: false, error: message });
  }

  const body = req.body && typeof req.body === 'object' ? req.body as Record<string, unknown> : {};
  const propertyType = typeof body.propertyType === 'string' ? body.propertyType.trim() : '';
  const projectCategory = typeof body.projectCategory === 'string' ? body.projectCategory.trim() : '';
  const description = typeof body.description === 'string' ? body.description.trim() : '';
  const timeline = typeof body.timeline === 'string' ? body.timeline.trim() : '';
  const budget = typeof body.budget === 'string' ? body.budget.trim() : '';
  const name = typeof body.fullName === 'string' ? body.fullName.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const location = typeof body.location === 'string' ? body.location.trim() : '';
  const documents = (req as ParsedVercelRequest).files || [];
  const validPropertyTypes = ['Residential', 'Commercial'];
  const validCategories = [
    'Renovation', 'Remodeling', 'New construction', 'Structural work or repair', 'Other',
    'Renovación', 'Remodelación', 'Nueva construcción', 'Trabajo estructural o reparación', 'Otro',
  ];

  if (
    !validPropertyTypes.includes(propertyType) ||
    !validCategories.includes(projectCategory) ||
    !description || description.length > 5000 ||
    !timeline || !name || name.length > 120 ||
    !email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !phone || phone.length > 40 || !location || location.length > 160
  ) {
    return res.status(400).json({
      success: false,
      error: 'Please complete all required project and contact fields with valid information.',
    });
  }

  try {
    await sendInquiryEmail({
      subject: `BuildMate general contracting inquiry: ${projectCategory}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Property type: ${propertyType}`,
        `Project category: ${projectCategory}`,
        `Timeline: ${timeline}`,
        `Estimated budget: ${budget || 'Not provided'}`,
        `Property location: ${location}`,
        '',
        'Project description:',
        description,
        '',
        `Attachments: ${documents.length ? documents.map((file) => file.originalname).join(', ') : 'None'}`,
      ].join('\n'),
      replyTo: email,
      attachments: documents.map((file) => ({
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype,
      })),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Project inquiry email delivery failed:', error);
    return res.status(inquiryEmailErrorStatus(error)).json({
      success: false,
      error: 'We could not send your project inquiry right now. Please contact BuildMate directly.',
    });
  }
}
