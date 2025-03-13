"use client";

import AboutUs from "@/components/AboutUs";
import AdmissionForm from "@/components/AdmissionForm";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Programs from "@/components/Programs";
import TuitionFees from "@/components/TuitionFees";
import UpcomingEvents from "@/components/UpcomingEvents";
import { Icon } from "@iconify/react/dist/iconify.js";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray50">
      <Head>
        <title>Greenwood Primary School</title>
        <meta
          name="description"
          content="Welcome to Greenwood Primary School - A place for learning and growth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Programs />

      <AboutUs />
      <TuitionFees />

      {/* <AdmissionForm /> */}

      <UpcomingEvents />

      {/* Footer */}
      <Footer />

      {/* Floating Scroll-Up Button */}
      <Link
        href="#herosection"
        className="fixed bottom-6 right-6 bg-[#800020] text-white hover:text-white p-4 rounded-full shadow-xl hover:bg-[#66001a] transition"
      >
        <Icon icon="iconoir:fast-arrow-up" className="text-xl font-thin" />
      </Link>
    </div>
  );
}
