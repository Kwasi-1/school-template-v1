"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import InputField from "../InputField";
import TextareaField from "../TextAreaField";

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
    const newErrors = {
      fullName: !formData.fullName.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);

    if (!newErrors.fullName && !newErrors.email && !newErrors.message) {
      alert("Message Sent!");
    }
  };

  return (
    <section className="pb-[120px] px-4 md:px-8 w-[85%] container mx-auto">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-black mb-12">
        Get in Touch
      </h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          placeholder="Your name"
        />

        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Your email"
        />

        <TextareaField
          label="How can we help?"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          placeholder="Your message"
          row={8}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-12 bg-maroon text-white text-lg py-3 flex justify-center items-center gap-3 bg-[#890C25] hover:bg-black transition duration-300"
        >
          Send Message
          <Icon icon="mynaui:send-solid" className="text-xl" />
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
