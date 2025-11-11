"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, BookOpen, ClipboardCheck, Sparkles, Video } from "lucide-react";

const bonuses = [
  { icon: BookOpen, text: "Recetario saludable" },
  { icon: ClipboardCheck, text: "Plantilla para seguimiento de hábitos" },
];

const liveSessions = [
  "Alimentación, pérdida de grasa y hábitos sostenibles",
  "Amor propio y constancia desde la calma",
];

export default function Bonuses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Bonos y recursos exclusivos
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex flex-col items-center text-center bg-soft-pink rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-vibrant-pink/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-vibrant-pink" fill="#FF1493" />
                  </div>
                  <p className="text-charcoal font-medium">{bonus.text}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-warm-beige rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-vibrant-pink rounded-full flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-charcoal">2 sesiones en vivo</h3>
            </div>
            <ul className="space-y-4">
              {liveSessions.map((session, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-vibrant-pink flex-shrink-0 mt-1" fill="#FF1493" />
                  <span className="text-charcoal text-lg">{session}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
