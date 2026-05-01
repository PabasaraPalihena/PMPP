"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaResearchgate } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "your-email@example.com",
      href: "mailto:your-email@example.com",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/username",
      href: "https://github.com",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/username",
      href: "https://linkedin.com",
    },
    {
      icon: FaResearchgate,
      label: "ResearchGate",
      value: "researchgate.net/profile",
      href: "https://researchgate.net",
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
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                  className="block bg-white p-6 rounded-lg hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-900 group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{method.label}</h3>
                      <p className="text-gray-600 text-sm mt-1">{method.value}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="mailto:your-email@example.com"
            className="inline-block px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors text-lg"
          >
            Send Me an Email
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
