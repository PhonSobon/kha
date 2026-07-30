"use client";
import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import ParticlesComponent from '../ui/particles-bg';

export default function HeaderContact() {
  const { t, i18n } = useTranslation('common');
  return (
    <div className="pt-16 relative w-full h-[600px] overflow-hidden">
      <ParticlesComponent />
      <div className="relative z-10 pointer-events-none flex flex-col md:flex-row items-center justify-between w-full h-full max-w-7xl mx-auto px-8">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0 pointer-events-none">
          <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg mb-4">
            {t('contact.title')}
          </h2>
          <h1 className="text-white text-xl md:text-3xl font-semibold drop-shadow-lg">
            {t('contact.subtitle')}
          </h1>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end pointer-events-none">
          <Image
            src="/images/content/2.jpg"
            alt={t('contact.subtitle')}
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