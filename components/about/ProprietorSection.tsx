const ProprietorSection = () => {
  return (
    <section className="w-[90%] mx-auto my-16 border border-red-200 rounded-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src="/proprietor.jpg"
            alt="School Proprietor"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div>
          <h3 className="text-xl font-semibold">Meet Our Proprietor</h3>
          <p className="text-gray-600 mt-4">
            Our esteemed proprietor, <strong>Michael Richard</strong>, is a
            visionary leader dedicated to fostering an environment of excellence
            and innovation. With years of experience in the education sector, he
            has been instrumental in shaping the school's mission and values.
            His passion for education continues to inspire students and staff
            alike.
          </p>

          {/* Proprietor Info */}
          <div className="mt-6 flex items-center gap-4">
            <img
              src="/proprietor-avatar.jpg"
              alt="Proprietor"
              className="w-12 h-12 rounded-full border-2 border-red-500"
            />
            <div>
              <h4 className="font-semibold text-lg">Michael Richard</h4>
              <p className="text-sm text-gray-500">Founder & Proprietor</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="border border-gray-400 p-2 rounded hover:bg-gray-200">
              ←
            </button>
            <button className="border border-gray-400 p-2 rounded hover:bg-gray-200">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProprietorSection;
