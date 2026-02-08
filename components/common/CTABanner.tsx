"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundImage?: string;
  variant?: "primary" | "dark" | "image";
}

const CTABanner = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  backgroundImage,
  variant = "primary",
}: CTABannerProps) => {
  const bgClasses = {
    primary: "bg-primary",
    dark: "bg-footer",
    image: "bg-black/60",
  };

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container-lg mx-auto">
        <div
          className={`relative rounded-2xl overflow-hidden ${
            variant === "image" ? "" : bgClasses[variant]
          }`}
        >
          {/* Background Image */}
          {variant === "image" && backgroundImage && (
            <div className="absolute inset-0">
              <Image
                src={backgroundImage}
                alt="Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          )}

          {/* Content */}
          <div className="relative z-10 py-12 md:py-16 px-6 md:px-12 lg:px-20 text-center">
            {subtitle && (
              <span className="text-primary-foreground/80 text-sm uppercase tracking-wider">
                {subtitle}
              </span>
            )}

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground mt-3 max-w-3xl mx-auto leading-tight">
              {title}
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-secondary transition duration-300"
              >
                {primaryButtonText}
                <Icon icon="mdi:arrow-right" />
              </Link>

              {secondaryButtonText && secondaryButtonHref && (
                <Link
                  href={secondaryButtonHref}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition duration-300"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
