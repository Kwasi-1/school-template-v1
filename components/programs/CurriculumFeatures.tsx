"use client";

import { Icon } from "@iconify/react";
import { programsContent } from "@/content/programs";

const CurriculumFeatures = () => {
  const { curriculumFeatures } = programsContent;

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm uppercase tracking-wider font-medium text-primary">
              Our Approach
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 text-text-primary">
              Curriculum Highlights
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
            {curriculumFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-transparent rounded-[10px] p-6 md:p-8 border border-gray-300 hover:border-primary/40 transition-all duration-300 group text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-transparent flex items-center justify-center mx-auto mb-6 group-hover:border-primary transition-colors duration-300">
                  <Icon
                    icon={feature.icon}
                    className="w-8 h-8 text-primary"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium tracking-wide text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumFeatures;
