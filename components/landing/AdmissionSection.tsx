"use client";

import PersonalInfoForm from "../common/PersonalInfoForm";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site-config";

const AdmissionSection = () => {
  const { admission } = homeContent;

  return (
    <section className="container-lg my-[100px] section-padding lg:px-12">
      <div className="max-w-full xl:max-w-[85%] mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-text-primary">
            {admission.title}
          </h2>
          <p className="text-gray-600 mt-2">{admission.description}</p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side - Image */}
          <div className="w-full lg:w-4/7">
            <Image
              src={admission.image}
              alt="Students Applying for Admission"
              width={800}
              height={800}
              className="rounded-lg shadow-md object-cover wfull h-full"
            />
          </div>

          {/* Right Side - Application Form */}
          <div className="w-f bg-white p-6 rounded-lg shadow-lg">
            <PersonalInfoForm title={admission.formTitle} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
