"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceCard = ({ title, image, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group w-full h-full bg-white dark:bg-neutral-900 rounded-3xl p-6 
                 flex flex-col items-center text-center shadow-md"
    >
      {/* Icon / Image */}
      <div className="w-24 h-24 mb-5 rounded-full bg-gradient-to-r from-[var(--color-primary)]/40 to-purple-500/30 
                      flex items-center justify-center shadow-md">
        <Image
          src={image}
          alt={`${title} icon`}
          width={60}
          height={60}
          className="object-contain"
          loading="lazy"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-justify leading-relaxed tracking-normal">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
