"use client";

import Image from "next/image";

const brands = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `https://turepuestoya.com.ve/wp-content/uploads/2026/06/marketing-1080-x-1080-px-${i + 1}-150x150.png`,
  alt: `Marca ${i + 1}`,
}));

export default function BrandCarousel() {
  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="max-w-[1450px] mx-auto px-[4vw] mb-10">
        <div className="text-center">
          <span className="eye-label text-[var(--c)] text-[12px] font-[800] tracking-[.1em] uppercase flex items-center justify-center gap-2 mb-3">
            <span className="inline-block w-[24px] h-[2px] bg-[var(--c)] rounded-full" />
            Nuestras Marcas
            <span className="inline-block w-[24px] h-[2px] bg-[var(--c)] rounded-full" />
          </span>
          <h2 className="text-[clamp(24px,3.5vw,38px)] tracking-[-.03em] mt-3 font-[800]">
            Trabajamos con las mejores marcas
          </h2>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scroller */}
        <div className="brand-scroller flex gap-6 items-center">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="brand-item flex-shrink-0 w-[110px] h-[110px] md:w-[130px] md:h-[130px] bg-white rounded-[18px] border border-[var(--l)] p-4 flex items-center justify-center transition-all duration-300 hover:border-[var(--c)]/40 hover:shadow-[0_8px_25px_rgba(255,79,64,0.1)] hover:scale-105 cursor-pointer"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={90}
                height={90}
                className="object-contain w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-136px * 16 - 24px * 16));
          }
        }
        .brand-scroller {
          animation: scroll 45s linear infinite;
          width: max-content;
        }
        .brand-scroller:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
