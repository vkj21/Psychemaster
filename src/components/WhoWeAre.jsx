"use client";

import { CheckCircle, Lock, CalendarClock } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section
      className="bg-black text-white py-20 px-4 md:px-8"
      aria-labelledby="who-we-are-heading"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div>
          <h2
            id="who-we-are-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Who We Are
          </h2>
          <h3 className="text-sm text-blue-500 font-semibold mb-6">
            We’re more than just a team — we’re people who deeply care. We’ve
            seen the weight that epilepsy, emotional struggles, stress, and
            mental health challenges can place on individuals and families.
          </h3>
          <p className="text-gray-300 mb-4">
            Whether you’re someone living with epilepsy, feeling lost in your
            own thoughts, overwhelmed by studies, or simply in need of a safe
            space to be heard — you are not alone.
          </p>
          <p className="text-gray-300 mb-4">
            Our workshops and webinars are created with love and intention — to
            help you manage stress, reconnect with yourself, and build a more
            peaceful, balanced life.
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
              {/* EXPERIENCE */}
              <article
                className="flex items-start gap-4"
                aria-label="Experienced & Certified Professionals"
              >
                <CheckCircle
                  className="text-blue-500 mt-1"
                  size={24}
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-semibold text-lg">
                    Experienced & Certified Professionals
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Our team is made up of certified counselors and
                    psychologists with experience in epilepsy care. We provide
                    compassionate support tailored to your unique needs.
                  </p>
                </div>
              </article>

              {/* PRIVACY */}
              <article
                className="flex items-start gap-4"
                aria-label="Secure & Private"
              >
                <Lock
                  className="text-blue-500 mt-1"
                  size={24}
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-semibold text-lg">Secure & Private</h4>
                  <p className="text-gray-400 text-sm">
                    Your privacy is our utmost priority. All sessions are held
                    in a completely confidential and secure environment.
                  </p>
                </div>
              </article>

              {/* FLEXIBLE SCHEDULING */}
              <article
                className="flex items-start gap-4"
                aria-label="Flexible Scheduling"
              >
                <CalendarClock
                  className="text-blue-500 mt-1"
                  size={24}
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-semibold text-lg">Flexible Scheduling</h4>
                  <p className="text-gray-400 text-sm">
                    We offer flexible appointment times and an easy online
                    booking system so you can fit sessions into your life with
                    ease.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* Pulsating border glow */}
          <div className="absolute inset-0 rounded-xl animate-pulse bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 opacity-20 blur-2xl z-0" />
        </div>
      </div>
    </section>
  );
}
