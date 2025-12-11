"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import KHANavbar from "../../components/KHANavbar";
import Member from "../../components/Member/member";
import AllMembers from "../../components/Member/allMembers";
import Alumni from "../../components/Member/alumni";
import KHAFooter from "../../components/KHAFooter";

export default function Page() {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("leader");

  return (
    <div className="min-h-screen bg-gray-50">
      <KHANavbar />
      <div className="pt-32">
        <div className="max-w-7xl mx-auto px-4"> 
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-8 md:px-16 text-left mb-6">
            <button
              onClick={() => setActiveTab("leader")}
              className={`text-base sm:text-lg md:text-xl font-medium transition-colors duration-200 cursor-pointer ${
                activeTab === "leader"
                  ? "text-[#28308F] font-bold"
                  : "text-gray-600 hover:text-[#28308F]"
              }`}
            >
              {t("memberPage.tabs.leader", "Leader")}
            </button>
            <span className="text-gray-400 text-base sm:text-lg md:text-xl">|</span>
            <button
              onClick={() => setActiveTab("allMembers")}
              className={`text-base sm:text-lg md:text-xl font-medium transition-colors duration-200 cursor-pointer ${
                activeTab === "allMembers"
                  ? "text-[#28308F] font-bold"
                  : "text-gray-600 hover:text-[#28308F]"
              }`}
            >
              {t("memberPage.tabs.allMembers", "All Members")}
            </button>
            <span className="text-gray-400 text-base sm:text-lg md:text-xl">|</span>
            <button
              onClick={() => setActiveTab("alumni")}
              className={`text-base sm:text-lg md:text-xl font-medium transition-colors duration-200 cursor-pointer ${
                activeTab === "alumni"
                  ? "text-[#28308F] font-bold"
                  : "text-gray-600 hover:text-[#28308F]"
              }`}
            >
              {t("memberPage.tabs.alumni", "Alumni")}
            </button>
          </div>

          <div className="w-full">
            {activeTab === "leader" && <Member />}
            {activeTab === "allMembers" && <AllMembers />}
            {activeTab === "alumni" && <Alumni />}
          </div>
        </div>
      </div>
      <KHAFooter />
    </div>
  );
}
