"use client";

import ApplicationForm from "@/components/admissions/ApplicationForm";
import CTABanner from "@/components/common/CTABanner";

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Application Form */}
      <ApplicationForm />

      {/* CTA Banner */}
      <div className="mt-10 max-w-[85%] mx-auto">
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
    </div>
  );
}
