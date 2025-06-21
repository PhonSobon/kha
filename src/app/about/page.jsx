"use client";
import React from "react";
import HeaderAbout from "../../components/About/headerAbout";
import KHANavbar from "../../components/KHANavbar";
import ContentAbout from "../../components/About/contentAbout";
import { useLanguage } from "../../components/LanguageProvider"; 

export default function Page() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="">
      <KHANavbar lang={lang} setLang={setLang} />
      <HeaderAbout lang={lang} setLang={setLang} />
      <div>
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-8">
              {lang === "EN" ? "About Us" : "អំពីយើង"}
            </h1>
          </div>
        </div>
      </div>
      <ContentAbout lang={lang} setLang={setLang} />
    </div>
  );
}