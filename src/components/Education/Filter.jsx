"use client";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function Filter({ items, onFilter }) {
  const { i18n } = useTranslation('common');
  const [selectedSubject, setSelectedSubject] = useState("All");

  const subjects = [
    "All",
    ...Array.from(new Set(items.map((item) => item.subject).filter(Boolean))),
  ];

  const handleSubjectChange = (e) => {
    const subject = e.target.value;
    setSelectedSubject(subject);

    if (subject === "All") {
      onFilter(items);
    } else {
      onFilter(items.filter((item) => item.subject === subject));
    }
  };

  return (
    <select
      value={selectedSubject}
      onChange={handleSubjectChange}
      className="border px-3 py-2 rounded-3xl cursor-pointer"
      aria-label={i18n.language === "kh" ? "ជ្រើសប្រភេទ" : "Select subject"}
    >
      {subjects.map((subject) => (
        <option key={subject} value={subject}>
          {subject}
        </option>
      ))}
    </select>
  );
}