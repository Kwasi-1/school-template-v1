"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { studentLifeContent } from "@/content/student-life";

const StudentLifeNav = () => {
  const { sections } = studentLifeContent;
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll to update active section and sticky state
  useEffect(() => {
    const handleScroll = () => {
      // Check if nav should be sticky
      const heroHeight = window.innerHeight * 0.5;
      setIsSticky(window.scrollY > heroHeight - 80);

      // Find active section
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`z-40 transition-all duration-300 ${
        isSticky
          ? "fixed top-25 left-0 right-0 bg-white shadow-md"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="container-lg mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-6 py-4 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 text-sm md:text-base font-medium whitespace-nowrap rounded-md transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-[#800020] text-white"
                  : "text-gray-600 hover:text-[#800020] hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default StudentLifeNav;
