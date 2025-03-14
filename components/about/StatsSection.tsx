"use client"

const StatsSection = () => {
  return (
    <section className="w-[70%] container mx-auto my-12">
      <div className="bg-[#7F0019] text-white py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center items-center gap-6">
          {/* Stat 1 */}
          <div className="relative">
            <h2 className="text-4xl font-semibold">90%</h2>
            <p className="text-sm mt-2">Post-Graduation Success Rate</p>
            <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-12 border-r border-white"></div>
          </div>

          {/* Stat 2 */}
          <div className="relative">
            <h2 className="text-3xl font-semibold">Top 10</h2>
            <p className="text-sm mt-2">Colleges That Create Futures</p>
            <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-12 border-r border-white"></div>
          </div>

          {/* Stat 3 */}
          <div>
            <h2 className="text-3xl font-semibold">No. 1</h2>
            <p className="text-sm mt-2">In The Nation For Materials R&D</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
