"use client";

import Image from "next/image";
import Link from "next/link";
import ProgramCard from "./ProgramCard";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site-config";

export default function Programs() {
  const { programs } = homeContent;
  const programsLeft = programs.items.slice(0, 2);
  const programsRight = programs.items.slice(2, 4);

  return (
    <section className="container-lg mx-auto">
      <div className="xl:w-[85%] mx-auto px-5 py-16 md:py-[120px] flex flex-col md:flex-row items-center gap-x-6 gap-y-12 lg:gap-20">
        {/* Left Section - Heading & Text */}
        <div className="md:w-[45%] w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-normal">
            {programs.title}
          </h2>
          <p className="mt-6 text-text-secondary leading-relaxed text-base">
            {programs.description}
          </p>

          {/* Curved Arrow + View Button */}
          <div className="relative mt-10 flex flex-row justify-between md:justify-normal lg:pt-[60px] lg:pl-[100px] items-center">
            <Image
              src="/arrow.webp"
              alt="Arrow"
              width={120}
              height={120}
              className="w-[100px] sm:w-[150px] md:w-[120px]"
            />
            <Link
              href={programs.ctaHref}
              className="block bg-primary text-white px-6 py-3 mt-14 text-base sm:text-lg font-medium rounded-full -rotate-52 hover:bg-black transition duration-300"
            >
              {programs.ctaText} →
            </Link>
          </div>
        </div>

        {/* Right Section - Program Cards Grid */}
        <div className="lg:w-[50%] w-full grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-8 mt-6 md:mt-0">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {programsLeft.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:mt-20">
            {programsRight.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
