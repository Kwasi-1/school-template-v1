"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ImageLightbox from "@/components/gallery/ImageLightbox";
import { StudentLifeSection as SectionType } from "@/content/student-life";

interface StudentLifeSectionProps {
  section: SectionType;
  index: number;
}

const StudentLifeSection = ({ section, index }: StudentLifeSectionProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Convert section images to gallery format for lightbox
  const galleryImages = section.images.map((img, idx) => ({
    id: `${section.id}-${idx}`,
    src: img.src,
    alt: img.alt,
    caption: img.alt,
    category: section.title,
  }));

  const handleImageClick = (idx: number) => {
    setLightboxIndex(idx);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null && lightboxIndex < galleryImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  return (
    <>
      <section id={section.id} className="scroll-mt-24">
        {/* Section Header */}
        <div className="py-8 px-4 bg-secondary">
          <div className="container-lg mx-auto">
            <div className="max-w-full xl:max-w-[97%] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-medium text-text-primary">
                  {section.title}
                </h2>
              </div>
              <Link
                href={`/student-life/${section.id}`}
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm"
              >
                View All
                <Icon icon="mdi:arrow-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* Image Grid - Full Width */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {section.images.slice(0, 4).map((image, idx) => (
            <div
              key={idx}
              onClick={() => handleImageClick(idx)}
              className="relative aspect-square overflow-hidden cursor-pointer group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <Icon
                  icon="mdi:magnify-plus-outline"
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          image={galleryImages[lightboxIndex]}
          onClose={handleCloseLightbox}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < galleryImages.length - 1}
        />
      )}
    </>
  );
};

export default StudentLifeSection;
