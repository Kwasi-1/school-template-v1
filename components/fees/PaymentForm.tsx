"use client";

import { PaystackButton } from "react-paystack";
import { usePaymentFormValidation } from "@/hooks/useFormValidation";
import { useToast } from "@/hooks/useToast";
import InputField from "../InputField";

interface PaymentFormData {
  fullname: string;
  studentClass: string;
  email: string;
  phone: string;
  amount: number;
}

const PaymentForm = () => {
  const publicKey = "pk_test_c8e9fcf6be7da2f938b8d277203a0b781fff6c39";
  const toast = useToast();

  const { register, handleSubmit, watch, errors } = usePaymentFormValidation();

  const onSubmit = () => {
    toast.loading("Processing payment...");
    setTimeout(() => {
      toast.dismiss();
      toast.success("Payment Successful! 🎉");
    }, 2000);
  };

  const paystackConfig = {
    email: watch("email") || "", // Fallback to empty string if undefined
    amount: (watch("amount") || 0) * 100, // Convert to kobo/pesewas
    currency: "GHS", // Change based on your country (NGN, ZAR, USD)
    publicKey,
    callback: () => toast.success("Payment Successful! 🎉"), // Fix here
    onClose: () => toast.error("Payment Cancelled ❌"),
  };

  return (
    <section className="container mx-auto w-[85%] py-[100px] ">
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          label="Full Name"
          {...register("fullname")}
          error={errors.fullname?.message?.toString()}
          name="fullname"
        />
        <InputField
          label="Class"
          {...register("studentClass")}
          error={errors.studentClass?.message?.toString()}
          name="class"
        />
        <InputField
          label="Email"
          {...register("email")}
          error={errors.email?.message?.toString()}
          name="email"
        />
        <InputField
          label="Phone Number"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message?.toString()}
          name="phone"
        />
        <InputField
          label="Amount"
          type="number"
          {...register("amount")}
          error={errors.amount?.message?.toString()}
          name="amount"
        />

        <div className="col-span-1 md:col-span-2">
          <PaystackButton
            className="w-full bg-[#890c25] text-white text-lg font-semibold py-3 mt-6 hover:bg-black transition duration-300"
            {...paystackConfig}
            text="Pay Admission Fee"
          />
        </div>
      </form>
    </section>
  );
};

export default PaymentForm;
