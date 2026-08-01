"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AllMembers() {
  const { t, i18n } = useTranslation("common");
  const [memberOrder, setMemberOrder] = useState(() =>
    allMembersData.map((m) => m.id),
  );
  const [draggingId, setDraggingId] = useState(null);
  const [dragOverId, setDragOverId] = useState(null);
  const [lastReorderedId, setLastReorderedId] = useState(null);

  const orderedMembers = useMemo(() => {
    const lookup = new Map(allMembersData.map((m) => [m.id, m]));
    return memberOrder.map((id) => lookup.get(id)).filter(Boolean);
  }, [memberOrder]);

  const handleReorder = (targetId) => {
    if (!draggingId || draggingId === targetId) return;
    const from = memberOrder.indexOf(draggingId);
    const to = memberOrder.indexOf(targetId);
    if (from === -1 || to === -1) return;

    const next = [...memberOrder];
    next.splice(from, 1);
    next.splice(to, 0, draggingId);
    setMemberOrder(next);
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
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-6">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 px-4 mb-4">
          {t("memberPage.allMembers.title", "All KHA Members")}
        </h2>
        <p className="text-gray-600">
          {t(
            "memberPage.allMembers.description",
            "Complete list of all KHA Housing members.",
          )}
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {orderedMembers.map((member) => {
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
                className={`w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-200 cursor-grab active:cursor-grabbing select-none ${
                  isDragging
                    ? "opacity-90 scale-[0.98] translate-y-0.5 ring-2 ring-blue-300 shadow-lg"
                    : ""
                } ${
                  isDragOver && !isDragging
                    ? "ring-2 ring-blue-200 shadow-lg scale-[0.995]"
                    : ""
                } ${
                  !isDragging && !isDragOver ? "transform hover:scale-105" : ""
                }`}
              >
                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                  <Image
                    src={member.image}
                    alt={i18n.language === "kh" ? member.nameKh : member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="bg-[#0057b8] border-t-4 border-orange-500 p-3 sm:p-4 md:p-4 text-center">
                  <h3 className="text-white text-sm sm:text-base md:text-sm lg:text-lg font-bold mb-1 sm:mb-2 line-clamp-2">
                    {i18n.language === "kh" ? member.nameKh : member.name}
                  </h3>
                  <p className="text-white text-xs sm:text-sm md:text-base font-medium line-clamp-2">
                    {i18n.language === "kh" ? member.roleKh : member.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
