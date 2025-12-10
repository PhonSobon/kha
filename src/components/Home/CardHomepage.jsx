"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation('common');

  return (
    <div className="w-full flex flex-col items-center px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center text-blue-900 px-2 sm:px-4 max-w-5xl">
        {t('members.title')}
      </h2>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          {memberContent.map((member, idx) => (
            <div
              key={idx}
              className="w-full bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl overflow-hidden flex flex-col transform hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="relative w-full aspect-[3/4] sm:aspect-[2/3] md:aspect-[3/4] min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
                <Image
                  src={member.imageSrc}
                  alt={i18n.language === "kh" ? member.nameKh : member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                  unoptimized
                />
              </div>
              <div className="bg-[#0057b8] border-t-4 border-orange-500 p-3 sm:p-4 md:p-5 lg:p-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 line-clamp-2 leading-tight">
                  {i18n.language === "kh" ? member.nameKh : member.name}
                </h3>
                <p className="text-white text-xs sm:text-sm md:text-base font-medium line-clamp-2 leading-snug">
                  {i18n.language === "kh" ? member.positionKh : member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
