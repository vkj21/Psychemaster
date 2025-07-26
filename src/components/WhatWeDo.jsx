"use client";

import { User, ShieldCheck, Users, Home } from "lucide-react";

export default function WhatWeDo() {
  const services = [
    {
      icon: (
        <User size={42} className="bg-blue-600 text-white p-2 rounded-md" />
      ),
      title: "Individual Counseling",
      description:
        "One to One session over your Personal challenges with Epilepsy condition",
    },
    {
      icon: (
        <ShieldCheck
          size={42}
          className="bg-blue-600 text-white p-2 rounded-md"
        />
      ),
      title: "Epilepsy Warriors Training",
      description: "Personalized training for Epilepsy patient",
    },
    {
      icon: (
        <Users size={42} className="bg-blue-600 text-white p-2 rounded-md" />
      ),
      title: "Epilepsy Caregivers Training",
      description: "Personalized training for Epilepsy caregivers",
    },
    {
      icon: (
        <Home size={42} className="bg-blue-600 text-white p-2 rounded-md" />
      ),
      title: "Family Training",
      description:
        "Personalized family training program for Epilepsy warriors and their loved ones",
    },
  ];
  // bg-[#1c1c1c]
  return (
    <section className="bg-[#1c1c1c] text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">WHAT WE DO</h2>
        <p className="text-gray-400 text-lg mb-12">Our Psychological Support</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black rounded-xl p-6 text-left hover:-translate-y-1.5 transition-all duration-100  "
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/book"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
          >
            Book Your Session Now
          </a>
        </div>
      </div>
    </section>
  );
}
