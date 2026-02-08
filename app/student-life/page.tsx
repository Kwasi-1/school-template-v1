"use client";

import StudentLifeHero from "@/components/student-life/StudentLifeHero";
import StudentLifeNav from "@/components/student-life/StudentLifeNav";
import StudentLifeSection from "@/components/student-life/StudentLifeSection";
import CTABanner from "@/components/common/CTABanner";
import { studentLifeContent } from "@/content/student-life";

export default function StudentLifePage() {
  const { sections } = studentLifeContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <StudentLifeHero /> */}

      {/* Sub Navigation */}
      <StudentLifeNav />

      {/* Sections */}
      {sections.map((section, index) => (
        <StudentLifeSection key={section.id} section={section} index={index} />
      ))}

      {/* CTA Banner */}
      {/* <CTABanner
        subtitle="Ready to Join Us?"
        title="Experience Student Life First-Hand"
        primaryButtonText="Schedule a Visit"
        primaryButtonHref="/contact"
        secondaryButtonText="Apply Now"
        secondaryButtonHref="/admissions"
        variant="primary"
      /> */}
    </div>
  );
}
