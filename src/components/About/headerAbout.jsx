import React from 'react'
import Image from 'next/image'
import { useLanguage } from '../LanguageProvider'

const content = {
  EN: {
    title: "Khmer Heirs Association",
    desc: "The Khmer Heirs Association is a non-governmental organization that is independent, sovereign, apolitical, non-partisan, and not for private profit.",
  },
  KH: {
    title: "សមាគមទាយាទខ្មែរ",
    desc: "សមាគមទាយាទខ្មែរ ជាអង្គការមិនមែនរដ្ឋាភិបាល ឯករាជ្យភាព អធិបតេយ្យភាព មិនធ្វើនយោបាយ មិនបម្រើគណបក្សនយោបាយ និងមិនរកកម្រៃជាឯកជន។",
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
        <p className="text-white text-lg font-bold md:text-xl mt-4 drop-shadow-lg max-w-3xl">
          {content[lang].desc}
        </p>
      </div>
    </div>
  )
}