"use client";

import NewsCard from "./NewsCard";
import { NewsItem } from "@/content/news";

interface NewsGridProps {
  items: NewsItem[];
}

const NewsGrid = ({ items }: NewsGridProps) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-[#737477] text-lg">
          No items found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {items.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsGrid;
