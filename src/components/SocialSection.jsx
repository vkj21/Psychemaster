"use client";

import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function SocialSection() {
  return (
    <section className="w-full bg-[#1c1c1c] text-white px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Instagram */}
        <div className="bg-black rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-2">
            <Instagram className="text-blue-400" />
            <h3 className="text-xl font-semibold">Instagram</h3>
          </div>
          <p className="text-gray-300 mb-2">Follow us for updates</p>
          <Link
            href="https://instagram.com/psychemasterindia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 text-sm"
          >
            Visit our profile →
          </Link>
        </div>

        {/* WhatsApp */}
        <div className="bg-black rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-2">
            <Linkedin className="text-blue-400" />
            <h3 className="text-xl font-semibold">Linkedin</h3>
          </div>
          <p className="text-gray-300 mb-2">Follow us on</p>
          <Link
            href="https://www.linkedin.com/company/paychemasterindia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500  hover:text-blue-600 text-sm"
          >
            Send message →
          </Link>
        </div>

        {/* WhatsApp Channel */}
        <div className="bg-black rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-2">
            <MessageCircle className="text-blue-400" />
            <h3 className="text-xl font-semibold">Email</h3>
          </div>
          <p className="text-gray-300 mb-2">Send your queries</p>
          <Link
            href="mailto:psychemasterindia@gmail.com"
            className="text-blue-500 hover:text-blue-600 text-sm"
          >
            Email Now →
          </Link>
        </div>
      </div>
    </section>
  );
}
