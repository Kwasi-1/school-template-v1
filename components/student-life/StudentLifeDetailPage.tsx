"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ImageLightbox from "@/components/gallery/ImageLightbox";
import { StudentLifeSection } from "@/content/student-life";

interface StudentLifeDetailPageProps {
  section: StudentLifeSection;
  allSections: StudentLifeSection[];
}

const StudentLifeDetailPage = ({
  section,
  allSections,
}: StudentLifeDetailPageProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Convert section images to gallery format for lightbox
  const galleryImages = section.images.map((img, index) => ({
    id: `${section.id}-${index}`,
    src: img.src,
    alt: img.alt,
    caption: img.alt,
    category: section.title,
  }));

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
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

  // Get current section index and next/prev sections
  const currentIndex = allSections.findIndex((s) => s.id === section.id);
  const prevSection = currentIndex > 0 ? allSections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < allSections.length - 1
      ? allSections[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Overview Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container-lg mx-auto">
          <div className="max-w-full xl:max-w-[85%] mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <span className="text-sm uppercase tracking-wider font-medium text-primary">
                Student Life
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-text-primary mt-2">
                {section.title}
              </h1>
              <div
                className="w-16 h-1 mx-auto mt-4"
                style={{ backgroundColor: section.accentColor || "#800020" }}
              />
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                {section.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-4 pb-16 md:pb-24">
        <div className="container-lg mx-auto">
          <div className="max-w-full xl:max-w-[85%] mx-auto">
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {section.images.map((image, idx) => {
                const isLarge = idx === 0 || idx === 3;
                return (
                  <div
                    key={idx}
                    onClick={() => handleImageClick(idx)}
                    className={`relative overflow-hidden rounded-[10px] group cursor-pointer ${
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
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <Icon
                        icon="mdi:magnify-plus-outline"
                        className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Other Sections */}
      <section className="py-12 px-4 bg-secondary">
        <div className="container-lg mx-auto">
          <div className="max-w-full xl:max-w-[85%] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Previous Section */}
              {prevSection ? (
                <Link
                  href={`/student-life/${prevSection.id}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-primary transition group"
                >
                  <Icon
                    icon="mdi:arrow-left"
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                  />
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-text-secondary">
                      Previous
                    </p>
                    <p className="font-medium">{prevSection.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {/* All Sections Link */}
              <Link
                href="/student-life"
                className="flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <Icon icon="mdi:view-grid-outline" />
                View All
              </Link>

              {/* Next Section */}
              {nextSection ? (
                <Link
                  href={`/student-life/${nextSection.id}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-primary transition group"
                >
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wider text-text-secondary">
                      Next
                    </p>
                    <p className="font-medium">{nextSection.title}</p>
                  </div>
                  <Icon
                    icon="mdi:arrow-right"
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
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
    </div>
  );
};

export default StudentLifeDetailPage;
