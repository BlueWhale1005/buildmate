import React from 'react';
import { ArrowLeft, Phone } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { Language } from '../i18n/translations';
import { PageRoute } from '../types/routes';

interface ContactPageProps {
  language: Language;
  onNavigate: (route: PageRoute) => void;
  initialServiceCategory?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  language,
  onNavigate,
  initialServiceCategory = 'General Inquiry',
}) => {
  return (
    <div className="bg-white">
      {/* Clean Header Bar */}
      <div className="bg-slate-900 text-white py-10 sm:py-12 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white mb-4 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Phone className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'CONTACTO Y DESPACHO' : 'DIRECT DISPATCH & INQUIRIES'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            {language === 'es' ? 'Contacto con BuildMate' : 'Get in Touch with BuildMate'}
          </h1>
          <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
            {language === 'es'
              ? 'Llámenos directamente para atención inmediata o envíe los detalles de su proyecto a continuación.'
              : 'Call our team directly for immediate bookings, or submit your project details below.'}
          </p>
        </div>
      </div>

      {/* Main Clean Contact Section */}
      <ContactSection
        language={language}
        initialServiceCategory={initialServiceCategory}
      />
    </div>
  );
};
