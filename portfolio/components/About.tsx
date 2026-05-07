"use client";

import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";

export default function About() {
  const stats = [
    { icon: FaCode, label: "Projects", value: "30+" },
    { icon: FaRocket, label: "Experience", value: "3+ yrs" },
    { icon: FaLightbulb, label: "Learning", value: "Active" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            About Me
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m a software engineer with 3+ years of experience building web
              applications. I work across both frontend and backend, focusing on
              performance, scalability and user experience.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I enjoy solving real world problems through code, whether it
              involves designing APIs or building user interfaces, while keeping
              things simple, clean and maintainable.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Currently pursuing an M.Sc. in Web Engineering at TU Chemnitz,
              I&apos;m exploring Semantic Web and Intelligent Systems. I
              transform sensor and industrial data into semantic knowledge
              graphs, turning raw data into structured, meaningful insights.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-red-600 transition-colors">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
