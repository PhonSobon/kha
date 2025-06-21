"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "../../components/LanguageProvider";

const Dictor = {
  name: "Mr. Prak Thearith",
  nameKH: "លោក ប្រាក់ ធារិទ្ធ",
  image: "/images/member/director.jpg",
  desc: "The Khmer Heirs Association is led by Mr. Prak Thearith with the following Deputy Director​ Mr.Lart Souy and members.",
  descKH:
    "សមាគមទាយាទខ្មែរដឹកនាំដោយលោក ប្រាក់ ធារិទ្ធ ជាប្រធាន និងអមដោយ លោក ឡាត សូយ ជាអនុប្រធាននិងសមាជិកផ្សេងទៀត។",
  title: "Director of Khmer Heirs Association",
  titleKH: "ប្រធានសមាគមទាយាទខ្មែរ",
};

const Deputy = {
  name: "Mr. Lart Souy",
  nameKH: "លោក ឡាត សូយ",
  image: "/images/member/deputy.jpg",
  title: "Deputy Director of Khmer Heirs Association",
  titleKH: "អនុប្រធានសមាគមទាយាទខ្មែរ",
};

export default function LeaderKha() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white pb-12 pt-10">
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        {lang === "EN" ? Dictor.desc : Dictor.descKH}
      </p>
      {/* Director */}
      <div className="flex flex-col items-center pt-8 pb-8">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">
          {lang === "EN" ? Dictor.title : Dictor.titleKH}
        </h2>
        <Image
          src={Dictor.image}
          alt={Dictor.name}
          width={320}
          height={320}
          className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg mb-4"
        />
        <div className="bg-blue-200 px-6 py-2 rounded shadow text-lg font-semibold text-gray-800">
          {lang === "EN" ? Dictor.name : Dictor.nameKH}
        </div>
      </div>
      {/* Deputy Director */}
      <div className="flex flex-col items-center pt-4 pb-8">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">
          {lang === "EN" ? Deputy.title : Deputy.titleKH}
        </h2>
        <Image
          src={Deputy.image}
          alt={Deputy.name}
          width={320}
          height={320}
          className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg mb-4"
        />
        <div className="bg-blue-200 px-6 py-2 rounded shadow text-lg font-semibold text-gray-800">
          {lang === "EN" ? Deputy.name : Deputy.nameKH}
        </div>
      </div>
    </div>
  );
}