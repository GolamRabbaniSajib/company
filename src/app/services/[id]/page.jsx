"use client";

import { servicedata } from "@/Data/servicedata";
import PageIttle from "@/components/PageItile/PageIttle";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const ServiceDetailsPage = ({ params }) => {
  const { id } = params;
  const service = servicedata.find((s) => s.id.toString() === id);

  if (!service) {
    return (
      <div className="container mx-auto p-10 text-center text-red-600">
        Service not found.
        <br />
        <Link
          href="/services"
          className="text-blue-600 underline mt-4 inline-block"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageIttle pageTitle={service.title} pageSubTitle={service.title} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded"
                />
              </div>

              <h2 className="text-lg md:text-xl font-semibold mb-2">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={`/services/${id}/projects/${project.id}`}
                className="inline-block mt-2 px-4 py-2 bg-[#3A72ED] text-white rounded-md hover:bg-[#3466d2] transition"
              >
                Details
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetailsPage;
