import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-black text-white py-20 px-4 md:px-8">
      <div className="mx-auto grid md:grid-cols-2 gap-12 items-center py-10 px-4 md:px-8">
        <div className="relative">
          <div className="flex justify-center items-center">
            <Image
              src="/images/psyche-master.png"
              width={300}
              height={300}
              alt="psychemaster-logo"
              className=""
            />
          </div>
          <div className="absolute inset-0 rounded-xl animate-pulse bg-gradient-to-r from-purple-800 via-blue-950 to-purple-800 opacity-20 blur-2xl z-0" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-lg font-normal text-gray-100">
            At{" "}
            <span className="text-xl font-bold text-blue-600">
              PsycheMaster
            </span>
            , we are a dedicated team of certified and experienced counselors,
            passionate about supporting individuals and families affected by
            epilepsy. Our mission is to provide personalized, compassionate care
            that addresses not only medical concerns but also the emotional,
            social, and psychological challenges that come with living with
            epilepsy.
          </p>
          <p className="text-lg font-normal text-gray-100">
            We understand that epilepsy can impact every aspect of a person's
            life — from anxiety and stress to feelings of isolation or stigma.
            That’s why our counseling services are tailored to meet the unique
            needs of each client, offering guidance and support every step of
            the way.
          </p>
        </div>
      </div>
      <WhoWeAre />
    </div>
  );
}
