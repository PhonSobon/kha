import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function HeaderAbout() {
  const { t, i18n } = useTranslation('common');
  return (
    <div className="pt-16 relative w-full h-full  overflow-hidden">
      <Image
        src="/images/content/2.jpg"
        alt={t('footer.name')}
        width={1200}
        height={600}
        priority
        className="object-cover w-full h-full transition-all duration-700"
        style={{ zIndex: 1 }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
          {t('footer.name')}
        </h1>
      </div>
    </div>
  )
}