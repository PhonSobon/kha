import React from "react";
import Image from "next/image";

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

export default function ScholarshipKHA({ lang = "EN" }) {
  return (
    <div className="max-w-full mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-900">
        {lang === "KH" ? "សមាជិកទទួលអាហារូបករណ៍ទៅសិក្សានៅក្រៅប្រទេស" : "Members receive scholarships to study abroad"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {members.map((member, idx) => {
          const isLastOdd =
            members.length % 2 === 1 && idx === members.length - 1;
          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-[#0b1831] rounded-2xl shadow-lg overflow-hidden ${
                isLastOdd ? "md:col-span-2 md:mx-auto md:w-1/2" : ""
              }`}
            >
              <div className="flex-1 flex flex-col justify-center px-8 py-4 w-full">
                <div className="text-white text-xl  font-semibold mb-2">
                  {lang === "KH" ? member.nameKH : member.name}
                </div>
                <div className="text-cyan-400 text-xl  font-extrabold mb-1">
                  {lang === "KH" ? member.universityKH : member.university}
                </div>
                <div className="text-white text-xl  font-extrabold mb-1">
                  {lang === "KH" ? member.majorKH : member.major}
                </div>
                <div className="text-white text-xl  font-extrabold">
                  {lang === "KH" ? member.countryKH : member.country}
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center p-4">
                <Image
                  src={member.image}
                  alt={lang === "KH" ? member.nameKH : member.name}
                  width={210}
                  height={224}
                  className="object-cover w-40 h-56 rounded-xl shadow-xl border-4 border-cyan-400"
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