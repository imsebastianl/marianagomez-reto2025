"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const audienceItems = [
  "Quieres perder grasa y verte más definida antes de que acabe el año",
  "Sientes que lo has intentado todo, pero nada te ha funcionado",
  "Te cuesta mantenerte constante sola",
  "Te prometiste cuidarte, pero lo postergaste",
  "Quieres cerrar el año con energía y confianza",
];

export default function TargetAudience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-soft-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-16 text-center">
            Este reto es para ti si…
          </h2>

          <div className="space-y-6 mb-16">
            {audienceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-6 h-6 bg-vibrant-pink rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <p className="text-lg text-charcoal">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="font-serif text-3xl md:text-4xl text-charcoal font-medium italic max-w-3xl mx-auto">
              "Este no es un reto para ser perfecta, es un reto para cumplirte de verdad."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
