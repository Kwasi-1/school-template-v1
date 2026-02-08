"use client";

import LevelCard from "./LevelCard";
import { programsContent } from "@/content/programs";

const ProgramLevels = () => {
  const { levels } = programsContent;

  return (
    <section className="bg-secondary py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 md:mb-20">
            <span className="text-sm uppercase tracking-wider font-medium text-primary">
              Academic Levels
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2">
              Our School Programs
            </h2>
          </div>

          {/* Levels */}
          <div className="space-y-20 md:space-y-28">
            {levels.map((level, index) => (
              <LevelCard key={level.id} level={level} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramLevels;
