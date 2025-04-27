"use client"

const CampusTour = () => {
  return (
    <section className="text-center py-16 px-4">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
        Our Campus Tour
      </h2>

      {/* Video Thumbnail with Play Button */}
      <div className="relative w-full max-w-3xl mx-auto">
        <img
          src="/campus-tour-thumbnail.jpg"
          alt="Campus Tour"
          className="w-full rounded-lg shadow-lg"
        />
        {/* Play Button */}
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition">
            ▶
          </div>
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
        Embark on a journey of knowledge, discovery, and growth at our school.
        Whether you're a new student or a transfer, we invite you to explore the
        possibilities that await you.
      </p>

      {/* Call to Action */}
      <div className="mt-6">
        <a
          href="/campus"
          className="text-red-600 font-semibold hover:underline text-lg flex items-center justify-center"
        >
          Visit Campus ↗
        </a>
      </div>
    </section>
  );
};

export default CampusTour;
