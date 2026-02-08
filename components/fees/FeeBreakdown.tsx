"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import FeeCard from "./FeeCard";
import { feesContent } from "@/content/fees";

const FeeBreakdown = () => {
  const { levels } = feesContent;
  const [activeLevel, setActiveLevel] = useState(0);

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm uppercase tracking-wider font-medium text-[#800020]">
              Fee Structure
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2">
              Fees by Academic Level
            </h2>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12">
            {/* Level Cards */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {levels.map((level, index) => (
                <FeeCard
                  key={level.id}
                  level={level}
                  isActive={activeLevel === index}
                  onClick={() => setActiveLevel(index)}
                />
              ))}
            </div>

            {/* Fee Details */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-black">
                    {levels[activeLevel].name}
                  </h3>
                  <p className="text-[#737477] text-sm mt-1">
                    {levels[activeLevel].description}
                  </p>
                </div>
                <div className="w-14 h-14 bg-[#800020]/10 rounded-2xl flex items-center justify-center">
                  <Icon
                    icon="mdi:school-outline"
                    className="w-7 h-7 text-[#800020]"
                  />
                </div>
              </div>

              {/* Fee Items */}
              <div className="space-y-4">
                {levels[activeLevel].fees.map((fee, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-white rounded-xl"
                  >
                    <div>
                      <p className="font-medium text-black">{fee.name}</p>
                      {fee.period && (
                        <p className="text-sm text-[#737477]">{fee.period}</p>
                      )}
                    </div>
                    <p className="text-lg font-semibold text-[#800020]">
                      {fee.amount}
                    </p>
                  </div>
                ))}
              </div>

              {/* Total */}
              {levels[activeLevel].totalPerTerm && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-medium text-black">
                      Total Per Term
                    </p>
                    <p className="text-2xl font-bold text-[#800020]">
                      {levels[activeLevel].totalPerTerm}
                    </p>
                  </div>
                  <p className="text-sm text-[#737477] mt-2">
                    * Excludes one-time fees for returning students
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeBreakdown;
