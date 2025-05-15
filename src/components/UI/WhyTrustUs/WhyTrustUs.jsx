'use client';

import React from 'react';
import Image from 'next/image';
import chose2 from '../../../assets/image2/choose-2.png';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const WhyTrustUs = () => {
  const items = [
    'Proven Expertise',
    'Client-Centric Approach',
    'Transparent Communication',
    'Uncompromising Quality',
    'Dedicated Support',
    'Scalable Solutions',
  ];

  return (
    <section className="w-full max-w-[1400px] px-5 md:px-10 lg:px-20 py-16 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <p className="uppercase text-[var(--color-secondary)] text-lg font-semibold mb-3 tracking-wide">
          Why Trust Us?
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1f2937] dark:text-white leading-tight mb-6">
          Achieve Digital Transformation For <br /> Your Retail Business Services
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm md:text-base leading-relaxed">
          Your Trusted Partner in Software and IT Solutions. At ByteonSoft, we recognize that trust is the cornerstone of successful partnerships.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              className="relative overflow-hidden border-l-4 border-[var(--color-primary)] px-5 py-4 rounded-lg shadow-md bg-white dark:bg-neutral-900 text-gray-700 dark:text-white group"
            >
              <span className="absolute inset-0 bg-[var(--color-primary)] z-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-lg"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <Image
          src={chose2}
          width={500}
          height={500}
          alt="Why trust us"
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
};

export default WhyTrustUs;
