"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = {
      fullName: !formData.fullName,
      email: !formData.email,
      message: !formData.message,
    };
    setErrors(newErrors);

    if (!newErrors.fullName && !newErrors.email && !newErrors.message) {
      alert("Message Sent!");
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-3xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-8">
        Get in Touch
      </h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-lg font-semibold text-black">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full border-2 p-3 rounded-md ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-lg font-semibold text-black">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className={`w-full border-2 p-3 rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-lg font-semibold text-black">
            How can we Help? <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className={`w-full border-2 p-3 rounded-md ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-maroon text-white text-lg font-semibold py-3 rounded-md flex justify-center items-center gap-2 bg-red-800 hover:bg-black transition duration-300"
        >
          Send Message
          <Icon icon="mynaui:send-solid" className="text-xl" />
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
