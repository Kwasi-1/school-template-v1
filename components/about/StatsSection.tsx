"use client";

const stats = [
  { value: "90%", label: "Post-Graduation Success Rate" },
  { value: "Top 10", label: "Colleges That Create Futures" },
  { value: "No. 1", label: "In The Nation For Materials R&D" },
];

const StatsSection = () => {
  return (
    <section className="w-[70%] container mx-auto my-12">
      <div className="bg-[#7F0019] text-white py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center items-center gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col relative justify-end">
              <div className=" w-1/2 mx-auto text-left">
                <h2 className="text-5xl pb-4">{stat.value}</h2>
                <p className="text-base mt-2 leading-8">{stat.label}</p>
              </div>

              {/* Divider (hidden on mobile, shown on larger screens) */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-24 border-r border-red-400/50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
