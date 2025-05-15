"use client";

import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/logo/Byte on Soft Icon-09.png";

const Loading = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo */}
          <Image
            className="rounded-full shadow-lg"
            src={Logo}
            width={160}
            height={160}
            alt="loading logo"
            priority
          />

          <h2 className="text-gray-800 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide">
            ByteOnSoft
          </h2>

          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
