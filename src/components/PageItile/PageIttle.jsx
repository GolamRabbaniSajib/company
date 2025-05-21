'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

const PageTitle = ({ pageTitle, pageSubTitle }) => {
  return (
    <section className="w-full pt-24 flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-[#3F444B] dark:text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {pageTitle}
      </motion.h1>

      <motion.p
        className="text-sm md:text-base font-medium text-[#4B5563] dark:text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="/"
          className="text-[var(--color-primary)] hover:underline transition-all duration-200"
        >
          Home
        </Link>{' '}
        / {pageSubTitle}
      </motion.p>
    </section>
  );
};

export default PageTitle;
