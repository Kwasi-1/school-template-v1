"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        setUser(user);
      }
      setLoading(false);
    });
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return user ? (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
      <button
        onClick={() => signOut(auth)}
        className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded"
      >
        Logout
      </button>
    </div>
  ) : null;
}
