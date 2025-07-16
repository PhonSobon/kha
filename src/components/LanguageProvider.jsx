import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(null);

  useEffect(() => {
    // read saved language from localStorage on client only
    const savedLang = localStorage.getItem("lang") || "EN";
    setLang(savedLang);
  }, []);

  useEffect(() => {
    if (lang) {
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  if (!lang) {
    // render nothing or a loader until language is known
    return null;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
