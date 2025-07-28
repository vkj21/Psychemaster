"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I book a session?",
    answer:
      "Booking with us is simple and friendly! You can book your session anytime through our online system or just reach out by phone or email—we’re here to help you every step of the way.",
  },
  {
    question: "Can I reschedule my session?",
    answer:
      "We understand life happens! Just send us an email at least 24 hours before your appointment, and we’ll happily help you reschedule to a time that works better for you.",
  },
  {
    question: "What languages do you offer services in?",
    answer:
      "To make you feel comfortable and understood, we offer our counseling and training services in English, Hindi, and Magahi.",
  },
  {
    question: "Do you offer any free services?",
    answer:
      "Yes! We proudly offer free workshops and personal training sessions specifically for students and epilepsy warriors, because everyone deserves support and care.",
  },
  {
    question: "What types of counseling services do you provide?",
    answer:
      "We offer individual and group counseling, epilepsy-focused support, caregiver and family training, and interactive workshops and webinars tailored just for you.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Your privacy means everything to us. All sessions and communications are fully confidential, so you can share openly and safely.",
  },
  {
    question: "How can I learn more about your training programs?",
    answer:
      "We’d love to tell you more! Reach out anytime by phone or email, and we’ll gladly guide you through the options that best fit your needs.",
  },
  {
    question: "Do you offer services for schools and students?",
    answer:
      "Absolutely! We provide workshops, webinars, and internship opportunities focused on student well-being, stress management, and mental health education.",
  },
];

export default function TherapyApproach() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-[#111] text-white py-20 px-4 md:px-8"
      aria-labelledby="therapy-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2
            id="therapy-heading"
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            Our Approach to Therapy
          </h2>
          <p className="text-gray-400">Meet our specialist counselors</p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT: Approach Info */}
          <div className="space-y-6" aria-label="Therapeutic Approaches">
            {[
              {
                title: "Counseling Services",
                desc: "We believe in meeting you where you are. Using a person-centered and eclectic approach, we tailor therapies like CBT, REBT, and Narrative Therapy to your unique story.",
              },
              {
                title: "Training",
                desc: "We offer individualized, home-based training for epilepsy patients, their caregivers, and families. We provide practical skills and support to improve daily living.",
              },
              {
                title: "Comprehensive Care",
                desc: "Our holistic approach blends psychological and social models. For students, we use directive and non-directive child-friendly methods to foster healthy growth.",
              },
              {
                title: "Our Belief",
                desc: "We believe everyone has incredible inner strength. Our role is to help you unlock it with thoughtful strategies — so you can face challenges confidently.",
              },
            ].map((item, index) => (
              <article
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-xl shadow hover:shadow-blue-600/40 transition"
                aria-labelledby={`approach-title-${index}`}
              >
                <h3
                  id={`approach-title-${index}`}
                  className="font-semibold text-lg mb-2 text-blue-500"
                >
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </article>
            ))}
          </div>

          {/* RIGHT: FAQ Section */}
          <section
            className="bg-[#1a1a1a] rounded-xl p-6 shadow"
            aria-labelledby="faq-heading"
          >
            <h3 id="faq-heading" className="font-semibold text-xl mb-6">
              Your Concerns, Our Care
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const questionId = `faq-question-${index}`;
                const answerId = `faq-answer-${index}`;

                return (
                  <article
                    key={index}
                    className="border-b border-gray-700 pb-4"
                  >
                    <button
                      className="w-full flex justify-between items-center text-left text-sm font-medium text-white focus:outline-none"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      id={questionId}
                    >
                      {faq.question}
                      <ChevronDown
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        size={18}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <p
                        id={answerId}
                        className="text-gray-400 mt-2 text-sm"
                        role="region"
                        aria-labelledby={questionId}
                      >
                        {faq.answer}
                      </p>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
