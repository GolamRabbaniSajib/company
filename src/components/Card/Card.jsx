'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Card = ({ title, image, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-full p-6 rounded-2xl  shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center space-y-4"
        >
            <div className="w-[80px] h-[80px]">
                <Image
                    src={image}
                    alt={title}
                    className="rounded-full object-cover"
                    width={80}
                    height={80}
                />
            </div>

            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

            <p className="text-sm text-gray-500">{description}</p>

            <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium hover:underline"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                <span>Learn More</span>
            </motion.button>
        </motion.div>
    );
};

export default Card;
