export interface Contractor {
  id: string;
  name: string;
  trade: string;
  neighborhood: string;
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  verifiedLicense: string;
  phone: string;
  services: string[];
  availableForQuotes: boolean;
  avatarUrl?: string;
}

export interface Supplier {
  id: string;
  name: string;
  category: string;
  location: string;
  deliveryAvailable: string;
  phone: string;
  specialties: string[];
}

export interface RenovationConceptResponse {
  conceptTitle: string;
  summary: string;
  suggestedMaterials: string[];
  contractorScope: string[];
  jerseyCityBallparkCost: {
    diyMaterialsOnly: string;
    laborAndMaterials: string;
    timelineWeeks: string;
  };
  proTips: string[];
}

export interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  userType: 'homeowner' | 'contractor' | 'supplier' | 'other';
  serviceCategory: string;
  urgency: 'routine' | 'urgent' | 'emergency';
  message: string;
}
