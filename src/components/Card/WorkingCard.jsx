'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WorkingCard = ({ title, image, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="h-full p-6 rounded-2xl  dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-4 border border-gray-100 dark:border-gray-800"
    >
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 w-20 h-20 flex items-center justify-center shadow-sm">
        <Image
          src={image}
          alt={title}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
        {title}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default WorkingCard;
