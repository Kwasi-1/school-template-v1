"use client";

import { boardingContent } from "@/content/boarding";

const BoardingOverview = () => {
  const { overview } = boardingContent;

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black">
              {overview.title}
            </h2>
            <div className="w-16 h-1 bg-[#2d6a4f] mx-auto mt-4" />
          </div>

          {/* Two Column Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <p className="text-[#737477] leading-relaxed text-base md:text-lg">
              {overview.descriptionLeft}
            </p>
            <p className="text-[#737477] leading-relaxed text-base md:text-lg">
              {overview.descriptionRight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardingOverview;
