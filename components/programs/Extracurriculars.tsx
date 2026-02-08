"use client";

import { Icon } from "@iconify/react";
import { programsContent } from "@/content/programs";

const categoryIcons: Record<string, string> = {
  Sports: "mdi:soccer-outline",
  "Arts & Culture": "mdi:palette-outline",
  "Academic Clubs": "mdi:lightbulb-outline",
  Leadership: "mdi:account-star-outline",
};

const Extracurriculars = () => {
  const { extracurriculars } = programsContent;

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm uppercase tracking-wider font-medium text-primary">
              Extra-Curricular Activities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 text-text-primary">
              {extracurriculars.title}
            </h2>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {extracurriculars.activities.map((activity, index) => (
              <div
                key={index}
                className="bg-transparent rounded-[10px] p-6 md:p-8 border border-gray-300 hover:border-primary/40 transition-all duration-300"
              >
                {/* Icon & Category */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-transparent border border-gray-300 rounded-[10px] flex items-center justify-center">
                    <Icon
                      icon={
                        categoryIcons[activity.category] || "mdi:star-outline"
                      }
                      className="w-6 h-6 text-primary"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {activity.category}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-2">
                  {activity.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-text-secondary"
                    >
                      <Icon
                        icon="mdi:chevron-right"
                        className="w-4 h-4 text-primary"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
