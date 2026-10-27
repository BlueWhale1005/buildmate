import React from 'react';
import { Phone, ShieldCheck, Sparkles, SparklesIcon, Hammer } from 'lucide-react';
import heroImage from '../assets/images/hero_construction_1791499952212.jpg';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface HeroProps {
  language: Language;
  onContactClick: () => void;
  onExploreServices: () => void;
  onOpenCallModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onContactClick }) => {
  const t = TRANSLATIONS[language].hero;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-slate-900 min-h-[620px] lg:min-h-[700px] flex items-center">
      {/* Background Photography showing authentic high-quality construction & clean craftsmanship */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          loading="eager"
          className="w-full h-full object-cover object-right md:object-center brightness-[0.7] contrast-[1.05]"
        />
        {/* Gradient overlay to enhance readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        {/* Crisp Card with Clean Architectural Shadow & Spacing */}
        <div className="max-w-xl lg:max-w-2xl bg-white shadow-xl p-8 sm:p-12 lg:p-14 border border-slate-200">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            <span className="w-2 h-2 rounded-sm bg-amber-500 shrink-0" />
            <span className="leading-snug">{t.tag}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.1] mb-5">
            {t.headline}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
            {t.description}
          </p>

          {/* Action Controls for First-Time Visitors */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo('directory')}
              className="px-6 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-semibold rounded-md text-base transition-colors shadow-xs cursor-pointer"
            >
              {language === 'es' ? 'Ver Limpiadores y Constructores' : 'Find Cleaners & Contractors'}
            </button>

            <button
              onClick={() => scrollTo('ai-studio')}
              className="px-5 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-md text-base transition-colors shadow-xs cursor-pointer"
            >
              {language === 'es' ? '$0.99 Previews IA' : '$0.99 AI Previews'}
            </button>

            <a
              href="tel:2015550198"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-md text-base transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-slate-700" />
              <span>{t.callBtn}</span>
            </a>
          </div>

          {/* Trust points - clean unboxed layout */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-y-3 gap-x-5 text-xs text-slate-600">
            <div className="flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-slate-800">{t.badge1}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Hammer className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="font-medium text-slate-800">{t.badge2}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
