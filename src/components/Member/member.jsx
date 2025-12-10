"use client";
import React, { useMemo, useState } from "react";

const members = [
  {
    id: "director",
    name: "Moeurn Sovanara",
    role: "Director of KHA Housing",
    years: "2025 - 2026",
    year: 2025,
    intro:
      "My name is Moeurn Sovanara. I come from Battambang Province. Currently, I am a 4th-year student at the Royal University of Phnom Penh (RUPP), majoring in Computer Science.",
    phone: "097 69 76 912",
    email: "moeurnsovanara181004@gmail.com",
    image: "/images/member/moeurnsovanara.jpg",
    align: "left",
  },
  {
    id: "deputy-director",
    name: "Moeurn Sovanara",
    role: "Deputy Director of KHA Housing",
    years: "2025 - 2026",
    year: 2025,
    intro:
      "My name is Moeurn Sovanara. I come from Battambang Province. Currently, I am a 4th-year student at the Royal University of Phnom Penh (RUPP), majoring in Computer Science.",
    phone: "097 69 76 912",
    email: "moeurnsovanara181004@gmail.com",
    image: "/images/member/moeurnsovanara.jpg",
    align: "right",
  },
  {
    id: "director-prev",
    name: "Moeurn Sovanara",
    role: "Director of KHA Housing",
    years: "2024 - 2025",
    year: 2024,
    intro:
      "My name is Moeurn Sovanara. I come from Battambang Province. Currently, I am a 3rd-year student at the Royal University of Phnom Penh (RUPP), majoring in Computer Science.",
    phone: "097 69 76 912",
    email: "moeurnsovanara181004@gmail.com",
    image: "/images/member/moeurnsovanara.jpg",
    align: "left",
  },
  {
    id: "deputy-director-prev",
    name: "Moeurn Sovanara",
    role: "Deputy Director of KHA Housing",
    years: "2024 - 2025",
    year: 2024,
    intro:
      "My name is Moeurn Sovanara. I come from Battambang Province. Currently, I am a 3rd-year student at the Royal University of Phnom Penh (RUPP), majoring in Computer Science.",
    phone: "097 69 76 912",
    email: "moeurnsovanara181004@gmail.com",
    image: "/images/member/moeurnsovanara.jpg",
    align: "right",
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
  const years = useMemo(
    () => Array.from(new Set(members.map((m) => m.year))).sort((a, b) => a - b),
    []
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
    const order = orderByYear[selectedYear] || groupedByYear[selectedYear]?.map((m) => m.id) || [];
    const lookup = groupedByYear[selectedYear] || [];
    return order
      .map((id) => lookup.find((m) => m.id === id))
      .filter(Boolean);
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
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Members
        </h1>
      </div>

      <div className="-mx-4 px-4 overflow-x-auto">
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
          const isDragOver = dragOverId === member.id && draggingId !== member.id;
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
                isDragging ? "opacity-90 scale-[0.98] translate-y-0.5 ring-2 ring-blue-300 shadow-md" : ""
              } ${
                isDragOver && !isDragging
                  ? "ring-2 ring-blue-200 shadow-md scale-[0.995]"
                  : ""
              }`}
            >
              <div className={`${imageFirst ? "" : "md:order-2"}`}>
                <div className="relative bg-blue-100 rounded-2xl overflow-hidden shadow w-full max-w-[11.5rem] md:max-w-[14rem] mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="space-y-4 text-center md:text-left md:flex md:flex-col md:items-start">
                <div className="space-y-1 text-center md:text-left md:self-start">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {member.role}
                  </h2>
                  <p className="text-gray-600 text-sm">{member.years}</p>
                </div>

                <p className="text-gray-800 leading-relaxed text-center md:text-left">
                  {member.intro}
                </p>

                <div className="flex flex-col items-start gap-3 pt-2">
                  <button className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 text-blue-700 px-4 py-2 font-medium hover:bg-blue-50 transition">
                    Contact
                  </button>
                  <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                    <div className="flex items-center gap-2 text-gray-700">
                      <PhoneIcon />
                      <span className="text-sm font-medium">{member.phone}</span>
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
