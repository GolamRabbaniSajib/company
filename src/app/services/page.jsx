"use client";
import React from "react";
import { servicedata } from "@/Data/servicedata";
import ServiceCard from "@/components/Card/ServiceCard";

import PageIttle from "@/components/PageItile/PageIttle";
const ServicesPage = () => {
  const services = servicedata || [];

  return (
    <div>
      <PageIttle pageTitle="Services" pageSubTitle="Services" />
      <div className="container mx-auto w-full px-5 md:px-10 lg:px-16 py-10">
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                icon={service.icon}
                description={service.description}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No services available.</p>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
