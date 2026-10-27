import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface OurExpertiseProps {
  language: Language;
  onOpenCleaning: () => void;
  onOpenAiStudio: () => void;
  onOpenConstruction: () => void;
}

export const OurExpertise: React.FC<OurExpertiseProps> = ({
  language,
  onOpenCleaning,
  onOpenAiStudio,
  onOpenConstruction,
}) => {
  const t = TRANSLATIONS[language].expertise;

  return (
    <section id="services" className="py-20 lg:py-24 bg-white border-b border-slate-200">
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

          <div className="md:max-w-md text-slate-600">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              {t.subtitleTitle}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              {t.subtitleDesc}
            </p>
          </div>
        </div>

        {/* 3 Prominent Service Cards */}
        {/* 3 Prominent Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 01: Professional Cleaning */}
          <div
            onClick={onOpenCleaning}
            className="bg-slate-50 hover:bg-slate-100/90 border border-slate-200 p-8 sm:p-9 cursor-pointer group flex flex-col justify-between min-h-[300px] transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-extrabold text-slate-950 group-hover:text-amber-700 transition-colors leading-none">
                  +
                </span>
                <span className="text-xs font-bold px-2 py-1 bg-white border border-slate-200 text-slate-800 rounded">
                  01
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-amber-700 transition-colors">
                {t.s1Title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.s1Desc}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-6 flex items-center justify-between text-xs font-bold text-slate-900">
              <span>{t.s1Action}</span>
              <span className="text-slate-900 group-hover:text-amber-700 group-hover:translate-x-1 transition-all">→</span>
            </div>
          </div>

          {/* Service 02: AI Renovation Studio */}
          <div
            onClick={onOpenAiStudio}
            className="bg-slate-50 hover:bg-slate-100/90 border border-slate-200 p-8 sm:p-9 cursor-pointer group flex flex-col justify-between min-h-[300px] relative transition-colors"
          >
            {/* Clean pill badge for $0.99 offer */}
            <div className="absolute top-6 right-6 bg-amber-500 text-slate-950 text-xs font-bold px-2.5 py-1 rounded">
              {t.s2Badge}
            </div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-extrabold text-slate-950 group-hover:text-amber-700 transition-colors leading-none">
                  +
                </span>
                <span className="text-xs font-bold px-2 py-1 bg-white border border-slate-200 text-slate-800 rounded">
                  02
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-amber-700 transition-colors pr-16">
                {t.s2Title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.s2Desc}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-6 flex items-center justify-between text-xs font-bold text-slate-900">
              <span>{t.s2Action}</span>
              <span className="text-slate-900 group-hover:text-amber-700 group-hover:translate-x-1 transition-all">→</span>
            </div>
          </div>

          {/* Service 03: Construction & Trades */}
          <div
            onClick={onOpenConstruction}
            className="bg-slate-50 hover:bg-slate-100/90 border border-slate-200 p-8 sm:p-9 cursor-pointer group flex flex-col justify-between min-h-[300px] transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-extrabold text-slate-950 group-hover:text-amber-700 transition-colors leading-none">
                  +
                </span>
                <span className="text-xs font-bold px-2 py-1 bg-white border border-slate-200 text-slate-800 rounded">
                  03
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-amber-700 transition-colors">
                {t.s3Title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.s3Desc}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-6 flex items-center justify-between text-xs font-bold text-slate-900">
              <span>{t.s3Action}</span>
              <span className="text-slate-900 group-hover:text-amber-700 group-hover:translate-x-1 transition-all">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
