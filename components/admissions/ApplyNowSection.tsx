"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { admissionsContent } from "@/content/admissions";

const ApplyNowSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[85%] mx-auto">
          <div className="bg-primary rounded-[10px] overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              {/* Left: Content */}
              <div className="p-8 md:p-12 lg:p-16 text-white">
                <span className="text-sm uppercase tracking-wider font-medium text-white/70">
                  Start Your Journey
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2">
                  Ready to Apply?
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Begin your application today and take the first step towards
                  joining our community of learners. Our online application
                  process is simple and straightforward.
                </p>

                {/* Key Info */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-[10px] flex items-center justify-center">
                      <Icon
                        icon="mdi:currency-usd"
                        className="w-5 h-5 text-white"
                      />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Application Fee</p>
                      <p className="text-white font-semibold">
                        {admissionsContent.applicationFee}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-[10px] flex items-center justify-center">
                      <Icon
                        icon="mdi:clock-outline"
                        className="w-5 h-5 text-white"
                      />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Processing Time</p>
                      <p className="text-white font-semibold">
                        5-7 Business Days
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-[10px] flex items-center justify-center">
                      <Icon
                        icon="mdi:file-document-outline"
                        className="w-5 h-5 text-white"
                      />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Required</p>
                      <p className="text-white font-semibold">
                        Student & Parent Info
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/apply"
                  className="mt-8 inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition"
                >
                  Apply Now
                  <Icon icon="mdi:arrow-right" />
                </Link>
              </div>

              {/* Right: Decorative */}
              <div className="hidden md:block relative h-full min-h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/admission_image.webp')",
                  }}
                />
                <div className="absolute inset-0 bg-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNowSection;
