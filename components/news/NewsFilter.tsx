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
    <div className="flex flex-nowrap gap-2 md:gap-3 mb-10 md:mb-14 border rounded-lg overflow-x-auto w-full md:w-fit mx-auto p-1 border-gray-300 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-4 md:px-5 py-2 md:py-3 rounded-lg text-sm md:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
            activeFilter === category
              ? "bg-primary text-white"
              : "bg-secondary text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default NewsFilter;
