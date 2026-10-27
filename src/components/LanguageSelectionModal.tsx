import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface LanguageSelectionModalProps {
  isOpen: boolean;
  onSelectLanguage: (lang: Language) => void;
}

export const LanguageSelectionModal: React.FC<LanguageSelectionModalProps> = ({
  isOpen,
  onSelectLanguage,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white max-w-lg w-full border-2 border-slate-900 shadow-2xl p-6 sm:p-10 relative animate-in zoom-in-95 duration-200">
        
        {/* Top Brand & Icon */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-slate-950 text-white rounded-md flex items-center justify-center font-black text-xl mx-auto mb-3">
            B
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
            BuildMate · Cleaning & Construction
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Language Preference
          </h2>
          <div className="text-sm sm:text-base font-bold text-slate-600 mt-0.5">
            Preferencia de Idioma
          </div>
        </div>

        {/* Question in English and Spanish */}
        <div className="bg-slate-50 p-4 border border-slate-200 text-center mb-8">
          <p className="text-sm font-semibold text-slate-900 mb-1">
            Select your preferred browsing language:
          </p>
          <p className="text-sm font-semibold text-slate-700">
            Seleccione el idioma en que desea ver el sitio web:
          </p>
        </div>

        {/* Two Big Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* English Option */}
          <button
            onClick={() => onSelectLanguage('en')}
            className="p-5 border-2 border-slate-900 bg-white hover:bg-slate-950 hover:text-white text-slate-950 transition-all text-left group cursor-pointer flex flex-col justify-between shadow-xs active:scale-98"
          >
            <div>
              <div className="text-2xl mb-1">🇺🇸</div>
              <div className="font-extrabold text-lg sm:text-xl">English</div>
              <div className="text-xs text-slate-500 group-hover:text-slate-300 mt-0.5">
                View in English
              </div>
            </div>
            <div className="pt-4 flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-400">
              <span>Continue in English</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Spanish Option */}
          <button
            onClick={() => onSelectLanguage('es')}
            className="p-5 border-2 border-slate-900 bg-white hover:bg-slate-950 hover:text-white text-slate-950 transition-all text-left group cursor-pointer flex flex-col justify-between shadow-xs active:scale-98"
          >
            <div>
              <div className="text-2xl mb-1">🇪🇸</div>
              <div className="font-extrabold text-lg sm:text-xl">Español</div>
              <div className="text-xs text-slate-500 group-hover:text-slate-300 mt-0.5">
                Ver en Español
              </div>
            </div>
            <div className="pt-4 flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-400">
              <span>Continuar en Español</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Footer Note */}
        <div className="text-center text-[11px] text-slate-500 border-t border-slate-100 pt-4">
          <span>You can switch between English and Spanish anytime in the top bar.</span>
          <br />
          <span className="italic">Puede cambiar el idioma en cualquier momento en la barra superior.</span>
        </div>

      </div>
    </div>
  );
};
