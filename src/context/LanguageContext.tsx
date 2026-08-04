import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { invitation as enData } from '../data/invitation';
import { invitationHi as hiData } from '../data/invitation.hi';
import type { InvitationData } from '../data/types';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  data: InvitationData;
  toggleLanguage: () => void;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const dataMap: Record<Language, InvitationData> = {
  en: enData,
  hi: hiData,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(enData.languages.default);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleLanguage = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
      setTimeout(() => setIsTransitioning(false), 250);
    }, 125);
  }, []);

  const data = dataMap[language];

  return (
    <LanguageContext.Provider value={{ language, data, toggleLanguage, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
