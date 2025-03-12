"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/hero_image_1.webp",
  "/hero_image_1.webp",
  "/hero_image_1.webp",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white">
      {/* Background Image Slider */}
      <div className="absolute inset-0 overflow-hidden container mx-auto rounded-[20px]">
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
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <Image src="/university-icon.svg" alt="Icon" width={80} height={80} />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
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
      </div>
    </section>
  );
};

export default HeroSection;
