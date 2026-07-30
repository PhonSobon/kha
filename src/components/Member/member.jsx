"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const members = [
  {
    id: "director2025",
    name: "Nhoeurm Veasna",
    roleKey: "memberPage.members.director2025.role",
    role: "Director of KHA Housing",
    years: "2025 - 2026",
    year: 2025,
    introKey: "memberPage.members.director2025.intro",
    intro:
      "My name is Nhoeurm Veasna. I come from Siem Reap Province. Currently, I am a 3th-year student at the TUX Global Institute, majoring in Digital Marketing.",
    telegram: "https://t.me/VEASNA_NHEOUM",
    phone: "097 69 76 912",
    email: "nhoeurmveasna@gmail.com",
    image: "/images/member/nhoeurmveasna.jpeg",
    align: "left",
  },
  {
    id: "deputy-director2025",
    name: "Moeurn Sovanara",
    roleKey: "memberPage.members.deputyDirector2025.role",
    role: "Deputy Director of KHA Housing",
    years: "2025 - 2026",
    year: 2025,
    introKey: "memberPage.members.deputyDirector2025.intro",
    intro:
      "My name is Moeurn Sovanara. I come from Battambang Province. Currently, I am a 4th-year student at the Royal University of Phnom Penh (RUPP), majoring in Computer Science.",
    telegram: "https://t.me/Long_long33",
    phone: "097 69 76 912",
    email: "moeurnsovanara181004@gmail.com",
    image: "/images/member/Sovanara.jpeg",
    align: "right",
  },
  {
    id: "leader-financial2025",
    name: "Ngorn Vannet",
    roleKey: "memberPage.members.leaderFinancial2025.role",
    role: "Leader Financial of KHA Housing",
    years: "2025 - 2026",
    year: 2025,
    introKey: "memberPage.members.leaderFinancial2025.intro",
    intro:
      "My name is Ngorn Vannet. I come from Takeo Province. Currently, I am a 4th-year student at the Royal University of Phnom Penh (RUPP), majoring in Mathematic.",
    telegram: "https://t.me/NgornVannet",
    phone: "097 69 76 912",
    email: "ngornvannet@gmail.com",
    image: "/images/member/ngornvannet.jpeg",
    align: "left",
  },
  {
    id: "sub-leader-financial2025",
    name: "",
    roleKey: "memberPage.members.subLeaderFinancial2025.role",
    role: "Sub Leader Financial of KHA Housing",
    years: "2025 - 2026",
    year: 2025,
    introKey: "memberPage.members.subLeaderFinancial2025.intro",
    intro:
      "My name is Ven Visal. I come from Svay Rieng Province. Currently, I am a 3th-year student at the Royal University of Phnom Penh (IFL), majoring in English.",
    telegram: "https://t.me/VisalVen",
    phone: "097 69 76 912",
    email: "venvisal@gmail.com",
    image: "/images/member/venVisal.jpeg",
    align: "right",
  },
  {
    id: "leader-discipline2025",
    name: "",
    roleKey: "memberPage.members.leaderDiscipline2025.role",
    role: "Leader Discipline of KHA Housing",
    years: "2025 - 2026",
    year: 2025,
    introKey: "memberPage.members.leaderDiscipline2025.intro",
    intro:
      "My name is Tea Chhory. I come from PreyVeng Province. Currently, I am a 2th-year student at the Royal University of Phnom Penh (RUPP), majoring in Khmer Literature.",
    telegram: "https://t.me/Darith_kh",
    phone: "097 69 76 912",
    email: "teachhory@gmail.com",
    image: "/images/member/Choy1.jpeg",
    align: "left",
  },
  {
    id: "leader-hygiene2025",
    name: "",
    roleKey: "memberPage.members.leaderHygiene2025.role",
    role: "Leader Hygiene of KHA Housing",
    years: "2025 - 2026",
    year: 2025,
    introKey: "memberPage.members.leaderHygiene2025.intro",
    intro:
      "My name is Hoeur Songhey. I come from Svay Rieng Province. Currently, I am a 3th-year student at the Royal University of Phnom Penh (IFL), majoring in English.",
    telegram: "https://t.me/songhee008",
    phone: "097 69 76 912",
    email: "hoeursonghey@gmail.com",
    image: "/images/member/songhey.jpeg",
    align: "right",
  },
  {
    id: "leader-wifi2025",
    name: "",
    roleKey: "memberPage.members.leaderWifi2025.role",
    role: "Leader Wifi of KHA Housing",
    years: "2025 - 2026",
    year: 2025,
    introKey: "memberPage.members.leaderWifi2025.intro",
    intro:
      "My name is Chan Sokvisal. I come from PreyVeng Province. Currently, I am a 2th-year student at the Royal University of Phnom Penh (RUPP), majoring in Information Technology.",
    telegram: "https://t.me/sokvisal_c",
    phone: "097 69 76 912",
    email: "chansokvisal@gmail.com",
    image: "/images/member/sokvisal.jpeg",
    align: "left",
  },
  {
    id: "leader-security2025",
    name: "",
    roleKey: "memberPage.members.leaderSecurity2025.role",
    role: "Leader Security of KHA Housing",
    years: "2025 - 2026",
    year: 2025,
    introKey: "memberPage.members.leaderSecurity2025.intro",
    intro:
      "My name is Kruch Chamroeurn. I come from Siem Reap Province. Currently, I am a 2th-year student at the Royal University of Phnom Penh (IFL), majoring in English.",
    telegram: "https://t.me/Roeunbong",
    phone: "097 69 76 912",
    email: "moeurnsovanara181004@gmail.com",
    image: "/images/member/chamroeurn.jpeg",
    align: "right",
  },
  {
    id: "director2024",
    name: "Chhorn Rachhat",
    roleKey: "memberPage.members.directorPrev2024.role",
    role: "Director of KHA Housing",
    years: "2024 - 2025",
    year: 2024,
    introKey: "memberPage.members.directorPrev2024.intro",
    intro:
      "My name is Chhorn Rachhat. I come from Kampot Province. Currently, I am a 3rd-year student at the Royal University of Phnom Penh (RUPP), majoring in Computer Science.",
    telegram: "https://t.me/Rachhat",
    phone: "097 69 76 912",
    email: "chhornrachhat@gmail.com",
    image: "/images/member/Chhornrachhat.jpeg",
    align: "left",
  },
  {
    id: "deputy-director-2024",
    name: "Phon Sobon",
    roleKey: "memberPage.members.deputyDirector2024.role",
    role: "Deputy Director of KHA Housing",
    years: "2024 - 2025",
    year: 2024,
    introKey: "memberPage.members.deputyDirector2024.intro",
    intro:
      "My name is Phon Sobon. I come from Kampong Chhnang Province. Currently, I am a 3rd-year student at the Royal University of Phnom Penh (RUPP), majoring in Computer Science.",
    telegram: "https://t.me/Phonsobon",
    phone: "097 69 76 912",
    email: "phonsobon@gmail.com",
    image: "/images/member/phonsobon.jpeg",
    align: "right",
  },
  {
    id: "leader-financial-2024",
    name: "Rouern Sombo",
    roleKey: "memberPage.members.LeadFinancial2024.role",
    role: "Leader Financial of KHA Housing",
    years: "2024 - 2025",
    year: 2024,
    introKey: "memberPage.members.LeadFinancial2024.intro",
    intro:
      "My name is Roeurn Sambo. I come from Kampong Chnang Province. Currently, I am a fresh graduated student at the Royal University of Phnom Penh (RUPP), majoring in Mathematic.",
    telegram: "https://t.me/Sambo_roeun",
    phone: "097 69 76 912",
    email: "rouernsambo@gmail.com",
    image: "/images/member/sambo.jpeg",
    align: "left",
  },
  {
    id: "sub-leader-financial-2024",
    name: "Noek Peth",
    roleKey: "memberPage.members.subleadFinacial2024.role",
    role: "Sub Leader Financial of KHA Housing",
    years: "2024 - 2025",
    year: 2024,
    introKey: "memberPage.members.subleadFinacial2024.intro",
    intro:
      "My name is Noek Peth. I come Siemreap Province. Currently, I am a fresh graduated student at the Royal University of Phnom Penh (RUPP), majoring in Mathematic.",
    telegram: "https://t.me/noekpethpr",
    phone: "097 69 76 912",
    email: "noekpeth@gmail.com",
    image: "/images/cards/pet.jpg",
    align: "right",
  },
  {
    id: "leader-displine-2024",
    name: "Nhoeurm Veasna",
    roleKey: "memberPage.members.leaddispline2024.role",
    role: "Leader Displine of KHA Housing",
    years: "2024 - 2025",
    year: 2024,
    introKey: "memberPage.members.leaddispline2024.intro",
    intro:
      "My name is Nhoeurm Veasna. I come from Siem Reap Province. Currently, I am a 3th-year student at the TUX Global Institute, majoring in Digital Marketing.",
    telegram: "https://t.me/VEASNA_NHEOUM",
    phone: "097 69 76 912",
    email: "nhoeurmveasna@gmail.com",
    image: "/images/member/nhoeurmveasna.jpeg",
    align: "left",
  },
  {
    id: "leader-hygiene-2024",
    name: "Cheng Sovanarith",
    roleKey: "memberPage.members.leadHygiene2024.role",
    role: "Leader Hygiene of KHA Housing",
    years: "2024 - 2025",
    year: 2024,
    introKey: "memberPage.members.leadHygiene2024.intro",
    intro:
      "My name is Cheng Sovanarith. I come from Preah Vihear Province. Currently, I am a fresh graduated student at the Royal University of Phnom Penh (RUPP), majoring in Khmer Literature.",
    telegram: "https://t.me/ChengSovannarith",
    phone: "097 69 76 912",
    email: "chengsovanarith@gmail.com",
    image: "/images/cards/rith.jpg",
    align: "right",
  },
  {
    id: "leader-wifi-2024",
    name: "Touch Pich",
    roleKey: "memberPage.members.leadWifi2024.role",
    role: "Leader Wifi of KHA Housing",
    years: "2024 - 2025",
    year: 2024,
    introKey: "memberPage.members.leadWifi2024.intro",
    intro:
      "My name is Touch Pich. I come Battambang Province. Currently, I am a fresh graduated student at the Royal University of Phnom Penh (RUPP), majoring in Computer Science.",
    telegram: "https://t.me/Ppich737",
    phone: "097 69 76 912",
    email: "touchpich@gmail.com",
    image: "/images/cards/Pich.jpg",
    align: "left",
  },
  {
    id: "sub-leader-wifi-2024",
    name: "Chan SokVisal",
    roleKey: "memberPage.members.subleadWifi2024.role",
    role: "Sub Leader Wifi of KHA Housing",
    years: "2024 - 2025",
    year: 2024,
    introKey: "memberPage.members.subleadWifi2024.intro",
    intro:
      "My name is Chan SokVisal. I come from Takeo Province. Currently, I am a fresh graduated student at the Royal University of Phnom Penh (RUPP), majoring in Mathematic.",
    telegram: "https://t.me/sokvisal_c",
    phone: "097 69 76 912",
    email: "chansokvisal@gmail.com",
    image: "/images/member/sokvisal.jpeg",
    align: "right",
  },
  {
    id: "leader-security-2024",
    name: "Ki Angkia",
    roleKey: "memberPage.members.leadSecurity2024.role",
    role: "Leader Security of KHA Housing",
    years: "2024 - 2025",
    year: 2024,
    introKey: "memberPage.members.leadSecurity2024.intro",
    intro:
      "My name is Ki Angkia. I come from Ratanakiri Province. Currently, I am a 4th-year student at the Norton University, majoring in Electrical and Electronic Engineering.",
    telegram: "https://t.me/Kiorngkiee",
    phone: "097 69 76 912",
    email: "kiangkia@gmail.com",
    image: "/images/member/angkia.jpeg",
    align: "left",
  },
  {
    id: "director-2023",
    name: "Ra Sarin",
    roleKey: "memberPage.members.director2023.role",
    role: "Director of KHA Housing",
    years: "2023 - 2024",
    year: 2023,
    introKey: "memberPage.members.director2023.intro",
    intro:
      "My name is Ra Sarin. I come from Siem Reap Province. Currently, I am a fresh graduated student at the Royal University of Phnom Penh (RUPP), majoring in Physic.",
    telegram: "https://t.me/Jackphydepole",
    phone: "097 69 76 912",
    email: "rasarin@gmail.com",
    image: "/images/member/rasarin.jpeg",
    align: "left",
  },
  {
    id: "leader-financial-2023",
    name: "Ngoun Rith",
    roleKey: "memberPage.members.LeadFinancial2023.role",
    role: "Leader Financial of KHA Housing",
    years: "2023 - 2024",
    year: 2023,
    introKey: "memberPage.members.LeadFinancial2023.intro",
    intro:
      "My name is Ngoun Rith. I come from Battambang Province. Currently, I am a fresh graduated student at the Royal University of Phnom Penh (RUPP), majoring in Physic.",
    telegram: "https://t.me/NguonRith",
    phone: "097 69 76 912",
    email: "ngounrith@gmail.com",
    image: "/images/member/gnoun_rith.jpeg",
    align: "right",
  },
  {
    id: "sub-leader-financial-2023",
    name: "Horn Sean",
    roleKey: "memberPage.members.subLeadFinancial2023.role",
    role: "Sub Leader Financial of KHA Housing",
    years: "2023 - 2024",
    year: 2023,
    introKey: "memberPage.members.subLeadFinancial2023.intro",
    intro:
      "My name is Horn Sean. I come from Kompong Cham Province. Currently, I am a fresh graduated student at the Royal University of Phnom Penh (RUPP), majoring in Physic.",
    telegram: "https://www.facebook.com/share/1BeJWw8UiG/",
    phone: "097 69 76 912",
    email: "hornsean@gmail.com",
    image: "/images/member/sean.png",
    align: "left",
  },
  {
    id: "leader-hygiene-2023",
    name: "Hong Pisey",
    roleKey: "memberPage.members.leadHygiene2023.role",
    role: "Leader Hygiene of KHA Housing",
    years: "2023 - 2024",
    year: 2023,
    introKey: "memberPage.members.leadHygiene2023.intro",
    intro:
      "My name is Hong Pisey. I come from Kampong Cham Province. Currently, I am a fresh graduated student at the Royal University of Phnom Penh (RUPP), majoring in Mathematic.",
    telegram: "https://t.me/Hong_Pisey",
    phone: "097 69 76 912",
    email: "hongpisey@gmail.com",
    image: "/images/member/pisey.jpeg",
    align: "right",
  },
  {
    id: "leader-wifi-2023",
    name: "Noek Peth",
    roleKey: "memberPage.members.leadWifi2023.role",
    role: "Leader Wifi of KHA Housing",
    years: "2023 - 2024",
    year: 2023,
    introKey: "memberPage.members.leadWifi2023.intro",
    intro:
      "My name is Noek Peth. I come Siemreap Province. Currently, I am a fresh graduated student at the Royal University of Phnom Penh (RUPP), majoring in Mathematic.",
    telegram: "https://t.me/noekpethpr",
    phone: "097 69 76 912",
    email: "noekpeth@gmail.com",
    image: "/images/cards/pet.jpg",
    align: "left",
  },
  {
    id: "sub-leader-wifi-2023",
    name: "Moeurn Visal",
    roleKey: "memberPage.members.subleadWifi2023.role",
    role: "Sub Leader Wifi of KHA Housing",
    years: "2023 - 2024",
    year: 2023,
    introKey: "memberPage.members.subleadWifi2023.intro",
    intro:
      "My name is Moeurn Visal. I come from Takeo Province. Currently, I am a fresh graduated student at the Royal University of Phnom Penh (RUPP), majoring in Mathematic.",
    telegram: "https://www.facebook.com/share/1Pf3fUqwn1/",
    phone: "097 69 76 912",
    email: "moeurnvisal@gmail.com",
    image: "/images/member/moeurn_visal.jpeg",
    align: "right",
  },
  {
    id: "leader-security-2023",
    name: "Toun Sora",
    roleKey: "memberPage.members.leadSecurity2023.role",
    role: "Leader Security of KHA Housing",
    years: "2023 - 2024",
    year: 2023,
    introKey: "memberPage.members.leadSecurity2023.intro",
    intro:
      "My name is Toun Sora. I come from Steung Treng Province. Currently, I am a fresh graduated student at the Royal University of Phnom Penh (RUPP), majoring in History.",
    telegram: "https://t.me/tuonsora",
    phone: "097 69 76 912",
    email: "tounsora@gmail.com",
    image: "/images/member/sora.jpeg",
    align: "left",
  },
];

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5 text-blue-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a.75.75 0 0 0 .75-.75v-2.925a.75.75 0 0 0-.624-.74l-3.423-.571a.75.75 0 0 0-.85.431l-.978 2.28a11.953 11.953 0 0 1-6.426-6.426l2.28-.978a.75.75 0 0 0 .431-.85l-.571-3.423a.75.75 0 0 0-.74-.624H3a.75.75 0 0 0-.75.75v1.5Z"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5 text-blue-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a.75.75 0 0 1-.75.75h-18a.75.75 0 0 1-.75-.75V6.75m0 0a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75m-19.5 0 9 6 9-6"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-4 h-4 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M13 6l6 6-6 6"
    />
  </svg>
);

export default function Member() {
  const { t } = useTranslation("common");
  const years = useMemo(
    () => Array.from(new Set(members.map((m) => m.year))).sort((a, b) => a - b),
    [],
  );
  const groupedByYear = useMemo(() => {
    const map = {};
    years.forEach((year) => {
      map[year] = members.filter((m) => m.year === year);
    });
    return map;
  }, [years]);

  const defaultYear = years[years.length - 1];
  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const [orderByYear, setOrderByYear] = useState(() => {
    const map = {};
    years.forEach((year) => {
      map[year] = members.filter((m) => m.year === year).map((m) => m.id);
    });
    return map;
  });
  const [draggingId, setDraggingId] = useState(null);
  const [dragOverId, setDragOverId] = useState(null);
  const [lastReorderedId, setLastReorderedId] = useState(null);

  const visibleMembers = useMemo(() => {
    const order =
      orderByYear[selectedYear] ||
      groupedByYear[selectedYear]?.map((m) => m.id) ||
      [];
    const lookup = groupedByYear[selectedYear] || [];
    return order.map((id) => lookup.find((m) => m.id === id)).filter(Boolean);
  }, [groupedByYear, orderByYear, selectedYear]);

  const handleReorder = (targetId) => {
    if (!draggingId || draggingId === targetId) return;
    setOrderByYear((prev) => {
      const currentOrder = prev[selectedYear] || [];
      const from = currentOrder.indexOf(draggingId);
      const to = currentOrder.indexOf(targetId);
      if (from === -1 || to === -1) return prev;
      const next = [...currentOrder];
      next.splice(from, 1);
      next.splice(to, 0, draggingId);
      return { ...prev, [selectedYear]: next };
    });
    setDragOverId(null);
    setDraggingId(null);
  };

  const handleDragEnter = (targetId) => {
    if (!draggingId || draggingId === targetId) return;
    if (lastReorderedId === targetId) {
      setDragOverId(targetId);
      return;
    }
    handleReorder(targetId);
    setLastReorderedId(targetId);
    setDragOverId(targetId);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      <div className="-mx-4 px-4 overflow-x-auto">
        <div className="text-center mb-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 px-4 mb-4">
            {t(
              "memberPage.members.directorhousingAllGen",
              "Director KHA Housing All Generations",
            )}
          </h2>
          <p className="text-gray-600">
            {t(
              "memberPage.members.desc",
              "List of management each generation of KHA housing",
            )}
          </p>
        </div>
        <div className="flex gap-3 pb-2">
          {years.map((year) => {
            const isActive = year === selectedYear;
            return (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {year}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-12">
        {visibleMembers.map((member) => {
          const imageFirst = member.align === "left";
          const isDragging = draggingId === member.id;
          const isDragOver =
            dragOverId === member.id && draggingId !== member.id;
          return (
            <div
              key={member.id}
              draggable
              onDragStart={() => setDraggingId(member.id)}
              onDragEnd={() => {
                setDraggingId(null);
                setDragOverId(null);
                setLastReorderedId(null);
              }}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOverId(member.id);
              }}
              onDragEnter={() => handleDragEnter(member.id)}
              onDragLeave={() => setDragOverId(null)}
              onDrop={() => handleReorder(member.id)}
              className={`grid md:grid-cols-2 items-start bg-white shadow-sm rounded-2xl p-6 transition-all duration-200 ease-out cursor-grab active:cursor-grabbing select-none ${
                isDragging
                  ? "opacity-90 scale-[0.98] translate-y-0.5 ring-2 ring-blue-300 shadow-md"
                  : ""
              } ${
                isDragOver && !isDragging
                  ? "ring-2 ring-blue-200 shadow-md scale-[0.995]"
                  : ""
              }`}
            >
              <div className={`${imageFirst ? "" : "md:order-2"}`}>
                <div className="relative bg-blue-100 rounded-2xl overflow-hidden shadow w-full max-w-[11.5rem] md:max-w-[14rem] aspect-[3/4] mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 text-center md:text-left md:flex md:flex-col md:items-start">
                <div className="space-y-1 text-center md:text-left md:self-start">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {t(member.roleKey, member.role)}
                  </h2>
                  <p className="text-gray-600 text-sm">{member.years}</p>
                </div>

                <p className="text-gray-800 leading-relaxed text-center md:text-left">
                  {t(member.introKey, member.intro)}
                </p>

                <div className="flex flex-col items-start gap-3 pt-2">
                  <a
                    href={member.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 text-blue-700 px-4 py-2 font-medium hover:bg-blue-50 transition"
                  >
                    {t("memberPage.contact", "Contact")}
                  </a>
                  <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                    <div className="flex items-center gap-2 text-gray-700">
                      <PhoneIcon />
                      <span className="text-sm font-medium">
                        {member.phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <MailIcon />
                      <span className="text-sm break-all">{member.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {visibleMembers.length === 0 && (
          <p className="text-gray-500 text-center">
            No members for this year yet.
          </p>
        )}
      </div>
    </div>
  );
}
