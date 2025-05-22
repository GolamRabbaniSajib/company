"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/Data/projects";

const ProjectsPage = () => {
  return (
    <div className="px-4 md:px-12 pb-10 container pt-24 mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-[#3F444B] mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Projects
      </motion.h2>
      <motion.p
        className="text-center text-[#4B5563] mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Take a look at the projects we've crafted with dedication and skill
        across various domains.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className=" dark:bg-neutral-900 rounded-xl shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <Link href={`/projects/${project.slug}`} passHref>
                  <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded hover:bg-gray-100">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#3F444B] dark:text-white mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((techItem, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full dark:bg-blue-900 dark:text-white"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
