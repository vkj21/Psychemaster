import ContactSection from "@/components/ContactSection";
import SocialSection from "@/components/SocialSection";
import React from "react";

export const metadata = {
  title: "Contact Us | PsycheMaster",
  description:
    "Get in touch with PsycheMaster for expert counseling and epilepsy support services. Reach out via email, LinkedIn, or Instagram.",
  keywords:
    "contact PsycheMaster, epilepsy help India, counseling contact, support email, mental health contact India, epilepsy support phone",
  openGraph: {
    title: "Contact PsycheMaster",
    description:
      "Have questions or need support? Contact PsycheMaster for expert counseling and epilepsy support services in India.",
    url: "https://psychemasterindia.org/contact",
    siteName: "PsycheMaster",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="pt-20">
      <header className="text-center mb-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Contact Us
        </h1>
        <p className="text-base text-gray-300 max-w-xl mx-auto">
          Have questions or need help? We're here to support you with compassion
          and care.
        </p>
      </header>

      <section aria-labelledby="contact-section">
        <ContactSection />
      </section>

      <section aria-labelledby="social-section">
        <SocialSection />
      </section>
    </main>
  );
}
