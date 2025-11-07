"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-vibrant-pink to-vibrant-pink/90 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Este año no se trata de empezar distinto.
          </h2>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white/95 mb-12">
            Se trata de cerrarlo cumpliéndote.
          </h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-vibrant-pink hover:bg-white/90 px-8 sm:px-14 py-6 sm:py-8 text-base sm:text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
            >
              Quiero perder grasa y cerrar el año con toda
            </Button>

            <p className="text-white/90 text-lg mt-6">
              Inicio: 17 de noviembre · Solo $39 USD
            </p>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">200+</p>
              <p className="text-white/80 text-sm">Mujeres transformadas</p>
            </div>
            <div className="text-center border-l border-r border-white/30">
              <p className="text-4xl font-bold text-white mb-2">4.9/5</p>
              <p className="text-white/80 text-sm">Valoración promedio</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">$400+</p>
              <p className="text-white/80 text-sm">En premios totales</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
