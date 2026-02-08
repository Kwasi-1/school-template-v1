"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { GalleryImage as GalleryImageType } from "@/content/gallery";

interface GalleryImageProps {
  image: GalleryImageType;
  onClick: () => void;
}

const GalleryImage = ({ image, onClick }: GalleryImageProps) => {
  return (
    <div
      className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transform transition duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
            <Icon icon="mdi:magnify-plus" className="w-6 h-6 text-[#800020]" />
          </div>
          {image.caption && (
            <p className="text-white text-sm px-4 mt-3">{image.caption}</p>
          )}
        </div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full">
          {image.category}
        </span>
      </div>
    </div>
  );
};

export default GalleryImage;
