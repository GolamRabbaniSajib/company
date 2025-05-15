'use client'; // Mark this component as a Client Component

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion
import ServiceCard from '@/components/Card/ServiceCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import axios from 'axios';

const OurService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-services`, {
          headers: {
            'cache-control': 'no-cache',
          }
        });
        setServices(res.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    
    fetchServices();
  }, []);

  return (
    <motion.div
      className="text-center container mx-auto w-full  p-5 md:p-10 lg:p-16 mb-10"
      initial={{ opacity: 0 }}  // Start from 0 opacity
      animate={{ opacity: 1 }}   // Animate to full opacity
      transition={{ duration: 0.8 }} // Smooth transition duration
    >
      <SectionTitle
        heading={'Our Services'}
        subHeading={'Safeguard Your Brand with Cybersecurity and IT Solutions'}
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8" // Proper gap for both axes
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }} // Slide-up effect
            animate={{ opacity: 1, y: 0 }}   // Slide into view
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
          >
            <ServiceCard
              title={service.title}
              image={service?.image} // Use predefined images
              description={service.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurService;
