'use client';

import React from 'react';
import Image from 'next/image';
import chose1 from '../../../assets/image2/choose-1.png';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const WhyChooseUs = () => {
  const listItems = [
    'Tailored Solutions',
    'Expert Team',
    'Commitment to Excellence',
    'Seamless Collaboration',
    'Proactive Support',
    'Comprehensive Services',
  ];

  return (
    <section className="w-full max-w-[1400px] px-5 md:px-10 lg:px-20 py-16 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <Image
          src={chose1}
          width={500}
          height={500}
          alt="Why choose us"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Right Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <p className="uppercase text-[var(--color-secondary)] text-lg font-semibold mb-3 tracking-wide">
          Why Choose Us?
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1f2937] dark:text-white leading-tight mb-6">
          Safeguard Your Brand with Cybersecurity and IT Solutions
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm md:text-base leading-relaxed">
          Elevate Your Business with ByteonSoft’s Premier Software and IT Solutions. 
          At ByteonSoft, we are dedicated to being your strategic partner in navigating the complexities of technology.
        </p>

        {/* List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {listItems.map((item, index) => (
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
    </section>
  );
};

export default WhyChooseUs;
