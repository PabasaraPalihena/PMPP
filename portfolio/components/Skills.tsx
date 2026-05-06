"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="space-y-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.06 }}
              viewport={{ once: true }}
              className="grid gap-5 border-b border-slate-200 pb-8 last:border-b-0 md:grid-cols-[240px_1fr]"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skillGroup.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-shadow hover:shadow-md"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}