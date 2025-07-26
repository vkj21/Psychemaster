"use client";

import React, { useState } from "react";
import { Modal } from "@heroui/modal";
import { ArrowUpRight } from "lucide-react";

export default function ServiceModalClient({ services }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (service) => {
    setSelected(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelected(null);
  };

  return (
    <>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => openModal(service)}
            className="bg-black hover:bg-neutral-900 transition cursor-pointer p-6 rounded-xl flex flex-col justify-between shadow-md relative"
          >
            <div>
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.short}</p>
            </div>
            <ArrowUpRight className="absolute bottom-4 right-4 text-blue-500" />
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="bg-white rounded-xl max-w-md w-full mx-auto p-6 text-black shadow-xl">
          <h2 className="text-xl font-bold mb-2">{selected?.title}</h2>
          <p className="text-gray-700">{selected?.long}</p>
          <div className="text-right mt-6">
            <button
              onClick={closeModal}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
