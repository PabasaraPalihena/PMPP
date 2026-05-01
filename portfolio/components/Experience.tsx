"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { FaBriefcase, FaCalendar } from "react-icons/fa";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative pl-8">
              {/* Timeline indicator */}
              <div className="absolute left-0 top-2 w-6 h-6 bg-gray-900 rounded-full border-4 border-white" />
              {index !== experiences.length - 1 && (
                <div className="absolute left-3 top-8 w-0.5 h-24 bg-gray-200" />
              )}

              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaCalendar size={16} />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">▹</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
