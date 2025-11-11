"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Instagram, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Instagram testimonial screenshot images
const instagramScreenshots = [
  "/images/mariana/instagram/IMG_4349.PNG",
  "/images/mariana/instagram/IMG_4350.PNG",
  "/images/mariana/instagram/IMG_4351.PNG",
  "/images/mariana/instagram/IMG_4352.PNG",
  "/images/mariana/instagram/IMG_4353.PNG",
  "/images/mariana/instagram/IMG_4354.PNG",
];

export default function InstagramTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Embla Carousel setup with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === instagramScreenshots.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? instagramScreenshots.length - 1 : prev - 1
    );
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  return (
    <>
      <section ref={ref} className="py-20 bg-soft-blush overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-10 h-10 text-vibrant-pink" />
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal">
                Lo que dicen en Instagram
              </h2>
            </div>
            <p className="text-lg text-medium-gray max-w-2xl mx-auto">
              Testimonios reales de mujeres que ya hicieron el reto y
              transformaron su cuerpo y energía
            </p>
          </motion.div>
        </div>

        {/* Full-Width Carousel */}
        <div className="relative w-full">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {instagramScreenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="embla__slide flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_33.33%] min-w-0 px-3"
                >
                  <button
                    onClick={() => openLightbox(index)}
                    className="relative w-full aspect-[9/16] max-h-[460px] overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-black cursor-pointer group"
                  >
                    <Image
                      src={screenshot}
                      alt={`Testimonio de Instagram ${index + 1}`}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-vibrant-pink/0 group-hover:bg-vibrant-pink/10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                          <Instagram className="w-8 h-8 text-vibrant-pink" />
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-vibrant-pink" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-vibrant-pink" />
          </button>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-charcoal text-xl font-medium mb-4">
            Únete a cientos de mujeres que ya transformaron su cuerpo
          </p>
          <p className="text-medium-gray">
            Síguenos en Instagram{" "}
            <a
              href="https://instagram.com/marianagomezm_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vibrant-pink font-semibold hover:underline"
            >
              @marianagomezm_
            </a>
          </p>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="relative w-auto h-[90vh] mx-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-auto h-full max-w-[90vw]">
                <Image
                  src={instagramScreenshots[currentImageIndex]}
                  alt={`Testimonio de Instagram ${currentImageIndex + 1}`}
                  width={500}
                  height={900}
                  className="object-contain h-full w-auto"
                />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2">
                <p className="text-charcoal font-medium">
                  {currentImageIndex + 1} / {instagramScreenshots.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
