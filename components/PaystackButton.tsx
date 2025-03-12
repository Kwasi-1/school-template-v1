"use client";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import axios from "axios";

export default function PaystackPayment({ studentId, studentName, amount, parentEmail, parentPhone }) {
  const publicKey = "YOUR_PAYSTACK_PUBLIC_KEY";
  const [paymentStatus, setPaymentStatus] = useState("");

  const onSuccess = async (reference) => {
    setPaymentStatus("Payment successful! ✅");
    await axios.post("/api/payment", { studentId, amount, reference });
  };

  const onClose = () => {
    setPaymentStatus("Payment window closed ❌");
  };

  return (
    <div>
      <h3 className="text-lg font-bold">{studentName}'s Fee Payment</h3>
      <p>Amount: GHS {amount}</p>
      <PaystackButton
        text="Pay Now"
        amount={amount * 100} // Convert GHS to kobo
        email={parentEmail}
        phone={parentPhone}
        publicKey={publicKey}
        currency="GHS"
        onSuccess={onSuccess}
        onClose={onClose}
        className="bg-green-600 text-white py-2 px-4 rounded"
      />
      {paymentStatus && <p className="mt-2">{paymentStatus}</p>}
    </div>
  );
}
