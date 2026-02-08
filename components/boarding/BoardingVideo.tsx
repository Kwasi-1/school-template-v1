"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { boardingContent } from "@/content/boarding";

const BoardingVideo = () => {
  const { video } = boardingContent;

  return (
    <section className="relative py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={video.thumbnailImage}
          alt={video.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-lg mx-auto px-4 text-center">
        {/* Play Button */}
        <a
          href={video.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white rounded-full hover:scale-110 transition-transform duration-300 shadow-lg mb-8"
          aria-label="Play video"
        >
          <Icon
            icon="mdi:play"
            className="w-10 h-10 md:w-12 md:h-12 text-primary ml-1"
          />
        </a>

        {/* Title */}
        <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-medium uppercase tracking-wider">
          {video.title}
        </h3>
      </div>
    </section>
  );
};

export default BoardingVideo;
