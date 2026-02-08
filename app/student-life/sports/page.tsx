"use client";

import StudentLifeDetailPage from "@/components/student-life/StudentLifeDetailPage";
import { studentLifeContent } from "@/content/student-life";

export default function SportsPage() {
  const { sections } = studentLifeContent;
  const sportsSection = sections.find((s) => s.id === "sports");

  if (!sportsSection) {
    return <div>Section not found</div>;
  }

  return (
    <StudentLifeDetailPage section={sportsSection} allSections={sections} />
  );
}
