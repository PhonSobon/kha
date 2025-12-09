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
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-blue-900 px-4">
        {t('members.title')}
      </h2>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {memberContent.map((member, idx) => (
            <div
              key={idx}
              className="w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform hover:scale-105 transition duration-300"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                <Image
                  src={member.imageSrc}
                  alt={i18n.language === "kh" ? member.nameKh : member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="bg-[#0057b8] border-t-4 border-orange-500 p-3 sm:p-4 md:p-6 text-center">
                <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 line-clamp-2">
                  {i18n.language === "kh" ? member.nameKh : member.name}
                </h3>
                <p className="text-white text-xs sm:text-sm md:text-base font-medium line-clamp-2">
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
