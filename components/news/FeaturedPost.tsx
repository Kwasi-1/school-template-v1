"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { NewsItem } from "@/content/news";

interface FeaturedPostProps {
  item: NewsItem;
}

const FeaturedPost = ({ item }: FeaturedPostProps) => {
  return (
    <article className="relative rounded-xl md:rounded-2xl overflow-hidden group">
      {/* Background Image */}
      <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/8]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transform transition duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10">
        <div className="max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
            <span className="px-2 md:px-3 py-1 bg-primary text-white text-[10px] md:text-xs font-medium rounded-full">
              Featured
            </span>
            <span className="px-2 md:px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium rounded-full">
              {item.type === "event" ? "Event" : "News"}
            </span>
            <span className="hidden sm:inline-block px-2 md:px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium rounded-full">
              {item.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-white font-semibold mb-2 md:mb-3 line-clamp-2">
            {item.title}
          </h2>

          {/* Excerpt - hidden on mobile */}
          <p className="hidden sm:block text-white/80 text-sm md:text-base mb-3 md:mb-4 line-clamp-2 max-w-2xl">
            {item.excerpt}
          </p>

          {/* Meta & CTA */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1 md:gap-2 text-white/70 text-xs md:text-sm">
              <Icon
                icon="mdi:calendar-month-outline"
                className="w-3 h-3 md:w-4 md:h-4"
              />
              {item.date}
            </span>
            {item.location && (
              <span className="hidden sm:flex items-center gap-1 md:gap-2 text-white/70 text-xs md:text-sm">
                <Icon
                  icon="mdi:map-marker-outline"
                  className="w-3 h-3 md:w-4 md:h-4"
                />
                {item.location}
              </span>
            )}
            <Link
              href={`/news/${item.id}`}
              className="inline-flex items-center gap-1 md:gap-2 bg-white text-primary px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium hover:bg-secondary transition"
            >
              Read More
              <Icon icon="mdi:arrow-right" className="w-3 h-3 md:w-4 md:h-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
