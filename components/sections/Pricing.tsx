"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";

const includedItems = [
  "4 semanas de rutinas guiadas",
  "4 menús semanales personalizados",
  "Listas de mercado prácticas",
  "Meditaciones semanales",
  "Comunidad privada de WhatsApp",
  "Acompañamiento directo de Mariana",
  "Recetario saludable exclusivo",
  "Plantilla de seguimiento de hábitos",
  "2 sesiones en vivo",
  "Participación en premios (+$400 USD)",
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-soft-blush">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Inversión
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Urgency Banner */}
            <div className="bg-vibrant-pink px-6 py-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-white" />
                <p className="text-white font-semibold">
                  Cupos limitados · Acompañamiento directo conmigo
                </p>
              </div>
            </div>

            <div className="p-10 md:p-12">
              {/* Price */}
              <div className="text-center mb-12">
                <div className="inline-flex items-baseline gap-2 mb-4">
                  <span className="text-7xl font-bold text-vibrant-pink">$39</span>
                  <span className="text-2xl text-medium-gray">USD</span>
                </div>
                <p className="text-xl text-charcoal font-medium">
                  Incluye 4 semanas completas de transformación
                </p>
              </div>

              {/* Included Items */}
              <div className="space-y-4 mb-12">
                {includedItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + 0.05 * index }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 bg-vibrant-pink rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-charcoal">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full bg-vibrant-pink hover:bg-vibrant-pink/90 text-white px-8 sm:px-10 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-full shadow-2xl hover:shadow-vibrant-pink/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Apartar mi cupo ahora
                  </Button>
                </a>
              </motion.div>

              {/* Trust Badge */}
              <p className="text-center text-sm text-medium-gray mt-6">
                Pago seguro · Acceso inmediato · Soporte directo
              </p>
            </div>
          </div>

          {/* Money Back Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center text-charcoal mt-8 text-lg font-medium"
          >
            Posibilidad de recuperar tu inversión completa siendo una de las 5 reconocidas
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
