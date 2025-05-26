"use client";
import React from "react";
import { servicedata } from "@/Data/servicedata";
import ServiceCard from "@/components/Card/ServiceCard";
import PageIttle from "@/components/PageItile/PageIttle";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const services = servicedata || [];

  return (
    <div>
      <PageIttle pageTitle="Services" pageSubTitle="Services" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto w-full px-5 md:px-10 lg:px-16 py-10"
      >
        {services.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.3 }}
              >
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No services available.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default ServicesPage;
