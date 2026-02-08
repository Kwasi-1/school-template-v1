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
    <article className="relative rounded-2xl overflow-hidden group">
      {/* Background Image */}
      <div className="relative aspect-[21/9] md:aspect-[21/8]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transform transition duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        <div className="max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 bg-[#800020] text-white text-xs font-medium rounded-full">
              Featured
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {item.type === "event" ? "Event" : "News"}
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {item.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-3 line-clamp-2">
            {item.title}
          </h2>

          {/* Excerpt */}
          <p className="text-white/80 mb-4 line-clamp-2 max-w-2xl">
            {item.excerpt}
          </p>

          {/* Meta & CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2 text-white/70 text-sm">
              <Icon icon="mdi:calendar-month-outline" className="w-4 h-4" />
              {item.date}
            </span>
            {item.location && (
              <span className="flex items-center gap-2 text-white/70 text-sm">
                <Icon icon="mdi:map-marker-outline" className="w-4 h-4" />
                {item.location}
              </span>
            )}
            <Link
              href={`/news/${item.id}`}
              className="inline-flex items-center gap-2 bg-white text-[#800020] px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition"
            >
              Read More
              <Icon icon="mdi:arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
