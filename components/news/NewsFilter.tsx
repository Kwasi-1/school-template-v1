"use client";

import { useState } from "react";
import { newsContent } from "@/content/news";

interface NewsFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const NewsFilter = ({ activeFilter, onFilterChange }: NewsFilterProps) => {
  const { categories } = newsContent;

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-14">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === category
              ? "bg-[#800020] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default NewsFilter;
