"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setShowMobileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full box-border bg-black text-white py-4 shadow-xs shadow-slate-950 fixed z-50">
      <div className="relative max-w-7xl mx-auto px-4 flex justify-between items-center z-50">
        <div className="flex gap-1 items-center">
          <Image
            src="/images/psyche-master.png"
            alt="logo"
            width={40}
            height={40}
            className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
          />
          <Link href="/">
            <span className="text-2xl font-bold cursor-pointer">
              PsycheMaster
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/our-services" className="hover:text-blue-400 transition">
            Services
          </Link>
          <Link href="/testimonials" className="hover:text-blue-400 transition">
            Testimonials
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>

        {/* Desktop Book Session with Dropdown */}
        <div className="relative hidden md:block group">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center gap-1">
            Book Session <ChevronDown className="w-4 h-4" />
          </button>

          <div className="absolute right-0 p-1 w-56 bg-purple-900 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform scale-95 group-hover:scale-100 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
            <Link
              href="https://topmate.io/psychemaster_india?type=counseling"
              target="_blank"
              className="block px-4 py-2 rounded-sm hover:bg-gray-900"
            >
              Special Care Program for Epilepsy
            </Link>
            <Link
              href="https://topmate.io/psychemaster_india?type=epilepsy"
              target="_blank"
              className="block px-4 py-2 rounded-sm hover:bg-gray-900"
            >
              Counselling Services
            </Link>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <div
            ref={menuIconRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-black px-4 ${
          isMenuOpen ? "max-h-96 w-full py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-400"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Services
          </Link>
          <Link
            href="/testimonials"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-400"
          >
            Contact
          </Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setShowMobileDropdown(!showMobileDropdown)}
              className="flex items-center justify-between w-full text-left bg-blue-600 px-3 py-2 rounded-lg hover:text-blue-400"
            >
              Book Session
              <ChevronDown
                className={`w-4 h-4 transform transition ${
                  showMobileDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showMobileDropdown && (
              <div className="ml-4 mt-2 bg-slate-900 p-3 rounded-sm space-y-2">
                <Link
                  href="https://topmate.io/psychemaster_india?type=counseling"
                  target="_blank"
                  className="block text-sm hover:text-blue-400"
                >
                  Special Care Program for Epilepsy
                </Link>
                <Link
                  href="https://topmate.io/psychemaster_india?type=epilepsy"
                  target="_blank"
                  className="block text-sm hover:text-blue-400"
                >
                  Counselling Session
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
