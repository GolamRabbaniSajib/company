'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMessageCircle } from 'react-icons/fi';

const ContactCard = ({ title, btnTxt }) => {
  const isEmail = title.toLowerCase().includes('email');
  const icon = isEmail ? <FiMail /> : <FiMessageCircle />;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 text-center space-y-4 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-4xl text-blue-600 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">
        Connect with us for personalized support or quick questions. We’ll respond fast!
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition-colors duration-300">
        {btnTxt}
      </button>
    </motion.div>
  );
};

export default ContactCard;
