"use client";

import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import BrandCarousel from "@/components/BrandCarousel";
import ProductCard from "@/components/ProductCard";
import { products as allProducts, categories } from "@/data/products";
import { Truck, ShieldCheck, Wrench, ArrowRight, MessageCircle, ChevronRight } from "lucide-react";

const categoryData: Record<string, { icon: string; color: string; desc: string }> = {
  suspension: { icon: "🔩", color: "#ff4f40", desc: "Amortiguadores y más" },
  motor: { icon: "⚙️", color: "#e47b02", desc: "Inyectores y piezas" },
};

const featuredProducts = allProducts.slice(0, 6);

export default function Home() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Categories - Yummy Style Grid */}
      <section className="px-[4vw] py-[48px]" id="categorias">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[18px] font-[800] text-[var(--i)]">¿Qué necesitas hoy?</h2>
          <Link href="/catalogo" className="text-[var(--c)] text-[13px] font-[700] no-underline flex items-center gap-1">
            Ver todo <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => {
            const data = categoryData[cat.id] || { icon: "📦", color: "#64717c", desc: "Repuestos" };
            return (
              <Link
                key={cat.id}
                href={`/catalogo?categoria=${cat.id}`}
                className="flex items-center gap-4 bg-white border border-[var(--l)] rounded-[18px] p-4 no-underline hover:border-[var(--c)]/40 hover:shadow-[0_8px_30px_rgba(255,79,64,0.08)] transition-all duration-300"
              >
                <div className="w-[56px] h-[56px] rounded-[14px] grid place-items-center flex-shrink-0 text-[28px]" style={{ background: `${data.color}12` }}>
                  {data.icon}
                </div>
                <div>
                  <b className="text-[14px] font-[700] text-[var(--i)] block">{cat.name}</b>
                  <span className="text-[12px] text-[var(--m)]">{data.desc}</span>
                </div>
              </Link>
            );
          })}

          <Link
            href="/catalogo"
            className="flex items-center gap-4 bg-white border border-[var(--l)] rounded-[18px] p-4 no-underline hover:border-[var(--c)]/40 hover:shadow-[0_8px_30px_rgba(255,79,64,0.08)] transition-all duration-300"
          >
            <div className="w-[56px] h-[56px] rounded-[14px] grid place-items-center flex-shrink-0 text-[28px]" style={{ background: "#1fac6612" }}>
              🛒
            </div>
            <div>
              <b className="text-[14px] font-[700] text-[var(--i)] block">Catálogo</b>
              <span className="text-[12px] text-[var(--m)]">Ver todos los repuestos</span>
            </div>
          </Link>

          <a
            href="https://wa.me/584242704828?text=Hola%2C%20necesito%20asesoría"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#25d366] rounded-[18px] p-4 no-underline hover:bg-[#1da851] transition-all duration-300"
          >
            <div className="w-[56px] h-[56px] rounded-[14px] grid place-items-center flex-shrink-0 bg-white/20">
              <MessageCircle size={28} className="text-white" />
            </div>
            <div>
              <b className="text-[14px] font-[700] text-white block">WhatsApp</b>
              <span className="text-[12px] text-white/80">Chatea con nosotros</span>
            </div>
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="px-[4vw] pb-[48px]">
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center text-center bg-white border border-[var(--l)] rounded-[16px] p-4">
            <div className="w-[44px] h-[44px] bg-[var(--c)]/10 rounded-[12px] grid place-items-center mb-3">
              <Truck size={20} className="text-[var(--c)]" />
            </div>
            <b className="text-[12px] font-[700] text-[var(--i)] leading-tight">Envíos a toda Venezuela</b>
          </div>
          <div className="flex flex-col items-center text-center bg-white border border-[var(--l)] rounded-[16px] p-4">
            <div className="w-[44px] h-[44px] bg-[var(--c)]/10 rounded-[12px] grid place-items-center mb-3">
              <ShieldCheck size={20} className="text-[var(--c)]" />
            </div>
            <b className="text-[12px] font-[700] text-[var(--i)] leading-tight">Compatibilidad verificada</b>
          </div>
          <div className="flex flex-col items-center text-center bg-white border border-[var(--l)] rounded-[16px] p-4">
            <div className="w-[44px] h-[44px] bg-[var(--c)]/10 rounded-[12px] grid place-items-center mb-3">
              <Wrench size={20} className="text-[var(--c)]" />
            </div>
            <b className="text-[12px] font-[700] text-[var(--i)] leading-tight">Talleres aliados</b>
          </div>
        </div>
      </section>

      {/* Featured Products - Horizontal Scroll */}
      <section className="pb-[48px]" id="catalogo">
        <div className="px-[4vw] flex items-center justify-between mb-6">
          <h2 className="text-[18px] font-[800] text-[var(--i)]">Productos destacados</h2>
          <Link href="/catalogo" className="text-[var(--c)] text-[13px] font-[700] no-underline flex items-center gap-1">
            Ver todo <ChevronRight size={14} />
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto px-[4vw] pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[260px] snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-[4vw] pb-[48px]">
        <div className="relative rounded-[20px] overflow-hidden bg-gradient-to-r from-[var(--c)] to-[#e63a30] p-6 md:p-8">
          <div className="relative z-10">
            <span className="text-white/80 text-[12px] font-[700] tracking-[.05em] uppercase mb-2 block">
              ¿Necesitas ayuda?
            </span>
            <h2 className="text-white text-[20px] md:text-[24px] font-[800] mb-3 max-w-[400px]">
              Encuentra el repuesto perfecto para tu vehículo
            </h2>
            <p className="text-white/80 text-[13px] mb-5 max-w-[360px]">
              Nuestro equipo te ayuda a encontrar la pieza correcta.
            </p>
            <a
              href="https://wa.me/584242704828?text=Hola%2C%20necesito%20ayuda%20para%20encontrar%20un%20repuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[var(--c)] px-6 py-3 rounded-full font-[800] text-[14px] hover:shadow-lg transition-all duration-300"
            >
              Hablar con un asesor
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[80px] opacity-20 hidden md:block">
            🔧
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <BrandCarousel />
    </>
  );
}
