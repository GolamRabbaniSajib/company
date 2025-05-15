"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const techLogos = [
  "ex",
  "nodejs",
  "lightning",
  "flask",
  "django",
  "laravel",
  "react",
  "vue",
  "angular",
  "css",
  "csharp",
  "javascript",
  "php",
  "python",
  "graphql",
  "redis",
  "mongodb",
  "azure",
  "aws",
  "docker",
  "figma",
  "lightning2",
  "flask2",
];

const logoMap = {
  angular: "https://i.ibb.co/672XKjMr/angular.webp",
  azure: "https://i.ibb.co/gbYZM1q6/azure.webp",
  csharp: "https://i.ibb.co/zgyyNnX/C-Sharp-Logo-2023.webp",
  css: "https://i.ibb.co/XHGJhT5/CSS.webp",
  django: "https://i.ibb.co/F4GytQYy/django.webp",
  docker:
    "https://i.ibb.co/FbtQXQfw/docker-logo-logos-logos-and-brands-icon.webp",
  ex: "https://i.ibb.co/99yFP0Mk/express-js-node-js-javascript-github-text-trademark.webp",
  lightning: "https://i.ibb.co/rK9TXYbV/Fast-API-1.webp",
  lightning2: "https://i.ibb.co/rK9TXYbV/Fast-API-1.webp",
  figma: "https://i.ibb.co/DPTMJsS0/figma.webp",
  flask: "https://i.ibb.co/B5jnGzP6/Flask.webp",
  flask2: "https://i.ibb.co/B5jnGzP6/Flask.webp",
  graphql: "https://i.ibb.co/ZRBsRHTF/Graph-QL-Logo.webp",
  javascript: "https://i.ibb.co/W4sVfNKZ/js.webp",
  laravel: "https://i.ibb.co/Z5FZYmw/Laravel-n-ALfmn-L.webp",
  mongodb: "https://i.ibb.co/XZrm2Sz2/Mongodb.webp",
  php: "https://i.ibb.co/JwW76JtQ/php-m9bh-N8-K.webp",
  nodejs: "https://i.ibb.co/FLS8XZ0w/programing.webp",
  python: "https://i.ibb.co/N6ZvQ79c/pythobn-removebg-preview.webp",
  react: "https://i.ibb.co/mF1HTYmw/react-js.webp",
  redis: "https://i.ibb.co/9kTvGHH5/redis-KXSFr-UM.webp",
  vue: "https://i.ibb.co/ccjXFvpM/VUe-nf-VWIA9.webp",
  web: "https://i.ibb.co/G3QXcY2h/web.webp",
};

const TechStack = () => {
  return (
    <div className="py-20 bg-[#EBF6F6] text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
          Advanced Tech <span className="text-emerald-500">Stack</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto px-4">
          Discover the top technologies and platforms we use to create
          innovative, scalable solutions.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
          {techLogos.map((key, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ delay: index * 0.05, type: "spring" }}
              viewport={{ once: true }}
              className="w-20 h-20 sm:w-24 sm:h-24 bg-white shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out flex items-center justify-center p-3"
              style={{
                clipPath:
                  "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
              }}
            >
              <Image
                src={logoMap[key]}
                alt={`${key} logo`}
                width={48}
                height={48}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
