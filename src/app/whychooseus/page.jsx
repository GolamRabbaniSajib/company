"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Skilled & Passionate Team",
    description:
      "At ByteOnSoft, our developers and designers are not only skilled but deeply passionate about delivering innovative digital solutions.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We put our clients at the heart of every decision, ensuring tailored strategies and responsive communication from start to finish.",
  },
  {
    title: "Uncompromised Quality",
    description:
      "Every project at ByteOnSoft undergoes rigorous testing and quality checks to ensure flawless functionality and design.",
  },
  {
    title: "Punctual & Reliable Delivery",
    description:
      "We understand the importance of time. Our commitment to meeting deadlines makes us a trusted tech partner.",
  },
];

const WhyChooseUsPage = () => {
  return (
    <div className="min-h-screen text-[#3F444B] px-4 pt-24 pb-16 md:px-20 bg-gradient-to-br from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Why Choose <span className="text-indigo-600">ByteOnSoft</span>
        </h2>
        <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
          At ByteOnSoft, we blend technical excellence with creative vision to build
          impactful digital experiences. Here’s why clients consistently trust us to
          bring their ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-indigo-500 hover:shadow-indigo-200 transition duration-300"
          >
            <div className="flex items-center mb-4">
              <CheckCircle className="text-indigo-600 mr-2" size={24} />
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
            </div>
            <p className="text-gray-700 text-sm">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsPage;
