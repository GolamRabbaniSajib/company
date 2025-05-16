"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/Card/ServiceCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import axios from "axios";

const OurService = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 loading state

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-services`,
          {
            headers: {
              "cache-control": "no-cache",
            },
          }
        );
        setServices(res.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false); // 👈 stop loading after fetch
      }
    };

    fetchServices();
  }, []);

  return (
    <motion.div
      className="text-center container mx-auto w-full p-5 md:p-10 lg:p-16 mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle
        heading={"Our Services"}
        subHeading={"Safeguard Your Brand with Cybersecurity and IT Solutions"}
      />

      {loading ? (
        <div className="flex justify-center items-center h-60">
          {/* Spinner or Loading Message */}
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                image={service?.image}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default OurService;
