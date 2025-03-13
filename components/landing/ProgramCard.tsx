"use client";

import Image from "next/image";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProgramCard({
  title,
  description,
  image,
}: ProgramCardProps) {
  return (
    <div className="relative rounded-lg max-w-[300px] max-h-[360px] h-[300px]  group overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

      <div className=" hidden group-hover:block transition duration-300 pb-[36px] px-[28px] pt-[40px]">
        {/* Description at the Top */}
        <div className="absolute top-4 left-4 right-4 text-white p-2 text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </div>

        <h3 className="absolute bottom-4 left-4 text-white font-semibold text-base">
          Read more
        </h3>
      </div>

      {/* Title at the Bottom */}
      <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg group-hover:hidden transition duration-300">
        {title}
      </h3>
    </div>
  );
}
