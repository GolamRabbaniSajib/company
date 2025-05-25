import { servicedata } from "@/Data/servicedata";
import Link from "next/link";
import PageIttle from "@/components/PageItile/PageIttle";

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
      <div className="container mx-auto px-5 md:px-10 lg:px-16 py-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-96 object-cover rounded mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-200 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={`/services/${id}`}
          className="inline-block mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
        >
          Back to {service.title}
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
