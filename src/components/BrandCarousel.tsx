"use client";

import { useState } from "react";

const brands = [
  { id: 1, name: "Monroe", initial: "MO", color: "#c62828" },
  { id: 2, name: "NGK", initial: "NG", color: "#d32f2f" },
  { id: 3, name: "Bosch", initial: "BO", color: "#1565c0" },
  { id: 4, name: "Denso", initial: "DE", color: "#0d47a1" },
  { id: 5, name: "Febi", initial: "FE", color: "#e65100" },
  { id: 6, name: "SKF", initial: "SK", color: "#0277bd" },
  { id: 7, name: "Gates", initial: "GA", color: "#2e7d32" },
  { id: 8, name: "Moog", initial: "MG", color: "#b71c1c" },
  { id: 9, name: "Brembo", initial: "BR", color: "#c62828" },
  { id: 10, name: "KYB", initial: "KY", color: "#1565c0" },
  { id: 11, name: "Sachs", initial: "SA", color: "#37474f" },
  { id: 12, name: "TRW", initial: "TR", color: "#00838f" },
  { id: 13, name: "Meyle", initial: "MY", color: "#558b2f" },
  { id: 14, name: "Lemförder", initial: "LF", color: "#4527a0" },
  { id: 15, name: "Ruville", initial: "RV", color: "#ad1457" },
  { id: 16, name: "VALEO", initial: "VL", color: "#00695c" },
];

function BrandItem({ brand }: { brand: typeof brands[0] }) {
  const [imgError, setImgError] = useState(false);
  const imgUrl = `https://turepuestoya.com.ve/wp-content/uploads/2026/06/marketing-1080-x-1080-px-${brand.id}-150x150.png`;

  return (
    <div className="flex-shrink-0 w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-white rounded-[18px] border border-[var(--l)] flex items-center justify-center transition-all duration-300 hover:border-[var(--c)]/40 hover:shadow-[0_8px_25px_rgba(255,79,64,0.1)] hover:scale-105 cursor-pointer overflow-hidden">
      {!imgError ? (
        <img
          src={imgUrl}
          alt={brand.name}
          className="w-full h-full object-contain p-3"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div
            className="w-[50px] h-[50px] md:w-[56px] md:h-[56px] rounded-full flex items-center justify-center text-white font-[800] text-[14px] md:text-[15px]"
            style={{ background: brand.color }}
          >
            {brand.initial}
          </div>
          <span className="text-[10px] md:text-[11px] font-[700] text-[var(--i)] text-center leading-tight">
            {brand.name}
          </span>
        </div>
      )}
    </div>
  );
}

export default function BrandCarousel() {
  return (
    <section className="py-12 md:py-16 overflow-hidden bg-white">
      <div className="max-w-[1450px] mx-auto px-[4vw] mb-8 md:mb-10">
        <div className="text-center">
          <span className="text-[var(--c)] text-[12px] font-[800] tracking-[.1em] uppercase flex items-center justify-center gap-2 mb-3">
            <span className="inline-block w-[24px] h-[2px] bg-[var(--c)] rounded-full" />
            Nuestras Marcas
            <span className="inline-block w-[24px] h-[2px] bg-[var(--c)] rounded-full" />
          </span>
          <h2 className="text-[clamp(20px,3.5vw,38px)] tracking-[-.03em] mt-3 font-[800]">
            Trabajamos con las mejores marcas
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="brand-scroller flex gap-4 md:gap-5 items-center">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <BrandItem key={`${brand.id}-${i}`} brand={brand} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-116px * 16 - 16px * 16)); }
        }
        .brand-scroller {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        .brand-scroller:hover {
          animation-play-state: paused;
        }
        @media (min-width: 768px) {
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-136px * 16 - 20px * 16)); }
          }
        }
      `}</style>
    </section>
  );
}
