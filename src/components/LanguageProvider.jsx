'use client';
import i18n from './i18n'; 
import React, { createContext, useContext, useState, useEffect } from 'react';


const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(null);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'en';
    i18n.changeLanguage(savedLang);
    setLang(savedLang);
  }, []);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('lang', lang);
    }
  }, [lang]);

  if (!lang) return null;

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
