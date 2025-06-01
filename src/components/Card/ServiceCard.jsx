// src/components/Card/ServiceCard.jsx
"use client";
import React from "react";
import Link from "next/link";

const ServiceCard = ({ id, title, icon: Icon, description }) => {
  return (
    <Link href={`/services/${id}`} passHref>
      <div
        className="group p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-center cursor-pointer flex flex-col items-center justify-center h-full"
        aria-label={`Learn more about ${title}`}
      >
        {/* Icon Centered */}
        <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-full bg-primary/10 text-primary text-4xl sm:text-5xl transition duration-300 group-hover:scale-110">
          <Icon aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#3F444B] dark:text-white mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#555A63] dark:text-gray-300 leading-relaxed max-w-xs">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
