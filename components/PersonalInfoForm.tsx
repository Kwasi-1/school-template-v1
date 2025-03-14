"use client";

import { useState } from "react";
import InputField from "./InputField";
// import TextareaField from "./TextareaField";

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    className: "",
    parentName: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    dob: false,
    gender: false,
    className: false,
    parentName: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      firstName: !formData.firstName.trim(),
      lastName: !formData.lastName.trim(),
      email: !formData.email.trim(),
      phone: !formData.phone.trim(),
      dob: !formData.dob.trim(),
      gender: !formData.gender.trim(),
      className: !formData.className.trim(),
      parentName: !formData.parentName.trim(),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((field) => !field)) {
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <section className=" container mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-black mb-6 ">
        Personal Information
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <InputField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          placeholder="First Name"
        />

        <InputField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          placeholder="Last Name"
        />

        <InputField
          label="Your Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter your mail"
        />

        <InputField
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="Type your phone number"
        />

        <InputField
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          error={errors.dob}
          placeholder="dd/mm/yy"
        />

        {/* Gender Dropdown */}
        <div>
          <label className="block text-base font-semibold text-black">
            Gender <span className="text-[#890c25]">*</span>
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            aria-placeholder="Select Gender"
            className={`w-full border py-3 px-4 mt-3 ${
              errors.gender
                ? "border-red-500"
                : "border-[#ddd] focus:border-[#890c25] outline-0"
            }`}
          >
            {/* <option value="">Select Gender</option> */}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
        </div>

        <InputField
          label="Class Name"
          name="className"
          value={formData.className}
          onChange={handleChange}
          error={errors.className}
          placeholder="Enter class name"
        />

        <InputField
          label="Parent Name"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          error={errors.parentName}
          placeholder="Enter parent name"
        />

        <div className="colspan-1 md:col-span-2">
          <InputField
            label="Country"
            name="country"
            value={formData.dob}
            onChange={handleChange}
            error={errors.dob}
            placeholder="Enter your country"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-[#890c25] text-white text-lg font-semibold py-3 mt-8 hover:bg-black transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default PersonalInfoForm;
