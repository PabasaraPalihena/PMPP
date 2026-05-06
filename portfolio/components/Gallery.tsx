"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function Gallery() {

  const galleryImages = [
    {
      src: "/assets/projects/Graduation.jpeg",
      alt: "Project 1",
      title: "Bachelor's Graduation",
      objectPosition: "object-center",
    },
    {
      src: "/assets/projects/Mensch.png",
      alt: "Project 2",
      title: "Volunteering at Mensch und Computer Conference",
      objectPosition: "object-center",
    },
    {
      src: "/assets/projects/IMG-Conference.jpeg",
      alt: "Project 3",
      title: "Volunteering at Mensch und Computer Conference",
      objectPosition: "object-center",
    },
    {
      src: "/assets/projects/MarxDev.jpeg",
      alt: "Project 4",
      title: "Planspiel Web Engineering WS25/26",
      objectPosition: "object-center",
    },
    {
      src: "/assets/projects/MarxDev2.jpeg",
      alt: "Project 5",
      title: "Planspiel Web Engineering WS25/26 - Final Pitch",
      objectPosition: "object-center",
    },
    {
      src: "/assets/projects/OfficeGathering.jpg",
      alt: "Project 6",
      title: "Office Gathering",
      objectPosition: "object-top",
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
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Gallery</h2>
        </motion.div>

        <div className="w-full overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
            className="flex gap-4 md:gap-6 w-max"
          >
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gray-200 shrink-0 w-72 md:w-96 aspect-[3/2]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 288px, 384px"
                  className={`object-cover ${image.objectPosition}`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  );
}
