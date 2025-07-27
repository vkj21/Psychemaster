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
    <section className="bg-[#111] text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-2">
          OUR APPROACH TO THERAPY
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Meet our specialist counselors
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT: Approach Boxes */}
          <div className="space-y-6">
            {[
              {
                title: "Counseling Services",
                desc: "We believe in meeting you where you are. Using a person-centered and eclectic approach, we tailor therapies like Cognitive Behavioral Therapy (CBT), Rational Emotive Behavior Therapy (REBT), and Narrative Therapy to your unique story. Our goal is to guide you gently toward healing, self-understanding, and lasting change.",
              },
              {
                title: "Training",
                desc: "Understanding that every home and family is different, we offer individualized, home-based training for epilepsy patients, their loved ones, and caregivers. We walk alongside you, providing practical skills and compassionate support designed to make daily life smoother and more empowered.",
              },
              {
                title: "Comprehensive Care",
                desc: "Our holistic approach blends psychological and social models to support stress management and well-being, especially for students. We use child-friendly techniques—both directive and non-directive—to create a nurturing space where growth and balance can flourish.",
              },
              {
                title: "Our Belief",
                desc: "At our core, we believe that everyone holds incredible inner strength. Our role is to help you awaken and activate this power with thoughtful, personalized strategies — so you can face challenges with confidence and hope.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-xl shadow hover:shadow-blue-600/40 transition"
              >
                <h4 className="font-semibold text-lg mb-2 text-blue-500">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: FAQ Accordion */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow">
            <h4 className="font-semibold text-xl mb-6">
              Your Concerns, Our Care
            </h4>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left text-sm font-medium text-white focus:outline-none"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      size={18}
                    />
                  </button>
                  {openIndex === index && (
                    <p className="text-gray-400 mt-2 text-sm">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
