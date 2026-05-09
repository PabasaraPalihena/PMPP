"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Academic", id: "academic" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `/${id}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={scrollToTop}
          className="flex items-center hover:opacity-80 transition-opacity"
          aria-label="Scroll to top"
        >
          <Image
            src="/PMPP/assets/images/PLogo.png"
            alt="Logo"
            width={200}
            height={200}
            className="h-12 w-auto"
            priority
          />
        </button>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button
                onClick={() => scrollTo(item.id)}
                className="relative block px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:text-white"
              >
                {hoveredItem === item.id && (
                  <motion.span
                    className="absolute left-1/2 top-1/2 -z-10 h-10 w-20 bg-gray-900"
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
              </button>
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
                <button
                  key={item.id}
                  onClick={() => { scrollTo(item.id); setMobileMenuOpen(false); }}
                  className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-gray-100 text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

