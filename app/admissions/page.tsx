"use client";

import AdmissionOverview from "@/components/admissions/AdmissionOverview";
import AdmissionSteps from "@/components/admissions/AdmissionSteps";
import RequirementsList from "@/components/admissions/RequirementsList";
import ImportantDates from "@/components/admissions/ImportantDates";
import ApplyNowSection from "@/components/admissions/ApplyNowSection";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Overview Section */}
      <AdmissionOverview />

      {/* Admission Steps */}
      <AdmissionSteps />

      {/* Requirements by Level */}
      <RequirementsList />

      {/* Important Dates */}
      <ImportantDates />

      {/* Apply Now Section (Combined CTA) */}
      <ApplyNowSection />
    </div>
  );
}
