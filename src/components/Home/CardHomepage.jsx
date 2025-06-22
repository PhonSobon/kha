"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";  

// Example content for both languages
const memberContent = [
  {
    name: "You Sovanarith",
    nameKh: "យូ សុវណ្ណរិទ្ធ",
    position: "Graphic Designer",
    positionKh: "Graphic Designer",
    imageSrc: "/images/cards/rith-yu.jpg",
  },
  {
    name: "Ra Sarin",
    nameKh: "រ៉ា សារិន",
    position: "Physics Teacher",
    positionKh: "គ្រូបង្រៀនរូបវិទ្យា",
    imageSrc: "/images/cards/sarin.jpg",
  },
  {
    name: "Touch Pich",
    nameKh: "ទូច ពេជ្រ",
    position: "ICT Teacher",
    positionKh: "គ្រូបង្រៀន ICT",
    imageSrc: "/images/cards/pich.jpg",
  },  
  {
    name: "Cheng Sovannarith",
    nameKh: "ចេង សុវណ្ណរិទ្ធ",
    position: "Khmer Teacher",
    positionKh: "គ្រូបង្រៀនភាសាខ្មែរ",
    imageSrc: "/images/cards/rith.jpg",
  },  
  {
    name: "khen Chen",
    nameKh: "ខេន ចិន",
    position: "Soldier",
    positionKh: "ទាហាន",
    imageSrc: "/images/cards/chen.jpg",
  },  
  {
    name: "Toeu Ti",
    nameKh: "តឿ ទី",
    position: "physic teacher",
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

export default function CardHomepage({ lang = "EN" }) {

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-900">
        {lang === "KH"
            ? "សមាជិកទទួលបានឳកាសការងារ"
          : "Members are able to get career opportunities"}
      </h2>
      <div className="w-full flex flex-wrap justify-center gap-8">
        {memberContent.map((member, idx) => (
          <div
            key={idx}
            className="w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
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
              <h3 className="text-white text-2xl font-bold mb-2">
                {lang === "KH" ? member.nameKh : member.name}
              </h3>
              <p className="text-white text-lg font-semibold">
                {lang === "KH" ? member.positionKh : member.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}