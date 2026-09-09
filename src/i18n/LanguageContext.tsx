import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationStructure, translations } from './translations';
import { getTranslatedData } from '../i18n/translatedData';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStructure;
  data: ReturnType<typeof getTranslatedData>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('magno_app_lang');
    if (saved === 'es' || saved === 'en' || saved === 'zh') {
      return saved;
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('magno_app_lang', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = {
  language,
  setLanguage,
  t: translations[language],
  data: getTranslatedData(language),
};

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
