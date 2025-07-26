// import WhatWeDo from "@/components/WhatWeDo";
// import React from "react";

// export default function page() {
//   return (
//     <div>
//       <WhatWeDo />
//     </div>
//   );
// }

import ServiceModalClient from "@/components/ServiceModalClient";
import React from "react";
// import DynamicModal from "./ServiceModalClient"; // client-side modal logic

const services = [
  {
    title: "Individual Counseling",
    short:
      "One to One session over your Personal challenges with Epilepsy condition",
    long: "Our individual counseling sessions are tailored to help you manage the psychological effects of epilepsy...",
    icon: "🧠",
  },
  {
    title: "Epilepsy Warriors Training",
    short: "Personalized training for Epilepsy patient",
    long: "A training module designed for those living with epilepsy...",
    icon: "🛡️",
  },
  {
    title: "Epilepsy Caregivers Training",
    short: "Personalized training for Epilepsy caregivers",
    long: "Helping caregivers understand epilepsy and support patients with empathy...",
    icon: "👥",
  },
  {
    title: "Family Training",
    short:
      "Personalized family training program for Epilepsy warriors and their loved ones",
    long: "Strengthening family bonds through guidance and counseling...",
    icon: "🏠",
  },
];

export default function page() {
  return (
    <div className="bg-[#111] text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center">WHAT WE DO</h2>
      <p className="text-center text-gray-400 mt-2 mb-10">
        Our Psychological Support
      </p>

      {/* Grid + Modal Logic in Client Component */}
      <ServiceModalClient services={services} />
    </div>
  );
}
