"use client";

import Image from "next/image";
import { aboutContent } from "@/content/about";

const HistorySection = () => {
  const { history } = aboutContent;

  return (
    <section className=" container-lg py-[100px] section-padding">
      <div className="max-w-full xl:max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
        {/* Image */}
        <div>
          <Image
            src={history.image}
            alt="Library and bust statues"
            className="w-full object-cover"
            width={300}
            height={300}
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl text-text-primary">{history.title}</h2>
          {history.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed mt-8">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
