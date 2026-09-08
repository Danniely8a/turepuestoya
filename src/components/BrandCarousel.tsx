"use client";

import Image from "next/image";

const brands = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `https://turepuestoya.com.ve/wp-content/uploads/2026/06/marketing-1080-x-1080-px-${i + 1}-150x150.png`,
  alt: `Marca ${i + 1}`,
}));

export default function BrandCarousel() {
  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-[4vw] mb-8">
        <div className="text-center">
          <span className="eye-label text-[var(--c)] text-[13px] font-[800] tracking-[.08em] uppercase flex items-center justify-center gap-2">
            <span className="inline-block w-[8px] h-[8px] bg-[var(--c)] rounded-full" />
            Nuestras Marcas
          </span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] tracking-[-.04em] mt-3">
            Trabajamos con las mejores marcas
          </h2>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scroller */}
        <div className="brand-scroller flex gap-8 items-center">
          {/* Duplicate for infinite effect */}
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="brand-item flex-shrink-0 w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-white rounded-[17px] border border-[var(--l)] p-3 flex items-center justify-center transition-all duration-300 hover:border-[var(--c)] hover:shadow-[0_12px_30px_#ff4f401c] hover:scale-105 cursor-pointer"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={80}
                height={80}
                className="object-contain w-full h-full"
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
            transform: translateX(calc(-128px * 16 - 32px * 16));
          }
        }
        .brand-scroller {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        .brand-scroller:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
