import { Contractor, Supplier } from '../types';

export const INITIAL_CONTRACTORS: Contractor[] = [
  {
    id: 'b1',
    name: 'SparklePro Cleaning & Turnover Services',
    trade: 'Residential & Commercial Cleaning',
    neighborhood: 'Downtown & Waterfront, Jersey City',
    experienceYears: 8,
    rating: 5.0,
    reviewsCount: 64,
    verifiedLicense: 'NJ Reg #13VH0982100',
    phone: '(201) 555-0153',
    services: [
      'Commercial Office & Storefront Cleaning',
      'Residential Deep Cleaning & Move-In / Move-Out',
      'Airbnb & Rental Fast Turnarounds',
      'Eco-Friendly Sanitization'
    ],
    availableForQuotes: true,
    avatarUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'b2',
    name: 'Rodriguez Carpentry & Full Renovation',
    trade: 'General Remodeling & Construction',
    neighborhood: 'Downtown & Paulus Hook, Jersey City',
    experienceYears: 18,
    rating: 4.9,
    reviewsCount: 52,
    verifiedLicense: 'NJ HIC #13VH09281700',
    phone: '(201) 555-0144',
    services: [
      'Kitchen, Bath & Full Home Remodeling',
      'Brownstone Structural Restorations',
      'Commercial Storefront & Office Buildouts',
      'Framing, Trim & Architectural Woodwork'
    ],
    availableForQuotes: true,
    avatarUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'b3',
    name: 'Heights Electrical & Licensed Contracting',
    trade: 'Licensed Electrical & Wiring',
    neighborhood: 'The Heights & Journal Square, Jersey City',
    experienceYears: 14,
    rating: 4.9,
    reviewsCount: 38,
    verifiedLicense: 'NJ Lic #15742',
    phone: '(201) 555-0192',
    services: [
      'Commercial & Residential Service Panels',
      'Full Rewiring & Subpanel Upgrades',
      'EV Charging Stations & Heavy Equipment',
      'Emergency Electrical Repairs & Code Fixes'
    ],
    availableForQuotes: true,
    avatarUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'b4',
    name: 'Hudson Paint, Plaster & Surface Restoration',
    trade: 'Interior & Exterior Painting',
    neighborhood: 'Van Vorst Park & Hamilton Park, Jersey City',
    experienceYears: 10,
    rating: 4.9,
    reviewsCount: 41,
    verifiedLicense: 'NJ HIC #13VH08129900',
    phone: '(201) 555-0177',
    services: [
      'Interior & Exterior Painting',
      'Skim-Coating & Level 5 Plaster Finishes',
      'Cabinet Refinishing & Epoxy Coatings',
      'Waterproofing & Facade Caulking'
    ],
    availableForQuotes: true,
    avatarUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'b5',
    name: 'Apex Post-Construction & Site Turnover Cleaning',
    trade: 'Post-Construction & Heavy Debris Cleaning',
    neighborhood: 'Bergen-Lafayette & Newport, Jersey City',
    experienceYears: 11,
    rating: 4.9,
    reviewsCount: 48,
    verifiedLicense: 'NJ Reg #13VH099412',
    phone: '(201) 555-0168',
    services: [
      'Post-Remodel Fine Dust Extraction & HEPA Vacuuming',
      'Paint Splatter, Grout Haze & Adhesive Removal',
      'Final Inspection White-Glove Turnover',
      'Construction Rubbish & Protection Removal'
    ],
    availableForQuotes: true,
    avatarUrl: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'b6',
    name: 'Hudson Plumbing, Mechanical & Boilers',
    trade: 'Licensed Plumbing & Mechanical',
    neighborhood: 'Journal Square & McGinley Square, Jersey City',
    experienceYears: 22,
    rating: 4.8,
    reviewsCount: 61,
    verifiedLicense: 'NJ Master Plumber #8911',
    phone: '(201) 555-0188',
    services: [
      'Emergency Leak Repairs & Main Lines',
      'High-Efficiency Boilers & Water Heaters',
      'Bathroom Rough-Ins & Gas Piping',
      'Commercial Restroom Renovations'
    ],
    availableForQuotes: true,
    avatarUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'b7',
    name: 'JC Spotless Maids & Janitorial Services',
    trade: 'Residential & Deep Cleaning',
    neighborhood: 'Hamilton Park & Historic Downtown, Jersey City',
    experienceYears: 7,
    rating: 4.9,
    reviewsCount: 57,
    verifiedLicense: 'NJ Reg & Insured #13VH094182',
    phone: '(201) 555-0172',
    services: [
      'Weekly / Bi-Weekly Scheduled House Cleaning',
      'Nightly Office Janitorial Service',
      'Move-In / Move-Out Deep Cleaning',
      'Kitchen Appliance & Baseboard Detailing'
    ],
    availableForQuotes: true,
    avatarUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'b8',
    name: 'Liberty Handyman & Property Repairs',
    trade: 'Carpentry, Handyman & Repairs',
    neighborhood: 'West Side & Lincoln Park, Jersey City',
    experienceYears: 12,
    rating: 4.9,
    reviewsCount: 44,
    verifiedLicense: 'NJ HIC #13VH08842100',
    phone: '(201) 555-0149',
    services: [
      'Drywall Patching, Ceilings & Door Trim',
      'Hardware, Locksets & Fixture Replacements',
      'Deck, Porch & Fence Wood Repairs',
      'Tile Regrouting & Sealant Maintenance'
    ],
    availableForQuotes: true,
    avatarUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'b9',
    name: 'GreenClean Eco Janitorial & Commercial Care',
    trade: 'Eco-Friendly Commercial Janitorial',
    neighborhood: 'Newport & Exchange Place, Jersey City',
    experienceYears: 9,
    rating: 5.0,
    reviewsCount: 39,
    verifiedLicense: 'NJ Green Certified #GC-4401',
    phone: '(201) 555-0163',
    services: [
      'Medical Office & Clinic Sanitization',
      'Retail Storefront & Showroom Cleaning',
      'Non-Toxic Green Chemicals & HEPA Care',
      'Floor Buffing, Stripping & Waxing'
    ],
    availableForQuotes: true,
    avatarUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'b10',
    name: 'Tri-State General Contracting & Additions',
    trade: 'Full General Contracting & Structural',
    neighborhood: 'Downtown & North Bergen, Jersey City',
    experienceYears: 20,
    rating: 4.9,
    reviewsCount: 51,
    verifiedLicense: 'NJ HIC #13VH06782100',
    phone: '(201) 555-0133',
    services: [
      'Whole-Home Gut Renovations & Additions',
      'Structural Framing & Foundation Work',
      'Roofing, Siding & Exterior Enclosures',
      'Permit Filing & Architectural Plans'
    ],
    availableForQuotes: true,
    avatarUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80'
  }
];

export const INITIAL_SUPPLIERS: Supplier[] = [
  {
    id: 's1',
    name: 'Liberty Janitorial & Cleaning Supply Depot',
    category: 'Commercial Cleaners, HEPA Equipment & Paper Goods',
    location: 'Pacific Ave, Jersey City, NJ',
    deliveryAvailable: 'Daily supply replenishment across NJ, NY & Philly',
    phone: '(201) 555-0112',
    specialties: ['Bulk eco cleaning solutions', 'Floor scrubbers & HEPA vacuums', 'Sanitization chemicals', 'Janitorial hardware']
  },
  {
    id: 's2',
    name: 'Hudson Building & Remodeling Materials Depot',
    category: 'Lumber, Sheetrock, Quartz, Tiles & Hardware',
    location: 'Newark Ave, Jersey City, NJ',
    deliveryAvailable: 'Direct jobsite flatbed & van delivery',
    phone: '(201) 555-0119',
    specialties: ['Framing lumber & plywood', 'Sheetrock & joint compound', 'Quartz & porcelain slabs', 'Construction fasteners']
  },
  {
    id: 's3',
    name: 'Metro Electric & HVAC Wholesale Supply',
    category: 'Lighting, Wiring, Panels & Mini-Split Equipment',
    location: 'Route 440, Jersey City, NJ',
    deliveryAvailable: 'Trade counter pickup from 6:30 AM & delivery',
    phone: '(201) 555-0130',
    specialties: ['Commercial LED fixtures', 'Service panels & breakers', 'Copper wire & conduit', 'Heat pumps & thermostats']
  },
  {
    id: 's4',
    name: 'Northeast Paint & Architectural Coatings Depot',
    category: 'Benjamin Moore, Scuff-X, Sprayers & Sundries',
    location: 'Central Ave, Jersey City Heights, NJ',
    deliveryAvailable: 'Same-day jobsite delivery to contractors',
    phone: '(201) 555-0138',
    specialties: ['High-durability commercial paints', 'Drywall primers', 'Graco airless sprayers', 'Festool sanders & tape']
  }
];

export const SAMPLE_AI_PREVIEWS = [
  {
    id: 'kitchen-jc',
    title: 'Modern Kitchen Overhaul',
    roomType: 'Kitchen',
    beforeImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    description: 'Transforming an outdated kitchen into an open concept space with custom shaker cabinets and quartz waterfall island.',
    costEstimate: '$14,500 - $22,000',
    popularStyles: ['Transitional', 'Modern Farmhouse', 'Minimalist']
  },
  {
    id: 'office-jc',
    title: 'Commercial Office & Storefront Buildout',
    roomType: 'Retail / Office',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'Rebuilding a dated retail space with acoustic slatted walls, clean modern lighting, and durable polished floors.',
    costEstimate: '$8,000 - $16,000',
    popularStyles: ['Modern Studio', 'Clean Minimal']
  },
  {
    id: 'bathroom-jc',
    title: 'Spa Walk-in Bathroom Remodel',
    roomType: 'Bathroom',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    description: 'Converting a cramped fiberglass tub into a curbless walk-in rainfall shower with fluted glass and floating oak vanity.',
    costEstimate: '$9,800 - $15,200',
    popularStyles: ['Spa Modern', 'Japandi', 'Marble Minimal']
  }
];
