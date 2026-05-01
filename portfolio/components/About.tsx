"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Me</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              I&apos;m a software engineer passionate about building clean, scalable applications that solve real-world problems. 
              With expertise in React, TypeScript, and modern web technologies, I create user-focused digital experiences.
            </p>
            
            <p>
              My journey in tech has taught me the importance of writing maintainable code, collaborating effectively with teams, 
              and continuously learning new technologies. I thrive in environments where I can tackle challenging problems and 
              contribute to meaningful projects.
            </p>

            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, or sharing 
              knowledge with the developer community.
            </p>
          </div>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6"
        >
          {[
            { label: "Projects", value: "10+" },
            { label: "Experience", value: "3+ yrs" },
            { label: "Satisfied", value: "100%" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg">
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
