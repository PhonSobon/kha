import React from "react";

export default function Badge({ category }) {
  if (!category) return null; 

  return (
    <span
      className="w-30 h-10 inline-flex items-center px-3 py-3 rounded-full text-2xl font-medium justify-center border-[#53eb79] border bg-[#EAEAF4] text-[#53eb79] hover:bg-opacity-90 transition-colors duration-200 mt-5"
    >
      {category}
    </span>
  );
}
