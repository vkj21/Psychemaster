import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 bg-black text-white">
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          PsycheMaster’s Epilepsy Support Initiative
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Empowering Epilepsy Warriors & Their Loved Ones
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base">
            Book a Session
          </button>
          <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-md text-base">
            Learn More
          </button>
        </div>
      </div>
      <div className="relative md:w-1/2 flex justify-center mb-10 md:mb-0">
        <Image
          src="/images/brain-glow.png"
          width={400}
          height={400}
          alt="Glowing Brain Neural Network"
          className="w-full max-w-md md:max-w-lg drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:drop-shadow-[0_0_50px_rgba(59,130,246,1)]"
          priority
        />
        <div className="absolute inset-0 rounded-xl animate-pulse bg-gradient-to-r from-purple-800 via-blue-800 to-purple-800 opacity-20 blur-2xl z-0" />
      </div>
    </section>
  );
}
