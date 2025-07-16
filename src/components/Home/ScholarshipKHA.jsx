import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const members = [
  {
    id: "pogn-tum",
    image: "/images/member/tum-1.jpg",
  },
  {
    id: "thach-sopha",
    image: "/images/member/pha1.jpg",
  },
  {
    id: "moeun-visal",
    image: "/images/member/visal.jpg",
  },
  {
    id: "kem-chak",
    image: "/images/member/chak.jpg",
  },
  {
    id: "chhorn-rachhat",
    image: "/images/member/chhart.jpg",
  },
];

export default function ScholarshipKHA() {
  const { t } = useTranslation('common');

  return (
    <div className="max-w-full mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-900">
        {t('scholarship.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {members.map((member, idx) => {
          const isLastOdd =
            members.length % 2 === 1 && idx === members.length - 1;
          return (
            <div
              key={member.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-[#0b1831] rounded-2xl shadow-lg overflow-hidden ${
                isLastOdd ? "md:col-span-2 md:mx-auto md:w-1/2" : ""
              }`}
            >
              <div className="flex-1 flex flex-col justify-center px-8 py-4 w-full">
                <div className="text-white text-xl font-semibold mb-2">
                  {t(`scholarship.members.${member.id}.name`)}
                </div>
                <div className="text-cyan-400 text-xl font-extrabold mb-1">
                  {t(`scholarship.members.${member.id}.university`)}
                </div>
                <div className="text-white text-xl font-extrabold mb-1">
                  {t(`scholarship.members.${member.id}.major`)}
                </div>
                <div className="text-white text-xl font-extrabold">
                  {t(`scholarship.members.${member.id}.country`)}
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center p-4">
                <Image
                  src={member.image}
                  alt={t(`scholarship.members.${member.id}.name`)}
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