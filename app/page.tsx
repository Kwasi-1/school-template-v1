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
    </div>
  );
}
