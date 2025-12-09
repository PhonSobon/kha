import React from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

const members = [
  {
    name: "Pogn Tum",
    nameKH: "ប៉ុញ ទុំ",
    university: "Beijing Institute of Technology",
    universityKH: "Beijing Institute of Technology",
    country: "China",
    countryKH: "ប្រទេសចិន",
    major: "Bachelor of Civil Engineering",
    majorKH: "បរិញ្ញាបត្រវិស្វកម្មសំណង់",
    image: "/images/member/tum-1.jpg",
  },
  {
    name: "Thach Sopha",
    nameKH: "ថាច់ សុភា",
    university: "Tianjin university",
    universityKH: "Tianjin university",
    country: "China",
    countryKH: "ប្រទេសចិន",
    major: "Bachelor of Civil Engineering",
    majorKH: "បរិញ្ញាបត្រវិស្វកម្មសំណង់",
    image: "/images/member/pha1.jpg",
  },
  {
    name: "Moeun visal",
    nameKH: "មឿន វិសាល",
    university: "Đoàn Trường Hữu Nghị 80 ",
    universityKH: "Đoàn Trường Hữu Nghị 80 ",
    country: "vietnam",
    countryKH: "ប្រទេសវៀតណាម",
    major: "Bachelor of Doctor",
    majorKH: "បរិញ្ញាបត្រវេជ្ជបណ្ឌិត",
    image: "/images/member/visal.jpg",
  },
  {
    name: "Kem Chak",
    nameKH: "កែម ចាក",
    university: "Okayama University",
    universityKH: "Okayama University",
    country: "Japan",
    countryKH: "ប្រទេសជប៉ុន",
    major: "Bachelor of Japanese Language",
    majorKH: "បរិញ្ញាបត្រភាសាជប៉ុន",
    image: "/images/member/chak.jpg",
  },
  {
    name: "Chhorn Rachhat",
    nameKH: "ឈាន់ រ៉ាឆាត",
    university: "ECAM LaSalle",
    universityKH: "ECAM LaSalle",
    country: "France",
    countryKH: "ប្រទេសបារាំង",
    major: "Bachelor of suply chain ",
    majorKH: "បរិញ្ញាបត្រវិស្វកម្មឧស្សាហកម្ម",
    image: "/images/member/chhart.jpg",
  },
];

export default function ScholarshipKHA() {
  const { t, i18n } = useTranslation('common');
  return (
    <div className="max-w-7xl mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-blue-900 px-4">
        {t('scholarship.title')}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {members.map((member, idx) => {
          const isLastOdd =
            members.length % 2 === 1 && idx === members.length - 1;
          return (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 bg-[#0b1831] rounded-xl sm:rounded-2xl shadow-lg overflow-hidden ${
                isLastOdd ? "lg:col-span-2 lg:mx-auto lg:w-1/2" : ""
              }`}
            >
              <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 w-full text-center lg:text-left">
                <div className="text-white text-base sm:text-lg md:text-xl font-semibold mb-2 line-clamp-2">
                  {i18n.language === "kh" ? member.nameKH : member.name}
                </div>
                <div className="text-cyan-400 text-sm sm:text-base md:text-lg lg:text-xl font-extrabold mb-1 line-clamp-2">
                  {i18n.language === "kh" ? member.universityKH : member.university}
                </div>
                <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-extrabold mb-1 line-clamp-2">
                  {i18n.language === "kh" ? member.majorKH : member.major}
                </div>
                <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-extrabold line-clamp-1">
                  {i18n.language === "kh" ? member.countryKH : member.country}
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center p-2 sm:p-4">
                <Image
                  src={member.image}
                  alt={i18n.language === "kh" ? member.nameKH : member.name}
                  width={160}
                  height={200}
                  className="object-cover w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-48 lg:w-40 lg:h-56 rounded-lg sm:rounded-xl shadow-xl border-2 sm:border-4 border-cyan-400"
                  style={{ zIndex: 1 }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}