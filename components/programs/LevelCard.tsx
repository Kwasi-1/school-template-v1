"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SchoolLevel } from "@/content/programs";

interface LevelCardProps {
  level: SchoolLevel;
  index: number;
}

const LevelCard = ({ level, index }: LevelCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        !isEven ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden border border-gray-300">
          <Image
            src={level.image}
            alt={level.name}
            fill
            className="object-cover"
          />
          {/* Age Badge */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-[10px] border border-gray-200">
            <span className="text-sm font-medium text-primary">
              {level.ageRange}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${!isEven ? "lg:order-1" : ""}`}>
        <span className="text-sm uppercase tracking-wider font-medium text-primary">
          {level.shortName}
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal mt-2 mb-4 text-text-primary">
          {level.name}
        </h3>
        <p className="text-text-secondary leading-relaxed mb-6">
          {level.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-3 mb-8">
          {level.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="w-6 h-6 bg-transparent border border-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon
                  icon="mdi:check-outline"
                  className="w-3 h-3 text-primary"
                />
              </div>
              <span className="text-text-secondary">{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Subjects Preview */}
        <div className="flex flex-wrap gap-2 mb-6">
          {level.subjects.slice(0, 5).map((subject, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-transparent border border-gray-300 text-text-secondary text-sm rounded-[10px]"
            >
              {subject}
            </span>
          ))}
          {level.subjects.length > 5 && (
            <span className="px-3 py-1 bg-transparent border border-primary/30 text-primary text-sm rounded-[10px]">
              +{level.subjects.length - 5} more
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href="/admissions"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Apply for {level.shortName}
          <Icon icon="mdi:arrow-right" />
        </Link>
      </div>
    </div>
  );
};

export default LevelCard;
