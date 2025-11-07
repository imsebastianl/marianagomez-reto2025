"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Bajé grasa sin pasar hambre y recuperé mi energía.",
    name: "María",
    age: 32,
  },
  {
    quote: "Por primera vez cerré un año cumpliéndome.",
    name: "Ana",
    age: 28,
  },
  {
    quote: "Nunca había tenido tanta claridad y acompañamiento.",
    name: "Sofía",
    age: 35,
  },
  {
    quote: "Me siento más segura y ligera que nunca.",
    name: "Laura",
    age: 30,
  },
  {
    quote: "Este reto cambió mi relación con mi cuerpo.",
    name: "Carmen",
    age: 27,
  },
];

// Test transformation images from Unsplash
const transformationImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&q=80&fit=crop",
];

export default function Testimonials() {
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
            Transformaciones reales
          </h2>
        </motion.div>

        {/* Before/After Grid with Test Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {transformationImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="relative h-[450px] rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={img}
                alt={`Transformation ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold text-lg">Transformación {i + 1}</p>
                <p className="text-sm">Ver historia completa</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + 0.1 * index }}
            >
              <Card className="h-full bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-3xl">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-vibrant-pink/30 mb-4" />
                  <p className="text-charcoal text-lg mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-charcoal">{testimonial.name}</p>
                    <span className="text-medium-gray">·</span>
                    <p className="text-medium-gray">{testimonial.age} años</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
