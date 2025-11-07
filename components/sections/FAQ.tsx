"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Dónde se realiza el reto?",
    answer:
      "Todo el contenido diario —rutinas, menús, meditaciones y cápsulas— estará disponible en Nas.io, donde podrás seguir tu progreso día a día. Además, tendrás un grupo privado en WhatsApp donde compartiremos acompañamiento, motivación y comunidad.",
  },
  {
    question: "¿Necesito gimnasio?",
    answer:
      "No. Puedes elegir entre la versión gym o la versión casa, ambas diseñadas para ayudarte a quemar grasa y tonificar tu cuerpo.",
  },
  {
    question: "¿Puedo hacerlo si estoy retomando?",
    answer:
      "Sí. Todas las rutinas y menús están explicados paso a paso y adaptados a diferentes niveles. No importa si estás empezando o volviendo a activarte, podrás hacerlo sin problema.",
  },
  {
    question: "¿Cuándo inicia y cuánto dura?",
    answer:
      "El reto comienza el 17 de noviembre y finaliza el 12 de diciembre. Sin embargo, la comunidad se mantendrá abierta durante todo diciembre para que podamos seguir acompañándonos y mantener la constancia en las fiestas.",
  },
  {
    question: "¿Por cuánto tiempo tendré acceso al contenido?",
    answer:
      "Tendrás acceso al contenido del reto desde el inicio hasta después de la graduación. Una vez finalizado, podrás seguir revisando el material, pero ya no participarás por los premios y reconocimientos, que aplican únicamente dentro de las fechas oficiales.",
  },
  {
    question: "¿Cómo se da el seguimiento dentro del reto?",
    answer:
      "Cada día se irá desbloqueando nuevo contenido en Nas.io —rutinas, menús, meditaciones y cápsulas— para mantenerte enfocada y acompañada. Además, dentro del grupo de WhatsApp recibirás recordatorios, tips y motivación constante. Tu participación activa en los checkpoints y la comunidad será clave para optar por los premios de culminación.",
  },
  {
    question: "¿Cómo es el contenido del reto?",
    answer:
      "El contenido es 100% digital, accesible desde tu app o portal web de Nas.io. Podrás ingresar con el correo con el que realizaste tu compra, y allí encontrarás todo el material: rutinas, menús, meditaciones, reflexiones diarias y acceso a las grabaciones de las sesiones en vivo.",
  },
  {
    question: "¿Qué necesito para unirme al reto?",
    answer:
      "Solo necesitas compromiso contigo misma, un espacio cómodo para entrenar y el deseo de cerrar el año viéndote y sintiéndote mejor.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-pearl-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + 0.05 * index }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-2xl px-6 border-0 shadow-md"
                >
                  <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-vibrant-pink transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center bg-soft-pink rounded-3xl p-8"
          >
            <p className="text-charcoal text-lg mb-2">¿Tienes más preguntas?</p>
            <p className="text-muted-foreground">
              Escríbenos a{" "}
              <a
                href="mailto:befitbymarianagomez@gmail.com"
                className="text-vibrant-pink font-semibold hover:underline"
              >
                befitbymarianagomez@gmail.com
              </a>{" "}
              o a través de{" "}
              <a
                href="https://instagram.com/marianagomezm_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vibrant-pink font-semibold hover:underline"
              >
                @marianagomezm_
              </a>{" "}
              en redes sociales.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
