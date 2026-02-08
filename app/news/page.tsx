"use client";

import { useState, useMemo } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import NewsFilter from "@/components/news/NewsFilter";
import FeaturedPost from "@/components/news/FeaturedPost";
import NewsGrid from "@/components/news/NewsGrid";
import { newsContent } from "@/content/news";

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { overview, items } = newsContent;

  // Get featured posts
  const featuredPosts = useMemo(() => {
    return items.filter((item) => item.featured);
  }, [items]);

  // Filter items based on active filter
  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return items.filter((item) => !item.featured);
    }
    if (activeFilter === "News") {
      return items.filter((item) => item.type === "news" && !item.featured);
    }
    if (activeFilter === "Events") {
      return items.filter((item) => item.type === "event" && !item.featured);
    }
    return items.filter(
      (item) => item.category === activeFilter && !item.featured,
    );
  }, [items, activeFilter]);

  return (
    <div className="min-h-screen bg-white">
      {/* Overview Section */}
      <section className="container-lg mx-auto section-padding">
        <div className="max-w-full xl:max-w-[85%] mx-auto py-16 md:py-24">
          <SectionHeader
            subtitle={overview.subtitle}
            title={overview.title}
            description={overview.description}
            centered
          />
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="container-lg mx-auto section-padding mb-16">
          <div className="max-w-full xl:max-w-[85%] mx-auto">
            <FeaturedPost item={featuredPosts[0]} />
          </div>
        </section>
      )}

      {/* Filter & Grid */}
      <section className="bg-gray-50 py-16 md:py-24 px-4">
        <div className="container-lg mx-auto">
          <div className="max-w-full xl:max-w-[85%] mx-auto">
            {/* Filter */}
            <NewsFilter
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            {/* Grid */}
            <NewsGrid items={filteredItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
