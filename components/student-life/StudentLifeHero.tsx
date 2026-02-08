"use client";

import Image from "next/image";
import { studentLifeContent } from "@/content/student-life";

const StudentLifeHero = () => {
  const { hero } = studentLifeContent;

  return (
    <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt="Student Life"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white uppercase tracking-wider">
          {hero.title}
        </h1>
        <p className="text-white/80 text-lg md:text-xl mt-4 max-w-xl mx-auto">
          {hero.subtitle}
        </p>
      </div>
    </section>
  );
};

export default StudentLifeHero;
