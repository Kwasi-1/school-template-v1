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
    <article className="rounded-[10px] overflow-hidden border border-[#c2c2c2] group">
      <div className="p-5">
        {/* Image */}
        <div className="relative w-full h-56 sm:h-60 lg:h-64 overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transform transition duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="pt-6">
          {/* Date & Location */}
          <div className="flex flex-col md:flex-row flex-wrap md:items-center text-[#110c2d] gap-3 text-sm">
            <span className="flex items-center gap-1">
              <Icon icon="mdi:calendar-month-outline" /> {item.date}
            </span>
            {item.location && (
              <span className="flex items-center gap-1">
                <Icon icon="mdi:map-marker-outline" />
                <span className="border-b border-dotted border-current pb-0.5">
                  {item.location}
                </span>
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="pb-4 pt-5 text-lg sm:text-xl lg:text-2xl leading-snug line-clamp-2">
            {item.title}
          </h3>

          {/* Read More Button - Circular Arrow */}
          <Link
            href={`/news/${item.id}`}
            className="group/btn mt-4 w-12 h-12 flex items-center justify-center border border-black/80 hover:border-primary rounded-full hover:text-white hover:bg-primary transition duration-300"
          >
            <Icon
              icon="mdi:arrow-right"
              className="-rotate-30 group-hover:rotate-0 text-base transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
