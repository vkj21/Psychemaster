"use client";

import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "These cards are amazing...",
    name: "Manu Sharma",
    role: "Senior Software Engineer",
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for. ",
    name: "Ayesha Khan",
    role: "UX Designer",
  },
  {
    quote: "Really slick UI. Easy to implement.",
    name: "Rahul Mehta",
    role: "Frontend Developer",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
    triggerShadow();
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    triggerShadow();
  };

  const triggerShadow = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500); // remove shadow after animation
  };

  return (
    <section className="w-full px-4 py-12 md:py-24 bg-black text-center flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        TESTIMONIALS
      </h2>
      <p className="text-gray-400 mb-10">What people say about us!</p>

      <div className="relative w-full max-w-xl">
        <TestimonialCard {...testimonials[index]} highlight={clicked} />

        <div className="absolute -bottom-16 right-0 flex space-x-2">
          <button
            onClick={handlePrev}
            className="bg-white text-black p-2 rounded-full shadow cursor-pointer hover:bg-blue-500 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white text-black p-2 rounded-full shadow cursor-pointer hover:bg-blue-500 transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
