import testimonials from "@/data/testimonials.json";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";

export default function TestimonialsPage() {
  return (
    <section className="min-h-screen bg-black text-white px-4 py-20 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 mb-12 justify-center items-center">
        <h1 className="text-3xl font-bold text-center w-fit hover:px-20 transition-all ease-in-out">
          Testimonials
        </h1>
        <p className="text-base text-gray-300 font-normal text-center">
          Finding the right support can change everything. <br />
          Here is what people are saying about their experience with
          PsycheMaster.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            quote={testimonial.quote}
            name={testimonial.name}
            highlight={idx === 0} // highlight only the first one
          />
        ))}
      </div>
      <div className="mt-10 w-[80%] sm:w-[40%] flex flex-row justify-center items-center gap-0 overflow-hidden">
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
          />
        </Link>
        <Link href="https://forms.gle/EYpLWRQ4Dgk8nQPM7" target="_blank">
          <button className="text-sm text-white bg-blue-600 rounded-r-lg px-4 py-3 hover:bg-blue-700 whitespace-nowrap">
            Share Now
          </button>
        </Link>
      </div>
    </section>
  );
}
