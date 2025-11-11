"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Conoce el reto
            </h2>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto">
              Descubre cómo este reto puede transformar tu cuerpo y tu relación con el ejercicio
            </p>
          </div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-charcoal"
            style={{ paddingTop: '56.25%' }}
          >
            <iframe
              src="https://player.vimeo.com/video/1135927753?badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Reto de Fin de Año - Mariana Gómez"
            />
          </motion.div>

          {/* Optional CTA below video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-medium-gray text-lg">
              ¿Lista para transformar tu cuerpo antes de que termine el año?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
