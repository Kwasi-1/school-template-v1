"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { studentLifeContent } from "@/content/student-life";

const StudentLifeNav = () => {
  const { sections } = studentLifeContent;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-lg mx-auto px-4">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm uppercase tracking-wider font-medium text-primary">
              Explore Our Campus
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 text-text-primary">
              Student Life
            </h1>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          >
            <Icon
              icon="mdi:chevron-left"
              className="w-6 h-6 text-text-primary"
            />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          >
            <Icon
              icon="mdi:chevron-right"
              className="w-6 h-6 text-text-primary"
            />
          </button>
        )}

        {/* Carousel */}
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 md:px-8 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {sections.map((section, index) => (
            <Link
              key={section.id}
              href={`/student-life/${section.id}`}
              className="group relative flex-shrink-0 w-[75vw] sm:w-[50vw] md:w-[35vw] lg:w-[28vw] aspect-[3/4] overflow-hidden rounded-[10px] snap-start"
            >
              {/* Background Image */}
              <Image
                src={section.images[0]?.src || "/placeholder.webp"}
                alt={section.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-white/60 text-sm uppercase tracking-wider">
                  0{index + 1}
                </span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mt-2 mb-3">
                  {section.title}
                </h3>
                <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">Explore</span>
                  <Icon
                    icon="mdi:arrow-right"
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Scroll Indicator Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {sections.map((section, index) => (
            <button
              key={section.id}
              aria-label={`Go to ${section.title}`}
              onClick={() => {
                if (carouselRef.current) {
                  const cardWidth =
                    carouselRef.current.scrollWidth / sections.length;
                  carouselRef.current.scrollTo({
                    left: cardWidth * index,
                    behavior: "smooth",
                  });
                }
              }}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary transition-colors"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLifeNav;
