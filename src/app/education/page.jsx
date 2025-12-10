"use client";
import BacII from "@/components/Education/BacII";
import EducationHeader from "@/components/Education/Header";
import Tutorial from "@/components/Education/Tutorial";
import KHAFooter from "@/components/KHAFooter";
import KHANavbar from "@/components/KHANavbar";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function page() {
  const { t, i18n } = useTranslation('common');
  const [activeComponent, setActiveComponent] = useState("tutorial");

  return (
    <div className="w-full h-screen">
      <KHANavbar />
      <EducationHeader />
      <div className="flex p-10 justify-evenly">
        <Button
          variant={activeComponent === "tutorial" ? "default" : "outline"}
          size="lg"
          className={`rounded-2xl text-2xl py-7 w-[39%] font-bold cursor-pointer z-10 transition-colors duration-300 ${
            activeComponent === "tutorial"
              ? "bg-[#28308F] text-white hover:bg-[#357ABD]"
              : "text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
          }`}
          onClick={() => setActiveComponent("tutorial")}
        >
          <h2 className="cursor-pointer">{t('education.tutorials')}</h2>
        </Button>
        <Button
          variant={activeComponent === "bacii" ? "default" : "outline"}
          size="lg"
          className={`rounded-2xl text-2xl py-7 w-[39%] font-bold cursor-pointer z-10 transition-colors duration-300 ${
            activeComponent === "bacii"
              ? "bg-[#28308F] text-white hover:bg-[#357ABD]"
              : " text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
          }`}
          onClick={() => setActiveComponent("bacii")}
        >
          {t('education.lessonsBac')}
        </Button>
      </div>
      
      <div className="w-full h-fit flex justify-center">
        {activeComponent === "tutorial" ? <Tutorial /> : <BacII />}
      </div>
      
      <KHAFooter />
    </div>
  );
}