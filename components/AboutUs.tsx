"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative w-full">
      {/* Background Section */}
      <div className="relative bg-[#800020] text-white py-20 px-10 md:px-20 flex flex-col md:flex-row items-center">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="relative">
              Embark on a Journey: <br /> Unveiling the Story of{" "}
              <span className="text-white">Unipix University</span>
            </span>
          </h2>
          <p className="text-lg leading-relaxed">
            Embark on a journey of knowledge, discovery, and growth at Unipix
            University. Our admissions process is designed to identify bright,
            motivated individuals who are eager to contribute to our dynamic
            academic community.
          </p>
          <a
            href="#"
            className="inline-block text-white border-b-2 border-white font-medium hover:opacity-80 transition duration-300"
          >
            Learn More →
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 relative mt-10 md:mt-0">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/library.jpg"
              alt="University Library"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Overlapping Section */}
      <div className="absolute bottom-0 left-0 w-full text-gray-300 text-6xl md:text-8xl font-bold opacity-30 px-10 md:px-20">
        About University
      </div>

      {/* Floating Button */}
      <button className="absolute bottom-10 right-10 bg-[#800020] text-white p-4 rounded-full shadow-lg hover:bg-[#66001a] transition duration-300">
        ↑
      </button>
    </section>
  );
}
