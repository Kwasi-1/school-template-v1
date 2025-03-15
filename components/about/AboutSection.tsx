"use client";

const AboutSection = () => {
  return (
    <section className="w-[85%] container mx-auto pb-12 pt-[120px] border-b border-gray-300 text-[16px]">
      <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-6 items-center">
        {/* Title */}
        <h2 className="text-4xl text-black">About University</h2>

        {/* Separator & Text */}
        <div className="flex gap-[50px] ">
          <div className="border-l border-gray-300"></div>
          <p className="leading-relaxed">
            Welcome to <span className="font-medium">Unipix University</span>,
            where knowledge meets inspiration, and every individual’s
            educational journey is valued. Established in{" "}
            <span className="font-medium">1971</span>, our university has been a
            bastion of learning, innovation, and community for{" "}
            <span className="font-medium">51 years</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
