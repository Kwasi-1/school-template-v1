"use client";

import Image from "next/image";

const values = [
  {
    title: "Diversity",
    description:
      "Celebrating a rich tapestry of backgrounds, perspectives, and talents.",
    image: "/event-image-1.webp",
  },
  {
    title: "Innovation",
    description:
      "Encouraging creativity, critical thinking, and a spirit of innovation.",
    image: "/event-image-2.webp",
  },
  {
    title: "Excellence",
    description:
      "Striving for academic and research excellence in all endeavors.",
    image: "/event-image-3.webp",
  },
  {
    title: "Academic Excellence",
    description:
      "Our commitment to academic excellence is reflected in the diverse range.",
    image: "/program1.webp",
  },
];

const ValueCard = ({
  title,
  description,
  image,
  align,
}: {
  title: string;
  description: string;
  image: string;
  align?: string;
}) => (
  <div className={`${align} space-y-3 mt-[70px]`}>
    <h3 className="text-2xl text-black">{title}</h3>
    <p
      className={`text-[16px] w-[65%] ${align === "text-right" && " ml-auto"}`}
    >
      {description}
    </p>
    <Image
      src={image}
      alt={title}
      className="mt-2 w-full h-[350px] object-cover "
      width={310}
      height={465}
    />
  </div>
);

const MissionValuesSection = () => {
  return (
    <section className="w-[85%] container mx-auto py-[100px]">
      <h2 className="text-center text-[40px] text-black  mb-10">
        Mission and Values
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[250px] relative">
        {/* Left Column */}
        <div className="space-y-12 pt-12 text-align-right">
          {values.slice(0, 2).map((value) => (
            <ValueCard key={value.title} {...value} align="text-right" />
          ))}
        </div>

        {/* Vertical Divider for Desktop */}
        <div className="hidden md:block absolute top-0 left-1/2 w-[1px] h-full bg-gray-300 "></div>

        {/* Right Column */}
        <div className="space-y-12">
          {values.slice(2).map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValuesSection;
