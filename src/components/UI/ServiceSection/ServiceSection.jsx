"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import services from "../../../Data/servicesdata";

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const router = useRouter();

  const handleDetails = () => {
    router.push(`/services/${services[active].slug}`);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-12 py-10">
      {/* Left */}
      <div className="lg:w-1/2">
        <motion.h4
          className="text-sm font-semibold text-[#8B919E] mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          OUR SERVICES
        </motion.h4>
        <motion.h2
          className="text-3xl text-[#3F444B] font-bold leading-tight mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Explore Our Expertise <br />
          In Delivering Top-notch Solutions
        </motion.h2>
        <motion.p
          className="text-sm text-[#4B5563] mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Discover the wide range of services tailored to meet your business
          needs and help you succeed in the digital era.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => setActive(index)}
              className={`
        relative border-l-4 border-[var(--color-primary)] px-5 py-4 rounded-lg shadow-md cursor-pointer overflow-hidden
        ${
          index === active
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-700 dark:bg-neutral-900 dark:text-white"
        }
        group
      `}
              whileTap={{ scale: 0.97 }}
            >
              {/* Hover Background Expand */}
              <span
                className={`
          absolute inset-0 bg-[var(--color-primary)] z-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-lg
          ${index === active ? "w-full" : ""}
        `}
              ></span>

              {/* Text with smooth color transition */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {service.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="lg:w-1/2 flex flex-col items-center gap-2">
        <h4 className="text-sm font-semibold text-gray-600">Recent Projects</h4>

        <div className="relative group w-full aspect-video sm:aspect-square bg-gray-200 rounded-lg shadow overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={services[active].slug}
              src={services[active].image}
              alt={services[active].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          <motion.div
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.button
              onClick={handleDetails}
              className="bg-white text-blue-600 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Details
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
