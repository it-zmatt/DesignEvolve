import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, getTranslation, saveLanguagePreference, getLanguagePreference } from '@/lib/translations';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: { count?: number; [key: string]: any }) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');

  useEffect(() => {
    // Load saved language preference on mount
    const savedLanguage = getLanguagePreference();
    setLanguageState(savedLanguage);
    
    // Apply RTL direction for Arabic
    if (savedLanguage === 'AR') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = savedLanguage.toLowerCase();
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    saveLanguagePreference(lang);
    
    // Update document direction and language
    if (lang === 'AR') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lang.toLowerCase();
    }
  };

  const t = (key: string, options?: { count?: number; [key: string]: any }) => 
    getTranslation(key, language, options);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}