import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Base schema with common fields
const baseSchema = z.object({
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

// Schema for Payment Form
export const paymentFormSchema = baseSchema.extend({
  fullname: z.string().min(2, "Full name is required"),
  studentClass: z.string().min(1, "Class is required"),
  amount: z.coerce.number().min(1, "Amount must be greater than zero"),
});

// Schema for Contact Form
export const contactFormSchema = baseSchema.extend({
  fullname: z.string().min(2, "Full name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Schema for Admission Form
export const admissionFormSchema = baseSchema.extend({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  address: z.string().min(5, "Address must be at least 5 characters").optional(),
  country: z.string().min(2, "Country name must be at least 2 characters").optional(),
  dob: z.string().min(10, "Date of birth is required"),
  comments: z.string().optional(),
  gender: z.enum(["male", "female"]),
});

// Generic hook for form validation
export const useFormValidation = (schema: z.ZodSchema, defaultValues: Record<string, any>) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return { register, handleSubmit, watch, errors };
};

// Example usage for Admission Form
export const useAdmissionValidation = () => {
  return useFormValidation(admissionFormSchema, {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    dob: "",
    comments: "",
    gender: "male", // Default to one of the enum values
  });
};

// Example usage for Payment Form
export const usePaymentFormValidation = () => {
  return useFormValidation(paymentFormSchema, {
    email: "",
    phone: "",
    fullname: "",
    studentClass: "",
    amount: 0,
  });
};

// Example usage for Contact Form
export const useContactValidation = () => {
  return useFormValidation(contactFormSchema, {
    email: "",
    phone: "",
    fullname: "",
    message: "",
  });
};