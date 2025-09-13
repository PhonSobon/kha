"use client";
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '../LanguageProvider'

const content = {
  EN: {
    title: "Khmer Heirs Association",
    contact: "Contact Us",
  },
  KH: {
    title: "សមាគមទាយាទខ្មែរ",
    contact: "ទំនាក់ទំនង",
  },
};

export default function HeaderContact() {
  const { lang } = useLanguage();
  return (
    <div className="pt-16 relative w-full h-[600px] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-8">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg mb-4">
            {content[lang].contact}
          </h2>
          <h1 className="text-white text-xl md:text-3xl font-semibold drop-shadow-lg">
            {content[lang].title}
          </h1>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/images/content/2.jpg"
            alt={content[lang].title}
            width={1000}
            height={1000}
            className="rounded-xl shadow-lg object-cover w-full h-96"
            priority
          />
        </div>
      </div>
    </div>
  )
}