"use client";

import {
  UserCircle,
  ShieldCheck,
  HelpingHand,
  Users,
  UsersRound,
  Presentation,
  GraduationCap,
} from "lucide-react";

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
    <div className="bg-[#1c1c1c] text-white p-6 rounded-2xl shadow-md shadow-purple-950 hover:shadow-lg transition">
      <div className="mb-4 bg-blue-600 w-fit p-2 rounded-md">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm font-normal text-gray-300">{description}</p>
    </div>
  );
}
