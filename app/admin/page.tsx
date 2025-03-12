"use client";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [totalFees, setTotalFees] = useState(0);
  const [outstandingFees, setOutstandingFees] = useState(0);
  const [overdueCount, setOverdueCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const studentsSnapshot = await getDocs(collection(db, "students"));
      let total = 0,
        outstanding = 0,
        overdue = 0;
      studentsSnapshot.forEach((doc) => {
        const data = doc.data();
        total += data.total_fees_due;
        outstanding += data.balance_due;
        if (data.status === "Overdue") overdue++;
      });
      setTotalFees(total);
      setOutstandingFees(outstanding);
      setOverdueCount(overdue);
    }

    fetchData();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Total Fees Collected</h2>
          {/* <p className="text-2xl font-bold text-green-600">GHS {totalFees - outstanding}</p> */}
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Outstanding Fees</h2>
          <p className="text-2xl font-bold text-red-600">
            GHS {outstandingFees}
          </p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Overdue Payments</h2>
          <p className="text-2xl font-bold text-yellow-600">{overdueCount}</p>
        </div>
      </div>
    </div>
  );
}
