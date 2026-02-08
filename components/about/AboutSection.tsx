"use client";

import { aboutContent } from "@/content/about";
import { siteConfig } from "@/content/site-config";

const AboutSection = () => {
  const { overview } = aboutContent;

  return (
    <section className="container-lg section-padding">
      <div className="max-w-full xl:max-w-[85%] mx-auto pb-12 pt-[120px] grid border-b border-gray-300 text-[16px] grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-6 items-center">
        {/* Title */}
        <h2 className="text-4xl text-text-primary">{overview.title}</h2>

        {/* Separator & Text */}
        <div className="flex md:gap-[50px] ">
          <div className="hidden md:block border-l border-gray-300"></div>
          <p className="leading-relaxed">{overview.welcomeText}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
