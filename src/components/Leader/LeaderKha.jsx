"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

const director = {
  name: "Mr. Prak Thearith",
  nameKH: "លោក ប្រាក់ ធារិទ្ធ",
  image: "/images/member/director.jpg",
  descEN:
    "The Khmer Heirs Association is led by Mr. Prak Thearith as President, along with Mr. Lart Souy as Vice President and other members.",
  descKH:
    "សមាគមទាយាទខ្មែរដឹកនាំដោយលោក ប្រាក់ ធារិទ្ធ ជាប្រធាន និងអមដោយ លោក ឡាត សូយ ជាអនុប្រធាននិងសមាជិកផ្សេងទៀត។",
  titleEN: "President of Khmer Heirs Association",
  titleKH: "ប្រធានសមាគមទាយាទខ្មែរ",
};

const deputy = {
  name: "Mr. Lart Souy",
  nameKH: "លោក ឡាត សូយ",
  image: "/images/member/deputy.jpg",
  titleEN: "Vice President of Khmer Heirs Association",
  titleKH: "អនុប្រធានសមាគមទាយាទខ្មែរ",
};

function LeaderCard({ person }) {
  const { i18n } = useTranslation('common');
  return (
    <div className="flex flex-col items-center pt-8 pb-8">
      <h2 className="text-3xl font-bold text-orange-600 mb-4">
        {i18n.language === "en" ? person.titleEN : person.titleKH}
      </h2>
      <Image
        src={person.image}
        alt={i18n.language === "en" ? person.name : person.nameKH}
        width={320}
        height={320}
        className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg mb-4"
      />
      <div className="bg-blue-200 px-6 py-2 rounded shadow text-lg font-semibold text-gray-800">
        {i18n.language === "en" ? person.name : person.nameKH}
      </div>
    </div>
  );
}

export default function LeaderKha() {
  const { i18n } = useTranslation('common');

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-100 to-white pb-12 pt-10">
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        {i18n.language === "en" ? director.descEN : director.descKH}
      </p>
      <LeaderCard person={director} />
      <LeaderCard person={deputy} />
    </div>
  );
}
