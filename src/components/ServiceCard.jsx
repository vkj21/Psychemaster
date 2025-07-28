"use client";

import {
  UserCircle,
  ShieldCheck,
  HelpingHand,
  Users,
  UsersRound,
  Presentation,
  GraduationCap,
  MoveRight,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  UserCircle,
  ShieldCheck,
  HelpingHand,
  Users,
  UsersRound,
  Presentation,
  GraduationCap,
};

export default function ServiceCard({ title, description, iconName }) {
  const Icon = iconMap[iconName] || UserCircle;

  return (
    <div className="group bg-[#1c1c1c] text-white p-6 rounded-2xl shadow-md shadow-purple-950 hover:shadow-lg transition flex flex-col">
      <div className="mb-4 bg-blue-600 w-fit p-2 rounded-md">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm font-normal text-gray-300">{description}</p>

      {/* Button anchored to bottom right */}
      <Link
        href="https://topmate.io/psychemaster_india"
        target="_blank"
        className="mt-auto self-end"
      >
        <button className="flex items-center  px-3 rounded-sm cursor-pointer group-hover:bg-purple-600 transition">
          <span className="">
            <MoveRight
              size={20}
              className="text-blue-600 group-hover:text-white"
            />
          </span>
        </button>
      </Link>
    </div>
  );
}
