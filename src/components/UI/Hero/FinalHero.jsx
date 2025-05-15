'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import heroImage from '../../../assets/image2/home-font.png';

const FinalHero = () => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-sky-100 py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Empowering <span className="text-blue-600">Innovation</span> for Tomorrow
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-8">
            We build scalable solutions that bring ideas to life — modern, fast, and tailored for your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <Image
            src={heroImage}
            alt="Hero Illustration"
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FinalHero;
