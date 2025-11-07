"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutMariana() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80&fit=crop"
                alt="Mariana Gómez - Fitness Coach"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-8">
                Sobre Mariana Gómez
              </h2>

              <div className="space-y-6 text-lg text-medium-gray leading-relaxed mb-10">
                <p>
                  Soy <span className="text-vibrant-pink font-semibold">Mariana Gómez</span>,
                  entrenadora personal y especialista en nutrición deportiva para mujeres.
                </p>

                <p>
                  He acompañado a cientos de mujeres a perder grasa sin perder libertad,
                  enseñándoles a cuidar su cuerpo con amor y estrategia.
                </p>

                <p className="text-charcoal font-semibold text-xl">
                  No quiero que empieces en enero. Quiero que cierres este año cumpliéndote.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <div className="bg-soft-blush px-6 py-3 rounded-full">
                  <p className="text-charcoal font-medium">Entrenadora Personal</p>
                </div>
                <div className="bg-soft-blush px-6 py-3 rounded-full">
                  <p className="text-charcoal font-medium">Especialista en Nutrición</p>
                </div>
                <div className="bg-soft-blush px-6 py-3 rounded-full">
                  <p className="text-charcoal font-medium">Coach de Hábitos</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
