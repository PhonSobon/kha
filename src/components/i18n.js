'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const language = typeof window !== 'undefined'
  ? localStorage.getItem('lang') || 'en'
  : 'en';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: language,
    supportedLngs: ['en', 'kh'],
    ns: ['common'],
    defaultNS: 'common',
    backend: {
      loadPath: '/public/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
