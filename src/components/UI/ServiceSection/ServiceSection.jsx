"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    image: "https://i.ibb.co/1fQxG8Yd/5757453.jpg",
    heading: "Beautiful & Usable Interfaces",
    subheading: "Crafting seamless, user-friendly digital experiences.",
  },
  {
    title: "Web Development",
    slug: "web-development",
    image: "https://i.ibb.co/dJBkksYY/25001216-7040859.jpg",
    heading: "Modern Web Solutions",
    subheading: "Responsive and scalable websites built with best practices.",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    image:
      "https://i.ibb.co/wZbWg7g3/digital-marketing-with-icons-business-people.jpg",
    heading: "Grow Your Brand",
    subheading: "Targeted marketing strategies to reach the right audience.",
  },
  {
    title: "App Development",
    slug: "app-development",
    image: "https://i.ibb.co/s9fYW1HJ/5467426-1720.jpg",
    heading: "iOS & Android Apps",
    subheading: "Powerful and engaging mobile experiences on every device.",
  },
  {
    title: "SEO Optimization",
    slug: "seo-optimization",
    image: "https://i.ibb.co/4nZNjN7r/employee-working-marketing-setting.jpg",
    heading: "Rank Higher, Faster",
    subheading: "Search engine optimization that delivers measurable results.",
  },
  {
    title: "E-commerce Solutions",
    slug: "ecommerce-solutions",
    image: "https://i.ibb.co/SXgdpwK3/1216592-139280-OT8-HQA-203.jpg",
    heading: "Sell Smart Online",
    subheading: "Custom e-commerce platforms to scale your business.",
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const router = useRouter();

  const handleDetails = () => {
    router.push(`/services/${services[active].slug}`);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-12 py-10">
      {/* Left Column */}
      <div className="lg:w-1/2">
        <motion.h4
          className="text-sm font-semibold text-gray-500 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          WHY CHOOSE US?
        </motion.h4>
        <motion.h2
          className="text-2xl md:text-3xl font-bold leading-tight mb-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Safeguard Your Brand with <br />
          Cybersecurity and IT Solutions
        </motion.h2>
        <motion.p
          className="text-sm text-gray-700 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Elevate Your Business with ByteonSoft's Premier Software and IT
          Solutions. At ByteonSoft, we are dedicated to being your strategic
          partner in navigating the complexities of technology.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden border-l-4 px-5 py-4 rounded-lg shadow-md transition-colors duration-300
        ${
          index === active
            ? "border-blue-600 bg-blue-600 text-white"
            : "border-blue-600 bg-white text-gray-700 dark:bg-neutral-900 dark:text-white group"
        }`}
              onClick={() => setActive(index)}
              whileTap={{ scale: 0.97 }}
            >
              <span
                className={`absolute inset-0 bg-blue-600 z-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-lg ${
                  index === active ? "w-full" : ""
                }`}
              ></span>
              <span
                className={`relative z-10 ${
                  index === active ? "text-white" : "group-hover:text-white"
                }`}
              >
                {service.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 flex flex-col items-center gap-2">
        <h4 className="text-sm font-semibold text-gray-600">Recent Projects</h4>

        <div className="relative group w-full aspect-video sm:aspect-square bg-gray-200 rounded-lg shadow overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={services[active].slug}
              src={services[active].image}
              alt={services[active].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.button
              onClick={handleDetails}
              className="bg-white text-blue-600 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Details
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
