import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/Hero";
import SocialSection from "@/components/SocialSection";
import TestimonialsSection from "@/components/Testimonials";
import TherapyApproach from "@/components/TherapyApproach";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import React from "react";

export const metadata = {
  title: "PsycheMaster | Epilepsy Counseling & Mental Wellness Support",
  description:
    "PsycheMaster offers expert counseling, epilepsy support, and therapy services in India. Discover personalized mental health care you can trust.",
  keywords:
    "epilepsy support India, mental health counseling, seizure therapy, online psychologist India, trauma therapy, neuro counseling",
  openGraph: {
    title: "PsycheMaster – Expert Counseling & Epilepsy Support",
    description:
      "Find professional epilepsy counseling and mental health support through PsycheMaster. Compassionate care, personalized for your needs.",
    url: "https://psychemasterindia.org/",
    siteName: "PsycheMaster",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/psyche-master.png",
        width: 800,
        height: 600,
        alt: "PsycheMaster logo",
      },
    ],
  },
};

export default function Page() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <header>
        <HeroSection />
      </header>

      {/* What We Do */}
      <section aria-labelledby="what-we-do">
        <WhatWeDo />
      </section>

      {/* Who We Are */}
      <section aria-labelledby="who-we-are">
        <WhoWeAre />
      </section>

      {/* Our Approach */}
      <section aria-labelledby="therapy-approach">
        <TherapyApproach />
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonials-section">
        <TestimonialsSection />
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-section">
        <ContactSection />
      </section>

      {/* Social Links */}
      <section aria-labelledby="social-section">
        <SocialSection />
      </section>
    </main>
  );
}
