import React, { useState } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Language, TRANSLATIONS } from '../i18n/translations';
import { PageRoute } from '../types/routes';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenLanguageModal: () => void;
  onOpenDirectCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  language,
  onSelectLanguage,
  onOpenLanguageModal,
  onOpenDirectCall,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language].nav;

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  const navLinks: { route: PageRoute; label: string }[] = [
    { route: 'home', label: t.home },
    { route: 'cleaning', label: language === 'es' ? 'Limpieza' : 'Cleaning' },
    { route: 'construction', label: language === 'es' ? 'Construcción' : 'Construction' },
    { route: 'ai-previews', label: language === 'es' ? 'Previews IA' : 'AI Previews' },
    { route: 'about', label: t.about },
    { route: 'contact', label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-900 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        
        {/* Left: Brand name with airy spacing */}
        <div 
          onClick={() => handleNav('home')}
          className="cursor-pointer group shrink-0 flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-md bg-slate-950 text-white flex items-center justify-center font-heading font-black text-base shadow-xs group-hover:bg-amber-600 transition-colors">
            B
          </div>
          <span className="font-heading text-xl sm:text-2xl font-black tracking-tight text-slate-950 transition-colors whitespace-nowrap">
            Build<span className="text-amber-600">Mate</span>
          </span>
        </div>

        {/* Center: Streamlined, evenly spaced desktop links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-[13px] font-semibold text-slate-600 shrink-0">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNav(link.route)}
                className={`transition-colors cursor-pointer whitespace-nowrap py-1 relative ${
                  isActive
                    ? 'text-slate-950 font-bold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-2.5 left-0 right-0 h-[2px] bg-amber-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Clean, unclustered controls */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Subtle Language Pill */}
          <div className="flex items-center border border-slate-200 rounded-full p-0.5 bg-slate-100/90 text-[11px] font-bold">
            <button
              onClick={() => onSelectLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                language === 'en'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-500 hover:text-slate-950'
              }`}
              title="View in English"
            >
              EN
            </button>
            <button
              onClick={() => onSelectLanguage('es')}
              className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                language === 'es'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-500 hover:text-slate-950'
              }`}
              title="Ver en Español"
            >
              ES
            </button>
          </div>

          {/* Sleek Dispatch Call Pill Button */}
          <button
            onClick={onOpenDirectCall}
            className="px-3.5 py-1.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs whitespace-nowrap"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span>(201) 555-0198</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={onOpenLanguageModal}
            className="p-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5 text-slate-700" />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            onClick={onOpenDirectCall}
            className="p-2 text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md"
            title="Call Dispatch"
          >
            <Phone className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3 shadow-lg">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNav(link.route)}
                className={`flex items-center justify-between w-full text-left py-2 text-base font-semibold transition-colors ${
                  isActive ? 'text-amber-700 font-bold' : 'text-slate-800 hover:text-slate-950'
                }`}
              >
                <span>{link.label}</span>
              </button>
            );
          })}

          {/* Language selector in mobile menu */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-600">Language / Idioma:</span>
            <div className="flex gap-2">
              <button
                onClick={() => onSelectLanguage('en')}
                className={`px-3 py-1 font-bold rounded ${
                  language === 'en' ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onSelectLanguage('es')}
                className={`px-3 py-1 font-bold rounded ${
                  language === 'es' ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                Español
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                onOpenDirectCall();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold text-center text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{language === 'es' ? 'Llamar a Despacho: (201) 555-0198' : 'Call Dispatch (201) 555-0198'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
