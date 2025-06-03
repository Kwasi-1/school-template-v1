"use client";

import Image from "next/image";
import ProgramCard from "./ProgramCard";

const programsLeft = [
  {
    title: "Graduate Undergraduate",
    image: "/program1.webp",
    description:
      "Our experienced faculty and state-of-the-art facilities ensure that every child receives the best education possible.",
  },
  {
    title: "Lifelong Learning",
    image: "/program2.webp",
    description:
      "Our experienced faculty and state-of-the-art facilities ensure that every child receives the best education possible.",
  },
];

const programsRight = [
  {
    title: "Graduate Undergraduate",
    image: "/program3.webp",
    description:
      "Our experienced faculty and state-of-the-art facilities ensure that every child receives the best education possible.",
  },
  {
    title: "Lifelong Learning",
    image: "/program4.webp",
    description:
      "Our experienced faculty and state-of-the-art facilities ensure that every child receives the best education possible.",
  },
];

export default function Programs() {
  return (
    <section className="container-lg mx-auto">
      <div className="xl:w-[85%] mx-auto px-5 py-16 md:py-[120px] flex flex-col md:flex-row items-center gap-x-6 gap-y-12 lg:gap-20">
        {/* Left Section - Heading & Text */}
        <div className="md:w-[45%] w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-normal">
            Our Programs
          </h2>
          <p className="mt-6 text-[#737477] leading-relaxed text-base">
            Embark on a journey of knowledge, discovery, and growth at Unipix
            University. Our admissions process is designed to identify bright,
            motivated individuals who are eager to contribute to our dynamic
            academic community.
          </p>

          {/* Curved Arrow + View Button */}
          <div className="relative mt-10 flex flex-row justify-between md:justify-normal lg:pt-[60px] lg:pl-[100px] items-center">
            <Image
              src="/arrow.webp"
              alt="Arrow"
              width={120}
              height={120}
              className="w-[100px] sm:w-[150px] md:w-[120px]"
            />
            <a
              href="#"
              className="block bg-[#A41E27] text-white px-6 py-3 mt-14 text-base sm:text-lg font-medium rounded-full -rotate-52 hover:bg-black transition duration-300"
            >
              View All Program →
            </a>
          </div>
        </div>

        {/* Right Section - Program Cards Grid */}
        <div className="lg:w-[50%] w-full grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-8 mt-6 md:mt-0">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {programsLeft.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:mt-20">
            {programsRight.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
