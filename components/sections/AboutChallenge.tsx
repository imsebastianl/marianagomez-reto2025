"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL } from "@/lib/constants";

export default function AboutChallenge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-8">
            ¿De qué se trata el reto?
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-soft-blush rounded-3xl p-8 md:p-12 mb-8"
          >
            <p className="text-xl md:text-2xl text-charcoal leading-relaxed mb-6">
              Este reto está <span className="font-semibold text-vibrant-pink">100% enfocado en la
              pérdida de grasa</span>. Durante 4 semanas vas a aprender a alimentarte, entrenar y
              cuidar tu cuerpo con un objetivo claro: bajar grasa sin perder músculo, sintiéndote
              más ligera, firme y segura.
            </p>

            <p className="text-lg text-medium-gray leading-relaxed">
              No es un reto de dietas extremas ni de sacrificio. Es una guía clara, realista y
              diseñada para mujeres que quieren verse más definidas y seguras antes de terminar el
              año.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-vibrant-pink hover:bg-vibrant-pink/90 text-white px-8 sm:px-12 py-6 sm:py-7 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-vibrant-pink/50 transition-all duration-300 transform hover:scale-105"
              >
                Quiero empezar a perder grasa
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
