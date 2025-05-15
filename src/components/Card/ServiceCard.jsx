'use client'
import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ title, image, description }) => {
  return (
    <div
      className="w-full h-full  dark:bg-neutral-900 rounded-3xl p-6 flex flex-col items-center 
      text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-md"
    >
      {/* Icon or Image */}
      <div className="w-24 h-24 mb-5 rounded-full bg-gradient-to-r from-[var(--color-primary)]/40 to-purple-500/30 flex items-center justify-center shadow-lg">
        <Image
          src={image}
          alt={title}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
        {description}
      </p>

      
    </div>
  );
};

export default ServiceCard;
