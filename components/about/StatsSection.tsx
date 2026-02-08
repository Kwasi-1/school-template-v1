"use client";

import { aboutContent } from "@/content/about";

const StatsSection = () => {
  const { stats } = aboutContent;

  return (
    <section className="w-full px-4 xl:w-[70%] mx-auto my-12">
      <div className="bg-primary text-white py-8 px-4">
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
