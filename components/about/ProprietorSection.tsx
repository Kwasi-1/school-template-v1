"use client";

import Image from "next/image";
import { aboutContent } from "@/content/about";

const ProprietorSection = () => {
  const { proprietor } = aboutContent;

  return (
    <section className="my-[100px] container-lg section-padding">
      <div className="max-w-full xl:max-w-[85%] mx-auto border border-red-200 rounded-lg p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 items-center ">
          {/* Image */}
          <div>
            <Image
              src={proprietor.image}
              alt="School Proprietor"
              className="w-3/4 h-full"
              width={400}
              height={400}
            />
          </div>

          {/* Text Content */}
          <div className="lg:-ml-10 w-6/7">
            <h3 className="text-xl font-semibold">Meet Our Proprietor</h3>
            <p className="text-gray-600 mt-4">
              Our esteemed proprietor, <strong>{proprietor.name}</strong>, is a
              visionary leader dedicated to fostering an environment of
              excellence and innovation. {proprietor.message}
            </p>

            {/* Proprietor Info */}
            <div className="mt-6 flex items-center gap-4">
              <div>
                <h4 className="font-semibold text-lg">{proprietor.name}</h4>
                <p className="text-sm text-gray-500">{proprietor.title}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                className="border border-gray-400 p-2 rounded hover:bg-gray-200"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                className="border border-gray-400 p-2 rounded hover:bg-gray-200"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProprietorSection;
