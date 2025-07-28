import epilepsyServices from "@/data/epilepsy-counselling.json";
import counsellingServices from "@/data/counselling-services.json";
import ServiceCard from "@/components/ServiceCard";
import React from "react";

export const metadata = {
  title: "Our Services | PsycheMaster",
  description:
    "Explore personalized epilepsy counseling and mental wellness services by PsycheMaster. Tailored support from certified professionals.",
  keywords:
    "epilepsy support, counseling services, psychological help, mental wellness India, PsycheMaster therapy, seizure care, trauma healing",
  openGraph: {
    title: "Our Services - PsycheMaster",
    description:
      "Discover the range of epilepsy and mental health support services we offer at PsycheMaster, from counseling to neuro care programs.",
    url: "https://psychemasterindia.org/our-services",
    siteName: "PsycheMaster",
    locale: "en_IN",
    type: "website",
  },
};

export default function OurServicesPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-tr from bg-purple-950 via-black to-purple-950 text-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At <strong>PsycheMaster</strong>, we offer compassionate, tailored
            support for those living with epilepsy and those seeking mental
            wellness. Explore our specialized services below.
          </p>
        </header>

        {/* Epilepsy Services Section */}
        <section aria-labelledby="epilepsy-services" className="mb-20">
          <h2 id="epilepsy-services" className="text-2xl font-semibold mb-6">
            Special Care Programs for Epilepsy Support
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {epilepsyServices.map((service, index) => (
              <article key={index}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  iconName={service.icon}
                />
              </article>
            ))}
          </div>
        </section>

        {/* Counseling Services Section */}
        <section aria-labelledby="counseling-services">
          <h2 id="counseling-services" className="text-2xl font-semibold mb-6">
            Counseling Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {counsellingServices.map((service, index) => (
              <article key={index}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  iconName={service.icon}
                />
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
