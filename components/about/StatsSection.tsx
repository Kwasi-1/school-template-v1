"use client";

import { useState, useEffect, useRef } from "react";
import { aboutContent } from "@/content/about";

// Counter animation hook
const useCountUp = (
  end: number | string,
  duration: number = 2000,
  startOnView: boolean = true,
) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Parse the value - extract number and suffix
  const parseValue = (value: string | number) => {
    if (typeof value === "number")
      return { num: value, prefix: "", suffix: "" };

    const match = value.match(/^([^\d]*)(\d+)(.*)$/);
    if (match) {
      return {
        prefix: match[1],
        num: parseInt(match[2], 10),
        suffix: match[3],
      };
    }
    return { prefix: "", num: 0, suffix: value };
  };

  const { prefix, num, suffix } = parseValue(end);

  useEffect(() => {
    if (!startOnView || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, startOnView]);

  const animateCount = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOutQuart * num));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return { count, prefix, suffix, ref };
};

// Individual stat counter component
const StatCounter = ({ value, label }: { value: string; label: string }) => {
  const { count, prefix, suffix, ref } = useCountUp(value, 2000);

  return (
    <div ref={ref} className="flex flex-col items-start">
      <h2 className="text-4xl sm:text-5xl font-medium pb-2 md:pb-4">
        {prefix}
        {count}
        {suffix}
      </h2>
      <p className="text-sm sm:text-base mt-2 leading-relaxed opacity-90 text-center md:text-left">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const { stats } = aboutContent;

  return (
    <section className="w-full px-4 xl:w-[85%] 2xl:w-[70%] mx-auto my-12 md:my-16">
      <div className="bg-primary text-white py-10 md:py-12 px-10 md:px-10 lg:px-16 rounded[10px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-start py-4 md:py-0"
            >
              {/* Stat Content */}
              <div className="w-full md:w-auto md:pl-4 lg:pl-8">
                <StatCounter value={stat.value} label={stat.label} />
              </div>

              {/* Divider - Vertical on desktop, Horizontal on mobile */}
              {index !== stats.length - 1 && (
                <>
                  {/* Horizontal divider for mobile */}
                  <div className="hidden w-16 h-px bg-white/30 mt-6" />

                  {/* Vertical divider for tablet and up */}
                  <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-20 lg:h-24 border-r border-white/30" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
