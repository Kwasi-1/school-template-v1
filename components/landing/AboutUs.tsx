"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative w-full h-full py-10">
      {/* Background Section */}
      <div className=" text-white bg-[#800020] h-[450px]">
        <div className="relative  w-[92%] mx-auto py-20 px-10 md:px-20 flex flex-col md:flex-row justify-center container">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="relative">
                Embark on a Journey: <br /> Unveiling the Story of{" "}
                <span className="text-white">Unipix University</span>
              </span>
            </h2>

            <a
              href="#"
              className="inline-block text-white border-b-2 border-white font-medium hover:opacity-80 transition duration-300"
            >
              Learn More →
            </a>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 relative mt-10 md:mt-0">
            <p className="text-lg leading-relaxed">
              Embark on a journey of knowledge, discovery, and growth at Unipix
              University. Our admissions process is designed to identify bright,
              motivated individuals who are eager to contribute to our dynamic
              academic community.
            </p>
            <div className="relative overflow-hidden rounded-lg mt-10 md:mt-8">
              <Image
                src="/About_us_image.webp"
                alt="University Library"
                width={500}
                height={500}
                className="rounded-lg w-full h-full object-cover z-50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Overlapping Section */}
      <div className=" w-full text-gray-300 text-6xl md:text-8xl font-bold px-10 md:px-20">
        About University
      </div>
    </section>
  );
}
