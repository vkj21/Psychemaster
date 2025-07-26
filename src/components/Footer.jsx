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

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <div className=" flex flex-col gap-2 items-center justify-center">
            <Image
              src="/images/psyche-master.png"
              width={110}
              height={110}
              alt="psychemaster-logo"
              className="rounded-full border-2 border-white"
            />
            <p className="text-sm font-bold mb-4">
              Mindful Living | Flourishing Together
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Mail">
                <Mail className="hover:text-white" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="hover:text-white" />
              </a>
              <a href="#" aria-label="Linkedin">
                <Linkedin className="hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/our-services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/testimonials" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
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
            <li>Family Training</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Contact Info
          </h3>
          <div className="flex items-start space-x-2 mb-2">
            <Mail className="text-blue-500 mt-1" />
            <p>contact@psychemaster.com</p>
          </div>
          <div className="flex items-start space-x-2">
            <Phone className="text-blue-500 mt-1" />
            <p>+91 567-8900</p>
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
