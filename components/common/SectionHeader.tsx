"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  centered = false,
  light = false,
}: SectionHeaderProps) => {
  return (
    <div className={`${centered ? "text-center" : ""} mb-10 md:mb-14`}>
      {subtitle && (
        <span
          className={`text-sm uppercase tracking-wider font-medium ${
            light ? "text-white/80" : "text-primary"
          }`}
        >
          {subtitle}
        </span>
      )}

      <div
        className={`flex ${centered ? "flex-col items-center" : "flex-col md:flex-row md:justify-between md:items-end"} gap-4`}
      >
        <div>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 ${
              light ? "text-white" : "text-text-primary"
            }`}
          >
            {title}
          </h2>

          {description && (
            <p
              className={`mt-4 max-w-2xl text-base leading-relaxed ${
                light ? "text-white/80" : "text-text-secondary"
              }`}
            >
              {description}
            </p>
          )}
        </div>

        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className={`inline-flex items-center gap-2 font-medium underline hover:no-underline transition ${
              light ? "text-white" : "text-primary"
            }`}
          >
            {ctaText}
            <Icon icon="mdi:arrow-right" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
