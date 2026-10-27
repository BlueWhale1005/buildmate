import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { PageRoute } from '../types/routes';

interface FooterProps {
  language: Language;
  onNavigate: (route: PageRoute) => void;
  onOpenPrivacy: () => void;
  onOpenAccessibility: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenPrivacy,
  onOpenAccessibility,
}) => {
  const t = TRANSLATIONS[language].footer;

  return (
    <footer className="template-dark-footer bg-[#0b1622] text-white py-16 lg:py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column (Left) */}
          <div className="md:col-span-4">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 mb-2 cursor-pointer inline-flex"
            >
              <div className="w-8 h-8 rounded-md bg-amber-500 text-slate-950 flex items-center justify-center font-black text-base">
                B
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white">
                Build<span className="text-amber-500">Mate</span>
              </h3>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-4">
              {t.desc}
            </p>
            <div className="text-xs text-amber-400 font-semibold tracking-wide">
              Jersey City · New Jersey · Philadelphia · New York · New York City
            </div>
          </div>

          {/* Center Links (Pages & Policies) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {language === 'es' ? 'Navegación del Sitio' : 'Pages & Services'}
            </h4>
            
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              <button
                onClick={() => onNavigate('home')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                {language === 'es' ? 'Inicio' : 'Home'}
              </button>
              <button
                onClick={() => onNavigate('cleaning')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                {language === 'es' ? 'Servicios de Limpieza' : 'Cleaning Services'}
              </button>
              <button
                onClick={() => onNavigate('construction')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                {language === 'es' ? 'Construcción y Reformas' : 'Construction & Trades'}
              </button>
              <button
                onClick={() => onNavigate('ai-previews')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                {language === 'es' ? 'Previews con IA ($0.99)' : '$0.99 AI Previews'}
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                {language === 'es' ? 'Sobre Nosotros' : 'About BuildMate'}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                {language === 'es' ? 'Contacto y Despacho' : 'Contact & Dispatch'}
              </button>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex gap-4 text-xs text-slate-400">
              <button
                onClick={onOpenAccessibility}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.accessibility}
              </button>
              <button
                onClick={onOpenPrivacy}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.privacy}
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3 text-sm text-slate-300">
            <div>
              <a
                href="tel:2015550198"
                className="text-lg font-bold text-white hover:text-amber-400 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>(201) 555-0198</span>
              </a>
            </div>

            <div>
              <a
                href="mailto:dispatch@buildmate.com"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>dispatch@buildmate.com</span>
              </a>
            </div>

            <div className="flex items-start gap-2 text-slate-400 text-xs">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>500 Washington Blvd, Jersey City, NJ 07310</span>
            </div>

            <div className="pt-2 text-xs text-slate-400">
              {language === 'es'
                ? 'Atención de despacho: Lun – Sáb 7:00 AM – 7:00 PM EST'
                : 'Dispatch operating: Mon - Sat 7:00 AM - 7:00 PM EST'}
            </div>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <p>{t.rights}</p>
        </div>

      </div>
    </footer>
  );
};
