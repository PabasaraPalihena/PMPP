"use client";

import { motion } from "framer-motion";

export default function Academic() {
  const education = [
    {
      degree: "M.Sc. in Web Engineering",
      institution: "Technical University of Chemnitz, Germany",
      period: "2024 – Present",
      grade: "Current Grade: 1.73",
    },
    {
      degree: "B.Sc. (Hons) in Information Technology Specialization in Software Engineering",
      institution: "Sri Lanka Institute of Information Technology (SLIIT), Sri Lanka",
      period: "2019 – 2023",
      grade: "Grade: 1.8",
    },
    {
      degree: "G.C.E. Advanced Level - Sri Lanka",
      institution: "Combined Mathematics, Physics, Information and Communication Technology",
      period: "2015 – 2017",
      grade: "Passed",
    },
  ];

  const publications = [
    {
      title:
        "Advancing Canine Health and Care: A Multifaceted Approach Using Machine Learning",
      venue: "IEEE, 2023",
      link: "https://ieeexplore.ieee.org/document/10155781",
    },
    {
      title: "Evaluating Knowledge Graphs Quality and Validation",
      venue: "2025",
      link: "https://www.researchgate.net/publication/403089434_Evaluating_Knowledge_Graphs_Quality_and_Validation",
    },
    {
      title: "SQL Injection Attack Detection and Prevention – Review",
      venue: "2022",
      link: "https://www.researchgate.net/publication/364935556_A_comprehensive_review_of_methods_for_SQL_injection_attack_detection_and_prevention",
    },
    {
      title:
        "Measuring and Evaluating a Complexity Metric for Object-Oriented Code",
      venue: "2022",
      link: "https://www.researchgate.net/publication/363214292_Measuring_and_Evaluating_a_Complexity_Metric_for_Object_Oriented_Code",
    },
    {
      title:
        "Security Challenges and Solutions in Internet of Things (IoT): A Review",
      venue: "2022",
      link: "https://www.researchgate.net/publication/365349394_Security_Challenges_and_Solutions_in_Internet_of_Things_IoT_A_Review",
    },
  ];

  return (
    <section id="academic" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 md:text-5xl">
              Education
            </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl bg-gray-50 p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="font-medium text-gray-600">
                      {edu.institution}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-gray-900 px-3 py-1 text-sm font-medium text-white">
                    {edu.grade}
                  </span>
                </div>

                <p className="mb-3 text-sm text-gray-500">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 md:text-5xl">
              Publications
            </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {publications.map((pub, index) => (
              <motion.a
                key={pub.title}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-xl border-l-4 border-gray-900 bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {pub.title}
                </h3>
                <p className="text-sm text-gray-500">{pub.venue}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}