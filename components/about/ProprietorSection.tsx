"use client";

import Image from "next/image";

const ProprietorSection = () => {
  return (
    <section className="w-[85%] mx-auto my-[100px] border border-red-200 rounded-lg p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 items-center ">
        {/* Image */}
        <div>
          <Image
            src="/proprietor.webp"
            alt="School Proprietor"
            className="w-3/4 h-full "
            width={400}
            height={400}
          />
        </div>

        {/* Text Content */}
        <div className="lg:-ml-10 w-6/7">
          <h3 className="text-xl font-semibold">Meet Our Proprietor</h3>
          <p className="text-gray-600 mt-4">
            Our esteemed proprietor, <strong>Michael Richard</strong>, is a
            visionary leader dedicated to fostering an environment of excellence
            and innovation. With years of experience in the education sector, he
            has been instrumental in shaping the school's mission and values.
            His passion for education continues to inspire students and staff
            alike.
          </p>

          {/* Proprietor Info */}
          <div className="mt-6 flex items-center gap-4">
            <div>
              <h4 className="font-semibold text-lg">Michael Richard</h4>
              <p className="text-sm text-gray-500">Founder & Proprietor</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="border border-gray-400 p-2 rounded hover:bg-gray-200">
              ←
            </button>
            <button className="border border-gray-400 p-2 rounded hover:bg-gray-200">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProprietorSection;
