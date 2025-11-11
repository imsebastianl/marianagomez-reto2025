"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">Mariana Gómez</h3>
            <p className="text-white/70 text-lg">
              Entrenadora Personal · Especialista en Nutrición · Coach de Hábitos
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a
              href="mailto:befitbymarianagomez@gmail.com"
              className="text-white/70 hover:text-vibrant-pink transition-colors"
            >
              befitbymarianagomez@gmail.com
            </a>
            <span className="text-white/30">·</span>
            <a
              href="https://instagram.com/marianagomezm_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-vibrant-pink transition-colors"
            >
              @marianagomezm_
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-vibrant-pink" fill="#FF1493" />
            <span>para mujeres que se cumplen</span>
          </div>

          <p className="text-white/30 text-xs mt-6">
            © {new Date().getFullYear()} Mariana Gómez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
