"use client";
import React, { useState, useEffect } from "react";
import KHANavbar from "../components/KHANavbar";
import CardHomepage from "../components/Home/CardHomepage";

const featureImages = [
  "/images/3.jpg",
  "/images/3.jpg",
  "/images/3.jpg",
  "/images/3.jpg",
];

const content = {
  EN: {
    welcome: "WELCOME TO KHMER HEIRS ASSOCIATION",
    desc: "The Khmer Heirs Association is a non-governmental organization that is independent, sovereign, apolitical, non-partisan, and not for private profit. It is represented by a single president who is committed to upholding and implementing the statutes and regulations of the association.",
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
    welcome: "សូមស្វាគមន៍មកកាន់ សមាគមទាយាទខ្មែរ",
    desc: "សមាគមទាយាទខ្មែរ  ជាអង្គការមិនមែនរដ្ឋាភិបាល ឯករាជ្យភាព អធិបតេយ្យភាព មិនធ្វើនយោបាយមិនបម្រើគណបក្សនយោបាយ និងមិនរកកម្រៃជាឯកជន ។ ទាយាទខ្មែរ តំណាងដោយ ប្រធានមួយរូប ប្តេជ្ញាគោរព និងអនុវត្តតាមលក្ខន្តិកៈ និងបទបញ្ញាត្តិនានា របស់សមាគម ។",
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

const cards = {
  EN: [
    {
      imageSrc: "/images/3.jpg",
      title: "ASEAN-Australia-New Zealand Free Trade...",
      description:
        "On April 29, 2024, Oknha Pech Bolen, President of the Young Entrepreneurs Association of Cambodia, joined as a panelist at the ASEAN-Australia-New...",
    },
    {
      imageSrc: "/images/3.jpg",
      title: "AANZFTA Business Roundtable 2025 –...",
      description:
        "Join industry leaders and business experts at the AANZFTA Business Roundtable 2025, where we’ll tackle key trade barriers, share insights and...",
    },
    {
      imageSrc: "/images/3.jpg",
      title: "Memorandum of Understanding Signed with...",
      description:
        "On March 26, 2025, Oknha Pech Bolen, President of the Young Entrepreneurs Association of Cambodia (YEAC), signed a Memorandum of...",
    },
  ],
  KH: [
    {
      imageSrc: "/images/3.jpg",
      title: "កិច្ចពិភាក្សាពាណិជ្ជកម្មអាស៊ាន-អូស្ត្រាលី-នូវែលសេឡង់...",
      description:
        "នៅថ្ងៃទី ២៩ ខែមេសា ឆ្នាំ២០២៤ លោកអ៊ុកណា ប៉ិច បូឡែន ប្រធានសមាគមអ្នកស្រីវ័យក្មេងកម្ពុជា បានចូលរួមជាអ្នកពិភាក្សាក្នុងកិច្ចពិភាក្សាពាណិជ្ជកម្មអាស៊ាន-អូស្ត្រាលី-នូវែលសេឡង់...",
    },
    {
      imageSrc: "/images/3.jpg",
      title: "ក្រុមប្រឹក្សាអាជីវកម្ម AANZFTA ឆ្នាំ២០២៥...",
      description:
        "ចូលរួមជាមួយអ្នកដឹកនាំឧស្សាហកម្ម និងអ្នកជំនាញអាជីវកម្មនៅក្នុងក្រុមប្រឹក្សាអាជីវកម្ម AANZFTA ឆ្នាំ២០២៥ ដែលយើងនឹងដោះសោគន្លងពាណិជ្ជកម្មសំខាន់ៗ ចែករំលែកចំណេះដឹង និង...",
    },
    {
      imageSrc: "/images/3.jpg",
      title: "ចុះហត្ថលេខាលើអនុស្សរណៈយោបល់ជាមួយ...",
      description:
        "នៅថ្ងៃទី ២៦ ខែមីនា ឆ្នាំ២០២៥ លោកអ៊ុកណា ប៉ិច បូឡែន ប្រធានសមាគមអ្នកស្រីវ័យក្មេងកម្ពុជា (YEAC) បានចុះហត្ថលេខាលើអនុស្សរណៈយោបល់ជាមួយ...",
    },
  ],
};

export default function Home() {
  const [lang, setLang] = useState("EN");
  const heroImages = [
    "/images/Hero/1.jpg",
    "/images/Hero/2.jpg",
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
      {/* <KHANavbar lang={lang} setLang={setLang} /> */}
      <div className="pt-16">
        <div className="relative w-full h-[520px] md:h-[600px] overflow-hidden">
          <img
            src={heroImages[current]}
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
      '{/* Welcome Section */}
      <div className={lang === "KH" ? "font-kantumruy text-content" : ""}>
        {/* Welcome Section */}
        <div className="w-full bg-gray-100">
          <div className="max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center text-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">
                {content[lang].welcome}
              </h2>
              <p className="mb-4 text-gray-700">{content[lang].desc}</p>
              <button className="bg-orange-500 text-white px-5 py-2 rounded font-semibold hover:bg-orange-600 transition">
                {content[lang].getStarted}
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col gap-16">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={featureImages[0]}
              alt={content[lang].features[0].title}
              className="w-full h-52 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">
                {content[lang].features[0].title}
              </h3>
              <p className="text-gray-700">{content[lang].features[0].desc}</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <img
              src={featureImages[1]}
              alt={content[lang].features[1].title}
              className="w-48 h-48 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">
                {content[lang].features[1].title}
              </h3>
              <p className="text-gray-700">{content[lang].features[1].desc}</p>
            </div>
          </div>
          {/* Feature 3 */}
        </div>
      </div>
      {/* Cards Section */}
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {lang === "EN" ? "Latest News" : "ព័ត៌មានថ្មីៗ"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards[lang].map((card, idx) => (
            <CardHomepage
              key={idx}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
