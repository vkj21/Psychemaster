"use client";

import { useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    quote: "These cards are amazing...",
    name: "Manu Sharma",
    role: "Senior Software Engineer",
  },
  {
    quote: "Innovative features transformed our workflow.",
    name: "Ayesha Khan",
    role: "UX Designer",
  },
  {
    quote: "Really slick UI. Easy to implement.",
    name: "Rahul Mehta",
    role: "Frontend Developer",
  },
  {
    quote: "Incredible product support!",
    name: "Priya Verma",
    role: "Product Manager",
  },
  {
    quote: "Absolutely recommend to teams.",
    name: "Arjun Patel",
    role: "DevOps Engineer",
  },
  {
    quote: "Looks great and performs even better.",
    name: "Sana Iqbal",
    role: "Mobile App Designer",
  },
  {
    quote: "Works seamlessly across devices!",
    name: "Deepak Roy",
    role: "Full Stack Developer",
  },
  {
    quote: "UI that just feels right.",
    name: "Nikita Rao",
    role: "Frontend Engineer",
  },
  {
    quote: "Super customizable and smooth animations.",
    name: "Karan Yadav",
    role: "Backend Engineer",
  },
  {
    quote: "Great experience with the entire setup.",
    name: "Simran Das",
    role: "QA Analyst",
  },
  {
    quote: "Helps our team ship faster.",
    name: "Mohit Bhatt",
    role: "Tech Lead",
  },
  {
    quote: "Best testimonial grid I’ve seen.",
    name: "Isha Kapoor",
    role: "Graphic Designer",
  },
  {
    quote: "Clean, effective, and elegant.",
    name: "Rohit Choudhary",
    role: "UI Developer",
  },
  {
    quote: "Loved the gradients and layout.",
    name: "Naina Bedi",
    role: "Creative Director",
  },
  {
    quote: "Dark theme feels premium.",
    name: "Tushar Singh",
    role: "Marketing Lead",
  },
  {
    quote: "Definitely improves our site UX.",
    name: "Vidya Rani",
    role: "Content Strategist",
  },
];

const ROW_SIZE = 6; // 3 columns x 2 rows

export default function TestimonialsPage() {
  const [visibleCount, setVisibleCount] = useState(ROW_SIZE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ROW_SIZE);
  };

  return (
    <section className="min-h-screen bg-black text-white px-4 py-20 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-10 mb-12 justify-center items-center">
        <h1 className="text-3xl font-bold text-center border-b-2 border-blue-600 w-fit hover:px-20 transition-all ease-in-out">
          Testimonials
        </h1>
        <p className="text-base font-normal">
          Finding the right support can change everything. <br /> Here is what
          people are saying about their experience with PsycheMaster
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.slice(0, visibleCount).map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>

      {visibleCount < testimonials.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 cursor-pointer transition"
          >
            See More Testimonials
          </button>
        </div>
      )}
    </section>
  );
}
