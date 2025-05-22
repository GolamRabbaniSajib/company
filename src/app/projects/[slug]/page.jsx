"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { projects } from "@/Data/projects";
import { HiChevronLeft } from "react-icons/hi";

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const router = useRouter();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-3xl font-extrabold text-red-600 mb-6">
          Oops! Project not found.
        </h2>
        <p className="mb-8 text-[#4B5563] max-w-md">
          The project you are looking for does not exist or might have been
          removed.
        </p>
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-6 py-3 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200 transition"
          aria-label="Go back"
        >
          <HiChevronLeft className="w-5 h-5" />
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 md:px-12 pt-24 pb-20 max-w-5xl">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 mb-8 text-[#4B5563] hover:text-gray-900 transition font-medium"
        aria-label="Go back"
      >
        <HiChevronLeft className="w-6 h-6" />
        Back to projects
      </button>

      <h1 className="text-5xl font-extrabold mb-8 text-[#3F444B] tracking-tight">
        {project.title}
      </h1>

      <div className="rounded-xl overflow-hidden shadow-lg mb-10">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <p className="text-lg leading-relaxed text-[#4B5563] mb-10">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-4 mb-16">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <button
        onClick={() => router.back()}
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition"
        aria-label="Go back"
      >
        Go Back to Projects
      </button>
    </div>
  );
};

export default ProjectDetailsPage;
