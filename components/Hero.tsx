"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/hero_image_1.webp",
  "/hero_image_1.webp",
  "/hero_image_1.webp",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto relative h-screen overflow-hidden rounded-3xl">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: 1,
        }}
      >
        <Image src="school_logo.svg" alt="school logo" width={40} height={40} />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Academic Journey Begins at Unipix
          </h1>
          <button className="bg-primary text-white px-8 py-3 rounded-lg">
            View Our Programs
          </button>
        </div>
      </div>

      {/* Preload images */}
      {images.map((image, index) => (
        <img key={index} src={image} alt="" className="hidden" />
      ))}
    </div>
  );
}
