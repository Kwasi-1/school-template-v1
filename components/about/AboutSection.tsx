"use client";

const AboutSection = () => {
  return (
    <section className="w-[90%] mx-auto py-12 border-b border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-6 items-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-black">About University</h2>

        {/* Separator & Text */}
        <div className="flex space-x-6">
          <div className="border-l border-gray-300"></div>
          <p className="text-gray-600 leading-relaxed">
            Welcome to <span className="font-medium">Unipix University</span>, where knowledge meets inspiration, and every individual’s educational journey is valued. 
            Established in <span className="font-medium">1971</span>, our university has been a bastion of learning, innovation, and community for <span className="font-medium">51 years</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
