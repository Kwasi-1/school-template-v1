"use client";

import { useState } from "react";
import { useFormValidation } from "@/hooks/useFormValidation";
import { PaystackButton } from "react-paystack";
import InputField from "../InputField";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormValidation();
  const publicKey = "pk_test_xxxxxxxxxxxxxxxxxxxxxx";

  const [formData, setFormData] = useState({
    fullname: "",
    class: "",
    email: "",
    phone: "",
    amount: Number,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const paystackConfig = {
    email: formData.email,
    amount: 10000,
    publicKey,
    onSuccess: () => {
      toast.success("Payment Successful! 🎉");
    },
    onClose: () => {
      toast.error("Payment Cancelled ❌");
    },
  };

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        label="Student Full Name"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
      />
      <InputField
        label="Class"
        name="class"
        value={formData.class}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <InputField
        label="Amount"
        name="amount"
        type="number"
        value={formData.amount}
        onChange={handleChange}
      />

      <div className="col-span-1 md:col-span-2">
        <PaystackButton
          className="w-full bg-[#890c25] text-white text-lg font-semibold py-3 mt-6 hover:bg-black transition duration-300"
          {...paystackConfig}
          text="Pay Admission Fee"
        />
      </div>
    </form>
  );
};

export default PaymentForm;
