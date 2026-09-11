"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 2,
    image: "/heroes/hero-2.png",
    alt: "Repuestos automotrices de calidad",
  },
  {
    id: 3,
    image: "/heroes/hero-3.png",
    alt: "Repuestos automotrices de calidad",
  },
  {
    id: 4,
    image: "/heroes/hero-4.png",
    alt: "Repuestos automotrices de calidad",
  },
  {
    id: 5,
    image: "/heroes/hero-5.png",
    alt: "Repuestos automotrices de calidad",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="hero-slider relative mx-[4vw] mt-6 rounded-[20px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative h-[320px] sm:h-[440px] md:h-[560px] lg:h-[650px]">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 92vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--i)] hover:bg-white transition-colors shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--i)] hover:bg-white transition-colors shadow-lg"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-[var(--c)] w-8"
                : "bg-white/60 hover:bg-white w-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
