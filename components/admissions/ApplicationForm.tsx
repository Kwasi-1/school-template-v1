"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { admissionsContent } from "@/content/admissions";
import schoolConfig from "@/config/school.config";

interface FormData {
  // Student Info
  studentFirstName: string;
  studentLastName: string;
  dateOfBirth: string;
  gender: string;
  level: string;

  // Parent/Guardian Info
  parentName: string;
  relationship: string;
  phone: string;
  email: string;
  address: string;

  // Additional
  previousSchool: string;
  message: string;
}

const initialFormData: FormData = {
  studentFirstName: "",
  studentLastName: "",
  dateOfBirth: "",
  gender: "",
  level: "",
  parentName: "",
  relationship: "",
  phone: "",
  email: "",
  address: "",
  previousSchool: "",
  message: "",
};

const ApplicationForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-16 md:py-24 px-4">
        <div className="container-lg mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon
                icon="mdi:check-circle"
                className="w-12 h-12 text-green-600"
              />
            </div>
            <h2 className="text-3xl font-semibold mb-4">
              Application Submitted!
            </h2>
            <p className="text-[#737477] mb-8">
              Thank you for applying to {schoolConfig.name}. We have received
              your application and will contact you within 5-7 business days.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-[#800020] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#66001a] transition"
            >
              Return Home
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm uppercase tracking-wider font-medium text-[#800020]">
              Start Your Journey
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2">
              Apply Online
            </h2>
            <p className="mt-4 text-[#737477] max-w-2xl mx-auto">
              Complete the form below to begin your application. Application
              fee: {admissionsContent.applicationFee}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10">
              {/* Student Information */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-[#800020]">
                  <Icon icon="mdi:account-school" />
                  Student Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="studentFirstName"
                      value={formData.studentFirstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none transition"
                      placeholder="Enter first name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="studentLastName"
                      value={formData.studentLastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none transition"
                      placeholder="Enter last name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none transition"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Applying For *
                    </label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none transition"
                    >
                      <option value="">Select level/class</option>
                      {admissionsContent.levels.map((level, idx) => (
                        <option key={idx} value={level.level}>
                          {level.level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Information */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-[#800020]">
                  <Icon icon="mdi:account-child" />
                  Parent/Guardian Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none transition"
                      placeholder="Enter parent/guardian name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Relationship *
                    </label>
                    <select
                      name="relationship"
                      value={formData.relationship}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none transition"
                    >
                      <option value="">Select relationship</option>
                      <option value="father">Father</option>
                      <option value="mother">Mother</option>
                      <option value="guardian">Guardian</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none transition"
                      placeholder="e.g., 024 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none transition"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Residential Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none transition"
                      placeholder="Enter residential address"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-[#800020]">
                  <Icon icon="mdi:information-outline" />
                  Additional Information
                </h3>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Previous School (if applicable)
                    </label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none transition"
                      placeholder="Enter previous school name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 outline-none transition resize-none"
                      placeholder="Any additional information you'd like to share..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-gray-100">
                <p className="text-sm text-[#737477]">
                  <Icon
                    icon="mdi:information-outline"
                    className="inline mr-1"
                  />
                  All fields marked with * are required
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-[#800020] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#66001a] disabled:opacity-50 disabled:cursor-not-allowed transition w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Icon icon="mdi:loading" className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Icon icon="mdi:arrow-right" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
