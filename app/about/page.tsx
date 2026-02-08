import AboutSection from "@/components/about/AboutSection";
import CampusTour from "@/components/about/CampusTour";
import HistorySection from "@/components/about/HistorySection";
import MissionValuesSection from "@/components/about/MissonValuesSection";
import ProprietorSection from "@/components/about/ProprietorSection";
import StatsSection from "@/components/about/StatsSection";
import { siteConfig } from "@/content/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Us - ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name}, our history, mission, values, and commitment to excellence in education.`,
};

export default function AboutPage() {
  return (
    <div className="text-text-secondary">
      <AboutSection />
      <HistorySection />
      <StatsSection />
      <MissionValuesSection />
      {/* <CampusTour /> */}
      <ProprietorSection />
    </div>
  );
}
