const MissionValuesSection = () => {
  return (
    <section className="w-[90%] mx-auto my-16">
      <h2 className="text-center text-3xl font-semibold mb-10">
        Mission and Values
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative">
        {/* Left Column */}
        <div className="space-y-12">
          {/* Diversity */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">Diversity</h3>
            <p className="text-sm text-gray-600 mt-2">
              Celebrating a rich tapestry of backgrounds, perspectives, and
              talents.
            </p>
            <img
              src="/event-image-1.webp"
              alt="Diversity"
              className="mt-4 w-full rounded-lg shadow-md"
            />
          </div>

          {/* Innovation */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">Innovation</h3>
            <p className="text-sm text-gray-600 mt-2">
              Encouraging creativity, critical thinking, and a spirit of
              innovation.
            </p>
            <img
              src="/event-image-2.webp"
              alt="Innovation"
              className="mt-4 w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Vertical Divider for Desktop */}
        <div className="hidden md:block absolute top-0 left-1/2 w-[1px] h-full bg-gray-300"></div>

        {/* Right Column */}
        <div className="space-y-12">
          {/* Excellence */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">Excellence</h3>
            <p className="text-sm text-gray-600 mt-2">
              Striving for academic and research excellence in all endeavors.
            </p>
            <img
              src="/event-image-3.webp"
              alt="Excellence"
              className="mt-4 w-full rounded-lg shadow-md"
            />
          </div>

          {/* Academic Excellence */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">Academic Excellence</h3>
            <p className="text-sm text-gray-600 mt-2">
              Our commitment to academic excellence is reflected in the diverse
              range.
            </p>
            <img
              src="/program1.webp"
              alt="Academic Excellence"
              className="mt-4 w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValuesSection;
