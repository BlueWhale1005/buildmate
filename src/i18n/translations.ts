export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    home: string;
    services: string;
    cleaning: string;
    construction: string;
    about: string;
    contractors: string;
    directory: string;
    aiPreviews: string;
    contact: string;
    callUsAnytime: string;
    directCall: string;
  };
  welcomeModal: {
    titleEn: string;
    titleEs: string;
    subtitleEn: string;
    subtitleEs: string;
    btnEn: string;
    btnEs: string;
    rememberNoteEn: string;
    rememberNoteEs: string;
  };
  hero: {
    tag: string;
    headline: string;
    description: string;
    contactBtn: string;
    callBtn: string;
    badge1: string;
    badge2: string;
  };
  solutions: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      tag: string;
    }[];
    inquire: string;
  };
  expertise: {
    title: string;
    subtitleTitle: string;
    subtitleDesc: string;
    s1Title: string;
    s1Desc: string;
    s1Action: string;
    s2Title: string;
    s2Desc: string;
    s2Badge: string;
    s2Action: string;
    s3Title: string;
    s3Desc: string;
    s3Action: string;
  };
  distinction: {
    title: string;
    subtitle: string;
    badge: string;
    d1Title: string;
    d1Desc: string;
    d2Title: string;
    d2Desc: string;
    d3Title: string;
    d3Desc: string;
    d4Title: string;
    d4Desc: string;
  };
  aiStudio: {
    badge: string;
    title: string;
    offerTitle: string;
    offerPrice: string;
    offerDesc: string;
    offerBtn: string;
    sliderTitle: string;
    sliderDesc: string;
    sliderBefore: string;
    sliderAfter: string;
    genTitle: string;
    genDesc: string;
    roomLabel: string;
    styleLabel: string;
    photoLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    genBtn: string;
    genLoading: string;
    blueprintTitle: string;
    materialsTitle: string;
    scopeTitle: string;
    proTipsTitle: string;
    bottomCtaText: string;
    bottomCtaBtn: string;
  };
  directory: {
    badge: string;
    title: string;
    desc: string;
    joinBtn: string;
    helpCallBtn: string;
    contractorsTab: string;
    suppliersTab: string;
    searchContractorPlaceholder: string;
    searchSupplierPlaceholder: string;
    tradeFilterLabel: string;
    callDirect: string;
    requestQuote: string;
    keyServices: string;
    tradeDesk: string;
    materialsInStock: string;
  };
  about: {
    title: string;
    subtitle: string;
    tag: string;
    h3: string;
    p1: string;
    p2: string;
    badge1: string;
    badge2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    bannerTag: string;
    bannerTitle: string;
    bannerDesc: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    userTypeLabel: string;
    serviceCategoryLabel: string;
    urgencyLabel: string;
    messageLabel: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    directInfoTitle: string;
    hoursTitle: string;
    hoursDesc: string;
    officeTitle: string;
    guaranteeTitle: string;
    guaranteeDesc: string;
  };
  footer: {
    desc: string;
    accessibility: string;
    privacy: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      cleaning: 'Cleaning Services',
      construction: 'Construction',
      about: 'About',
      contractors: 'Directory',
      directory: 'Directory',
      aiPreviews: '$0.99 AI Previews',
      contact: 'Contact',
      callUsAnytime: 'Call Dispatch',
      directCall: 'Direct Call',
    },
    welcomeModal: {
      titleEn: 'Choose Your Language',
      titleEs: 'Seleccione su idioma',
      subtitleEn: 'How would you like to view this website?',
      subtitleEs: '¿Desea ver el sitio web en Español o Inglés?',
      btnEn: 'View in English',
      btnEs: 'Ver en Español',
      rememberNoteEn: 'You can change the language anytime in the top bar.',
      rememberNoteEs: 'Puede cambiar el idioma en cualquier momento desde la barra superior.',
    },
    hero: {
      tag: 'NEW JERSEY · PHILADELPHIA · NEW YORK · NEW YORK CITY',
      headline: 'Cleaning & Construction Pros',
      description:
        'Connect directly with verified local cleaners and licensed contractors. Direct hiring, zero middleman fees, and $0.99 AI renovation previews.',
      contactBtn: 'Get a Free Quote',
      callBtn: '(201) 555-0198',
      badge1: 'Verified Licenses & Background Checks',
      badge2: 'Direct Contractor Pay · $0.99 AI Previews',
    },
    solutions: {
      title: 'Top Solutions',
      subtitle: 'JERSEY CITY · NEW JERSEY · PHILADELPHIA · NEW YORK · NEW YORK CITY',
      items: [
        {
          id: 'residential_clean',
          title: 'Residential & Turnover Cleaning',
          description:
            'Deep cleaning for apartments, houses, and move-in/move-out turnovers.',
          tag: 'Cleaning',
        },
        {
          id: 'commercial_clean',
          title: 'Commercial & Office Janitorial',
          description:
            'Scheduled sanitization and janitorial services for offices and retail spaces.',
          tag: 'Commercial',
        },
        {
          id: 'post_construction',
          title: 'Post-Construction Cleanup',
          description:
            'Heavy debris removal, fine dust extraction, and final site handover polish.',
          tag: 'Site Turnover',
        },
        {
          id: 'remodeling',
          title: 'General Contracting & Remodels',
          description:
            'Complete kitchen, bath, and full residential renovations by licensed builders.',
          tag: 'Construction',
        },
        {
          id: 'trades',
          title: 'Electrical, Plumbing & Trades',
          description:
            'Licensed trades for wiring, pipe replacements, painting, and urgent repairs.',
          tag: 'Licensed Trades',
        },
        {
          id: 'ai_previews',
          title: '$0.99 AI Renovation Previews',
          description:
            'Send space photos for high-res 3D concept renders before spending thousands.',
          tag: 'AI Previews',
        },
      ],
      inquire: 'Get Quote',
    },
    expertise: {
      title: 'Core Services',
      subtitleTitle: 'Cleaning & Construction Made Simple',
      subtitleDesc:
        'Direct access to vetted cleaning specialists, licensed builders, and material suppliers.',
      s1Title: 'Professional Cleaning',
      s1Desc:
        'Residential deep cleaning, routine commercial janitorial, and post-construction site turnover.',
      s1Action: 'Explore Cleaning',
      s2Title: '$0.99 AI Renovation Previews',
      s2Desc:
        'Upload project photos for 3D visual concepts, scope outlines, and materials ballpark in minutes.',
      s2Badge: '$0.99 Preview',
      s2Action: 'Try 3D Tool',
      s3Title: 'Construction & Licensed Trades',
      s3Desc:
        'General contracting, kitchen and bath remodeling, electrical, plumbing, and structural work.',
      s3Action: 'Find Contractors',
    },
    distinction: {
      title: 'Why BuildMate',
      subtitle:
        'Direct connections, verified credentials, and honest upfront pricing.',
      badge: 'Verified Standards',
      d1Title: 'Licensed & Insured Builders',
      d1Desc:
        'Every contractor is verified with active state licensing, liability insurance, and proven experience.',
      d2Title: 'Vetted Cleaning Specialists',
      d2Desc:
        'Background-checked local cleaners ensuring reliable, spotless results for homes and businesses.',
      d3Title: 'Zero Middleman Markups',
      d3Desc:
        'Hire and pay professionals directly with no broker commissions or hidden platform fees.',
      d4Title: 'Fast Regional Dispatch',
      d4Desc:
        'Direct phone line for prompt service booking across New Jersey, Philadelphia, and New York.',
    },
    aiStudio: {
      badge: 'Visual Concept Studio · $0.99 Intro Offer',
      title: 'AI Renovation Concepts & 3D Previews',
      offerTitle: 'Introductory 3D Visual Offer',
      offerPrice: '$0.99',
      offerDesc:
        'Send photos of your kitchen, bathroom, or commercial space. Receive fast 3D design renders before spending thousands.',
      offerBtn: 'Order $0.99 AI Preview',
      sliderTitle: 'Before & After Concept Comparison',
      sliderDesc:
        'Slide to inspect realistic design transformations of actual spaces.',
      sliderBefore: 'Current Space',
      sliderAfter: 'AI Concept Render',
      genTitle: 'Generate Project Scope',
      genDesc:
        'Select your space and style for instant specs and ballpark budgets.',
      roomLabel: '1. Space Type',
      styleLabel: '2. Design Aesthetic',
      photoLabel: '3. Project Photo (Optional)',
      notesLabel: '4. Project Wishlist',
      notesPlaceholder:
        'e.g., Open kitchen layout, quartz island, walk-in shower, durable commercial flooring...',
      genBtn: 'Generate AI Scope',
      genLoading: 'Analyzing Space & Generating Scope...',
      blueprintTitle: 'Design Concept Blueprint',
      materialsTitle: 'Recommended Materials & Finishes',
      scopeTitle: 'Project Scope of Work',
      proTipsTitle: 'Permitting & Practical Construction Tips',
      bottomCtaText: 'Need high-resolution 3D renders of your exact space?',
      bottomCtaBtn: 'Send Photos for $0.99 Renders',
    },
    directory: {
      badge: 'Verified Pro Directory',
      title: 'Find Cleaners & Contractors',
      desc:
        'Browse vetted cleaning crews and licensed construction trades. Connect directly with zero platform fees.',
      joinBtn: 'Join Directory as a Pro',
      helpCallBtn: 'Need Help Booking? (201) 555-0198',
      contractorsTab: 'Cleaners & Contractors',
      suppliersTab: 'Building & Cleaning Supplies',
      searchContractorPlaceholder: 'Search cleaning, remodeling, plumbing, electrical, painting...',
      searchSupplierPlaceholder: 'Search janitorial supplies, lumber, drywall, paint...',
      tradeFilterLabel: 'Filter by Service:',
      callDirect: 'Call Direct',
      requestQuote: 'Request Quote',
      keyServices: 'Services:',
      tradeDesk: 'Trade Desk:',
      materialsInStock: 'In Stock:',
    },
    about: {
      title: 'About BuildMate',
      subtitle:
        'A straightforward platform connecting property owners with reliable cleaners and licensed builders.',
      tag: 'New Jersey · Philadelphia · New York',
      h3: 'Dependable Help & Transparent Pricing for Every Property.',
      p1:
        'Finding trustworthy cleaning crews and licensed contractors should not involve broker commissions or confusing quotes.',
      p2:
        'BuildMate connects you directly with pre-screened cleaning teams and licensed construction trades across New Jersey, Philadelphia, and New York. No middleman fees, direct phone communication, and $0.99 AI visual planning.',
      badge1: 'Zero Middleman Markups',
      badge2: 'Direct Communication',
      pillar1Title: 'Verified Cleaners & Trades',
      pillar1Desc:
        'Background-checked cleaners and licensed construction specialists.',
      pillar2Title: 'Direct Hiring & Fair Pay',
      pillar2Desc:
        'Pay the pro directly with no broker markups or hidden fees.',
      pillar3Title: 'Local Supply Network',
      pillar3Desc:
        'Direct connections with regional building and janitorial supply depots.',
    },
    contact: {
      title: 'Get a Quote & Dispatch',
      subtitle:
        'Call directly or submit your project details below for an immediate response.',
      bannerTag: 'Direct Line · Local Dispatch',
      bannerTitle: 'Speak Directly with BuildMate Dispatch',
      bannerDesc:
        'Skip phone menus. Call our direct line to arrange cleaning services, contractor estimates, or project previews.',
      formTitle: 'Request a Quote or Service',
      formDesc:
        'Select your service below and we will connect you immediately.',
      nameLabel: 'Your Name',
      phoneLabel: 'Phone Number',
      emailLabel: 'Email Address',
      userTypeLabel: 'I am a:',
      serviceCategoryLabel: 'Service Needed:',
      urgencyLabel: 'Timeline / Urgency:',
      messageLabel: 'Project Details:',
      submitBtn: 'Submit Request',
      submittingBtn: 'Sending Request...',
      successTitle: 'Request Received!',
      directInfoTitle: 'Direct Contact Info',
      hoursTitle: 'Operating Hours',
      hoursDesc: 'Mon - Sat: 7:00 AM - 7:00 PM (Emergency calls 24/7)',
      officeTitle: 'Service Coverage',
      guaranteeTitle: 'Our Commitment',
      guaranteeDesc:
        'Verified pros, zero middleman fees, and prompt direct communication.',
    },
    footer: {
      desc:
        'BuildMate connects property owners with verified cleaning services, licensed contractors, and $0.99 AI renovation previews across New Jersey, Philadelphia, New York, and NYC.',
      accessibility: 'Accessibility Statement',
      privacy: 'Privacy Policy',
      rights: '© 2026 BuildMate. All rights reserved.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      cleaning: 'Servicios de Limpieza',
      construction: 'Construcción',
      about: 'Nosotros',
      contractors: 'Directorio',
      directory: 'Directorio',
      aiPreviews: 'Previews con IA ($0.99)',
      contact: 'Contacto',
      callUsAnytime: 'Llámenos a cualquier hora',
      directCall: 'Llamada Directa',
    },
    welcomeModal: {
      titleEn: 'Choose Your Language',
      titleEs: 'Seleccione su idioma',
      subtitleEn: 'How would you like to view this website?',
      subtitleEs: '¿Desea ver el sitio web en Español o Inglés?',
      btnEn: 'View in English',
      btnEs: 'Ver en Español',
      rememberNoteEn: 'You can change the language anytime from the top bar.',
      rememberNoteEs: 'Puede cambiar el idioma en cualquier momento desde la barra superior.',
    },
    hero: {
      tag: 'NEW JERSEY • NEW YORK • NEW YORK CITY • FILADELFIA',
      headline: 'Servicios de Limpieza y Construcción',
      description:
        'Conecte directamente con personal de limpieza verificado y contratistas con licencia. Cotizaciones directas sin intermediarios y vistas previas de remodelación con IA por $0.99.',
      contactBtn: 'Cotizar o Reservar',
      callBtn: '(201) 555-0198',
      badge1: 'Profesionales Verificados · Pago Directo',
      badge2: 'Limpieza, Construcción y $0.99 AI Previews',
    },
    solutions: {
      title: 'Principales Soluciones',
      subtitle: 'JERSEY CITY • NEW JERSEY • FILADELFIA • NEW YORK • NEW YORK CITY',
      items: [
        {
          id: 'residential_clean',
          title: 'Limpieza Residencial y Mudanzas',
          description:
            'Limpieza profunda para casas, apartamentos y entregas de alquiler con personal confiable.',
          tag: 'Limpieza',
        },
        {
          id: 'commercial_clean',
          title: 'Limpieza Comercial y Oficinas',
          description:
            'Servicio periódico para locales comerciales, oficinas y clínicas con sanitización completa.',
          tag: 'Limpieza Comercial',
        },
        {
          id: 'post_construction',
          title: 'Limpieza Post-Construcción',
          description:
            'Retiro de escombros, extracción de polvo fino y entrega impecable antes de la inspección final.',
          tag: 'Entrega de Obra',
        },
        {
          id: 'remodeling',
          title: 'Remodelación y Construcción',
          description:
            'Renovación completa de cocinas, baños y estructuras por contratistas generales con licencia.',
          tag: 'Construcción',
        },
        {
          id: 'trades',
          title: 'Electricidad, Plomería y Oficios',
          description:
            'Especialistas certificados para reparaciones urgentes, cableado, tuberías y pintura.',
          tag: 'Oficios con Licencia',
        },
        {
          id: 'ai_previews',
          title: 'Vistas Previas con IA por $0.99',
          description:
            'Envíe fotos de su espacio para recibir conceptos visuales 3D antes de gastar miles en la obra.',
          tag: 'Vistas Previas IA',
        },
      ],
      inquire: 'Pedir Cotización',
    },
    expertise: {
      title: 'Servicios Principales',
      subtitleTitle: 'Limpieza y Construcción Simplificadas',
      subtitleDesc:
        'Acceso directo a personal de limpieza calificado, contratistas con licencia y proveedores.',
      s1Title: 'Limpieza Profesional',
      s1Desc:
        'Limpieza residencial profunda, mantenimiento nocturno de oficinas y desinfección de obras.',
      s1Action: 'Ver Limpiadores',
      s2Title: 'Vistas Previas con IA ($0.99)',
      s2Desc:
        'Suba fotos de su espacio para ver conceptos 3D y estimados de materiales antes de construir.',
      s2Badge: 'Oferta Intro $0.99',
      s2Action: 'Probar Herramienta 3D',
      s3Title: 'Construcción y Oficios con Licencia',
      s3Desc:
        'Remodelación de cocinas y baños, contratistas generales, plomería, electricidad y pintura.',
      s3Action: 'Ver Contratistas',
    },
    distinction: {
      title: 'Por Qué Elegirnos',
      subtitle:
        'Conexión directa, credenciales verificadas y total transparencia en precios.',
      badge: 'Estándares Verificados',
      d1Title: 'Constructores con Licencia y Seguro',
      d1Desc:
        'Contratistas evaluados con licencias activas, seguros y amplia experiencia comprobada.',
      d2Title: 'Personal de Limpieza Verificado',
      d2Desc:
        'Equipos de limpieza locales con antecedentes revisados para resultados impecables.',
      d3Title: 'Cero Comisiones de Intermediarios',
      d3Desc:
        'Usted contrata y paga directamente a los profesionales, sin recargos ocultos.',
      d4Title: 'Respuesta Rápida y Directa',
      d4Desc:
        'Atención telefónica directa con la gerencia para cotizaciones y emergencias.',
    },
    aiStudio: {
      badge: 'Estudio Visual • Oferta de $0.99',
      title: 'Conceptos de Remodelación con IA y Previews 3D',
      offerTitle: 'Oferta Introductoria',
      offerPrice: '$0.99',
      offerDesc:
        'Envíe fotos de su cocina, baño o local comercial para recibir conceptos visuales con IA antes de invertir miles.',
      offerBtn: 'Solicitar Vista Previa por $0.99',
      sliderTitle: 'Comparador Interactivo Antes y Después',
      sliderDesc:
        'Mueva la barra deslizante para ver transformaciones reales con IA.',
      sliderBefore: 'Espacio Actual',
      sliderAfter: 'Concepto con IA',
      genTitle: 'Generar Alcance del Proyecto',
      genDesc:
        'Elija su espacio y estilo para generar especificaciones y presupuestos aproximados.',
      roomLabel: '1. Tipo de Espacio',
      styleLabel: '2. Estilo de Diseño',
      photoLabel: '3. Foto del Espacio (Opcional)',
      notesLabel: '4. Prioridades del Proyecto',
      notesPlaceholder:
        'ej., Cocina abierta con isla, ducha a ras de suelo, pisos resistentes...',
      genBtn: 'Generar Alcance con IA',
      genLoading: 'Analizando Espacio y Generando Alcance...',
      blueprintTitle: 'Plano Conceptual de Diseño',
      materialsTitle: 'Materiales y Acabados Sugeridos',
      scopeTitle: 'Lista de Trabajo del Proyecto',
      proTipsTitle: 'Permisos y Consejos Prácticos de Construcción',
      bottomCtaText: '¿Desea imágenes renderizadas de alta resolución?',
      bottomCtaBtn: 'Enviar Fotos para Renders por $0.99',
    },
    directory: {
      badge: 'Directorio Verificado',
      title: 'Encuentre Limpiadores y Contratistas',
      desc:
        'Explore especialistas en limpieza y oficios de la construcción con licencia. Trato directo sin comisiones.',
      joinBtn: 'Unirse a la Red',
      helpCallBtn: '¿Necesita Ayuda? Llame al (201) 555-0198',
      contractorsTab: 'Limpieza y Contratistas',
      suppliersTab: 'Proveedores y Materiales',
      searchContractorPlaceholder: 'Buscar limpieza, remodelación, plomería, electricidad, pintura...',
      searchSupplierPlaceholder: 'Buscar suministros de limpieza, madera, yeso, pintura...',
      tradeFilterLabel: 'Filtrar por Servicio:',
      callDirect: 'Llamar Directo',
      requestQuote: 'Pedir Cotización',
      keyServices: 'Servicios:',
      tradeDesk: 'Mostrador:',
      materialsInStock: 'En Inventario:',
    },
    about: {
      title: 'Sobre BuildMate',
      subtitle:
        'Una plataforma transparente que conecta propietarios con personal de limpieza verificado y constructores con licencia.',
      tag: 'New Jersey · Filadelfia · New York',
      h3: 'Servicio Confiable y Precios Justos para Hogares y Negocios.',
      p1:
        'Encontrar limpiadores y constructores confiables no debería incluir sobrecostos de intermediarios ni presupuestos confusos.',
      p2:
        'BuildMate le conecta directamente con profesionales verificados en New Jersey, Filadelfia y New York. Trato directo, sin comisiones ocultas y vistas previas de remodelación con IA por $0.99.',
      badge1: 'Cero Comisiones de Intermediarios',
      badge2: 'Comunicación Directa',
      pillar1Title: 'Personal y Oficios Verificados',
      pillar1Desc:
        'Personal de limpieza evaluado y especialistas de la construcción con licencia.',
      pillar2Title: 'Contratación y Pago Directo',
      pillar2Desc:
        'Pague directamente al profesional sin recargos de plataforma.',
      pillar3Title: 'Red Local de Materiales',
      pillar3Desc:
        'Alianzas con distribuidores locales de construcción y limpieza.',
    },
    contact: {
      title: 'Solicitar Cotización y Despacho',
      subtitle:
        'Llame directamente o envíe los detalles de su proyecto para una respuesta inmediata.',
      bannerTag: 'Línea Directa · Despacho Local',
      bannerTitle: 'Hable Directamente con BuildMate Despacho',
      bannerDesc:
        'Sin menús telefónicos. Marque nuestro número directo para servicios de limpieza o presupuestos de construcción.',
      formTitle: 'Solicitar Cotización o Servicio',
      formDesc:
        'Seleccione su servicio a continuación y le atenderemos de inmediato.',
      nameLabel: 'Su Nombre',
      phoneLabel: 'Número de Teléfono',
      emailLabel: 'Correo Electrónico',
      userTypeLabel: 'Soy un:',
      serviceCategoryLabel: 'Servicio Necesario:',
      urgencyLabel: 'Urgencia / Plazo:',
      messageLabel: 'Detalles del Proyecto:',
      submitBtn: 'Enviar Solicitud',
      submittingBtn: 'Enviando Solicitud...',
      successTitle: '¡Solicitud Recibida!',
      directInfoTitle: 'Información de Contacto',
      hoursTitle: 'Horario de Atención',
      hoursDesc: 'Lun – Sáb: 7:00 AM – 7:00 PM (Llamadas de emergencia 24/7)',
      officeTitle: 'Área de Cobertura',
      guaranteeTitle: 'Nuestro Compromiso',
      guaranteeDesc:
        'Profesionales verificados, cero tarifas de intermediarios y trato directo.',
    },
    footer: {
      desc:
        'BuildMate le conecta con servicios de limpieza calificados, contratistas con licencia y vistas previas de remodelación con IA por $0.99 en New Jersey, Filadelfia, New York y NYC.',
      accessibility: 'Declaración de Accesibilidad',
      privacy: 'Política de Privacidad',
      rights: '© 2026 BuildMate. Todos los derechos reservados.',
    },
  },
};
