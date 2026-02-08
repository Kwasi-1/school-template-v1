"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { programsContent } from "@/content/programs";

const ProgramOverview = () => {
  const { overview } = programsContent;

  return (
    <section className="container-lg mx-auto section-padding">
      <div className="max-w-full xl:max-w-[85%] mx-auto py-16 md:pt-24 md:pb-0">
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

export default ProgramOverview;
