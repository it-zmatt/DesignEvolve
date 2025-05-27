import { useTranslation } from "@/lib/TranslationContext";

export function useDirection() {
  const { language } = useTranslation();
  
  return {
    dir: language === 'AR' ? 'rtl' : 'ltr',
    isRTL: language === 'AR',
    isLTR: language !== 'AR'
  };
} 