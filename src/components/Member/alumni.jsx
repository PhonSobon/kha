"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Alumni() {
  const { t } = useTranslation("common");

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t("memberPage.alumni.title", "Alumni")}
        </h2>
        <p className="text-gray-600">
          {t("memberPage.alumni.description", "Former members who have graduated and moved on to successful careers.")}
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <p className="text-gray-500 text-center">
          {t("memberPage.alumni.comingSoon", "Alumni information coming soon...")}
        </p>
      </div>
    </div>
  );
}

