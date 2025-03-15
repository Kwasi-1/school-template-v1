"use client";

import PersonalInfoForm from "../PersonalInfoForm";
import Image from "next/image";

const AdmissionSection = () => {
  return (
    <section className="container w-[85%] mx-auto my-[100px] px-6 lg:px-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold text-black">
          Apply For Admission
        </h2>
        <p className="text-gray-600 mt-2">
          Welcome to the gateway of possibilities, your admission to Unipix
          University. At Unipix, we understand.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Side - Image */}
        <div className="w-full lg:w-4/7">
          <Image
            src="/admission_image.webp"
            alt="Students Applying for Admission"
            width={800}
            height={800}
            className="rounded-lg shadow-md object-cover wfull h-full"
          />
        </div>

        {/* Right Side - Application Form */}
        <div className="w-f bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-black mb-4">
            Application Form
          </h3>
          <PersonalInfoForm />
        </div>
      </div>

      {/* Background Text (Admission Now) */}
      {/* <div className="text-6xl font-bold text-gray-200 absolute bottom-10 left-10 hidden lg:block">
        Admission Now
      </div> */}
    </section>
  );
};

export default AdmissionSection;
