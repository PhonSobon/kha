"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import AlumniCard from "@/components/others/cardAlumini";
import { allAlumini } from "@/components/others/allAlumini";

export default function Alumni() {
  const { t } = useTranslation("common");

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 px-4 mb-4">
          {t("memberPage.alumni.title", "Alumni")}
        </h2>
        <p className="text-gray-600">
          {t("memberPage.alumni.description", "Former members who have graduated and moved on to successful careers.")}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {allAlumini.map((alumini) => (
          <AlumniCard key={alumini.id} alumini={alumini} />
        ))}
      </div>
    </div>
  );
}