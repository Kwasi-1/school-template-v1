"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const images = [
  "/hero_image_1.webp",
  "/hero_image_1.webp",
  "/hero_image_1.webp",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const pathname = usePathname();
  const pageName =
    pathname.split("/").filter(Boolean).pop()?.replace(/-/g, " ") || "Unknown";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Conditional Styles
  const isLandingPage = pathname === "/";
  const containerClasses = isLandingPage
    ? "w-full container mx-auto h-full py-[120px] "
    : "h-[60vh]";

  return (
    <section
      id="herosection"
      className={`relative ${containerClasses} flex items-center justify-center text-center text-white select-none`}
    >
      {/* Background Image Slider */}
      <div
        className={`absolute inset-0 overflow-hidden ${
          isLandingPage && "rounded-[20px]"
        }`}
      >
        {!isLandingPage ? (
          <Image
            key={1}
            src={images[1]}
            alt="University Building"
            layout="fill"
            objectFit="cover"
            className={`absolute inset-0 transition-opacity duration-1000`}
          />
        ) : (
          <>
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="University Building"
                layout="fill"
                objectFit="cover"
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </>
        )}
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        {/* Conditional Heading for Other Pages */}
        {!isLandingPage ? (
          <>
            <h1 className="text-5xl capitalize mb-6">{pageName}</h1>
            <div className="capitalize flex items-center gap-2 text-[#ddd] justify-center">
              <Link href="/">Home</Link> <Icon icon="oui:arrow-right" />{" "}
              {pageName}
            </div>
          </>
        ) : (
          <>
            {/* Icon */}
            <div className="my-12 flex justify-center">
              <Image
                src="/banner__3-icon.svg"
                alt="Icon"
                width={150}
                height={150}
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
              Academic Journey <br /> Begins Unipix
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-lg text-gray-200">
              Remember to tailor the section names to fit the specific needs and
              structure of your university website.
            </p>

            {/* Button */}
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#A41E27] text-white px-6 py-3 text-lg font-medium rounded-lg hover:bg-[#86181F] transition duration-300"
              >
                View Our Program
                <span>→</span>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
