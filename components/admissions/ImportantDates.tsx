"use client";

import { Icon } from "@iconify/react";
import { admissionsContent } from "@/content/admissions";

const ImportantDates = () => {
  const { importantDates } = admissionsContent;

  return (
    <section className="bg-secondary py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm uppercase tracking-wider font-medium text-primary">
              Mark Your Calendar
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2">
              Important Dates
            </h2>
          </div>

          {/* Dates Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  {/* Calendar Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Icon
                      icon="mdi:calendar-month"
                      className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-text-secondary text-sm mb-1">{item.label}</p>
                    <p className="text-lg font-semibold text-text-primary">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
