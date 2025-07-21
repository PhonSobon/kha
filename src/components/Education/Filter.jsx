"use client";
import { useState } from "react";
import { InputForFilter } from "../ui/inputForFilter";
import { useLanguage } from "../LanguageProvider";

export default function Filter({ items, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { lang } = useLanguage();

  const content = {
    EN: {
      search: "Search by category...",
    },
    KH: {
      search: "ស្វែងរកតាមប្រភេទ...",
    },
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    onFilter(filteredItems);
  };

  return (
    <>
      <InputForFilter
        type="text"
        placeholder={`${content[lang].search}`}
        value={searchTerm}
        onChange={handleSearch}
      />
    </>
  );
}