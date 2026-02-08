"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { NewsItem } from "@/content/news";

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <article className="rounded-2xl overflow-hidden border border-gray-100 bg-white group hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="p-4 pb-0">
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transform transition duration-500 ease-in-out group-hover:scale-105"
          />
          {/* Type Badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                item.type === "event"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {item.type === "event" ? "Event" : "News"}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 pt-4">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary mb-3">
          <span className="flex items-center gap-1">
            <Icon icon="mdi:calendar-month-outline" className="w-4 h-4" />
            {item.date}
          </span>
          {item.location && (
            <span className="flex items-center gap-1">
              <Icon icon="mdi:map-marker-outline" className="w-4 h-4" />
              {item.location}
            </span>
          )}
          {item.author && (
            <span className="flex items-center gap-1">
              <Icon icon="mdi:account-outline" className="w-4 h-4" />
              {item.author}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>

        {/* Excerpt */}
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4">
          {item.excerpt}
        </p>

        {/* Read More */}
        <Link
          href={`/news/${item.id}`}
          className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
        >
          Read More
          <Icon icon="mdi:arrow-right" className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;
