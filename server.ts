import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import multer from 'multer';
import { inquiryEmailErrorStatus, sendInquiryEmail } from './src/server/graphMail.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const projectDocumentUpload = multer({
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

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

app.post('/api/contact', async (req: Request, res: Response) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
  const email = typeof req.body.email === 'string' ? req.body.email.trim() : '';
  const phone = typeof req.body.phone === 'string' ? req.body.phone.trim() : '';
  const serviceCategory = typeof req.body.serviceCategory === 'string' ? req.body.serviceCategory.trim() : '';
  const message = typeof req.body.message === 'string' ? req.body.message.trim() : '';

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
    });

    return res.json({ success: true });
  } catch (error) {
    console.error('Contact email delivery failed:', error);
    return res.status(inquiryEmailErrorStatus(error)).json({
      success: false,
      error: 'We could not send your message right now. Please email us directly.',
    });
  }
});

app.post('/api/project-inquiry', (req: Request, res: Response, next) => {
  projectDocumentUpload.array('documents', 3)(req, res, (error: unknown) => {
    if (!error) {
      next();
      return;
    }

    const message = error instanceof Error ? error.message : 'Unable to process attachments.';
    return res.status(400).json({ success: false, error: message });
  });
}, async (req: Request, res: Response) => {
  const propertyType = typeof req.body.propertyType === 'string' ? req.body.propertyType.trim() : '';
  const projectCategory = typeof req.body.projectCategory === 'string' ? req.body.projectCategory.trim() : '';
  const description = typeof req.body.description === 'string' ? req.body.description.trim() : '';
  const timeline = typeof req.body.timeline === 'string' ? req.body.timeline.trim() : '';
  const budget = typeof req.body.budget === 'string' ? req.body.budget.trim() : '';
  const name = typeof req.body.fullName === 'string' ? req.body.fullName.trim() : '';
  const email = typeof req.body.email === 'string' ? req.body.email.trim() : '';
  const phone = typeof req.body.phone === 'string' ? req.body.phone.trim() : '';
  const location = typeof req.body.location === 'string' ? req.body.location.trim() : '';
  const documents = (req.files as Express.Multer.File[] | undefined) || [];
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

    return res.json({ success: true });
  } catch (error) {
    console.error('Project inquiry email delivery failed:', error);
    return res.status(inquiryEmailErrorStatus(error)).json({
      success: false,
      error: 'We could not send your project inquiry right now. Please contact BuildMate directly.',
    });
  }
});

// AI Renovation Concept endpoint using Gemini API
app.post('/api/ai-renovation', async (req: Request, res: Response) => {
  try {
    const { roomType, stylePreference, projectDescription, estimatedSquareFootage, imageBase64 } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Fallback response if GEMINI_API_KEY is not configured
      return res.json({
        success: true,
        source: 'local_engine',
        conceptTitle: `${stylePreference || 'Modern'} ${roomType || 'Living Space'} Transformation`,
        summary: `Tailored renovation design concept for a Jersey City home. Features optimized spatial flow, high-durability materials suited for local Northeast climate, and trade-ready specifications.`,
        suggestedMaterials: [
          'White oak engineered hardwood flooring with matte UV sealant',
          'Custom flat-panel maple cabinetry with soft-close Blum hardware',
          'Calacatta quartz countertops with subtle warm grey veining (heat & stain resistant)',
          'Matte black architectural plumbing fixtures with ceramic disc valves',
          'Recessed 3000K high-CRI LED warm dimmable illumination'
        ],
        contractorScope: [
          'Initial site survey and laser dimensioning',
          'Demolition and debris haul-away in compliance with Jersey City municipal codes',
          'Rough plumbing and electrical rough-in by licensed NJ trades',
          'Subfloor leveling and moisture barrier installation',
          'Cabinetry installation, countertop template, and finishing trims'
        ],
        jerseyCityBallparkCost: {
          diyMaterialsOnly: '$3,800 - $6,200',
          laborAndMaterials: '$12,500 - $18,900',
          timelineWeeks: '2 - 3 weeks'
        },
        proTips: [
          'Check if your building in JC (Downtown, Heights, Journal Square) requires historical board approval or condo HOA architectural review.',
          'Always request a certificate of insurance (COI) naming the property owner before work begins.'
        ]
      });
    }

    const ai = new GoogleGenAI();
    const prompt = `You are a licensed Jersey City residential renovation consultant and architect assistant.
The homeowner/contractor submitted a project for a ${roomType || 'room'} in Jersey City, NJ.
Desired aesthetic style: ${stylePreference || 'Clean Modern'}.
Project notes / owner wish list: "${projectDescription || 'Modernize space with durable materials and optimal layout'}".
Approximate area: ${estimatedSquareFootage || 'Standard size'} sq ft.

Provide a detailed, practical, trade-friendly renovation concept proposal formatted strictly as valid JSON with these keys:
{
  "conceptTitle": "string",
  "summary": "string (2-3 sentences explaining the design vision and practical choices for Jersey City homes/brownstones)",
  "suggestedMaterials": ["string", "string", "string", "string", "string"],
  "contractorScope": ["string", "string", "string", "string", "string"],
  "jerseyCityBallparkCost": {
    "diyMaterialsOnly": "$X - $Y",
    "laborAndMaterials": "$X - $Y",
    "timelineWeeks": "X - Y weeks"
  },
  "proTips": ["string", "string"]
}

Respond ONLY with valid JSON. Do not include markdown code block quotes.`;

    const contents: any[] = [];
    if (imageBase64) {
      // Clean base64 header if present
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      contents.push({
        inlineData: {
          mimeType: 'image/jpeg',
          data: cleanBase64,
        },
      });
    }
    contents.push(prompt);

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
    });

    const responseText = response.text?.trim() || '';
    let parsedData;
    try {
      const sanitized = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      parsedData = JSON.parse(sanitized);
    } catch {
      parsedData = {
        conceptTitle: `${stylePreference || 'Modern'} ${roomType || 'Home'} Renovation Concept`,
        summary: responseText.slice(0, 300) || 'Custom renovation design created for Jersey City residences.',
        suggestedMaterials: [
          'Engineered hardwood flooring (high humidity resistance)',
          'Quartz countertops with eased edge profile',
          'Ceramic or porcelain subway tile backsplash',
          'Low-VOC satin interior paint',
          'Brushed nickel or matte black hardware'
        ],
        contractorScope: [
          'Selective demo and dust containment partition setup',
          'Framing check, leveling, and structural inspection',
          'Licensed NJ electrical and plumbing rough-ins',
          'Drywall, taping, priming, and finishing',
          'Fixture installation and final punch-list inspection'
        ],
        jerseyCityBallparkCost: {
          diyMaterialsOnly: '$4,000 - $7,000',
          laborAndMaterials: '$13,000 - $21,000',
          timelineWeeks: '2 - 4 weeks'
        },
        proTips: [
          'Order long-lead materials (cabinets, vanities, specialty tile) before demolition starts.',
          'Ensure the local Jersey City building permit is posted if moving load-bearing walls or main plumbing stacks.'
        ]
      };
    }

    return res.json({
      success: true,
      source: 'gemini-3.8-flash',
      ...parsedData,
    });
  } catch (error: any) {
    console.error('AI Renovation error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to generate AI renovation concept. Please try again.',
    });
  }
});

// Seed sample directory data for Jersey City contractors and suppliers
app.get('/api/directory', (_req: Request, res: Response) => {
  res.json({
    contractors: [
      {
        id: 'c1',
        name: 'Rodriguez Master Carpentry & Remodeling',
        trade: 'General Remodeling & Brownstone Restorations',
        neighborhood: 'Downtown & Historic Paulus Hook, Jersey City',
        experienceYears: 18,
        rating: 4.9,
        reviewsCount: 42,
        verifiedLicense: 'NJ HIC #13VH09281700',
        phone: '(201) 555-0144',
        services: ['Kitchen & Bath', 'Custom Cabinetry', 'Historic Brownstone Molding', 'Deck & Porch Build'],
        availableForQuotes: true
      },
      {
        id: 'c2',
        name: 'Heights Electrical & Lighting Pros',
        trade: 'Licensed Electrical Contractor',
        neighborhood: 'The Heights & Journal Square, Jersey City',
        experienceYears: 14,
        rating: 4.9,
        reviewsCount: 38,
        verifiedLicense: 'NJ Lic #15742',
        phone: '(201) 555-0192',
        services: ['Panel Upgrades (200A)', 'EV Chargers', 'Smart Lighting', 'Rewiring & Code Compliance'],
        availableForQuotes: true
      },
      {
        id: 'c3',
        name: 'Hudson Plumbing, Boiler & Drain Specialists',
        trade: 'Plumbing & Heating',
        neighborhood: 'Bergen-Lafayette & Greenville, Jersey City',
        experienceYears: 22,
        rating: 4.8,
        reviewsCount: 61,
        verifiedLicense: 'NJ Master Plumber #8911',
        phone: '(201) 555-0188',
        services: ['Radiator/Steam Heating', 'Tankless Water Heaters', 'Emergency Drain Clean', 'Bath Remodel Rough-in'],
        availableForQuotes: true
      },
      {
        id: 'c4',
        name: 'JC Fine Finish Painting & Plasterwork',
        trade: 'Painting & Surface Restoration',
        neighborhood: 'Van Vorst Park & Hamilton Park, Jersey City',
        experienceYears: 9,
        rating: 5.0,
        reviewsCount: 29,
        verifiedLicense: 'NJ HIC #13VH08129900',
        phone: '(201) 555-0177',
        services: ['Interior/Exterior Painting', 'Historic Skim-Coating', 'Wallpaper Removal', 'Deck Staining'],
        availableForQuotes: true
      }
    ],
    suppliers: [
      {
        id: 's1',
        name: 'Liberty Lumber & Building Supply',
        category: 'Lumber, Sheetrock & Framing',
        location: 'Pacific Ave, Jersey City',
        deliveryAvailable: 'Same-day JC & Hoboken delivery',
        phone: '(201) 555-0112'
      },
      {
        id: 's2',
        name: 'Hudson Tile, Marble & Stone Depot',
        category: 'Ceramic, Porcelain & Countertop Slabs',
        location: 'Newark Ave, Jersey City',
        deliveryAvailable: 'Direct to job site flatbed delivery',
        phone: '(201) 555-0119'
      },
      {
        id: 's3',
        name: 'Metro Electric & HVAC Wholesale',
        category: 'Wiring, Breakers, Fixtures & Heat Pumps',
        location: 'Route 440, Jersey City',
        deliveryAvailable: 'Trade counter & commercial delivery',
        phone: '(201) 555-0130'
      }
    ]
  });
});

// Configure Vite middleware in dev or static serving in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`JC Contractor Hub server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
