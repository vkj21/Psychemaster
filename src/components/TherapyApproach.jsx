"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I reset my password?",
    answer:
      "To reset your password, go to settings and click on 'Reset Password'.",
  },
  {
    question: "How do I update my billing information?",
    answer:
      "You can update billing information from your profile settings under 'Billing'.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Reach out via the Contact page or email us directly at support@example.com.",
  },
  {
    question: "How do I delete my account?",
    answer: "Please contact support to request account deletion.",
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
                title: "Understanding and Support",
                desc: "We understand that living with epilepsy can often bring emotional, social, and psychological hurdles, not just for the individual but also for their families and caregivers.",
              },
              {
                title: "Comprehensive Care",
                desc: "From dealing with anxiety and stress to addressing feelings of isolation or stigma, our tailored counseling services are designed to provide compassionate support every step of the way.",
              },
              {
                title: "Our Core Belief",
                desc: "At our core, we believe that no one should face these challenges alone. Let's work together to nurture mental and emotional strength, one step at a time.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-xl shadow hover:shadow-blue-600/40 transition"
              >
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: FAQ Accordion */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow">
            <h4 className="font-semibold text-xl mb-6">
              Commonly Asked Queries
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
