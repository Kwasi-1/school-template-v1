"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { boardingContent } from "@/content/boarding";

const BoardingFeatures = () => {
  const { features, brochure } = boardingContent;

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon
                    icon={feature.icon}
                    className="w-7 h-7 text-primary"
                  />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Download Brochure CTA */}
          <div className="text-center">
            <Link
              href={brochure.downloadUrl}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#2d6a4f] text-[#2d6a4f] rounded-md font-medium hover:bg-[#2d6a4f] hover:text-white transition-colors duration-300"
            >
              <Icon icon="mdi:download" className="w-5 h-5" />
              {brochure.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardingFeatures;
