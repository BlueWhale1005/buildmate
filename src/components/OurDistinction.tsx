import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';
import cleaningImage from '../assets/images/pro_cleaning_service_1791501759015.jpg';
import constructionImage from '../assets/images/hero_construction_1791499952212.jpg';

interface OurDistinctionProps {
  language: Language;
}

export const OurDistinction: React.FC<OurDistinctionProps> = ({ language }) => {
  const t = TRANSLATIONS[language].distinction;

  const distinctions = [
    {
      id: 'd1',
      title: t.d1Title,
      description: t.d1Desc,
      image: constructionImage,
      imageAlt: 'Licensed construction and remodeling contractors'
    },
    {
      id: 'd2',
      title: t.d2Title,
      description: t.d2Desc,
      image: cleaningImage,
      imageAlt: 'Professional cleaning and sanitization services'
    },
    {
      id: 'd3',
      title: t.d3Title,
      description: t.d3Desc,
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Dedicated customer care and direct communication'
    },
    {
      id: 'd4',
      title: t.d4Title,
      description: t.d4Desc,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Decades of supporting local businesses in Jersey City'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Divider & Layout from Screenshot 4 */}
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

        {/* 2x2 Split Cards Grid matching Screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {distinctions.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 sm:grid-cols-2 bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Content Card Half */}
              <div className="bg-slate-950 text-white p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {t.badge}
                </div>
              </div>

              {/* High-Res Photo Half from Screenshot 4 */}
              <div className="relative min-h-[200px] sm:min-h-full">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
