import type { Metadata } from "next";
// import "@/styles/globals.css";
import Sidebar from "@/components/admin/Sidebar";

export const metadata: Metadata = {
  title: "School Admin Dashboard",
  description: "Manage student fees and payments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
