"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import KHANavbar from "../components/KHANavbar";
import CardHomepage from "../components/Home/CardHomepage";
import ScholarshipKHA from "../components/Home/ScholarshipKHA";
import KHAFooter from "../components/KHAFooter";
import { useLanguage } from "../components/LanguageProvider"; // make sure the path is correct

const featureImages = ["/images/Hero/1.jpg", "/images/content/6.jpg"];

const content = {
  EN: {
    welcome: "WELCOME TO KHMER HEIRS ASSOCIATION",
    desc: "A group of Khmer intellectual students have come together to establish an association based in the Kingdom of Cambodia, called the Khmer Heirs Association.The Khmer Heirs Association is abbreviated as “KHA” in English and “សទខ” in Khmer.",
    features: [
      {
        desc: "The Khmer Heirs Association is a non-governmental organization that is independent, sovereign, apolitical, non-partisan, and not for private profit.",
      },
      {
        desc: "Khmer Heirs work to build a bright, honorable, and prosperous future for the Cambodian people. Democracy and respect for human rights are the strong foundations of the leadership and development of the Khmer Heirs Association.",
      },
      {
        desc: "SERVICEBOX offers a wide range of cutting-edge technology products and professional website services to help your business stay ahead in a digital world.",
      },
    ],
  },
  KH: {
    welcome: "សូមស្វាគមន៍មកកាន់ សមាគមទាយាទខ្មែរ",
    desc: "និស្សិត បញ្ញវន្តខ្មែរ បានរួមគ្នាបង្កើតសមាគមមួយ តាំងនៅក្នុងទឹកដី នៃព្រះរាជាណាចក្រកម្ពុជា ដែលមានឈ្មោះថា “សមាគមទាយាទខ្មែរ” ។ សមាគមទាយាទខ្មែរ សរសេរជាអក្សកាត់ថា “សទខ” និងជាភាសាអង់គ្លេសថា “Khmer Heirs Association (KHA)",
    features: [
      {
        desc: "សមាគមទាយាទខ្មែរ ជាអង្គការមិនមែនរដ្ឋាភិបាល ឯករាជ្យភាព អធិបតេយ្យភាព មិនធ្វើនយោបាយ មិនបម្រើគណបក្សនយោបាយ និងមិនរកកម្រៃជាឯកជន។",
      },
      {
        desc: "ទាយាទខ្មែរ ធ្វើអ្វីៗដើម្បីកសាងវាសនាឧត្តុង្គឧត្តម ថ្កុំថ្កើង និងភាពសំបូររុងរឿងសម្រាប់កូនខ្មែរ។ លទ្ធិប្រជាធិបតេយ្យ និងការគោរពសិទ្ធិមនុស្ស គឺជាមូលដ្ឋានគ្រឹះ ដ៏រឹងមាំក្នងការដឹកនាំ និងអភិវឌ្ឍសមាគទាយាទខ្មែរ ។",
      },
      {
        desc: "SERVICEBOX ផ្តល់ជូននូវផលិតផលបច្ចេកវិទ្យាចុងក្រោយនិងសេវាកម្មគេហទំព័រដែលមានវិជ្ជាជីវៈ ដើម្បីជួយអាជីវកម្មរបស់អ្នកឲ្យនាំមុខគេក្នុងសម័យឌីជីថល។",
      },
    ],
  },
};

export default function Home() {
  const { lang } = useLanguage();
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
      <div
        className={
          lang === "KH" ? "font-kantumruy text-content " : "w-full bg-gray-100"
        }
      >
        <div className="w-full">
          <div className="max-w-3xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center text-center gap-8 ">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                {content[lang].welcome}
              </h2>
              <div className="flex justify-center">
                <hr className="border-t-8 border-gray-300 mb-9 mt-0 w-auto mx-auto" />
              </div>
              <p className="mb-4 text-gray-700 content">{content[lang].desc}</p>
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
              {content[lang].features[0].desc}
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
              {content[lang].features[1].desc}
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
