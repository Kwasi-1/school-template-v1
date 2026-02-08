"use client";

import GalleryImage from "./GalleryImage";
import { GalleryImage as GalleryImageType } from "@/content/gallery";

interface GalleryGridProps {
  images: GalleryImageType[];
  onImageClick: (image: GalleryImageType) => void;
}

const GalleryGrid = ({ images, onImageClick }: GalleryGridProps) => {
  if (images.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-[#737477] text-lg">
          No images found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      {images.map((image) => (
        <GalleryImage
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
