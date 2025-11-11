"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, UtensilsCrossed, ShoppingCart, Pill, Sparkles, Users } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Dumbbell,
    title: "4 semanas de rutinas guiadas",
    description:
      "Rutinas diseñadas para hacer en cualquier lugar, enfocadas en pérdida de grasa sin perder músculo.",
    image: "/images/mariana/features/workout-1.png",
  },
  {
    icon: UtensilsCrossed,
    title: "4 menús semanales",
    description:
      "Uno por cada semana, enfocados en pérdida de grasa, con recetas fáciles y deliciosas.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&fit=crop",
  },
  {
    icon: ShoppingCart,
    title: "Listas de mercado prácticas",
    description:
      "Basadas en cada menú, para que tus compras sean simples y organizadas.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&fit=crop",
  },
  {
    icon: Pill,
    title: "Lista de suplementos recomendados",
    description:
      "Mis favoritos personales, opcionales, pero que pueden potenciar tus resultados.",
    image: "/images/mariana/features/supplements.jpg",
  },
  {
    icon: Sparkles,
    title: "Meditaciones semanales",
    description:
      "Una por cada semana, para mantenerte en calma, enfocada y constante.",
    image: "/images/mariana/features/meditation-2.jpg",
  },
  {
    icon: Users,
    title: "Comunidad privada",
    description:
      "Acompañamiento diario en grupo de WhatsApp, con mi guía directa y apoyo real de mujeres como tú.",
    image: "/images/mariana/features/community-2.jpg",
  },
];

export default function ProgramFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-soft-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Qué incluye el reto
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full relative overflow-hidden rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized={feature.image.startsWith('https://')}
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90 group-hover:from-vibrant-pink/90 group-hover:via-vibrant-pink/80 group-hover:to-vibrant-pink/95 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <CardContent className="relative z-10 p-8 flex flex-col h-full min-h-[320px]">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
