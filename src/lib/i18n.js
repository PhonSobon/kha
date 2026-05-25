import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const loadTranslations = async () => {
  try {
    const [enCommon, khCommon] = await Promise.all([
      import('../../public/locales/en/common.json'),
      import('../../public/locales/kh/common.json')
    ]);

    const resources = {
      en: { common: enCommon.default },
      kh: { common: khCommon.default },
    };

    await i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources,
        fallbackLng: 'en',
        lng: 'en', 
        debug: process.env.NODE_ENV === 'development',
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
      });

    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang') || 'en';
      setTimeout(() => {
        i18n.changeLanguage(savedLang);
      }, 0);
    }

  } catch (error) {
    console.error('Failed to load translations:', error);
  }
};

loadTranslations();

export default i18n;