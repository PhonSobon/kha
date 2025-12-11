"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import KHANavbar from "../../components/KHANavbar";
import Member from "../../components/Member/member";
import AllMembers from "../../components/Member/allMembers";
import Alumni from "../../components/Member/alumni";
import KHAFooter from "../../components/KHAFooter";

export default function Page() {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("leader");

  // Load saved tab from localStorage on mount
  useEffect(() => {
    const savedTab = localStorage.getItem("memberPageActiveTab");
    if (savedTab && ["leader", "allMembers", "alumni"].includes(savedTab)) {
      setActiveTab(savedTab);
    }
  }, []);

  // Save tab to localStorage when it changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("memberPageActiveTab", tab);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <KHANavbar />
      <div className="pt-32">
        <div className="max-w-7xl mx-auto px-4"> 
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-8 md:px-16 text-left mb-6">
            <button
              onClick={() => handleTabChange("leader")}
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
              onClick={() => handleTabChange("allMembers")}
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
              onClick={() => handleTabChange("alumni")}
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
