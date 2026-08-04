import { useLanguage } from '../context/LanguageContext';

export function useInvitation() {
  const { data, language, isTransitioning } = useLanguage();
  return { ...data, language, isTransitioning };
}
