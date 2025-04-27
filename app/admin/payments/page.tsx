"use client";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    async function fetchPayments() {
      const snapshot = await getDocs(collection(db, "payments"));
      setPayments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }

    fetchPayments();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Payments</h1>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Student</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className="border">
              <td className="p-2">{payment.student_id}</td>
              <td className="p-2 text-green-500">GHS {payment.amount_paid}</td>
              <td className="p-2">
                {new Date(payment.payment_date).toLocaleDateString()}
              </td>
              <td
                className={`p-2 ${
                  payment.status === "Successful"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {payment.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
