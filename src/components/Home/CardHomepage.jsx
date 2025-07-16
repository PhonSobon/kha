"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const memberContent = [
  {
    id: "you-sovanarith",
    imageSrc: "/images/cards/rith-yu.jpg",
  },
  {
    id: "ra-sarin",
    imageSrc: "/images/cards/sarin.jpg",
  },
  {
    id: "touch-pich",
    imageSrc: "/images/cards/pich1.jpg",
  },
  {
    id: "cheng-sovannarith",
    imageSrc: "/images/cards/rith.jpg",
  },
  {
    id: "khen-chen",
    imageSrc: "/images/cards/chen.jpg",
  },
  {
    id: "toeu-ti",
    imageSrc: "/images/cards/ti.jpg",
  },
  {
    id: "noek-peth",
    imageSrc: "/images/cards/pet.jpg",
  },
];

export default function CardHomepage() {
  const { t } = useTranslation('common');

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-900">
        {t('members.title')}
      </h2>

      <div className="w-full flex flex-wrap justify-center gap-8 px-4">
        {memberContent.map((member) => (
          <div
            key={member.id}
            className="w-full sm:w-1/2 md:w-1/3 max-w-xs bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform hover:scale-105 transition duration-300"
          >
            <div className="relative w-full h-80">
              <Image
                src={member.imageSrc}
                alt={t(`members.${member.id}.name`)}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="bg-[#0057b8] border-t-4 border-orange-500 p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">
                {t(`members.${member.id}.name`)}
              </h3>
              <p className="text-white text-sm font-medium">
                {t(`members.${member.id}.position`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}