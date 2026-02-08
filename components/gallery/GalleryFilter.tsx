"use client";

import { galleryContent } from "@/content/gallery";

interface GalleryFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const GalleryFilter = ({
  activeFilter,
  onFilterChange,
}: GalleryFilterProps) => {
  const { categories } = galleryContent;

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-14">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
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

export default GalleryFilter;
