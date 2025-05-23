export const metadata = {
  title: "SERVICES | ByteOnSoft",
  description:
    "ByteOnSoft specializes in web development, UX/UI design, and software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
};

export const dynamic = "force-dynamic";

import React from "react";
import axios from "axios";
import ServiceCard from "@/components/Card/ServiceCard";
import PageIttle from "@/components/PageItile/PageIttle";

const Services = async () => {
  let services = [];

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-services`,
      {
        headers: {
          "cache-control": "no-cache",
        },
      }
    );
    services = response.data;
  } catch (error) {
    console.error("Error fetching services:", error?.message || error);
  }

  return (
    <div>
      <PageIttle pageTitle="Services" pageSubTitle="Services" />

      <div className="container mx-auto w-full px-5 md:px-10 lg:px-16 py-10">
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                description={service.description}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-300 mt-10">
            No services found at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
