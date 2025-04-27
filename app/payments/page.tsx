"use client";
import PaystackPayment from "@/components/PaystackButton";

export default function Payments() {
  const studentId = "123456";
  const studentName = "John Doe";
  const amount = 500; // Amount in GHS
  const parentEmail = "parent@example.com";
  const parentPhone = "+233501234567";

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Make a Payment</h1>
      <PaystackPayment
        studentId={studentId}
        studentName={studentName}
        amount={amount}
        parentEmail={parentEmail}
        parentPhone={parentPhone}
      />
    </div>
  );
}
