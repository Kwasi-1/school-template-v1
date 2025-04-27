"use client";

import AboutUs from "@/components/landing/AboutUs";
import AdmissionSection from "@/components/landing/AdmissionSection";
import Programs from "@/components/landing/Programs";
import TuitionFees from "@/components/landing/TuitionFees";
import UpcomingEvents from "@/components/landing/UpcomingEvents";
import Head from "next/head";

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

      {/* <AdmissionSection /> */}

      <UpcomingEvents />
    </div>
  );
}
