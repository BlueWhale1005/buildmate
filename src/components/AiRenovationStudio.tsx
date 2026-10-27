import React from 'react';
import { Sparkles, CheckCircle2, Clock, ShieldCheck, ArrowRight, Camera, Palette, Layers } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface AiRenovationStudioProps {
  language: Language;
  onClaimOffer: (roomType: string) => void;
}

export const AiRenovationStudio: React.FC<AiRenovationStudioProps> = ({ language, onClaimOffer }) => {
  const t = TRANSLATIONS[language].aiStudio;

  const steps = [
    {
      num: '01',
      title: language === 'es' ? 'Envíe Fotos de su Espacio' : 'Submit Photos of Your Space',
      desc: language === 'es'
        ? 'Tome una fotografía desde su teléfono de su cocina, baño o espacio comercial tal como está hoy.'
        : 'Snap photos with your phone of your current kitchen, bathroom, or commercial space from any angle.',
      icon: Camera,
    },
    {
      num: '02',
      title: language === 'es' ? 'Elija su Estilo Preferido' : 'Select Your Target Style',
      desc: language === 'es'
        ? 'Indique sus preferencias: Modern Brownstone, Minimalista Escandinavo, Industrial Urbano o a medida.'
        : 'Indicate your aesthetic wishlist: Modern Brownstone, Scandinavian Minimalist, Downtown Industrial, or custom.',
      icon: Palette,
    },
    {
      num: '03',
      title: language === 'es' ? 'Reciba Renders 3D en 24h' : 'Receive 3D Concepts in 24 Hours',
      desc: language === 'es'
        ? 'Visualizaciones digitales realistas y lista sugerida de acabados para mostrar a sus constructores.'
        : 'High-resolution digital concept renders and finish specifications ready to share with your build team.',
      icon: Layers,
    },
  ];

  return (
    <section id="ai-studio" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-t border-slate-900 pt-8 mb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.badge}</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
              {t.title}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {language === 'es'
                ? 'Visualice su reforma antes de gastar miles en obra. Envíe fotos de su propiedad y reciba renders conceptuales en 3D con estimaciones de materiales por solo $0.99.'
                : 'Preview your renovation concepts before committing to major construction expenses. Send photos of your space to receive high-res 3D concept renders and materials guidance for just $0.99.'}
            </p>
          </div>

          {/* $0.99 Intro Offer Card */}
          <div className="md:max-w-md w-full bg-white p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {t.offerTitle}
                </span>
                <span className="font-heading text-2xl font-black text-slate-950">{t.offerPrice}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {t.offerDesc}
              </p>
            </div>

            <button
              onClick={() => onClaimOffer('Kitchen')}
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              <span>{t.offerBtn}</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>

        {/* 3 Steps Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {steps.map((step) => {
            const IconComp = step.icon;
            return (
              <div key={step.num} className="bg-white p-7 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                      {language === 'es' ? 'PASO' : 'STEP'} {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-md bg-slate-100 flex items-center justify-center text-slate-700">
                      <IconComp className="w-4 h-4 text-slate-900" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="bg-slate-950 text-white p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 block">
              {language === 'es' ? 'OFERTA DE LANZAMIENTO' : 'INTRODUCTORY VISUAL PROGRAM'}
            </span>
            <h3 className="font-heading text-2xl font-bold mb-2">
              {language === 'es' ? 'Renders Realistas Para Tomar Decisiones Confiables' : 'Realistic 3D Concepts Before You Hire'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {language === 'es'
                ? 'Evite malentendidos y errores costosos en obra. Obtenga un render claro de acabados, colores y distribución para compartir con su contratista.'
                : 'Eliminate guesswork and costly construction changes. Present clear, realistic digital visuals to your contractor before signing contracts.'}
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onClaimOffer('Living Space')}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>{language === 'es' ? 'Solicitar Render ($0.99)' : 'Order $0.99 Preview'}</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
