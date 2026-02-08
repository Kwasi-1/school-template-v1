"use client";

import Image from "next/image";
import { boardingContent } from "@/content/boarding";

const BoardingHero = () => {
  const { hero } = boardingContent;

  return (
    <section className="relative h-[50vh] md:h-[60vh] min-h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt="Boarding Program"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
      </div>
    </section>
  );
};

export default BoardingHero;
