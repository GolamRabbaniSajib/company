'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const ContactHome = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Handle API submit logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-2xl bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl px-8 py-10 md:p-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Let's Connect
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white py-3 px-4 text-gray-800 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white py-3 px-4 text-gray-800 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              required
              name="message"
              id="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message here..."
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white py-3 px-4 text-gray-800 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
          >
            <FiSend className="text-xl" />
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactHome;
