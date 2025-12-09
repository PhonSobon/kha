"use client";
import React from "react";
import HeaderAbout from "../../components/About/headerAbout";
import KHANavbar from "../../components/KHANavbar";
import ContentAbout from "../../components/About/contentAbout";
import { useTranslation } from 'react-i18next';
import KHAFooter from "../../components/KHAFooter";

export default function Page() {
  const { t, i18n } = useTranslation('common');

  return (
    <div className="">
      <KHANavbar />
      <HeaderAbout />
      <div>
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-8">
              {t('navigation.about')}
            </h1>
          </div>
        </div>
      </div>
      <ContentAbout />
            <KHAFooter />
      
    </div>
  );
}