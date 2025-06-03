"use client";

// import { FaArrowUp } from "react-icons/fa";

export default function TuitionFees() {
  return (
    <section className="relative pt-[100px] pb-[120px] px-5 2xl:px20 leading-loose ">
      <div className="container-lg mx-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 2xl:items-center gap-y-8 lg:gap-x-8">
          {/* Title Section */}
          <div className="max-w-3xl flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight">
              Tuition Fees At <br className="hidden lg:block" /> Unipix
              University
            </h2>
            <p className="text-gray-500 mt-4 text-sm md:text-base sm:text-lg">
              At Unipix University Name we are committed to providing a
              high-quality education that is accessible to a diverse range of
              students.
            </p>
            <button className="mt-6 bg-[#800020] text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#66001a] transition">
              Plan Details →
            </button>
          </div>

          {/* Tuition Cards */}
          {/* Undergraduate Programs */}
          <div className="col-span-2 flex flex-col md:flex-row gap-6 w-full">
            <div className="flex-1 bg-[#800020] text-white rounded-[10px] p-[40px] md:w-1/2">
              <h3 className="text-3xl">Undergraduate Programs</h3>

              <div className="mt-4">
                <h4 className="font-semibold underline font-inter py-5 text-2xl">
                  College of Arts and Sciences
                </h4>
                <ul className="mt-2 space-y-1">
                  <li>✔ Full-Time Tuition (per semester): $241</li>
                  <li>✔ Part-Time Tuition (per credit): $141</li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-2xl mb-4 underline">School of Business</h4>
                <ul className="mt-2 space-y-1">
                  <li>✔ Full-Time Tuition (per semester): $241</li>
                  <li>✔ Part-Time Tuition (per credit): $141</li>
                </ul>
              </div>
            </div>

            {/* Graduate Programs */}
            <div className="flex-1 bg-gray-100 text-black rounded-[10px] p-[40px] md:w-1/2">
              <h3 className="text-3xl ">Graduate Programs</h3>

              <div className="mt-4">
                <h4 className="font-inter py-5 text-2xl">
                  Graduate School/Department
                </h4>
                <ul className="mt-2 space-y-1">
                  <li>✔ Full-Time Tuition (per semester): $241</li>
                  <li>✔ Part-Time Tuition (per credit): $141</li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className=" text-2xl mb-4 underline">Additional Fees</h4>
                <ul className="mt-2 space-y-1">
                  <li>✔ Technology Fee: $149 per semester</li>
                  <li>✔ Student Activity Fee: $99 per semester</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
