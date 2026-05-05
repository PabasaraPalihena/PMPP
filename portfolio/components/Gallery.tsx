"use client";

import { motion } from "framer-motion";
import { FaImage } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/assets/projects/gallery-1.jpg",
      alt: "Project 1",
      title: "Project Showcase",
      category: "Photography",
    },
    {
      src: "/assets/projects/gallery-2.jpg",
      alt: "Project 2",
      title: "Workspace Setup",
      category: "Studio",
    },
    {
      src: "/assets/projects/gallery-3.jpg",
      alt: "Project 3",
      title: "Event Coverage",
      category: "Event",
    },
    {
      src: "/assets/projects/gallery-4.jpg",
      alt: "Project 4",
      title: "Creative Work",
      category: "Design",
    },
    {
      src: "/assets/projects/gallery-5.jpg",
      alt: "Project 5",
      title: "Nature Shot",
      category: "Photography",
    },
    {
      src: "/assets/projects/gallery-6.jpg",
      alt: "Project 6",
      title: "Conference",
      category: "Event",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="gallery" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaImage className="text-3xl text-gray-900" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Gallery</h2>
          </div>
          <p className="text-lg text-gray-600">A collection of my work and moments</p>
        </motion.div>

        <div className="w-full overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
            className="flex gap-6 w-max"
          >
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index % galleryImages.length)}
                className="group relative overflow-hidden rounded-lg cursor-pointer bg-gray-200 shrink-0 w-80 aspect-square"
              >
                {/* Placeholder - replace with actual image once uploaded */}
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center">
                    <FaImage className="text-4xl text-gray-200 mx-auto mb-2" />
                    <p className="text-gray-300 text-sm">{image.category}</p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h3 className="text-white font-bold text-xl mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Lightbox - Optional */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="relative w-full aspect-square bg-gray-800 rounded flex items-center justify-center mb-4">
                  <FaImage className="text-6xl text-gray-600" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{galleryImages[selectedImage].title}</h3>
                <p className="text-gray-300 mb-4">{galleryImages[selectedImage].category}</p>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 rounded transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
