"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function AdminDashboard() {
  const [payments, setPayments] = useState([]);
  const schoolId = localStorage.getItem("school_id");

  useEffect(() => {
    const fetchPayments = async () => {
      if (!schoolId) return;

      const q = query(
        collection(db, "payments"),
        where("school_id", "==", schoolId)
      );
      const querySnapshot = await getDocs(q);
      setPayments(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    fetchPayments();
  }, [schoolId]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <h2 className="text-lg font-semibold mt-4">Payments</h2>
      {payments.map((payment) => (
        <div key={payment.id} className="border p-3 mb-2">
          <p>Student: {payment.student_name}</p>
          <p>Amount: GHS {payment.amount}</p>
        </div>
      ))}
    </div>
  );
}
