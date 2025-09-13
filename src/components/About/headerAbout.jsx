import React from 'react'
import Image from 'next/image'
import { useLanguage } from '../LanguageProvider'

const content = {
  EN: {
    title: "Khmer Heirs Association",
  },
  KH: {
    title: "សមាគមទាយាទខ្មែរ",
  },
};

export default function HeaderAbout() {
  const { lang } = useLanguage();
  return (
    <div className="pt-16 relative w-full h-full  overflow-hidden">
      <Image
        src="/images/content/2.jpg"
        alt={content[lang].title}
        width={1200}
        height={600}
        priority
        className="object-cover w-full h-full transition-all duration-700"
        style={{ zIndex: 1 }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
          {content[lang].title}
        </h1>
      </div>
    </div>
  )
}