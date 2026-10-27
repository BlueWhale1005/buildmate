import React from 'react';
import { Language } from '../i18n/translations';

interface LanguageSwitchProps {
  language: Language;
  onChange: (language: Language) => void;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ language, onChange }) => (
  <div
    className="language-switch"
    data-language={language}
    role="group"
    aria-label={language === 'en' ? 'Select page language' : 'Seleccione el idioma de la página'}
  >
    <span className="language-switch__indicator" aria-hidden="true" />
    <button
      type="button"
      onClick={() => onChange('en')}
      aria-pressed={language === 'en'}
      title={language === 'en' ? 'Page language: English' : 'Mostrar página en inglés'}
    >
      English
    </button>
    <button
      type="button"
      onClick={() => onChange('es')}
      aria-pressed={language === 'es'}
      title={language === 'es' ? 'Idioma de la página: español' : 'Display page in Spanish'}
    >
      Español
    </button>
  </div>
);
