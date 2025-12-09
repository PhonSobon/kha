"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import KHANavbar from "../components/KHANavbar";
import CardHomepage from "../components/Home/CardHomepage";
import ScholarshipKHA from "../components/Home/ScholarshipKHA";
import KHAFooter from "../components/KHAFooter";
const featureImages = ["/images/Hero/1.jpg", "/images/content/6.jpg"];


export default function Home() {
  const { t, i18n } = useTranslation('common');
  const heroImages = [
    "/images/Hero/1.jpg",
    "/images/khaold/2022-kha.jpg",
    "/images/Hero/2.jpg",
    "/images/Hero/4.jpg",
    "/images/content/2.jpg",
    "/images/khaold/2019.jpg",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div>
      <KHANavbar />
      <div className="pt-16">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[520px] lg:h-[600px] xl:h-[700px] overflow-hidden">
          <Image
            width={1200}
            height={600}
            src={heroImages[current]}
            unoptimized
            alt="KHA Hero Image"
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  current === idx ? "bg-white" : "bg-gray-400 bg-opacity-70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={
          i18n.language === "kh" ? "font-kantumruy text-content " : "w-full bg-gray-100"
        }
      >
        <div className="w-full">
          <div className="max-w-6xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-4">
                {t('home.welcome')}
              </h2>
              <div className="flex justify-center mb-6 sm:mb-8">
                <hr className="border-t-4 sm:border-t-6 md:border-t-8 border-gray-300 w-16 sm:w-24 md:w-32" />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 content max-w-4xl mx-auto leading-relaxed px-4">
                {t('home.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 py-4 sm:py-8">
            <div className="w-full lg:w-1/2">
              <Image
                unoptimized
                width={600}
                height={320}
                src={featureImages[0]}
                alt="Feature Image 1"
                className="w-full h-48 sm:h-64 md:h-80 rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-justify leading-relaxed indent-4 content">
                {t('home.features.feature1')}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="w-full lg:w-1/2">
              <Image
                unoptimized
                width={800}
                height={320}
                src={featureImages[1]}
                alt="Feature Image"
                className="w-full h-48 sm:h-64 md:h-80 rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-justify leading-relaxed indent-4 content">
                {t('home.features.feature2')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <ScholarshipKHA />
      </div>
      <div className="bg-gray-100 pt-10 pb-10">
        <CardHomepage />
      </div>
      <KHAFooter />
    </div>
  );
}
