"use client";

import React from "react";
import Image from "next/image";
import chose2 from "../../../assets/image2/choose-2.png";
import { motion } from "framer-motion";

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
    "Proven Expertise",
    "Client-Centric Approach",
    "Transparent Communication",
    "Uncompromising Quality",
    "Dedicated Support",
    "Scalable Solutions",
  ];

  return (
    <div className="w-full max-w-[1400px] px-5 md:px-10 lg:px-20 py-16 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <p className="uppercase text-[#8B919E] text-sm font-semibold mb-2 tracking-wide">
          Why Trust Us?
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3F444B] dark:text-white leading-snug mb-6">
          Achieve Digital Transformation <br /> For Your Retail Business
          Services
        </h2>

        <p className="text-[#4B5563] dark:text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
          Your Trusted Partner in Software and IT Solutions. At ByteonSoft, we
          recognize that trust is the cornerstone of successful partnerships.
        </p>

        <p className="text-[#4B5563] dark:text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
          We bring innovation and dedication to every project, ensuring you
          receive scalable and future-ready digital solutions tailored for
          retail.
        </p>

        <p className="text-[#4B5563] dark:text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
          Our team prioritizes client success, combining deep industry knowledge
          with agile technology to drive transformation and growth.
        </p>
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
    </div>
  );
};

export default WhyTrustUs;
