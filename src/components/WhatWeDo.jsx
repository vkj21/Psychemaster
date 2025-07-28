"use client";

import { User, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhatWeDo() {
  const services = [
    {
      icon: (
        <User
          size={42}
          className="bg-blue-600 text-white p-2 rounded-md"
          aria-hidden="true"
        />
      ),
      title: "Counseling Services",
      description:
        "A holistic approach to mental and emotional well-being through individual and group counseling sessions, workshops, webinars, and personal development programs.",
    },
    {
      icon: (
        <ShieldCheck
          size={42}
          className="bg-blue-600 text-white p-2 rounded-md"
          aria-hidden="true"
        />
      ),
      title: "Special Care Program for Epilepsy",
      description:
        "A personalized support initiative offering one-on-one counseling, caregiver education, and resilience training for epilepsy warriors and their families.",
    },
  ];

  return (
    <section
      className="bg-[#1c1c1c] text-white py-20 px-4 md:px-8"
      aria-labelledby="what-we-do-heading"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="what-we-do-heading"
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          What We Do
        </h2>
        <p className="text-gray-400 text-lg mb-12" id="what-we-do-desc">
          Our Psychological Support Services
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          role="list"
          aria-describedby="what-we-do-desc"
        >
          {services.map((service, index) => (
            <article
              key={index}
              className="group bg-black rounded-xl p-6 text-left flex flex-col gap-2 hover:-translate-y-1.5 transition-all duration-100"
              aria-label={service.title}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-base">{service.description}</p>

              <div className="flex justify-end mt-auto">
                <Link
                  href="/our-services"
                  className="group-hover:-rotate-2 transition-all duration-100"
                  aria-label={`Read more about ${service.title}`}
                >
                  <ArrowRight
                    size={30}
                    className="text-blue-600 group-hover:-rotate-45 transition-all duration-100"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/our-services"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
          >
            Explore Detailed Services
          </Link>
        </div>
      </div>
    </section>
  );
}
