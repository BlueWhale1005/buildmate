/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Language } from './i18n/translations';
import { CompanyOverviewPage } from './pages/CompanyOverviewPage';
import { SocialMediaPromotionPage } from './pages/SocialMediaPromotionPage';
import { CleaningServicesPage } from './pages/CleaningServicesPage';
import { GeneralContractingInquiryPage } from './pages/GeneralContractingInquiryPage';

function getInitialLanguage(): Language {
  try {
    return localStorage.getItem('preferred_language') === 'es' ? 'es' : 'en';
  } catch {
    return 'en';
  }
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const isSocialPromotionPage = window.location.pathname.replace(/\/+$/, '') === '/social-media-promotion';
  const isCleaningServicesPage = window.location.pathname.replace(/\/+$/, '') === '/cleaning-services';
  const isGeneralContractingInquiryPage = window.location.pathname.replace(/\/+$/, '') === '/general-contracting-inquiry';

  useEffect(() => {
    if (window.location.hash !== '#contact') return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleSelectLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    try {
      localStorage.setItem('preferred_language', nextLanguage);
    } catch {}
  };

  if (isSocialPromotionPage) {
    return <SocialMediaPromotionPage language={language} onSelectLanguage={handleSelectLanguage} />;
  }

  if (isCleaningServicesPage) {
    return <CleaningServicesPage language={language} onSelectLanguage={handleSelectLanguage} />;
  }

  if (isGeneralContractingInquiryPage) {
    return <GeneralContractingInquiryPage language={language} onSelectLanguage={handleSelectLanguage} />;
  }

  return <CompanyOverviewPage language={language} onSelectLanguage={handleSelectLanguage} />;
}
