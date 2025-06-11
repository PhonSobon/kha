"use client";
import React, { useState } from "react";
import KHANavbar from "../components/KHANavbar";
const content = {
  EN: {
    welcome: "WELCOME TO SERVICEBOX",
    desc: "At SERVICEBOX, we provide a seamless platform for businesses to purchase the products they need to thrive. Whether you're looking for essential tools, equipment, or specialized solutions for your company, we are here to make the process easy and efficient.",
    getStarted: "Get Started",
    features: [
      {
        title: "High-Quality",
        desc: "We only stock products from reputable brands, ensuring that you get top-quality, reliable technology for your business.",
        img: "/images/2.jpg",
      },
      {
        title: "User-Friendly",
        desc: "SERVICEBOX is designed for a seamless experience, allowing you to quickly browse, compare, and purchase the tech products or website services that meet your needs.",
        img: "/images/2.jpg",
      },
      {
        title: "Specialized in Technology",
        desc: "SERVICEBOX offers a wide range of cutting-edge technology products and professional website services to help your business stay ahead in a digital world.",
        img: "/images/2.jpg",
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
        desc: "យើងផ្តល់តែផលិតផលពីម៉ាកដែលមានឈ្មោះល្បី ដើម្បីធានាថាអ្នកទទួលបានបច្ចេកវិទ្យាដែលមានគុណភាពខ្ពស់និងទុកចិត្តបានសម្រាប់អាជីវកម្មរបស់អ្នក។",
        img: "/quality.svg",
      },
      {
        title: "ងាយស្រួលប្រើ",
        desc: "SERVICEBOX ត្រូវបានរចនាឡើងសម្រាប់បទពិសោធន៍ងាយស្រួល អនុញ្ញាតឱ្យអ្នករកមើល ប្រៀបធៀប និងទិញផលិតផលបច្ចេកវិទ្យា ឬសេវាកម្មគេហទំព័រដែលសមស្របនឹងតម្រូវការរបស់អ្នក។",
        img: "/user-friendly.svg",
      },
      {
        title: "ឯកទេសក្នុងបច្ចេកវិទ្យា",
        desc: "SERVICEBOX ផ្តល់ជូននូវផលិតផលបច្ចេកវិទ្យាចុងក្រោយនិងសេវាកម្មគេហទំព័រដែលមានវិជ្ជាជីវៈ ដើម្បីជួយអាជីវកម្មរបស់អ្នកឲ្យនាំមុខគេក្នុងសម័យឌីជីថល។",
        img: "/technology.svg",
      },
    ],
  },
};

export default function Home() {
  const [lang, setLang] = useState("EN");
// Carousel images
  const heroImages = [
     "/images/2.jpg",
    "/images/Hero-section/2.jpg",
    "/service-hero3.jpg",
    "/service-hero4.jpg",
    // Add more if needed
  ];
  const [current, setCurrent] = useState(0);

  const prevImage = () => setCurrent((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  return (
    <div>
      <KHANavbar lang={lang} setLang={setLang} />
      {/* Hero Section with Carousel */}
      <div className="pt-16">
        <div className="relative w-full h-[320px] md:h-[400px] overflow-hidden">
          <img
            src={heroImages[current]}
            alt="Service"
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white">SERVICE</h1>
          </div>
          {/* Carousel Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-60 transition"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-60 transition"
            aria-label="Next"
          >
            &#8594;
          </button>
          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${current === idx ? "bg-white" : "bg-gray-400 bg-opacity-70"}`}
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
          <img src="/welcome-illustration.svg" alt="Welcome" className="w-72 h-72 object-contain" />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-8 px-4 grid md:grid-cols-2 gap-16">
        {content[lang].features.map((feature, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row items-center gap-6 ${idx === 2 ? "md:col-span-2" : ""}`}>
            <img src={feature.img} alt={feature.title} className="w-48 h-48 object-contain" />
            <div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}