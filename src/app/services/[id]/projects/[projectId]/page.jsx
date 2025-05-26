"use client";

import { servicedata } from "@/Data/servicedata";
import Link from "next/link";
import PageIttle from "@/components/PageItile/PageIttle";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectDetailsPage = ({ params }) => {
  const { id, projectId } = params;
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

  const project = service.projects.find((p) => p.id.toString() === projectId);

  if (!project) {
    return (
      <div className="container mx-auto p-10 text-center text-red-600">
        Project not found.
        <br />
        <Link
          href={`/services/${id}`}
          className="text-blue-600 underline mt-4 inline-block"
        >
          Back to {service.title}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageIttle pageTitle={project.title} pageSubTitle={service.title} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-10"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded overflow-hidden shadow-lg mb-6"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover max-h-[500px] rounded"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base md:text-lg mb-6 text-gray-700"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3 mb-6"
        >
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href={`/services/${id}`}
            className="inline-block mt-4 px-5 py-2 bg-[#3A72ED] text-white rounded-md hover:bg-[#3466d2] transition"
          >
            Back to {service.title}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsPage;
