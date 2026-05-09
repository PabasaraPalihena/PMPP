"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaResearchgate, FaMedium } from "react-icons/fa";
import Link from "next/link";
import { socialLinks } from "@/data/social";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  researchgate: FaResearchgate,
  medium: FaMedium,
  email: FaEnvelope,
};

export default function Contact() {

  return (
    <section id="contact" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            I&apos;m always interested in hearing about new opportunities and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {socialLinks.map((social, index) => {
            const Icon = iconMap[social.platform];
            if (!Icon) return null;
            return (
              <motion.div
                key={social.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {social.platform === "email" ? (
                  <div className="flex items-center gap-3 px-6 py-4 md:px-8 bg-white rounded-full shadow-sm border border-gray-100 group cursor-default">
                    <div className="p-2 bg-gray-50 rounded-full text-gray-700">
                      <Icon size={24} />
                    </div>
                    <span className="font-bold text-gray-900">{social.label}</span>
                  </div>
                ) : (
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 md:px-8 bg-white rounded-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group border border-gray-100"
                  >
                    <div className="p-2 bg-gray-50 rounded-full group-hover:bg-gray-900 group-hover:text-white transition-colors text-gray-700">
                      <Icon size={24} />
                    </div>
                    <span className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">{social.label}</span>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
