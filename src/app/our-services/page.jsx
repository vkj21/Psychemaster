import epilepsyServices from "@/data/epilepsy-counselling.json";
import counsellingServices from "@/data/counselling-services.json";
import ServiceCard from "@/components/ServiceCard";

export default function OurServicesPage() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-tr from bg-purple-950 via-black to-purple-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Our Services
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
          At PsycheMaster, we offer compassionate, tailored support for those
          living with epilepsy and those seeking mental wellness. Explore our
          specialized services below.
        </p>

        {/* Epilepsy Services */}
        <h2 className="text-2xl font-semibold mb-6">
          Special Care Programs for Epilepsy Support
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {epilepsyServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconName={service.icon}
            />
          ))}
        </div>

        {/* Counseling Services */}
        <h2 className="text-2xl font-semibold mb-6">Counseling Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {counsellingServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconName={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
