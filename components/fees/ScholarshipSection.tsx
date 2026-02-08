"use client";

import { Icon } from "@iconify/react";
import { feesContent } from "@/content/fees";

const ScholarshipSection = () => {
  const { scholarships } = feesContent;

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Info */}
            <div>
              <span className="text-sm uppercase tracking-wider font-medium text-primary">
                Financial Support
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 mb-4">
                {scholarships.title}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                {scholarships.description}
              </p>

              {/* Apply CTA */}
              <a
                href="/admissions"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-[#66001a] transition"
              >
                Apply for Scholarship
                <Icon icon="mdi:arrow-right" />
              </a>
            </div>

            {/* Right: Scholarship Types */}
            <div className="space-y-4">
              {scholarships.types.map((type, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-xl p-5 hover:bg-secondary transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary mb-1">
                        {type.name}
                      </h3>
                      <p className="text-sm text-text-secondary">{type.criteria}</p>
                    </div>
                    <div className="flex-shrink-0 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {type.discount}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipSection;
