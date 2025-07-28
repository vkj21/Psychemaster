import testimonials from "@/data/testimonials.json";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Testimonials | PsycheMaster",
  description:
    "Read what our clients say about PsycheMaster's epilepsy counseling and mental health support. Real experiences, real transformation.",
  keywords:
    "PsycheMaster reviews, mental health testimonials, epilepsy counseling feedback, client stories, therapy reviews India",
  openGraph: {
    title: "PsycheMaster Testimonials",
    description:
      "Discover how PsycheMaster has impacted lives through compassionate counseling and epilepsy support. Hear directly from our clients.",
    url: "https://psychemasterindia.org/testimonials",
    siteName: "PsycheMaster",
    locale: "en_IN",
    type: "website",
  },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-20 flex flex-col justify-center items-center">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold hover:px-20 transition-all ease-in-out">
          Testimonials
        </h1>
        <p className="text-base text-gray-300 font-normal mt-2 max-w-2xl mx-auto">
          Finding the right support can change everything. <br />
          Here is what people are saying about their experience with{" "}
          <strong>PsycheMaster</strong>.
        </p>
      </header>

      <section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
        aria-labelledby="testimonials-list"
      >
        {testimonials.map((testimonial, idx) => (
          <article key={idx}>
            <TestimonialCard
              quote={testimonial.quote}
              name={testimonial.name}
              highlight={idx === 0}
            />
          </article>
        ))}
      </section>

      <section className="mt-10 w-[80%] sm:w-[40%] flex justify-center items-center gap-0 overflow-hidden">
        <Link
          href="https://forms.gle/EYpLWRQ4Dgk8nQPM7"
          target="_blank"
          className="flex-1 min-w-0"
        >
          <input
            type="text"
            placeholder="Post Your Experiences..."
            className="border px-3 py-3 rounded-l-lg border-blue-500 outline-none w-full text-sm"
            readOnly
            aria-label="Share your experience with PsycheMaster"
          />
        </Link>
        <Link href="https://forms.gle/EYpLWRQ4Dgk8nQPM7" target="_blank">
          <button
            className="text-sm text-white bg-blue-600 rounded-r-lg px-4 py-3 hover:bg-blue-700 whitespace-nowrap"
            aria-label="Submit your testimonial"
          >
            Share Now
          </button>
        </Link>
      </section>
    </main>
  );
}
