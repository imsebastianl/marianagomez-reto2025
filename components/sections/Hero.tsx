"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Trophy } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Using Unsplash test image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80&fit=crop"
          alt="Fitness transformation background"
          fill
          className="object-cover"
          priority
          quality={90}
          unoptimized
        />

        {/* Modern overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Reto de Fin de Año
              <span className="block text-vibrant-pink mt-2">by Mariana Gómez</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-medium text-white mb-6"
            >
              4 semanas para perder grasa, sentirte más ligera y cerrar el año cumpliéndote.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Aún estás a tiempo de transformar tu cuerpo y tu energía antes de que termine el año.
              Este no es un reto más: es tu oportunidad de cerrar el 2025 viéndote mejor, con más
              confianza y cumpliéndote de verdad.
            </motion.p>

            {/* Info Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Calendar className="w-5 h-5 text-vibrant-pink" />
                <span className="font-medium text-charcoal">Inicio: 17 de noviembre</span>
              </div>
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <MessageCircle className="w-5 h-5 text-vibrant-pink" />
                <span className="font-medium text-charcoal">Comunidad: WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Trophy className="w-5 h-5 text-vibrant-pink" />
                <span className="font-medium text-charcoal">Premios: +$400 USD</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-vibrant-pink hover:bg-vibrant-pink/90 text-white px-8 sm:px-12 py-6 sm:py-7 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-vibrant-pink/50 transition-all duration-300 transform hover:scale-105"
              >
                Quiero ganarle a enero
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Empty space for background image to show */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-10" />
    </section>
  );
}
