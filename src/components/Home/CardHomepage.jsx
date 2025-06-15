"use client";
import React from "react";

export default function CardHomepage({ imageSrc, title, description}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm flex flex-col">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-[#28308f] mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-700 text-base line-clamp-3">{description}</p>
      </div>
    </div>
  );
}