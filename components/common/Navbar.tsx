"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site-config";

// Menu items with images for mega menu
const menuItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Academics",
    subItems: [
      {
        title: "Programs",
        href: "/programs",
        description:
          "Explore our diverse academic programs designed to nurture excellence",
        image: "/program1.webp",
      },
      {
        title: "Admissions",
        href: "/admissions",
        description: "Start your application journey with us today",
        image: "/program2.webp",
      },
      {
        title: "Fees",
        href: "/fees",
        description: "Transparent tuition and payment information",
        image: "/program3.webp",
      },
    ],
  },
  {
    title: "Student Life",
    subItems: [
      {
        title: "Sports",
        href: "/student-life/sports",
        description: "Athletics and competitive sports programs",
        image: "/event-image-1.webp",
      },
      {
        title: "Clubs & Societies",
        href: "/student-life/clubs",
        description: "Join our vibrant student communities",
        image: "/event-image-2.webp",
      },
      {
        title: "Activities",
        href: "/student-life/activities",
        description: "Extracurricular experiences beyond the classroom",
        image: "/event-image-3.webp",
      },
      {
        title: "Facilities",
        href: "/student-life/facilities",
        description: "Modern campus amenities and resources",
        image: "/hero_image_2.webp",
      },
    ],
  },
  { title: "Boarding", href: "/boarding" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [hoveredSubItem, setHoveredSubItem] = useState<number>(0);
  const [hasShadow, setHasShadow] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset hovered sub item when dropdown changes
  useEffect(() => {
    setHoveredSubItem(0);
  }, [dropdownOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Get current dropdown menu
  const currentDropdownMenu = menuItems.find(
    (item) => item.subItems && item.title === dropdownOpen,
  );

  return (
    <>
      <nav
        className={`bg-white fixed w-full z-50 top-0 transition-shadow duration-300 ${
          hasShadow ? "border-b border-gray-200/50" : ""
        }`}
        onMouseLeave={() => setDropdownOpen("")}
      >
        <div className="container-lg mx-auto px-4 sm:px-6 lg:px-8 text-lg">
          <div className="flex flex-row-reverse md:flex-row justify-between items-center h-[100px]">
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                className="p-2"
              >
                <Menu size={28} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/school_logo_dark.svg"
                  alt="Unipix Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 text-[15px] font-[500]">
              {menuItems.map((item, index) =>
                item.subItems ? (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(item.title)}
                  >
                    <button
                      className={`text-[16px] font-[400] flex items-center gap-1 py-10 transition-colors ${
                        dropdownOpen === item.title
                          ? "text-primary"
                          : "text-gray-700"
                      }`}
                    >
                      {item.title}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          dropdownOpen === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-700 font-[400] text-[16px] py-10"
                    onMouseEnter={() => setDropdownOpen("")}
                  >
                    {item.title}
                  </Link>
                ),
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

        {/* Full Width Mega Menu Dropdown - Desktop Only */}
        <div
          className={`hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ${
            dropdownOpen && currentDropdownMenu
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {currentDropdownMenu && (
            <div className="container-lg mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="max-w-full xl:max-w[85%] mx-auto">
                <div className="grid grid-cols-[1.5fr_1fr] gap-12">
                  {/* Left Side - Links */}
                  <div>
                    <h3 className="text-lg capitalize tracking-wider font-medium mb-6">
                      {currentDropdownMenu.title}
                    </h3>
                    <div className="space-y-1">
                      {currentDropdownMenu.subItems?.map(
                        (subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            onClick={() => setDropdownOpen("")}
                            onMouseEnter={() => setHoveredSubItem(subIndex)}
                            className={`group flex items-center justify-between p-4 rounded-[10px] transition-all duration-200 w-[60%] ${
                              hoveredSubItem === subIndex
                                ? "bg-secondary"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            <div>
                              <h4
                                className={`text-[15px] tracking-wider font-medium transition-colors ${
                                  hoveredSubItem === subIndex
                                    ? "text-primary"
                                    : "text-text-primary"
                                }`}
                              >
                                {subItem.title}
                              </h4>
                              <p className="text-[13px] text-gray-500 mt-0.5">
                                {subItem.description}
                              </p>
                            </div>
                            <Icon
                              icon="mdi:arrow-right"
                              className={`w-5 h-5 transition-all duration-200 ${
                                hoveredSubItem === subIndex
                                  ? "text-primary opacity-100 translate-x-0"
                                  : "text-gray-400 opacity-0 -translate-x-2"
                              }`}
                            />
                          </Link>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Right Side - Dynamic Image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[10px]">
                    {currentDropdownMenu.subItems?.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          hoveredSubItem === subIndex
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <Image
                          src={subItem.image}
                          alt={subItem.title}
                          fill
                          className="object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        {/* Caption */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h4 className="text-xl font-medium text-white">
                            {subItem.title}
                          </h4>
                          <p className="text-white/80 text-sm mt-1">
                            {subItem.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-xs transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sheet */}
        <div
          className={`absolute top-0 left-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Image
              src="/school_logo_dark.svg"
              alt="Logo"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="space-y-1 px-4">
              {menuItems.map((item, index) =>
                item.subItems ? (
                  <div key={index}>
                    <button
                      onClick={() =>
                        setDropdownOpen(
                          dropdownOpen === item.title ? "" : item.title,
                        )
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-[15px] text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={18}
                        className={`text-gray-400 transition-transform duration-200 ${
                          dropdownOpen === item.title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        dropdownOpen === item.title
                          ? "max-h-60 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 py-2 space-y-1">
                        {item.subItems.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-[14px] text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-[15px] text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.title}
                  </Link>
                ),
              )}
            </div>
          </nav>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50/50">
            {/* CTA Button */}
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-md text-[15px] font-medium hover:bg-primary-hover transition-colors mb-4"
            >
              Apply Now
              <Icon icon="mdi:arrow-right" className="w-4 h-4" />
            </Link>

            {/* Contact Info */}
            <div className="flex items-center justify-center gap-2 text-[13px] text-gray-500">
              <Icon icon="mdi:phone-outline" className="w-4 h-4" />
              <span>{siteConfig.contact.phone[0]}</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-4">
              {[
                { icon: "mdi:facebook", href: siteConfig.social.facebook },
                { icon: "mdi:instagram", href: siteConfig.social.instagram },
                { icon: "mdi:linkedin", href: siteConfig.social.linkedin },
                { icon: "mdi:youtube", href: siteConfig.social.youtube },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon icon={social.icon} className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
