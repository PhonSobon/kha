import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enCommon from "../../public/locales/en/common.json";
import khCommon from "../../public/locales/kh/common.json";

const loadTranslations = async () => {
  try {
    const resources = {
      en: { common: enCommon },
      kh: { common: khCommon },
    };

    await i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources,
        fallbackLng: "en",
        lng: "en",
        debug: process.env.NODE_ENV === "development",
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
      });
  } catch (error) {
    console.error("Failed to load translations:", error);
  }
};

loadTranslations();

export default i18n;
