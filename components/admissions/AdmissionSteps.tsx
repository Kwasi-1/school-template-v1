"use client";

import { Icon } from "@iconify/react";
import { admissionsContent } from "@/content/admissions";

const AdmissionSteps = () => {
  const { steps } = admissionsContent;

  return (
    <section className="bg-secondary py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm uppercase tracking-wider font-medium text-primary">
              How To Apply
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2">
              Admission Process
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="mt-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon
                      icon={step.icon}
                      className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {step.description}
                </p>

                {/* Connector Line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSteps;
