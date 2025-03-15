// hooks/useFormValidation.ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// 🔹 Unified Form Validation Schema
export const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").optional(),
  lastName: z.string().min(2, "Last name must be at least 2 characters").optional(),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters").optional(),
  city: z.string().min(2, "City name must be at least 2 characters").optional(),
  country: z.string().min(2, "Country name must be at least 2 characters").optional(),
  dob: z.string().optional(),
  comments: z.string().optional(),

  // 🔹 Payment Fields
  fullname: z.string().min(2, "Full name is required").optional(),
  class: z.string().min(1, "Class is required").optional(),
  amount: z.coerce.number().min(1, "Amount must be greater than zero").optional(),
});

// 🔹 Custom Hook for Form Validation
export const useFormValidation = () => {
  return useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      dob: "",
      comments: "",
      fullname: "",
      class: "",
      amount: 0,
    },
  });
};
