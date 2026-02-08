"use client";

import SectionHeader from "@/components/common/SectionHeader";
import FeeBreakdown from "@/components/fees/FeeBreakdown";
import PaymentMethods from "@/components/fees/PaymentMethods";
import ScholarshipSection from "@/components/fees/ScholarshipSection";
import FeeNotes from "@/components/fees/FeeNotes";
import CTABanner from "@/components/common/CTABanner";
import { feesContent } from "@/content/fees";

export default function FeesPage() {
  const { overview } = feesContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Overview Section */}
      <section className="container-lg mx-auto section-padding">
        <div className="max-w-full xl:max-w-[85%] mx-auto py-16 md:py-24">
          <SectionHeader
            subtitle={overview.subtitle}
            title={overview.title}
            description={overview.description}
            centered
          />
        </div>
      </section>

      {/* Fee Breakdown */}
      <FeeBreakdown />

      {/* Payment Methods */}
      <PaymentMethods />

      {/* Scholarships */}
      <ScholarshipSection />

      {/* Important Notes */}
      <FeeNotes />

      {/* CTA Banner */}
      <CTABanner
        subtitle="Ready to Enroll?"
        title="Start the Admission Process Today"
        primaryButtonText="Apply Now"
        primaryButtonHref="/admissions"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
        variant="primary"
      />
    </div>
  );
}
