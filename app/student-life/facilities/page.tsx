"use client";

import StudentLifeDetailPage from "@/components/student-life/StudentLifeDetailPage";
import { studentLifeContent } from "@/content/student-life";

export default function FacilitiesPage() {
  const { sections } = studentLifeContent;
  const facilitiesSection = sections.find((s) => s.id === "facilities");

  if (!facilitiesSection) {
    return <div>Section not found</div>;
  }

  return (
    <StudentLifeDetailPage section={facilitiesSection} allSections={sections} />
  );
}
