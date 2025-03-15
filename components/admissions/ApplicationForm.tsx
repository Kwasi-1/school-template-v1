"use client";

import PersonalInfoForm from "../PersonalInfoForm";

const ApplicationFormSection = () => {
  return (
    <section className="container py-[120px] w-[85%] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-20">
      {/* Left: Application Form */}
      <div className="lg:col-span-2">
        <h2 className="text-[40px] text-gray-900 mb-6">Application Details</h2>

        {/* Personal Information */}
        <PersonalInfoForm title="Personal Information" />
      </div>

      {/* Right: Sidebar */}
      <aside className="space-y-6">
        {/* Navigation Links */}
        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">B.A In African Studies</h3>
          <ul className="space-y-2">
            {[
              "Course Curriculum",
              "Program Faculty",
              "Apply Admission",
              "Scholarship",
              "Joint Event",
            ].map((item) => (
              <li key={item} className="text-sm hover:underline">
                <a href="#" className="flex items-center">
                  <span className="mr-2">➝</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="bg-red-900 text-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">
            Department Contact Info
          </h3>
          <p className="text-sm font-semibold">B.A. in Africana Studies</p>
          <p className="text-sm mt-2">
            <strong>Contact:</strong> <br />
            barry.Unipix@info.com <br /> 664-254-251
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {["facebook", "twitter", "instagram", "linkedin", "pinterest"].map(
              (platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-white hover:text-gray-300"
                >
                  <i className={`fab fa-${platform} text-lg`}></i>
                </a>
              )
            )}
          </div>
        </div>
      </aside>
    </section>
  );
};

export default ApplicationFormSection;
