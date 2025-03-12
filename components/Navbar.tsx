"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-primary font-bold text-xl">Unipix</h1>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-dark hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-dark hover:text-primary">
              About
            </Link>
            <Link href="/courses" className="text-dark hover:text-primary">
              Courses
            </Link>
            <Link href="/contact" className="text-dark hover:text-primary">
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-white p-4">
            <Link href="/" className="py-2">
              Home
            </Link>
            <Link href="/about" className="py-2">
              About
            </Link>
            <Link href="/courses" className="py-2">
              Courses
            </Link>
            <Link href="/contact" className="py-2">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
