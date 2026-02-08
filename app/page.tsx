import AboutUs from "@/components/landing/AboutUs";
import Programs from "@/components/landing/Programs";
import TuitionFees from "@/components/landing/TuitionFees";
import UpcomingEvents from "@/components/landing/UpcomingEvents";
import { siteConfig } from "@/content/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray50">
      <Programs />

      <AboutUs />
      <TuitionFees />

      {/* <AdmissionSection /> */}

      <UpcomingEvents />
    </div>
  );
}
