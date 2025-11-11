"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Paired transformations with their testimonial quotes
const transformationsWithQuotes = [
  {
    image: "/images/mariana/transformations/transformation-4.jpg",
    quote: "No volví a recuperar el peso. Esto realmente funciona.",
  },
  {
    image: "/images/mariana/transformations/transformation-2.jpg",
    quote: "Por primera vez en años me siento orgullosa de mí.",
  },
  {
    image: "/images/mariana/transformations/transformation-5.png",
    quote: "Si yo pude, cualquiera puede. Solo necesitas empezar.",
  },
  {
    image: "/images/mariana/transformations/transformation-1.jpg",
    quote: "Nunca pensé que mi cuerpo podría cambiar así en 4 semanas.",
  },
  {
    image: "/images/mariana/transformations/transformation-3.jpg",
    quote: "La inversión más importante que hice este año fue en mí.",
  },
  {
    image: "/images/mariana/transformations/transformation-6.jpg",
    quote: "Dejé de soñarlo y lo hice realidad. Tú también puedes.",
  },
  {
    image: "/images/mariana/transformations/transformation-7.jpg",
    quote: "El único arrepentimiento es no haberlo hecho antes.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={ref} className="py-20 bg-soft-gray relative overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Transformaciones reales
          </h2>
          <p className="text-lg text-medium-gray">
            Resultados reales de mujeres que completaron el reto
          </p>
        </motion.div>
      </div>

      {/* Full-Width Horizontal Scroll Container */}
      <div className="relative w-full px-0 md:px-8 lg:px-12">
        {/* Scroll Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 hidden md:block"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-vibrant-pink" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 hidden md:block"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-vibrant-pink" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
            {transformationsWithQuotes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-center"
              >
                <Card className="relative h-[480px] overflow-hidden rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  {/* Transformation Image - Full Card */}
                  <Image
                    src={item.image}
                    alt="Transformación real"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-transparent" />

                  {/* Quote Card Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-start gap-2 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                      <Quote className="w-5 h-5 text-vibrant-pink/40 flex-shrink-0 mt-0.5" />
                      <p className="text-charcoal text-sm italic leading-snug">
                        &quot;{item.quote}&quot;
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
