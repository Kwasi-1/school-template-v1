"use client";

// import { FaArrowUp } from "react-icons/fa";

export default function TuitionFees() {
  return (
    <section className="relative pt-[100px] pb-[120px] px-6 md:px-20 ">
      <div className="w-[92%] mx-auto flex flex-col md:flex-row items-center gap-6 container">
        {/* Title Section */}
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold leading-tight">
            Tuition Fees At <br /> Unipix University
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
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
        <div className="bg-[#800020] text-white rounded-[10px] p-[40px] md:w-1/2">
          <h3 className="text-2xl font-semibold">Undergraduate Programs</h3>

          <div className="mt-4">
            <h4 className="font-semibold underline">
              College of Arts and Sciences
            </h4>
            <ul className="mt-2 space-y-1">
              <li>✔ Full-Time Tuition (per semester): $241</li>
              <li>✔ Part-Time Tuition (per credit): $141</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold underline">School of Business</h4>
            <ul className="mt-2 space-y-1">
              <li>✔ Full-Time Tuition (per semester): $241</li>
              <li>✔ Part-Time Tuition (per credit): $141</li>
            </ul>
          </div>
        </div>

        {/* Graduate Programs */}
        <div className="bg-gray-100 text-black rounded-[10px] p-[40px] md:w-1/2">
          <h3 className="text-2xl font-semibold">Graduate Programs</h3>

          <div className="mt-4">
            <h4 className="font-semibold">Graduate School/Department</h4>
            <ul className="mt-2 space-y-1">
              <li>✔ Full-Time Tuition (per semester): $241</li>
              <li>✔ Part-Time Tuition (per credit): $141</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold underline">Additional Fees</h4>
            <ul className="mt-2 space-y-1">
              <li>✔ Technology Fee: $149 per semester</li>
              <li>✔ Student Activity Fee: $99 per semester</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
