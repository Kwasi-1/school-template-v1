"use client";

import AboutSection from "@/components/about/AboutSection";
import CampusTour from "@/components/about/CampusTour";
import HistorySection from "@/components/about/HistorySection";
import MissionValuesSection from "@/components/about/MissonValuesSection";
import ProprietorSection from "@/components/about/ProprietorSection";
import StatsSection from "@/components/about/StatsSection";

function page() {
  return (
    <div className="text-[#737477]">
      <AboutSection />
      <HistorySection />
      <StatsSection />
      <MissionValuesSection />
      {/* <CampusTour /> */}
      <ProprietorSection />
    </div>
  );
}
export default page;
