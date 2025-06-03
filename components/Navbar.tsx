"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui/sheet";

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
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
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
      <div className="container-lg mx-auto px-4 sm:px-6 lg:px-8 text-lg">
        <div className="flex justify-between items-center h-[100px]">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button>
                  <Menu size={28} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white">
                <SheetHeader className="mb-4 bg-black/5">
                  <Image
                    src="/school_logo.svg"
                    alt="Unipix Logo"
                    width={120}
                    height={40}
                  />
                </SheetHeader>
                <nav className="flex flex-col space-y-3 px-6">
                  {menuItems.map((item, index) =>
                    item.subItems ? (
                      <div key={index}>
                        <button
                          onClick={() =>
                            setDropdownOpen(
                              dropdownOpen === item.title ? "" : item.title
                            )
                          }
                          className="flex justify-between w-full text-left font-medium text-gray-800"
                        >
                          {item.title}
                          <ChevronDown
                            className={`transform transition-transform ${
                              dropdownOpen === item.title ? "rotate-180" : ""
                            }`}
                            size={16}
                          />
                        </button>
                        {dropdownOpen === item.title && (
                          <div className="pl-4 mt-1 space-y-1">
                            {item.subItems.map((subItem, subIdx) => (
                              <Link
                                key={subIdx}
                                href={subItem.href}
                                className="block text-sm text-gray-700 hover:underline"
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
                        className="text-gray-800 font-medium"
                      >
                        {item.title}
                      </Link>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/school_logo.svg"
              alt="Unipix Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 text-[15px] font-[500]">
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
                    <div className="absolute top-full left-0 bg-white w-48 rounded pt9 -ml-5 font-[400]">
                      <div className="mt-9 shadow-lg pb-2 z-20">
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

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
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
            <div className="border-l border-gray-300 h-5 hidden 2xl:flex"></div>
            <div className="space-x-3 text-gray-400 hidden 2xl:flex">
              {[
                "ic:sharp-facebook",
                "mdi:instagram",
                "uil:linkedin",
                "iconoir:youtube-solid",
              ].map((icon, idx) => (
                <Link key={idx} href="#">
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
      </div>
    </nav>
  );
}
