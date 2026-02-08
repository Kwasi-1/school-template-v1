"use client";

import Image from "next/image";
import { StudentLifeSection as SectionType } from "@/content/student-life";

interface StudentLifeSectionProps {
  section: SectionType;
  index: number;
}

const StudentLifeSection = ({ section, index }: StudentLifeSectionProps) => {
  const isEven = index % 2 === 0;

  return (
    <section id={section.id} className="scroll-mt-24">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 ${
          isEven ? "" : "lg:flex-row-reverse"
        }`}
      >
        {/* Text Content */}
        <div
          className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
          style={{ backgroundColor: section.accentColor || "#800020" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white capitalize tracking-wide mb-6">
            {section.title}
          </h2>
          <div className="w-16 h-1 bg-white/50 mb-6" />
          <p className="text-white/90 leading-relaxed text-base md:text-lg">
            {section.description}
          </p>
        </div>

        {/* Image Grid */}
        <div
          className={`grid grid-cols-2 ${isEven ? "lg:order-2" : "lg:order-1"}`}
        >
          {section.images.slice(0, 4).map((image, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
