"use client";
import React from "react";
import Image from "next/image";
export default function CardHomepage({ imageSrc, title, description}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm flex flex-col">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-56 object-cover"
        width={400}
        height={224}
        unoptimized
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-[#28308f] mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-700 text-base line-clamp-3">{description}</p>
      </div>
    </div>
  );
}