"use client";
import React from "react";
import HeaderAbout from "../../components/About/headerAbout";
import { useLanguage } from "../../components/LanguageProvider";
import KHANavbar from "../../components/KHANavbar";

export default function Page() {
  const { lang, setLang } = useLanguage();

  return (
    <div>
       <KHANavbar lang={lang} setLang={setLang} />
      <HeaderAbout lang={lang}  setLang={setLang}/>
    </div>
  );
}