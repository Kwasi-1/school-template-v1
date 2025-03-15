"use client";

import { useAdmissionValidation } from "@/hooks/useFormValidation";
import { useToast } from "@/hooks/useToast";
import InputField from "./InputField";

interface PersonalInfoFormProps {
  title: string;
}

const PersonalInfoForm = ({ title }: PersonalInfoFormProps) => {
  const toast = useToast();
  const { register, handleSubmit, watch, errors } = useAdmissionValidation();

  const onSubmit = (data: any) => {
    toast.loading("Submitting admission form...");

    setTimeout(() => {
      toast.dismiss();
      toast.success("Admission Form Submitted Successfully! 🎉");
      console.log("Submitted Data:", data); // Log form data (optional)
    }, 2000);
  };

  return (
    <section className="container mx-auto">
      {/* Heading */}
      <h2 className="text-2xl text-black mb-6 capitalize tracking-wide">{title}</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <InputField
          label="First Name"
          {...register("firstName")}
          error={errors.firstName?.message?.toString()}
        />

        <InputField
          label="Last Name"
          {...register("lastName")}
          error={errors.lastName?.message?.toString()}
        />

        <InputField
          label="Your Email"
          type="email"
          {...register("email")}
          error={errors.email?.message?.toString()}
        />

        <InputField
          label="Phone Number"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message?.toString()}
        />

        <InputField
          label="Date of Birth"
          type="date"
          {...register("dob")}
          error={errors.dob?.message?.toString()}
        />

        {/* Gender Dropdown */}
        <div>
          <label className="block text-base font-semibold text-black">
            Gender <span className="text-[#890c25]">*</span>
          </label>
          <select
            {...register("gender")}
            className={`w-full border py-3 px-4 mt-3 ${
              errors.gender
                ? "border-red-500"
                : "border-[#ddd] focus:border-[#890c25] outline-0"
            }`}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
        </div>

        <InputField
          label="Class Name"
          {...register("className")}
          error={errors.className?.message?.toString()}
        />

        <InputField
          label="Parent Name"
          {...register("parentName")}
          error={errors.parentName?.message?.toString()}
        />

        <InputField
          label="Country"
          {...register("country")}
          error={errors.country?.message?.toString()}
        />

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
