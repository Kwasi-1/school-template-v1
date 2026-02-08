"use client";

import StudentLifeDetailPage from "@/components/student-life/StudentLifeDetailPage";
import { studentLifeContent } from "@/content/student-life";

export default function ActivitiesPage() {
  const { sections } = studentLifeContent;
  const activitiesSection = sections.find((s) => s.id === "activities");

  if (!activitiesSection) {
    return <div>Section not found</div>;
  }

  return (
    <StudentLifeDetailPage section={activitiesSection} allSections={sections} />
  );
}
