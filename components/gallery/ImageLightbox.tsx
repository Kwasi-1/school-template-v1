"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { GalleryImage as GalleryImageType } from "@/content/gallery";

interface ImageLightboxProps {
  image: GalleryImageType | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const ImageLightbox = ({
  image,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: ImageLightboxProps) => {
  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext],
  );

  useEffect(() => {
    if (image) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [image, handleKeyDown]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
      >
        <Icon icon="mdi:close" className="w-6 h-6 text-white" />
      </button>

      {/* Navigation - Previous */}
      {hasPrev && (
        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
        >
          <Icon icon="mdi:chevron-left" className="w-8 h-8 text-white" />
        </button>
      )}

      {/* Navigation - Next */}
      {hasNext && (
        <button
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
        >
          <Icon icon="mdi:chevron-right" className="w-8 h-8 text-white" />
        </button>
      )}

      {/* Image Container */}
      <div className="relative max-w-5xl max-h-[80vh] w-full h-full m-4">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
        />
      </div>

      {/* Caption */}
      {image.caption && (
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white text-lg">{image.caption}</p>
            <span className="text-white/60 text-sm mt-2 inline-block">
              {image.category}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;
