"use client";

import ProgramOverview from "@/components/programs/ProgramOverview";
import ProgramLevels from "@/components/programs/ProgramLevels";
import CurriculumFeatures from "@/components/programs/CurriculumFeatures";
import WhyChooseUs from "@/components/programs/WhyChooseUs";
import Extracurriculars from "@/components/programs/Extracurriculars";
import CTABanner from "@/components/common/CTABanner";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Overview Section */}
      <ProgramOverview />

      {/* Curriculum Features */}
      <CurriculumFeatures />

      {/* School Levels */}
      <ProgramLevels />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Extra-curriculars */}
      <Extracurriculars />

      {/* CTA Banner */}
      <CTABanner
        subtitle="Ready to Join?"
        title="Start Your Child's Journey Today"
        primaryButtonText="Apply Now"
        primaryButtonHref="/apply"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
        variant="dark"
      />
    </div>
  );
}
