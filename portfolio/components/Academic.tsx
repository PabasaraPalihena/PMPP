"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaMedal } from "react-icons/fa";

export default function Academic() {
  const education = [
    {
      degree: "Degree Name",
      institution: "University Name",
      period: "2020 - 2024",
      description: "Brief description of your degree, specialization, and achievements.",
      gpa: "3.8/4.0",
    },
    {
      degree: "High School Diploma",
      institution: "School Name",
      period: "2018 - 2020",
      description: "Relevant coursework or achievements during high school.",
      gpa: "95%",
    },
  ];

  const certifications = [
    { name: "Certification Name", issuer: "Issuing Organization", date: "2024" },
    { name: "Another Certification", issuer: "Issuing Organization", date: "2023" },
  ];

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
    <section id="academic" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-12">
            <FaGraduationCap className="text-3xl text-gray-900" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Education</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600 font-medium">{edu.institution}</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-900 text-white rounded-full text-sm font-medium">
                    {edu.gpa}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{edu.period}</p>
                <p className="text-gray-700">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-12">
            <FaMedal className="text-3xl text-gray-900" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Certifications & Awards</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow border-l-4 border-gray-900"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
