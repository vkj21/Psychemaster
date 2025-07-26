import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/Hero";
import SocialSection from "@/components/SocialSection";
import TestimonialsSection from "@/components/Testimonials";
import TherapyApproach from "@/components/TherapyApproach";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection />
      <WhatWeDo />
      <WhoWeAre />
      <TherapyApproach />
      <TestimonialsSection />
      <ContactSection />
      <SocialSection />
    </div>
  );
}
