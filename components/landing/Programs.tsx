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
    <section className="container mx-auto">
      <div className="w-[85%] mx-auto px-6 py-[120px] flex flex-col md:flex-row items-center gap-20">
        {/* Left Section - Heading & Text */}
        <div className="md:w-[45%]">
          <h2 className="text-5xl">Our Programs</h2>
          <p className="mt-8 text-[#737477] leading-relaxed">
            Embark on a journey of knowledge, discovery, and growth at Unipix
            University. Our admissions process is designed to identify bright,
            motivated individuals who are eager to contribute to our dynamic
            academic community.
          </p>

          {/* Curved Arrow + View Button */}
          <div className="relative mt-10 flex pt-[60px] pl-[100px] items-center ">
            <Image
              src="/arrow.webp"
              alt="Arrow"
              width={120}
              height={120}
              className=""
            />
            <div className="pt-10 ">
              <a
                href="#"
                className="inline-block bg-[#A41E27] text-white px-6 p-3 text-lg font-medium rounded-full -rotate-52 
            hover:bg-black transition duration-300"
              >
                View All Program →
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Program Cards Grid */}
        <div className="md:w-[50%] grid grid-cols-2 gap-8 mt-10 md:mt-0">
          {/* Left Column */}

          <div className="flex flex-col gap-6">
            {programsLeft.map((program, index) => (
              // <div
              //   key={index}
              //   className="relative rounded-lg max-w-[300px] max-h-[300] group overflow-hidden"
              // >

              <ProgramCard key={index} {...program} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 mt-20">
            {programsRight.map((program, index) => (
              // <div
              //   key={index}
              //   className="relative rounded-lg max-w-[300px] max-h-[300] group overflow-hidden"
              // >

              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
