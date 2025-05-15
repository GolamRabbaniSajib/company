'use client';

import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'SYSTEM ENGINEERING', color: 'from-pink-600 to-rose-400' },
  { number: '02', title: 'ANALYSIS', color: 'from-blue-500 to-cyan-400' },
  { number: '03', title: 'DESIGN', color: 'from-green-400 to-lime-400' },
  { number: '04', title: 'CODING', color: 'from-yellow-400 to-orange-400' },
  { number: '05', title: 'QUALITY ASSURANCE', color: 'from-rose-500 to-orange-400' },
  { number: '06', title: 'POST-LAUNCH MAINTENANCE', color: 'from-indigo-500 to-purple-600' },
];

const StepFlow = () => {
  return (
    <div className="bg-[#e3fcef] min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl text-center space-y-10">
        {/* Heading Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Development Process
          </h2>
          <p className="text-md md:text-lg text-gray-600 mt-2">
            At <span className="font-semibold text-green-600">Byte On Soft</span>, we follow a strategic and systematic process to deliver exceptional digital solutions.
          </p>
        </div>

        {/* Step Cards */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center gap-4 p-4 rounded-xl text-white shadow-lg bg-gradient-to-r ${step.color}`}
            >
              <div className="w-12 h-12 min-w-12 rounded-full bg-white text-center text-lg font-bold text-pink-600 flex items-center justify-center shadow-md">
                {step.number}
              </div>
              <div className="text-sm font-semibold tracking-wide">{step.title}</div>
              {index < steps.length - 1 && (
                <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-white opacity-20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepFlow;
