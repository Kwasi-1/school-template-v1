"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      const snapshot = await getDocs(collection(db, "students"));
      setStudents(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }

    fetchStudents();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Students</h1>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Class</th>
            <th className="border p-2">Balance</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border">
              <td className="p-2">{student.full_name}</td>
              <td className="p-2">{student.class}</td>
              <td className="p-2 text-red-500">GHS {student.balance_due}</td>
              <td
                className={`p-2 ${
                  student.status === "Paid"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {student.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
