"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import InputField from "../common/InputField";
import TextareaField from "../common/TextAreaField";
import { contactContent } from "@/content/contact";

const ContactForm = () => {
  const { form } = contactContent;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const newErrors: Record<string, boolean> = {};
    form.fields.forEach((field) => {
      if (
        field.required &&
        !formData[field.name as keyof typeof formData]?.trim()
      ) {
        newErrors[field.name] = true;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className="pb-[120px] px-4 md:px-8 container-lg">
      <div className="max-w-full xl:max-w-[85%] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-text-primary mb-4">
          {form.title}
        </h2>
        <p className="text-center text-text-secondary mb-12">{form.subtitle}</p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <Icon
              icon="mdi:check-circle"
              className="text-green-500 text-5xl mx-auto mb-4"
            />
            <p className="text-green-700 text-lg">{form.successMessage}</p>
          </div>
        ) : (
          /* Contact Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Enter your full name"
              />

              <InputField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="Enter your email"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                placeholder="Enter your phone number"
              />

              <InputField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="What is this regarding?"
              />
            </div>

            <TextareaField
              label="How can we help?"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="Enter your message"
              row={8}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-12 bg-primary text-primary-foreground text-base py-3 flex justify-center items-center gap-3 hover:bg-primary-hover transition duration-300"
            >
              {form.submitText}
              <Icon icon="mynaui:send-solid" className="text-xl" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
