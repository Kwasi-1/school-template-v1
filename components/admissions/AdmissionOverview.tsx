"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { admissionsContent } from "@/content/admissions";

const AdmissionOverview = () => {
  const { overview } = admissionsContent;

  return (
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
  );
};

export default AdmissionOverview;
