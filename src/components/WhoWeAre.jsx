"use client";

import { CheckCircle, Lock, CalendarClock } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">WHO WE ARE</h2>
          <h3 className="text-sm md:text-sm text-blue-500 font-semibold mb-6">
            We’re more than just a team — we’re people who deeply care. We’ve
            seen the weight that epilepsy, emotional struggles, stress, and
            mental health challenges can place on individuals and families. And
            that’s exactly why we’re here: to walk beside you, with empathy,
            understanding, and unwavering support.
          </h3>
          <p className="text-gray-300 mb-4">
            Whether you’re someone living with epilepsy, feeling lost in your
            own thoughts, overwhelmed by studies, or simply in need of a safe
            space to be heard — you are not alone. We offer personalized
            counseling, heartfelt conversations, empowering training for
            caregivers and families, and emotional guidance for students,
            parents, and teachers alike.
          </p>
          <p className="text-gray-300 mb-4">
            Our workshops and webinars are created with love and intention — to
            help you manage stress, reconnect with yourself, and build a more
            peaceful, balanced life. For students stepping into the mental
            health field, our internships and research opportunities offer not
            just learning, but mentorship and purpose.
          </p>
          <p className="text-gray-300 mb-4">
            Every person we work with has a story — and we honor each one.
            Because for us, it’s not just about solving problems. It’s about
            helping you feel seen, supported, and strong enough to take your
            next step — whatever that may be.
          </p>
          <p className="text-gray-300 mb-4">
            In this space, you’ll find care, connection, and the belief that
            healing is possible — for everyone.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative">
          <div className="bg-black border border-gray-800 rounded-xl p-6 shadow-lg relative z-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="">
                  <CheckCircle
                    className="text-blue-500 mt-1 text-start"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Experienced & Certified Professionals
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Our team is made up of certified counselors, mental health
                    professionals, and psychologists with extensive experience,
                    especially in epilepsy care. We follow the highest ethical
                    standards in counseling to provide respectful, trustworthy,
                    and compassionate support tailored to your unique needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="">
                  <Lock className="text-blue-500 mt-1" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Secure & Private</h4>
                  <p className="text-gray-400 text-sm">
                    Your privacy is our utmost priority. All sessions are held
                    in a completely confidential and secure environment,
                    ensuring you feel safe and comfortable throughout your
                    journey with us.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="">
                  <CalendarClock className="text-blue-500 mt-1" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-base">
                    Flexible Scheduling
                  </h4>
                  <p className="text-gray-400 text-sm">
                    We understand the delicate balance between work, family, and
                    self-care. That’s why we offer flexible appointment times
                    and an easy online booking system, allowing you to schedule
                    sessions that fit seamlessly into your busy life.
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
    </section>
  );
}
