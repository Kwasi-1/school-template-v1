"use client";

import { useState, useMemo, useCallback } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ImageLightbox from "@/components/gallery/ImageLightbox";
import {
  galleryContent,
  GalleryImage as GalleryImageType,
} from "@/content/gallery";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImageType | null>(
    null,
  );
  const { overview, images } = galleryContent;

  // Filter images based on active filter
  const filteredImages = useMemo(() => {
    if (activeFilter === "All") {
      return images;
    }
    return images.filter((img) => img.category === activeFilter);
  }, [images, activeFilter]);

  // Get current image index for navigation
  const currentIndex = useMemo(() => {
    if (!selectedImage) return -1;
    return filteredImages.findIndex((img) => img.id === selectedImage.id);
  }, [selectedImage, filteredImages]);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  }, [currentIndex, filteredImages]);

  const handleNext = useCallback(() => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  }, [currentIndex, filteredImages]);

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

      {/* Filter & Grid */}
      <section className="bg-secondary py-16 md:py-24 px-4">
        <div className="container-lg mx-auto">
          <div className="max-w-full xl:max-w-[85%] mx-auto">
            {/* Filter */}
            <GalleryFilter
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            {/* Grid */}
            <GalleryGrid
              images={filteredImages}
              onImageClick={setSelectedImage}
            />
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < filteredImages.length - 1}
      />
    </div>
  );
}
