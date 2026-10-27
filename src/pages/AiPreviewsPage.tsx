import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { AiRenovationStudio } from '../components/AiRenovationStudio';
import { Language } from '../i18n/translations';
import { PageRoute } from '../types/routes';

interface AiPreviewsPageProps {
  language: Language;
  onNavigate: (route: PageRoute) => void;
  onClaimOffer: (roomType: string) => void;
}

export const AiPreviewsPage: React.FC<AiPreviewsPageProps> = ({
  language,
  onNavigate,
  onClaimOffer,
}) => {
  return (
    <div className="bg-white">
      {/* Header bar */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white mb-4 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'ESTUDIO DE CONCEPTOS IA · OFERTA $0.99' : 'AI VISUAL STUDIO · $0.99 INTRO OFFER'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            {language === 'es' ? 'Conceptos de Remodelación y Previews 3D' : 'AI Renovation Concepts & 3D Previews'}
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            {language === 'es'
              ? 'Visualice su reforma antes de gastar en obra. Envíe fotos de su espacio y reciba renders en 3D por solo $0.99.'
              : 'Preview your renovation before committing to major construction expenses. Send photos of your space to receive realistic 3D design renders for just $0.99.'}
          </p>
        </div>
      </div>

      <AiRenovationStudio
        language={language}
        onClaimOffer={onClaimOffer}
      />
    </div>
  );
};
