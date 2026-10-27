import React from 'react';
import { ArrowRight, HeartHandshake, Users, ShieldCheck, TrendingUp } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language].about;

  return (
    <section id="about" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Divider */}
        <div className="border-t border-slate-900 pt-8 mb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              {t.title}
            </h2>
            <div className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center text-slate-900 shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          <p className="md:max-w-md text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
              <span className="w-2 h-2 rounded-sm bg-amber-500 shrink-0" />
              <span>{t.tag}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-snug">
              {t.h3}
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              {t.p1}
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              {t.p2}
            </p>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-sm text-slate-700 font-semibold">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {t.badge1}
              </span>
              <span className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-amber-600" />
                {t.badge2}
              </span>
            </div>
          </div>

          {/* Right Column Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 border-l-4 border-amber-500 border-r border-t border-b border-slate-200 shadow-xs">
              <h4 className="text-lg font-bold text-slate-950 mb-1 flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-600" />
                {t.pillar1Title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.pillar1Desc}
              </p>
            </div>

            <div className="bg-white p-6 border-l-4 border-slate-950 border-r border-t border-b border-slate-200 shadow-xs">
              <h4 className="text-lg font-bold text-slate-950 mb-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-950" />
                {t.pillar2Title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.pillar2Desc}
              </p>
            </div>

            <div className="bg-white p-6 border-l-4 border-emerald-600 border-r border-t border-b border-slate-200 shadow-xs">
              <h4 className="text-lg font-bold text-slate-950 mb-1 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                {t.pillar3Title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.pillar3Desc}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
