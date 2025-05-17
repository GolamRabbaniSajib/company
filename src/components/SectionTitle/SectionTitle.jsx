'use client';
import { motion } from 'framer-motion';
import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-center mb-12 px-4"
    >
      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600 inline-block"
      >
        {heading}
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-2 text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
      >
        {subHeading}
      </motion.p>
    </motion.div>
  );
};

export default SectionTitle;
