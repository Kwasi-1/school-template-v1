"use client";

import Image from "next/image";
import { boardingContent } from "@/content/boarding";

const BoardingGallery = () => {
  const { gallery } = boardingContent;

  return (
    <section className="px-4 pb-16 md:pb-24">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Gallery Grid - Masonry-like layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {gallery.slice(0, 8).map((image, idx) => {
              // Create varied heights for visual interest
              const isLarge = idx === 0 || idx === 3 || idx === 5;
              return (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-lg group ${
                    isLarge ? "row-span-2" : ""
                  }`}
                  style={{ aspectRatio: isLarge ? "3/4" : "4/3" }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardingGallery;
