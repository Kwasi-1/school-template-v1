"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { admissionsContent } from "@/content/admissions";
import { siteConfig } from "@/content/site-config";

const ApplyNowSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div className="max-w-full xl:max-w-[95%] mx-auto">
          <div className="bg-primary rounded-[10px] overflow-hidden">
            <div className="grid md:grid-cols-[1.5fr_1fr] items-stretch">
              {/* Left: Content */}
              <div className="p-8 md:p-12 lg:p-16 text-white flex flex-col justify-between">
                <div>
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
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-white/20 rounded-[10px] flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:currency-usd"
                          className="w-5 h-5 text-white"
                        />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs">Application Fee</p>
                        <p className="text-white font-semibold text-sm">
                          {admissionsContent.applicationFee}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-white/20 rounded-[10px] flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:clock-outline"
                          className="w-5 h-5 text-white"
                        />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs">Processing Time</p>
                        <p className="text-white font-semibold text-sm">
                          5-7 Business Days
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-white/20 rounded-[10px] flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon="mdi:file-document-outline"
                          className="w-5 h-5 text-white"
                        />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs">Required</p>
                        <p className="text-white font-semibold text-sm">
                          Student & Parent Info
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary px-4 lg:px-8 py-2 md:py-4 rounded font-semibold hover:bg-white/90 transition"
                  >
                    Apply Now
                    <Icon icon="mdi:arrow-right" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/50 text-white px-4 lg:px-8 py-2 md:py-4 rounded font-semibold hover:bg-white/10 transition"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href={`tel:${siteConfig.contact.phone[0].replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/50 text-white px-4 lg:px-6 py-2 md:py-4 rounded font-semibold hover:bg-white/10 transition"
                  >
                    <Icon icon="mdi:phone-outline" />
                    Call Now
                  </Link>
                </div>
              </div>

              {/* Right: Decorative Image */}
              <div className="hidden md:block relative min-h-[450px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/admission_image.webp')",
                  }}
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNowSection;
