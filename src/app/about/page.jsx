import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Us | PsycheMaster",
  description:
    "PsycheMaster is a team of certified counselors providing compassionate epilepsy counseling in India. Learn more about our mission and support services.",
  keywords:
    "about PsycheMaster, epilepsy counseling, mental health India, psychological support, epilepsy care, seizure support, neuro counseling",
  openGraph: {
    title: "About PsycheMaster – Epilepsy Counseling in India",
    description:
      "Meet the compassionate counselors behind PsycheMaster. Learn how we support individuals and families affected by epilepsy across India.",
    url: "https://psychemasterindia.org/about",
    siteName: "PsycheMaster",
    images: [
      {
        url: "/images/psyche-master.png",
        width: 800,
        height: 600,
        alt: "PsycheMaster epilepsy counseling team logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-black text-white py-20 px-4 md:px-8">
      <section className="mx-auto grid md:grid-cols-2 gap-12 items-center py-10 px-4 md:px-8">
        {/* Logo + Overlay */}
        <figure className="relative">
          <div className="flex justify-center items-center">
            <Image
              src="/images/psyche-master.png"
              width={300}
              height={300}
              alt="PsycheMaster logo - epilepsy support counseling team"
            />
          </div>
          <div className="absolute inset-0 rounded-xl animate-pulse bg-gradient-to-r from-purple-800 via-blue-950 to-purple-800 opacity-20 blur-2xl z-0" />
        </figure>

        {/* About Description */}
        <article className="flex flex-col gap-6">
          <h1 className="text-xl md:text-2xl font-extrabold mb-2">
            About PsycheMaster
          </h1>
          <p className="text-lg font-normal text-gray-100">
            At{" "}
            <span className="text-xl font-bold text-blue-600">
              PsycheMaster
            </span>
            , we are a dedicated team of certified and experienced counselors,
            passionate about supporting individuals and families affected by
            epilepsy. Our mission is to provide personalized, compassionate care
            that addresses not only medical concerns but also the emotional,
            social, and psychological challenges that come with living with
            epilepsy.
          </p>
          <p className="text-lg font-normal text-gray-100">
            We understand that epilepsy can impact every aspect of a person's
            life — from anxiety and stress to feelings of isolation or stigma.
            That’s why our counseling services are tailored to meet the unique
            needs of each client, offering guidance and support every step of
            the way.
          </p>
        </article>
      </section>

      {/* Who We Are Section */}
      <section aria-labelledby="who-we-are">
        <WhoWeAre />
      </section>
    </main>
  );
}
