"use client";

import { Copy, Instagram, Linkedin, Mail } from "lucide-react";
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
          <a
            href="https://instagram.com/psychemasterindia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 text-sm"
          >
            Visit our profile →
          </a>
        </div>

        {/* LinkedIn */}
        <div className="bg-black rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-2">
            <Linkedin className="text-blue-400" />
            <h3 className="text-xl font-semibold">LinkedIn</h3>
          </div>
          <p className="text-gray-300 mb-2">Follow us on</p>
          <a
            href="https://www.linkedin.com/company/paychemasterindia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 text-sm"
          >
            Connect with us →
          </a>
        </div>

        {/* Email */}
        <div className="bg-black rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-2">
            <Mail className="text-blue-400" />
            <h3 className="text-xl font-semibold">Email</h3>
          </div>
          <p className="text-gray-300 mb-2">Send your queries</p>
          <div className="flex justify-between">
            <Link
              href="mailto:psychemasterindia@gmail.com"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-sm"
            >
              Email Now →
            </Link>
            <button
              onClick={() => {
                navigator.clipboard.writeText("psychemasterindia@gmail.com");
                alert("Email copied to clipboard!");
              }}
              className="hidden sm:flex gap-1 text-blue-500 hover:text-blue-600 text-sm cursor-pointer"
            >
              Copy Email{" "}
              <span>
                {" "}
                <Copy size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
