"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

const memberContent = [
  {
    name: "You Sovanarith",
    nameKh: "យូ សុវណ្ណរិទ្ធ",
    position: "Graphic Designer",
    positionKh: "អ្នករចនាក្រាហ្វិក",
    imageSrc: "/images/cards/rith-yu.jpg",
  },
  {
    name: "Ra Sarin",
    nameKh: "រ៉ា សារិន",
    position: "Researcher (Physics)",
    positionKh: "អ្នកស្រាវជ្រាវរូបវិទ្យា",
    imageSrc: "/images/cards/sarin.jpg",
  },
  {
    name: "Touch Pich",
    nameKh: "ទូច ពេជ្រ",
    position: "ICT Teacher",
    positionKh: "គ្រូបង្រៀន ICT",
    imageSrc: "/images/cards/pich1.jpg",
  },
  {
    name: "Cheng Sovannarith",
    nameKh: "ចេង សុវណ្ណរិទ្ធ",
    position: "Khmer Teacher",
    positionKh: "គ្រូបង្រៀនភាសាខ្មែរ",
    imageSrc: "/images/cards/rith.jpg",
  },
  {
    name: "Khen Chen",
    nameKh: "ខេន ចិន",
    position: "Soldier",
    positionKh: "ទាហាន",
    imageSrc: "/images/cards/chen.jpg",
  },
  {
    name: "Toeu Ti",
    nameKh: "តឿ ទី",
    position: "Physics Teacher",
    positionKh: "គ្រូបង្រៀនរូបវិទ្យា",
    imageSrc: "/images/cards/ti.jpg",
  },
  {
    name: "Noek Peth",
    nameKh: "ណឹក ពេត",
    position: "Math Teacher",
    positionKh: "គ្រូបង្រៀនគណិតវិទ្យា",
    imageSrc: "/images/cards/pet.jpg",
  },
];

export default function CardHomepage() {
  const { lang } = useLanguage();

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-900">
        {lang === "KH"
          ? "សមាជិកទទួលបានឱកាសការងារ"
          : "Members Are Able to Get Career Opportunities"}
      </h2>

      <div className="w-full flex flex-wrap justify-center gap-8 px-4">
        {memberContent.map((member, idx) => (
          <div
            key={idx}
            className="w-full sm:w-1/2 md:w-1/3 max-w-xs bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform hover:scale-105 transition duration-300"
          >
            <div className="relative w-full h-80">
              <Image
                src={member.imageSrc}
                alt={lang === "KH" ? member.nameKh : member.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="bg-[#0057b8] border-t-4 border-orange-500 p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">
                {lang === "KH" ? member.nameKh : member.name}
              </h3>
              <p className="text-white text-sm font-medium">
                {lang === "KH" ? member.positionKh : member.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
