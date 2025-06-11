"use client";
import React, { useState, useEffect } from "react";
import KHANavbar from "../components/KHANavbar";

const featureImages = [
  "/images/3.jpg",
  "/images/3.jpg",
  "/images/2.jpg",
  // Add more if needed
];

const content = {
  EN: {
    welcome: "WELCOME TO SERVICEBOX",
    desc: "At SERVICEBOX, we provide a seamless platform for businesses to purchase the products they need to thrive. Whether you're looking for essential tools, equipment, or specialized solutions for your company, we are here to make the process easy and efficient.",
    getStarted: "Get Started",
    features: [
      {
        title: "High-Quality",
        desc: "The Khmer Heirs Association is a non-governmental organization that is independent, sovereign, apolitical, non-partisan, and not for private profit. It is represented by a single president who is committed to upholding and implementing the statutes and regulations of the association.",
      },
      {
        title: "User-Friendly",
        desc: "SERVICEBOX is designed for a seamless experience, allowing you to quickly browse, compare, and purchase the tech products or website services that meet your needs.",
      },
      {
        title: "Specialized in Technology",
        desc: "SERVICEBOX offers a wide range of cutting-edge technology products and professional website services to help your business stay ahead in a digital world.",
      },
    ],
  },
  KH: {
    welcome: "សូមស្វាគមន៍មកកាន់ SERVICEBOX",
    desc: "នៅ SERVICEBOX យើងផ្តល់ជាវេទិកាដែលងាយស្រួលសម្រាប់អាជីវកម្មក្នុងការទិញផលិតផលដែលពួកគេត្រូវការ។ មិនថាអ្នកកំពុងស្វែងរកឧបករណ៍សំខាន់ៗ ឧបករណ៍ ឬដំណោះស្រាយឯកទេសសម្រាប់ក្រុមហ៊ុនរបស់អ្នកទេ យើងនៅទីនេះដើម្បីធ្វើឲ្យដំណើរការងាយស្រួលនិងមានប្រសិទ្ធភាព។",
    getStarted: "ចាប់ផ្តើម",
    features: [
      {
        title: "គុណភាពខ្ពស់",
        desc: "សមាគមទាយាទខ្មែរ  ជាអង្គការមិនមែនរដ្ឋាភិបាល ឯករាជ្យភាព អធិបតេយ្យភាព មិនធ្វើនយោបាយមិនបម្រើគណបក្សនយោបាយ និងមិនរកកម្រៃជាឯកជន ។ ទាយាទខ្មែរ តំណាងដោយ ប្រធានមួយរូប ប្តេជ្ញាគោរព និងអនុវត្តតាមលក្ខន្តិកៈ និងបទបញ្ញាត្តិនានា របស់សមាគម ។",
      },
      {
        title: "ងាយស្រួលប្រើ",
        desc: "SERVICEBOX ត្រូវបានរចនាឡើងសម្រាប់បទពិសោធន៍ងាយស្រួល អនុញ្ញាតឱ្យអ្នករកមើល ប្រៀបធៀប និងទិញផលិតផលបច្ចេកវិទ្យា ឬសេវាកម្មគេហទំព័រដែលសមស្របនឹងតម្រូវការរបស់អ្នក។",
      },
      {
        title: "ឯកទេសក្នុងបច្ចេកវិទ្យា",
        desc: "SERVICEBOX ផ្តល់ជូននូវផលិតផលបច្ចេកវិទ្យាចុងក្រោយនិងសេវាកម្មគេហទំព័រដែលមានវិជ្ជាជីវៈ ដើម្បីជួយអាជីវកម្មរបស់អ្នកឲ្យនាំមុខគេក្នុងសម័យឌីជីថល។",
      },
    ],
  },
};

export default function Home() {
  const [lang, setLang] = useState("EN");
  const heroImages = [
     "/images/Hero/7.jpg",
    "/images/Hero/1.jpg",
    "/images/Hero/2.jpg",
    "/images/Hero/3.jpg",
    "/images/Hero/4.jpg",
    "/images/Hero/5.jpg",
    "/images/Hero/6.png",
  ];
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div>
      <KHANavbar lang={lang} setLang={setLang} />
      {/* Hero Section with Auto Carousel */}
      <div className="pt-16">
        <div className="relative w-full h-[520px] md:h-[600px] overflow-hidden">
          <img
            src={heroImages[current]}
            alt="Service"
            className="w-full h-full object-cover transition-all duration-700"
          />
          {/* <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              
            </h1>
          </div> */}
          {/* Indicators */}
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
      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">{content[lang].welcome}</h2>
          <p className="mb-4 text-gray-700">{content[lang].desc}</p>
          <button className="bg-orange-500 text-white px-5 py-2 rounded font-semibold hover:bg-orange-600 transition">
            {content[lang].getStarted}
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/welcome-illustration.svg"
            alt="Welcome"
            className="w-full h-72 object-contain"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col gap-16">
        {/* Feature 1: Image left, Text right */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={featureImages[0]}
            alt={content[lang].features[0].title}
            className="w-full h-52 object-contain font-siemreap"
          />
          <div>
            <h3 className="text-xl font-bold mb-2">
              {content[lang].features[0].title}
            </h3>
            <p className="text-gray-700">{content[lang].features[0].desc}</p>
          </div>
        </div>
        {/* Feature 2: Text left, Image right */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img
            src={featureImages[1]}
            alt={content[lang].features[1].title}
            className="w-48 h-48 object-contain font-siemreap"
          />
          <div>
            <h3 className="text-xl font-bold mb-2">
              {content[lang].features[1].title}
            </h3>
            <p className="text-gray-700">{content[lang].features[1].desc}</p>
          </div>
        </div>
        {/* Feature 3: Image left, Text right */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={featureImages[2]}
            alt={content[lang].features[2].title}
            className="w-48 h-48 object-contain font-siemreap"
          />
          <div>
            <h3 className="text-xl font-bold mb-2">
              {content[lang].features[2].title}
            </h3>
            <p className="text-gray-700">{content[lang].features[2].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
