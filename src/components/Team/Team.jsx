"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Kadir Miye",
    email: "kadir@uikit.com",
    image: "https://i.ibb.co/jvWcNmSD/1000015750.jpg",
    bio: "Lead developer passionate about UI/UX and scalable frontend architecture.",
    social: {
      instagram: "https://instagram.com/kadir",
      facebook: "https://facebook.com/kadir",
      twitter: "https://twitter.com/kadir",
      linkedin: "https://linkedin.com/in/kadir",
    },
  },
  {
    name: "Isabella Thompson",
    email: "isabella@uikit.com",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Creative designer with a keen eye for minimalism and storytelling through design.",
    social: {
      instagram: "https://instagram.com/isabella",
      facebook: "https://facebook.com/isabella",
      twitter: "https://twitter.com/isabella",
      linkedin: "https://linkedin.com/in/isabella",
    },
  },
  {
    name: "Zainab Rahman",
    email: "zainab@uikit.com",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Project manager who brings agile workflows and strong communication to the team.",
    social: {
      instagram: "https://instagram.com/zainab",
      facebook: "https://facebook.com/zainab",
      twitter: "https://twitter.com/zainab",
      linkedin: "https://linkedin.com/in/zainab",
    },
  },
  {
    name: "Aiden Davis",
    email: "aiden@uikit.com",
    image:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Full-stack engineer focused on performance, clean code, and backend scalability.",
    social: {
      instagram: "https://instagram.com/aiden",
      facebook: "https://facebook.com/aiden",
      twitter: "https://twitter.com/aiden",
      linkedin: "https://linkedin.com/in/aiden",
    },
  },
  {
    name: "Sophia Nguyen",
    email: "sophia@uikit.com",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "UX researcher ensuring every product decision is rooted in user empathy.",
    social: {
      instagram: "https://instagram.com/sophia",
      facebook: "https://facebook.com/sophia",
      twitter: "https://twitter.com/sophia",
      linkedin: "https://linkedin.com/in/sophia",
    },
  },
  {
    name: "Liam Carter",
    email: "liam@uikit.com",
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "DevOps engineer automating deployment pipelines and monitoring infrastructure.",
    social: {
      instagram: "https://instagram.com/liam",
      facebook: "https://facebook.com/liam",
      twitter: "https://twitter.com/liam",
      linkedin: "https://linkedin.com/in/liam",
    },
  },
];

const Team = () => {
  return (
    <section className="bg-[#f0f8ff] text-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="text-sm text-green-600 font-semibold uppercase tracking-wider">
            Our Awesome Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            We are Born For Technology
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            We make life easier for our customers and community through
            reliable, affordable, and useful tech innovations.
          </p>
          <a
            href="#"
            className="inline-block text-sm text-green-600 font-medium hover:underline transition duration-300 mt-3"
          >
            Learn more →
          </a>
        </div>

        {/* Team Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 flex flex-col items-center text-center"
            >
              <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden shadow-sm border-4 border-white hover:ring-4 ring-green-200 transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-green-600 mb-1">{member.email}</p>
              <p className="text-sm text-gray-500">{member.bio}</p>
              <div className="flex gap-3 mt-4 justify-center">
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-600 transition-all"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={18} />
                  </a>
                )}
                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-600 transition-all"
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={18} />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-600 transition-all"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={18} />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-600 transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
