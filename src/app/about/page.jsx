"use client";
import React from "react";
import HeaderAbout from "../../components/About/headerAbout";
import KHANavbar from "../../components/KHANavbar";
import ContentAbout from "../../components/About/contentAbout";
import { useLanguage } from "../../components/LanguageProvider"; 

export default function Page() {
  const { lang, setLang } = useLanguage();

  return (
    <div>
      <KHANavbar lang={lang} setLang={setLang} />
      <HeaderAbout lang={lang} setLang={setLang} />
      <ContentAbout lang={lang} setLang={setLang} />
    </div>
  );
}