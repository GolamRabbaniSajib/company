// src/app/services/[id]/page.jsx
import { servicedata } from "@/Data/servicedata";
import PageIttle from "@/components/PageItile/PageIttle";
import Link from "next/link";

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
      <div className="container mx-auto w-full px-5 md:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.projects.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-white rounded shadow hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-100 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/services/${id}/projects/${project.id}`}
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
