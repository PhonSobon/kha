"use client";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

export default function Filter({ items, onFilter }) {
  const { i18n } = useTranslation('common');
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories once (on mount)
  const categories = [
    "All",
    ...Array.from(
      new Set(
        items.map((item) => {
          const part = item.title.split("|")[1]?.trim() ?? "";
          return part.split(" ")[0];
        })
      )
    ),
  ];

  // Filter items immediately on category change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "All") {
      onFilter(items);
    } else {
      const filtered = items.filter((item) => {
        const part = item.title.split("|")[1]?.trim() ?? "";
        const cat = part.split(" ")[0];
        return cat === category;
      });
      onFilter(filtered);
    }
  };

  return (
    <select
      value={selectedCategory}
      onChange={handleCategoryChange}
      className="border px-3 py-2 rounded-3xl cursor-pointer"
      aria-label={i18n.language === "kh" ? "ជ្រើសប្រភេទ" : "Select category"}
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
