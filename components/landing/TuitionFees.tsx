"use client";

import Link from "next/link";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site-config";

export default function TuitionFees() {
  const { tuition } = homeContent;

  return (
    <section className="relative pt-[100px] pb-[120px] px-5 2xl:px20 leading-loose ">
      <div className="container-lg mx-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 2xl:items-center gap-y-8 lg:gap-x-8">
          {/* Title Section */}
          <div className="max-w-3xl flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight">
              {tuition.title} At <br className="hidden lg:block" />{" "}
              {siteConfig.shortName} University
            </h2>
            <p className="text-gray-500 mt-4 text-sm md:text-base sm:text-lg">
              {tuition.description}
            </p>
            <Link
              href={tuition.ctaHref}
              className="mt-6 bg-primary text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary-hover transition w-fit"
            >
              {tuition.ctaText} →
            </Link>
          </div>

          {/* Tuition Cards */}
          <div className="col-span-2 flex flex-col md:flex-row gap-6 w-full">
            {/* Undergraduate Programs */}
            <div className="flex-1 bg-primary text-white rounded-[10px] p-[40px] md:w-1/2">
              <h3 className="text-3xl">{tuition.undergraduate.title}</h3>

              {tuition.undergraduate.sections.map((section, idx) => (
                <div key={idx} className={idx === 0 ? "mt-4" : "mt-6"}>
                  <h4
                    className={`font-semibold ${idx === 0 ? "underline" : ""} font-inter py-5 text-2xl`}
                  >
                    {section.name}
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {section.fees.map((fee, feeIdx) => (
                      <li key={feeIdx}>✔ {fee}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Graduate Programs */}
            <div className="flex-1 bg-secondary text-text-primary rounded-[10px] p-[40px] md:w-1/2">
              <h3 className="text-3xl ">{tuition.graduate.title}</h3>

              {tuition.graduate.sections.map((section, idx) => (
                <div key={idx} className={idx === 0 ? "mt-4" : "mt-6"}>
                  <h4
                    className={`font-inter py-5 text-2xl ${idx === 1 ? "underline" : ""}`}
                  >
                    {section.name}
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {section.fees.map((fee, feeIdx) => (
                      <li key={feeIdx}>✔ {fee}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
