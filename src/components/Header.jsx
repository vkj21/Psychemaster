"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-black text-white py-4 shadow-xs shadow-slate-950 fixed z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
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

        <Link
          href="https://topmate.io/psychemaster_india"
          target="_blank"
          className="hidden md:block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
        >
          Book Session
        </Link>

        {/* Mobile */}
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
          isMenuOpen ? "max-h-96 py-4" : "max-h-0"
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
          <Link
            href="/book"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-2 mt-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-center font-medium"
          >
            Book Session
          </Link>
        </nav>
      </div>
    </header>
  );
}
