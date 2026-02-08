"use client";

import { Icon } from "@iconify/react";
import { programsContent } from "@/content/programs";

const categoryIcons: Record<string, string> = {
  Sports: "mdi:soccer",
  "Arts & Culture": "mdi:palette",
  "Academic Clubs": "mdi:lightbulb-on-outline",
  Leadership: "mdi:account-star-outline",
};

const Extracurriculars = () => {
  const { extracurriculars } = programsContent;

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm uppercase tracking-wider font-medium text-[#800020]">
              Extra-Curricular Activities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2">
              {extracurriculars.title}
            </h2>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {extracurriculars.activities.map((activity, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon & Category */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#800020]/10 rounded-xl flex items-center justify-center">
                    <Icon
                      icon={categoryIcons[activity.category] || "mdi:star"}
                      className="w-6 h-6 text-[#800020]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-black">
                    {activity.category}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-2">
                  {activity.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-[#737477]"
                    >
                      <Icon
                        icon="mdi:chevron-right"
                        className="w-4 h-4 text-[#800020]"
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
