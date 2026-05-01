"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Academic", href: "#academic" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="#"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/assets/images/MyLogo.png"
            alt="Logo"
            width={200}
            height={200}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.href}
                className="relative block px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:text-white"
              >
                {hoveredItem === item.href && (
                  <motion.span
                    className="absolute left-1/2 top-1/2 -z-10 h-10 w-20 bg-[#122D64]"
                    initial={{
                      x: "-50%",
                      y: "-50%",
                      scale: 0.7,
                      opacity: 0,
                      borderRadius: "55% 45% 60% 40% / 45% 55% 40% 60%",
                    }}
                    animate={{
                      x: "-50%",
                      y: "-50%",
                      scale: 1,
                      opacity: 1,
                      borderRadius: "50% 50% 55% 45% / 50% 50% 45% 55%",
                    }}
                    exit={{
                      scale: 0.7,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                  />
                )}

                <span className="relative z-10">{item.label}</span>
              </Link>
            </div>
          ))}
        </div>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-blue-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
