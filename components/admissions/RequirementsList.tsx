"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { admissionsContent } from "@/content/admissions";

const RequirementsList = () => {
  const { levels } = admissionsContent;
  const [activeLevel, setActiveLevel] = useState(0);

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm uppercase tracking-wider font-medium text-[#800020]">
              What You Need
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2">
              Admission Requirements
            </h2>
          </div>

          {/* Level Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {levels.map((level, index) => (
              <button
                key={index}
                onClick={() => setActiveLevel(index)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeLevel === index
                    ? "bg-[#800020] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {level.level.split(" (")[0]}
              </button>
            ))}
          </div>

          {/* Active Level Content */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left: Level Info */}
              <div className="bg-[#800020] text-white p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  {levels[activeLevel].level}
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  Age Range: {levels[activeLevel].ageRange}
                </p>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Icon icon="mdi:file-document-outline" />
                    Required Documents
                  </h4>
                  <ul className="space-y-3">
                    {levels[activeLevel].documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon
                          icon="mdi:check-circle"
                          className="w-5 h-5 mt-0.5 text-white/80"
                        />
                        <span className="text-white/90">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Requirements */}
              <div className="p-8 md:p-12">
                <h4 className="text-lg font-semibold mb-6 flex items-center gap-2 text-[#800020]">
                  <Icon icon="mdi:clipboard-check-outline" />
                  Entry Requirements
                </h4>
                <ul className="space-y-4">
                  {levels[activeLevel].requirements.map((req, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="w-8 h-8 bg-[#800020]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:check"
                          className="w-4 h-4 text-[#800020]"
                        />
                      </div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsList;
