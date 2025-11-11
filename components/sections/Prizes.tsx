"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award } from "lucide-react";
import Image from "next/image";

export default function Prizes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mariana/prizes/prizes-bg.jpg"
          alt="Fitness motivation background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-vibrant-pink/95 to-vibrant-pink/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Premios y reconocimientos
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 text-center text-white border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">1 ganadora principal</h3>
              <p className="text-6xl font-bold mb-3">$200 USD</p>
              <p className="text-xl opacity-90">por su transformación</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-20 h-20 bg-vibrant-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-charcoal mb-4">
                5 reconocidas especiales
              </h3>
              <p className="text-5xl font-bold text-vibrant-pink mb-3">$39 USD</p>
              <p className="text-lg text-medium-gray">devolución total de su inscripción</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/30"
          >
            <p className="font-serif text-3xl md:text-4xl text-white font-medium italic">
              "Este reto no premia la perfección, premia el compromiso."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
