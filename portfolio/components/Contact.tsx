"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaResearchgate, FaMedium } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const contactMethods = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/username",
      href: "https://www.linkedin.com/in/pabasara-palihena-91a618211/",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/username",
      href: "https://github.com/PabasaraPalihena",
    },
    {
      icon: FaResearchgate,
      label: "ResearchGate",
      value: "researchgate.net/profile",
      href: "https://www.researchgate.net/profile/Pabasara-Palihena",
    },
    {
      icon: FaMedium,
      label: "Medium",
      value: "medium.com/@username",
      href: "https://pabasarapalihena.medium.com/",
    },
    {
      icon: FaEnvelope,
      label: "pabasarapalihena@gmail.com",
      value: "pabasarapalihena@gmail.com",
      href: "mailto:pabasarapalihena@gmail.com",
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            I&apos;m always interested in hearing about new projects and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={method.href}
                  target="_blank"
                  className="flex items-center gap-3 px-6 py-4 md:px-8 bg-white rounded-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group border border-gray-100"
                >
                  <div className="p-2 bg-gray-50 rounded-full group-hover:bg-[#122D64] group-hover:text-white transition-colors text-gray-700">
                    <Icon size={24} />
                  </div>
                  <span className="font-bold text-gray-900 group-hover:text-[#122D64] transition-colors">{method.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
