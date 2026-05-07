"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FaExternalLinkAlt, FaGithub, FaVideo, FaGlobe, FaLinkedin, FaFileAlt } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap items-center gap-3">

                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors"
                      title="Source code"
                    >
                      <FaGithub size={20} />
                    </Link>
                  )}

                  {project.video && (
                    <Link
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors"
                      title="Video demo"
                    >
                      <FaVideo size={20} />
                    </Link>
                  )}

                  {project.website && (
                    <Link
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors"
                      title="Project website"
                    >
                      <FaGlobe size={20} />
                    </Link>
                  )}

                  {project.linkedin && (
                    <Link
                      href={project.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors"
                      title="LinkedIn"
                    >
                      <FaLinkedin size={20} />
                    </Link>
                  )}

                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors"
                      title="Project file"
                    >
                      <FaFileAlt size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-end mt-8"
        >
          <Link
            href="https://github.com/PabasaraPalihena"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-bold hover:bg-red-500 hover:border-red-500 hover:text-white transition-all"
          >
            More Projects
            <FaGithub size={18} className="group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}