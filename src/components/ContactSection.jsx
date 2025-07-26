"use client";

import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="w-full px-4 py-16 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Form Section */}
        <div className="bg-[#1c1c1c] p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            GET IN TOUCH WITH US
          </h2>
          <form
            action="https://formspree.io/f/mjkkejpz"
            method="POST"
            className="space-y-5"
          >
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-[#2b2b2b] text-white rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-[#2b2b2b] text-white rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="w-full bg-[#2b2b2b] text-white rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+1 234 567 890"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Your Message</label>
              <textarea
                rows={4}
                name="message"
                required
                className="w-full bg-[#2b2b2b] text-white rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-[#1c1c1c] p-8 rounded-xl shadow-lg space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Connect With Us
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Mail className="text-blue-500 mt-1" />
              <div>
                <p className="font-semibold">Email us at</p>
                <p className="text-sm text-gray-300">
                  psychemastersindia@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Linkedin className="text-blue-500 mt-1" />
              <div>
                <p className="font-semibold">Linkedin</p>
                <p className="text-sm text-gray-300">
                  https://www.linkedin.com/company/paychemasterindia/
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="text-blue-500 mt-1" />
              <div>
                <p className="font-semibold">Find us on</p>
                <p className="text-sm text-gray-300">Instagram or WhatsApp</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="pt-6 border-t border-gray-700">
            <p className="font-semibold mb-1">Business Hours</p>
            <p className="text-sm text-gray-300">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-sm text-gray-300">
              Saturday: 10:00 AM - 4:00 PM
            </p>
            <p className="text-sm text-gray-300">Sunday: Closed</p>
          </div>
          <div className="">
            <Image
              src="/images/psyche-master.png"
              alt="psychemaster-logo"
              width={150}
              height={150}
              className="rounded-full hover:scale-105 transition shadow=md hover:shadow-blue-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
