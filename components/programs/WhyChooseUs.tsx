"use client";

import { Icon } from "@iconify/react";
import { programsContent } from "@/content/programs";

const WhyChooseUs = () => {
  const { whyChooseUs } = programsContent;

  return (
    <section className="bg-primary py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm uppercase tracking-wider font-medium text-white/70">
              {whyChooseUs.subtitle}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 text-white">
              {whyChooseUs.title}
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              {whyChooseUs.description}
            </p>
          </div>

          {/* Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.points.map((point, index) => (
              <div
                key={index}
                className="bg-transparent rounded-[10px] p-6 md:p-8 border border-white/30 hover:border-white/50 transition-all duration-300 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-transparent border border-white/30 rounded-[10px] flex items-center justify-center mx-auto mb-6">
                  <Icon icon={point.icon} className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
