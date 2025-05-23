"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { title: "Home", href: "/#herosection" },
  {
    title: "Pages",
    subItems: [
      { title: "About", href: "/about" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Academics",
    subItems: [
      { title: "Programs", href: "/programs" },
      { title: "Admissions", href: "/admissions" },
    ],
  },
  { title: "Student Services", href: "/student-services" },
  {
    title: "Blog",
    subItems: [
      { title: "News", href: "/blog/news" },
      { title: "Events", href: "/blog/events" },
    ],
  },
  { title: "Fees", href: "/fees" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [hasShadow, setHasShadow] = useState(false);

  // Detect scroll to add shadow to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white fixed w-full z-50 top-0 transition-shadow duration-300 ${
        hasShadow ? "shadow-xs" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-lg">
        <div className="flex justify-between items-center h-[100px]">
          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-6 text-[15px] font-[500]">
            {menuItems.map((item, index) =>
              item.subItems ? (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(item.title)}
                  onMouseLeave={() => setDropdownOpen("")}
                >
                  <button className="text-gray-700 text-[16px] flex items-center gap-1">
                    {item.title} <ChevronDown size={16} />
                  </button>
                  {dropdownOpen === item.title && (
                    <div className="absolute top-full left-0 bg-white w-48 rounded pt-9 -ml-5 font-[400] py-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-5 py-2 hover:bg-gray-100"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-700 text-[16px]"
                >
                  {item.title}
                </Link>
              )
            )}
          </div>

          {/* Logo */}
          <div className="flex items-center bg-black text-red-800">
            <Image
              src="/school_logo.svg"
              alt="Unipix Logo"
              className="h-10 w-auto"
              width={120}
              height={40}
            />
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center space-x-4">
            <Icon
              icon="ph:magnifying-glass"
              className="text-dark cursor-pointer"
              width="20"
            />
            <div className="border-l border-gray-300 h-5"></div>
            <div className="flex items-center space-x-2 text-dark cursor-pointer">
              <span>ENG</span>
              <Icon icon="mdi:web" width="18" />
            </div>
            <div className="border-l border-gray-300 h-5"></div>
            <div className="flex space-x-3 text-gray-400">
              {[
                "ic:sharp-facebook",
                "mdi:instagram",
                "uil:linkedin",
                "iconoir:youtube-solid",
              ].map((icon, idx) => (
                <Link key={idx} href={"#"}>
                  <Icon
                    icon={icon}
                    className="hover:text-primary cursor-pointer"
                    width="22"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-white p-4 border-t">
            {menuItems.map((item, index) =>
              item.subItems ? (
                <div key={index} className="py-2">
                  <button
                    className="flex items-center justify-between w-full text-dark font-medium"
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === item.title ? "" : item.title
                      )
                    }
                  >
                    {item.title}
                    <ChevronDown size={16} />
                  </button>
                  {dropdownOpen === item.title && (
                    <div className="mt-2 space-y-1 pl-4">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block text-gray-700 py-1"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={index} href={item.href} className="py-2 text-dark">
                  {item.title}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
