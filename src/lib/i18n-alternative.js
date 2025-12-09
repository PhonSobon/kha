import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Alternative approach using dynamic imports
const loadTranslations = async () => {
  try {
    const [enCommon, khCommon] = await Promise.all([
      import('../../public/locales/en/common.json'),
      import('../../public/locales/kh/common.json')
    ]);

    const resources = {
      en: {
        common: enCommon.default,
      },
      kh: {
        common: khCommon.default,
      },
    };

    i18n.init({
      resources,
      fallbackLng: 'en',
      lng: 'en',
      debug: process.env.NODE_ENV === 'development',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });

    // Load saved language from localStorage
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang') || 'en';
      i18n.changeLanguage(savedLang);
    }

  } catch (error) {
    console.error('Failed to load translations:', error);
    
    // Fallback to basic translations
    i18n.init({
      resources: {
        en: {
          common: {
            navigation: {
              home: "KHMER HEIRS ASSOCIATION",
              about: "About",
              education: "Education",
              contact: "Contact",
              leader: "Leader"
            }
          }
        },
        kh: {
          common: {
            navigation: {
              home: "សមាគមទាយាទខ្មែរ",
              about: "អំពីយើង",
              education: "ការអប់រំ",
              contact: "ទំនាក់ទំនង",
              leader: "ថ្នាក់ដឹកនាំ"
            }
          }
        }
      },
      fallbackLng: 'en',
      lng: 'en',
      debug: process.env.NODE_ENV === 'development',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
  }
};

// Initialize translations
loadTranslations();

export default i18n;
