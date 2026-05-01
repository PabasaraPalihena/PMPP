"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full text-center"
      >
        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Hi, I&apos;m a Software Engineer
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I build elegant solutions to complex problems using React, TypeScript, and modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            href="#projects"
            className="group px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            View My Work
            <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="https://github.com"
            target="_blank"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="mailto:your-email@example.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaEnvelope size={24} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
