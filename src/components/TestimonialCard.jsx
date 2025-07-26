"use client";

export default function TestimonialCard({ quote, name, role, highlight }) {
  return (
    <div
      className={`bg-zinc-900 text-white rounded-2xl shadow-lg px-6 py-4 hover:shadow-blue-500/50 scale-[1.02] transition-transform duration-500 ease-in-out ${
        highlight ? "shadow-blue-500/50 scale-[1.02]" : "shadow-zinc-700"
      }`}
    >
      <p className="text-lg md:text-xl italic mb-6 text-gray-300 leading-relaxed">
        “{quote}”
      </p>

      <div className="border-t border-zinc-700 pt-4">
        <p className="text-gray-100 font-semibold text-base">{name}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  );
}
