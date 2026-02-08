"use client";

import AdmissionOverview from "@/components/admissions/AdmissionOverview";
import AdmissionSteps from "@/components/admissions/AdmissionSteps";
import RequirementsList from "@/components/admissions/RequirementsList";
import ImportantDates from "@/components/admissions/ImportantDates";
import ApplyNowSection from "@/components/admissions/ApplyNowSection";
import CTABanner from "@/components/common/CTABanner";

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

      {/* Apply Now Section */}
      <ApplyNowSection />

      {/* CTA Banner */}
      <CTABanner
        subtitle="Need Help?"
        title="Contact Our Admissions Team"
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="Call Now"
        secondaryButtonHref="tel:+233241234567"
        variant="primary"
      />
    </div>
  );
}
