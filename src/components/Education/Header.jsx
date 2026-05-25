"use client";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { Input } from "../ui/input";

export default function EducationHeader() {
  const { t, i18n } = useTranslation('common');

  return (
    <div className="relative w-full h-4/5">
      <Image
        className="object-cover"
        fill
        src="/assets/education/educationImage.png"
        alt="educationImage"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center text-center px-4 w-full max-w-2xl">
          <h1 className="text-black text-4xl font-bold outline-text">
            {t('education.header.title')}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-1.5 px-2 mt-5">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap">
              {t('education.header.slogan1')}
            </h2>
            <h1 className="text-[#28308F] text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap outline-text-blue">
              {t('education.header.slogan2')}
            </h1>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap">
              {t('education.header.slogan3')}
            </h2>
            <h1 className="text-[#28308F] text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap outline-text-blue">
              {t('education.header.slogan4')}
            </h1>
            {i18n.language === 'kh' && (
              <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap">
                {t('education.header.slogan5')}
              </h1>
            )}
          </div>

          <Input className="mt-10 w-full" />
        </div>
      </div>
    </div>
  );
}