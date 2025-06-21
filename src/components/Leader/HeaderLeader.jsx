import React from 'react'
import Image from 'next/image'
import { useLanguage } from '../LanguageProvider'

const content = {
  EN: {
    title: "Leader Khmer Heirs Association",
  },
  KH: {
    title: "ថ្នាក់ដឺកនាំ សមាគមទាយាទខ្មែរ",
  },
};

export default function HeaderAbout() {
  const { lang } = useLanguage();
  return (
    <div className="pt-16 relative w-full h-full  overflow-hidden">
      <Image
        src="/images/content/8.jpg"
        alt={content[lang].title}
        width={1200}
        height={600}
        priority
        className="w-full h-full transition-all duration-700"
        style={{ zIndex: 1 }}
      />
    </div>
  )
}