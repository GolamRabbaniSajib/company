"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";

const stats = [
  { value: 10, suffix: "+", label: "Years of Experience", icon: "🎉" },
  { value: 750, suffix: "+", label: "Happy Clients", icon: "👥" },
  { value: 20, suffix: "+", label: "Country Served", icon: "🌍" },
  { value: 850, suffix: "+", label: "Project's completed", icon: "🚀" },
  { value: 4.9, suffix: "", label: "Rating on Clutch.co", icon: "⭐" },
  { value: 20, suffix: "M+", label: "App Downloads", icon: "📱" },
  { value: 120, suffix: "+", label: "Dedicated Developers", icon: "👨‍💻" },
  { value: 500, suffix: "+", label: "Websites Developed", icon: "🖥️" },
  { value: 150, suffix: "+", label: "Mobile Apps Developed", icon: "📲" },
];

const Performance = () => (
  <div className="bg-[#f0f9ff] py-14 px-4 md:px-20">
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-blue-500 font-medium">
          Maximize Your Business Potential with Our Custom Software Development
          Solutions for Success!
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 my-4 leading-snug">
          Trusted by 1,000+ Businesses for Expert Software Development Success!
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
          {stats.map(({ icon, value, suffix, label }, index) => (
            <motion.div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-3xl mb-2">{icon}</div>
              <h4 className="text-xl font-semibold text-blue-600">
                <CountUp end={value} duration={6} separator="," />
                {suffix}
              </h4>
              <p className="text-sm text-gray-600 mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex gap-6 justify-center lg:justify-end w-full h-full"
      >
        <div className="rounded-xl overflow-hidden shadow-md w-full md:w-auto h-full">
          <Image
            src="https://i.ibb.co/jvY8c7xf/team-Image.webp"
            alt="Team Working"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="hidden 7xl:block rounded-xl overflow-hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 md:relative md:bottom-auto md:left-auto md:translate-x-0 w-1/3 md:w-auto">
          <Image
            src="https://i.ibb.co/TMXT4z0c/team-Imagesidenew.webp"
            alt="Team Coding"
            width={300}
            height={350}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="hidden md:absolute md:bottom-4 md:right-4 bg-blue-800 text-white p-5 rounded-xl shadow-lg w-64 md:block">
          <div className="flex items-center gap-3">
            <motion.div
              className="text-yellow-400 text-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              🏆
            </motion.div>
            <div>
              <p className="text-xl font-semibold">
                <CountUp end={850} duration={2} />+
              </p>
              <p className="text-sm">Project's completed</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Performance;
