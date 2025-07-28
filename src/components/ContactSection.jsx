"use client";

import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      className="w-full px-4 py-16 bg-[#0f0f0f] text-white overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* CONTACT FORM */}
        <article className="bg-[#1c1c1c] p-8 rounded-xl shadow-lg">
          <header>
            <h2
              id="contact-heading"
              className="text-2xl md:text-3xl font-bold mb-6"
            >
              Get in Touch with Us
            </h2>
          </header>

          <form
            action="https://formspree.io/f/xnnzvnap"
            method="POST"
            className="space-y-5"
            aria-label="Contact form"
          >
            <fieldset>
              <label htmlFor="name" className="block mb-1 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-[#2b2b2b] text-white rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="email" className="block mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[#2b2b2b] text-white rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="name@psychemasterindia.com"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="phone" className="block mb-1 text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-[#2b2b2b] text-white rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+91 6345 67 79xx"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="message" className="block mb-1 text-sm">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full bg-[#2b2b2b] text-white rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here..."
              ></textarea>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </article>

        {/* CONTACT DETAILS */}
        <address className="not-italic bg-[#1c1c1c] p-8 rounded-xl shadow-lg space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Connect With Us
          </h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Mail className="text-blue-500 mt-1" />
              <div>
                <p className="font-semibold">Email us at</p>
                <a
                  href="mailto:psychemastersindia@gmail.com"
                  className="text-sm text-gray-300 hover:underline"
                >
                  psychemastersindia@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Linkedin className="text-blue-500 mt-1" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <Link
                  href="https://www.linkedin.com/company/paychemasterindia/"
                  target="_blank"
                  className="text-sm text-gray-300 hover:text-blue-300"
                >
                  PsycheMaster
                </Link>
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

          <div className="pt-6 border-t border-gray-700">
            <p className="font-semibold mb-1">Business Hours</p>
            <p className="text-sm text-gray-300">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-sm text-gray-300">
              Saturday: 10:00 AM - 4:00 PM
            </p>
            <p className="text-sm text-gray-300">Sunday: 10:00 AM - 12:00 PM</p>
          </div>

          <div className="pt-4">
            <Image
              src="/images/psyche-master.png"
              alt="PsycheMaster logo"
              width={150}
              height={150}
              className="rounded-full hover:scale-105 transition shadow-md hover:shadow-blue-500"
            />
          </div>
        </address>
      </div>
    </section>
  );
}
