"use client";

import StudentLifeDetailPage from "@/components/student-life/StudentLifeDetailPage";
import { studentLifeContent } from "@/content/student-life";

export default function ClubsPage() {
  const { sections } = studentLifeContent;
  const clubsSection = sections.find((s) => s.id === "clubs");

  if (!clubsSection) {
    return <div>Section not found</div>;
  }

  return (
    <StudentLifeDetailPage section={clubsSection} allSections={sections} />
  );
}
