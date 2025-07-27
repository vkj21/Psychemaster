"use client";

import { User, ShieldCheck, Users, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhatWeDo() {
  const services = [
    {
      icon: (
        <User size={42} className="bg-blue-600 text-white p-2 rounded-md" />
      ),
      title: "Counselling Services",
      description:
        "a holistic approach to mental and emotional well-being through a diverse range of support options. From individual and group counseling sessions to interactive workshops, webinars, and professional development opportunities, this program addresses the varied needs of individuals across all stages of life.",
    },
    {
      icon: (
        <ShieldCheck
          size={42}
          className="bg-blue-600 text-white p-2 rounded-md"
        />
      ),
      title: "Special Care Program for Epilepsy",
      description:
        "a comprehensive support initiative that brings together personalized services for individuals living with epilepsy, their caregivers, and families. Through one-on-one counseling, skill-building training for epilepsy warriors, caregiver education, and family support programs, this initiative aims to foster emotional resilience, improve self-management, and create a compassionate support system.",
    },
  ];
  // bg-[#1c1c1c]
  return (
    <section className="bg-[#1c1c1c] text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">WHAT WE DO</h2>
        <p className="text-gray-400 text-lg mb-12">Our Psychological Support</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black rounded-xl p-6 text-left flex flex-col gap-2 hover:-translate-y-1.5 transition-all duration-100  "
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-base">{service.description}</p>
              <div className="flex  justify-end ">
                <button className="rounded-sm text-right">
                  <Link href="/our-services">
                    <ArrowRight
                      size={30}
                      className="text-blue-600 group-hover:-rotate-45 transition-all duration-100"
                    />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/our-services"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
          >
            Explore Detailed Services
          </a>
        </div>
      </div>
    </section>
  );
}
