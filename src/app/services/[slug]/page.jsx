"use client";
import { useParams } from "next/navigation";
import services from "../../../Data/servicesdata";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.2, ease: "easeIn" } },
};

const cardHover = {
  scale: 1.05,
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
};

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [selectedCard, setSelectedCard] = useState(null);

  if (!service)
    return <div className="p-16 text-red-500 text-center">Service not found.</div>;

  return (
    <div className="p-16 mt-10 sm:p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">{service.title}</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-3xl">{service.subheading}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {service.cards.map((card, i) => (
          <motion.div
            key={i}
            className="p-6  border border-gray-200 rounded-xl cursor-pointer select-none"
            whileHover={cardHover}
            onClick={() => setSelectedCard(card)}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{card.title}</h2>
            
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <Dialog
            static
            open={true}
            onClose={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <motion.div
              className="fixed inset-0 bg-black/40"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setSelectedCard(null)}
            />

            <div className="flex items-center justify-center min-h-screen px-4 py-12">
              <motion.div
                className="relative bg-white rounded-xl max-w-lg w-full p-8 shadow-2xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()} // Prevent closing on modal content click
              >
                <Dialog.Title className="text-3xl font-bold mb-4 text-gray-900">
                  {selectedCard.title}
                </Dialog.Title>
                <Dialog.Description className="text-gray-700 whitespace-pre-line mb-6 leading-relaxed text-lg">
                  {selectedCard.description}
                </Dialog.Description>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                >
                  Close
                </button>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceDetails;
