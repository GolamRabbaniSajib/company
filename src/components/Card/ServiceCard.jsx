// src/components/Card/ServiceCard.jsx
"use client";
import React from "react";
import Link from "next/link";

const ServiceCard = ({ id, title, icon: Icon, description }) => {
  return (
    <Link href={`/services/${id}`}>
      <div className="p-5 bg-white shadow rounded-lg text-center hover:shadow-lg transition cursor-pointer">
        <div className="text-4xl text-primary mb-3">
          <Icon />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
