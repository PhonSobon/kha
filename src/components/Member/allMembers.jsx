"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function AllMembers() {
  const { t } = useTranslation("common");

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t("memberPage.allMembers.title", "All Members")}
        </h2>
        <p className="text-gray-600">
          {t("memberPage.allMembers.description", "Complete list of all KHA Housing members.")}
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <p className="text-gray-500 text-center">
          {t("memberPage.allMembers.comingSoon", "All members list coming soon...")}
        </p>
      </div>
    </div>
  );
}