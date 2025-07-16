"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import KHANavbar from "../components/KHANavbar";
import CardHomepage from "../components/Home/CardHomepage";
import ScholarshipKHA from "../components/Home/ScholarshipKHA";
import KHAFooter from "../components/KHAFooter";

const featureImages = ["/images/Hero/1.jpg", "/images/content/6.jpg"];

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [isRouterReady, setIsRouterReady] = useState(false);
  
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
    if (router.isReady) {
      setIsRouterReady(true);
    }
  }, [router.isReady]);

  useEffect(() => {
    if (!isRouterReady) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length, isRouterReady]);

  // Show loading state while router is not ready
  if (!isRouterReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <KHANavbar />
      <div className="pt-16">
        <div className="relative w-full h-[520px] md:h-[600px] overflow-hidden">
          <Image
            width={100}
            height={100}
            src={heroImages[current]}
            unoptimized
            alt="Service"
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${
                  current === idx ? "bg-white" : "bg-gray-400 bg-opacity-70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100">
        <div className="w-full">
          <div className="max-w-3xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center text-center gap-8 ">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                {t('welcome')}
              </h2>
              <div className="flex justify-center">
                <hr className="border-t-8 border-gray-300 mb-9 mt-0 w-auto mx-auto" />
              </div>
              <p className="mb-4 text-gray-700 content">{t('description')}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-8 flex flex-col gap-16">
          <div className="flex flex-col md:flex-row items-center gap-20 py-4">
            <Image
              unoptimized
              width={100}
              height={100}
              src={featureImages[0]}
              alt="Feature Image 1"
              className="w-1/2 h-80 rounded-lg shadow-md"
            />
            <p className="text-gray-700 text-justify leading-relaxed indent-4 content">
              {t('features.feature1')}
            </p>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-20 py-20 pb-20 pt-20">
            <Image
              unoptimized
              width={100}
              height={100}
              src={featureImages[1]}
              alt="Feature Image"
              className="w-full h-80 rounded-lg shadow-md"
            />
            <p className="text-gray-700 text-justify leading-relaxed indent-4 content">
              {t('features.feature2')}
            </p>
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