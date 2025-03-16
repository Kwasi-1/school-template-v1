"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}
      <div className={` ${!isAdminPage && "mt-[100px]" }`}>
        {!isAdminPage && <HeroSection />}
        {children}
        {!isAdminPage && <Footer />}
        {!isAdminPage && <BackToTopButton />}
      </div>
    </>
  );
}
