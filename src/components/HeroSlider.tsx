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
      className="hero-slider relative mx-[4vw] mt-6 rounded-[20px] overflow-hidden group/slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative h-[320px] sm:h-[440px] md:h-[560px] lg:h-[650px]">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              i === current ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
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
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-[48px] h-[48px] bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--i)] opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
      >
        <ChevronLeft size={22} strokeWidth={2.5} />
      </button>
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-[48px] h-[48px] bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--i)] opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
      >
        <ChevronRight size={22} strokeWidth={2.5} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 bg-black/20 backdrop-blur-sm px-4 py-2.5 rounded-full">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-400 ${
              i === current
                ? "bg-white w-7"
                : "bg-white/40 hover:bg-white/70 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
