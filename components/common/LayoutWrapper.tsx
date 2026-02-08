"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/common/Hero";
import Footer from "@/components/common/Footer";
import BackToTopButton from "@/components/common/BackToTopButton";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage =
    pathname.startsWith("/admin") || pathname.startsWith("/login");
  const isNewsPage = pathname === "/news" || pathname.startsWith("/news/");

  return (
    <>
      {!isAdminPage && <Navbar />}
      <div className={` ${!isAdminPage && "mt-[100px]"}`}>
        {!isAdminPage && !isNewsPage && <HeroSection />}
        {children}
        {!isAdminPage && <Footer />}
        {!isAdminPage && <BackToTopButton />}
      </div>
    </>
  );
}
