"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

const content = {
  EN: {
    title: "Leader Khmer Heirs Association",
  },
  KH: {
    title: "ថ្នាក់ដឹកនាំ សមាគមទាយាទខ្មែរ",
  },
};

export default function HeaderLeader() {
  const { lang } = useLanguage();

  return (
    <div className="pt-16 relative w-full h-[300px] md:h-[450px] overflow-hidden">
      <Image
        src="/images/content/8.jpg"
        alt={content[lang].title}
        fill
        priority
        className="object-cover"
        style={{ zIndex: 1 }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
          {content[lang].title}
        </h1>
      </div>
    </div>
  );
}
