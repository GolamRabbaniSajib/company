"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Expert Team",
    description:
      "Our professionals bring years of experience and innovative thinking to deliver exceptional results.",
  },
  {
    title: "Customer First",
    description:
      "We prioritize client satisfaction with tailored solutions and round-the-clock support.",
  },
  {
    title: "Quality Assurance",
    description:
      "All our projects go through strict quality checks to ensure top-notch delivery every time.",
  },
  {
    title: "Timely Delivery",
    description:
      "We value your time and ensure every milestone is met on or before deadlines.",
  },
];

const WhyChooseUsPage = () => {
  return (
    <>
      <div className="min-h-screen text-[#3F444B] px-4 pt-24 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-[#4B5563] text-lg max-w-xl mx-auto">
            Discover what makes us the preferred choice for clients looking for
            quality, commitment, and results.
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
              className="bg-gray-100 p-6 rounded-2xl shadow-md border border-gray-200 hover:border-indigo-500 hover:shadow-indigo-200 transition duration-300"
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
    </>
  );
};

export default WhyChooseUsPage;
