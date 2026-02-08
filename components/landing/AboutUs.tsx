"use client";

import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site-config";

export default function AboutUs() {
  const { about } = homeContent;

  return (
    <section className="relative w-full h-full py-10">
      {/* Background Section */}
      <div className="text-white bg-primary h-auto md:h-[500px]">
        <div className="container-lg mx-auto">
          <div className="relative 2xl:w-[92%] mx-auto py-14 md:py-28 px-6 md:px-8 2xl:px-20 flex flex-col md:flex-row justify-center">
            {/* Left Side - Text Content */}
            <div className="md:w-3/7 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
                <span className="relative">
                  Embark on a Journey: <br /> Unveiling the Story of{" "}
                  <span className="text-white">{siteConfig.name}</span>
                </span>
              </h2>

              <Link
                href={about.cta.href}
                className="inline-block text-white border-b-2 border-white font-medium hover:opacity-80 transition duration-300"
              >
                {about.cta.text} →
              </Link>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-4/7 relative mt-10 md:mt-0 md:ml-10">
              <p className="text-base sm:text-[17px] leading-relaxed">
                {about.description}
              </p>
              <div className="relative overflow-hidden rounded-lg mt-8">
                <Image
                  src={about.image}
                  alt="University Library"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover z-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Overlapping Section */}
      <div className="w-full text-gray-300 text-4xl sm:text-5xl md:text-8xl font-bold px-6 md:px-20 leading-tight tracking-tight -ml-2 sm:-ml-6 md:-ml-10 mt-6 md:mt-0">
        About {siteConfig.shortName}
      </div>
    </section>
  );
}
