"use client";

import { CheckCircle, Lock, CalendarClock } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">WHO ARE WE</h2>
          <h3 className="text-xl md:text-2xl text-blue-500 font-semibold mb-6">
            We are a Team of Certified Counselors Working around Epilepsy
          </h3>
          <p className="text-gray-300 mb-4">
            We understand that living with epilepsy can often bring emotional,
            social, and psychological hurdles, not just for the individual but
            also for their families and caregivers. From dealing with anxiety
            and stress to addressing feelings of isolation or stigma, our
            tailored counseling services are designed to provide compassionate
            support every step of the way.
          </p>
          <p className="text-gray-300">
            At our core, we believe that no one should face these challenges
            alone. Let's work together to nurture mental and emotional strength,
            one step at a time.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative">
          <div className="bg-black border border-gray-800 rounded-xl p-6 shadow-lg relative z-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-500 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Certified Experts</h4>
                  <p className="text-gray-400 text-sm">
                    Our team consists of certified and experienced counselors
                    specialized in epilepsy care.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lock className="text-blue-500 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Secure & Private</h4>
                  <p className="text-gray-400 text-sm">
                    Your privacy is our priority. All sessions are completely
                    confidential.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CalendarClock className="text-blue-500 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Flexible Scheduling</h4>
                  <p className="text-gray-400 text-sm">
                    Book sessions at your convenience with our easy online
                    scheduling system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pulsating border glow */}
          <div className="absolute inset-0 rounded-xl animate-pulse bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 opacity-20 blur-2xl z-0" />
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[
          { value: "100+", label: "Clients Helped" },
          { value: "10+", label: "Expert Counselors" },
          { value: "95%", label: "Success Rate" },
          { value: "24/7", label: "Support" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-xl shadow hover:shadow-blue-500/20 hover:-translate-y-1 transition-all"
          >
            <h3 className="text-2xl font-bold text-blue-500">{stat.value}</h3>
            <p className="text-gray-300 text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
