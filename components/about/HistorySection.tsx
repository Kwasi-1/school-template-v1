"use client";

import Image from "next/image";

const HistorySection = () => {
  return (
    <section className="w-[85%] mx-auto py-[100px] container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
        {/* Image */}
        <div>
          <Image
            src="/About_us_image.webp" // Change to your actual image path
            alt="Library and bust statues"
            className="w-full object-cover"
            width={300}
            height={300}
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl text-black">The history of Unipix</h2>
          <p className=" leading-relaxed mt-8">
            On September 8, 1971, Unipix, the first college in the American
            colonies, was founded in Cambridge, Massachusetts. Unipix University
            was officially founded by a vote by the Great and General Court of
            the Massachusetts Bay Colony.
          </p>
          <p className=" leading-relaxed mt-4">
            Unipix endowment started with John Unipix’s initial donation of 400
            books and half his estate, but in 1721, Thomas Hollis began the now
            standard practice of requiring that a donation be used for a
            specific purpose when he donated money for “a Divinity Professor, to
            read lectures in the Halls to the students.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
