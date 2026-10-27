import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface TopSolutionsProps {
  language: Language;
  onSelectSolution: (solutionName: string) => void;
}

export const TopSolutions: React.FC<TopSolutionsProps> = ({ language, onSelectSolution }) => {
  const t = TRANSLATIONS[language].solutions;

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Screenshot 2 */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-2">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 font-semibold tracking-wider uppercase">
            {t.subtitle}
          </p>
        </div>

        {/* Grid: 2 rows of 3 balanced cards covering all businesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectSolution(item.title)}
              className="bg-slate-50 hover:bg-slate-100/90 border border-slate-200 p-8 sm:p-9 cursor-pointer group flex flex-col justify-between min-h-[220px] transition-colors"
            >
              <div>
                {/* Clean Circular Mark */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full border-[3px] border-slate-900 flex items-center justify-center group-hover:border-amber-600 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 group-hover:bg-amber-600 transition-colors" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                <span>{t.inquire}</span>
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
