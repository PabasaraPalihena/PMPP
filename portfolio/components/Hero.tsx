"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaResearchgate, FaMedium } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/social";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  researchgate: FaResearchgate,
  medium: FaMedium,
};

// Show only non-email links in the hero social row
const heroSocials = socialLinks.filter((s) => s.platform !== "email");

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-6 pt-8 pb-20">

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-1 leading-tight tracking-tight whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            I&apos;m Pabasara Palihena
          </motion.h1>
          {/* Red accent underline */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="h-1 w-24 bg-red-500 rounded-full mb-6 origin-left"
          />

          {/* Subheading */}
          <motion.p
            className="text-2xl md:text-3xl font-bold text-gray-700 mb-10 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Software Engineer
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Link
              href="#projects"
              className="group px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              View My Work
              <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-bold hover:border-red-500 hover:text-red-500 transition-all"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {heroSocials.map((social) => {
              const Icon = iconMap[social.platform];
              if (!Icon) return null;
              return (
                <Link
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="p-3 bg-white rounded-full shadow-sm text-gray-600 hover:text-white hover:bg-gray-900 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <Icon size={22} />
                </Link>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]">
            <Image
              src="/PMPP/assets/images/HeroImg.png"
              alt="Pabasara Palihena"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 480px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

