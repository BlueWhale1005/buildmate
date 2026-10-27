import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { AboutSection } from '../components/AboutSection';
import { Language } from '../i18n/translations';
import { PageRoute } from '../types/routes';

interface AboutPageProps {
  language: Language;
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  language,
  onNavigate,
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'SOBRE BUILDMATE' : 'ABOUT BUILDMATE'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            {language === 'es' ? 'La Plataforma de Confianza para Propietarios' : 'The Direct Platform for Property Owners'}
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            {language === 'es'
              ? 'Conectando directamente a propietarios con personal de limpieza verificado y constructores con licencia en New Jersey, Filadelfia y New York.'
              : 'Direct connections between property owners, vetted cleaners, and licensed builders across New Jersey, Philadelphia, New York & New York City.'}
          </p>
        </div>
      </div>

      <AboutSection language={language} />
    </div>
  );
};
