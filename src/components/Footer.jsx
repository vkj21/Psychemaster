"use client";

import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <div className=" flex flex-col gap-2 items-center justify-center">
            <Image
              src="/images/psyche-master.png"
              width={140}
              height={140}
              alt="psychemaster-logo"
              className="rounded-full "
            />
            <p className="text-sm font-bold mb-4">
              Mindful Living | Flourishing Together
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-gray-100">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-100">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/our-services" className="hover:text-gray-100">
                Services
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-gray-100">
                Testimonials
              </Link>
            </li>

            <li>
              <Link href="/privacy-policy" className="hover:text-gray-100">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Individual Counseling</li>
            <li>Epilepsy Warriors Training</li>
            <li>Caregivers Training</li>
            <li>Internship & Research Oppotunities</li>
            <li>Workshop & Webinars</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Contact Info
          </h3>
          <div className="flex items-center space-x-2 mb-2">
            <Mail size={28} className="text-blue-500 mt-1" />
            <Link href="mailto:psychemasterindia@gmail.com">
              psychemastersindia@gmail.com
            </Link>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <Instagram className="text-blue-500 mt-1" />
            <Link
              href="https://instagram.com/psychemasterindia"
              target="_blank"
            >
              Instagram
            </Link>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <Linkedin className="text-blue-500 mt-1" />
            <Link
              href="https://linkedin.com/company/paychemasterindia"
              target="_blank"
            >
              Linkedin
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2025 PsycheMaster. All rights reserved.
      </div>
    </footer>
  );
}
