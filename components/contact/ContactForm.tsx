"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

// **Reusable Input Field Component**
const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error: boolean;
  placeholder: string;
}) => (
  <div>
    <label className="block text-lg font-semibold text-black">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full border-2 p-3 rounded-md ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && (
      <p className="text-red-500 text-sm mt-1">This field is required.</p>
    )}
  </div>
);

// **Reusable Textarea Field Component**
const TextareaField = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error: boolean;
  placeholder: string;
}) => (
  <div>
    <label className="block text-lg font-semibold text-black">
      {label} <span className="text-red-500">*</span>
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={4}
      className={`w-full border-2 p-3 rounded-md ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    ></textarea>
    {error && (
      <p className="text-red-500 text-sm mt-1">This field is required.</p>
    )}
  </div>
);

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
    <section className="py-16 px-4 md:px-8 w-[85%] container mx-auto">
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
        />

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
