"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import BrandCarousel from "@/components/BrandCarousel";
import ProductCard from "@/components/ProductCard";
import { products as allProducts, categories } from "@/data/products";
import { Truck, ShieldCheck, Wrench, ArrowRight } from "lucide-react";

const categoryIcons: Record<string, string> = {
  suspension: "🔩",
  motor: "⚙️",
};

const filterCategories = [
  { id: "all", name: "Todos", icon: "▦" },
  ...categories.map((c) => ({ id: c.id, name: c.name, icon: categoryIcons[c.id] || "📦" })),
];

const featuredProducts = allProducts.slice(0, 4);

export default function Home() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Trust Bar */}
      <section className="mx-[4vw] mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="flex items-center gap-4 bg-white border border-[var(--l)] rounded-[16px] p-5 transition-all duration-300 hover:shadow-lg hover:border-[var(--c)]/20">
            <div className="w-[52px] h-[52px] bg-[var(--c)]/10 rounded-[14px] grid place-items-center flex-shrink-0">
              <Truck size={24} className="text-[var(--c)]" />
            </div>
            <div>
              <b className="text-[14px] font-[700]">Envíos a toda Venezuela</b>
              <p className="text-[12px] text-[var(--m)] mt-0.5">Recibe tus repuestos donde estés</p>
            </div>
          </article>
          <article className="flex items-center gap-4 bg-white border border-[var(--l)] rounded-[16px] p-5 transition-all duration-300 hover:shadow-lg hover:border-[var(--c)]/20">
            <div className="w-[52px] h-[52px] bg-[var(--c)]/10 rounded-[14px] grid place-items-center flex-shrink-0">
              <ShieldCheck size={24} className="text-[var(--c)]" />
            </div>
            <div>
              <b className="text-[14px] font-[700]">Compatibilidad verificada</b>
              <p className="text-[12px] text-[var(--m)] mt-0.5">Te ayudamos a elegir la pieza</p>
            </div>
          </article>
          <article className="flex items-center gap-4 bg-white border border-[var(--l)] rounded-[16px] p-5 transition-all duration-300 hover:shadow-lg hover:border-[var(--c)]/20">
            <div className="w-[52px] h-[52px] bg-[var(--c)]/10 rounded-[14px] grid place-items-center flex-shrink-0">
              <Wrench size={24} className="text-[var(--c)]" />
            </div>
            <div>
              <b className="text-[14px] font-[700]">Talleres aliados</b>
              <p className="text-[12px] text-[var(--m)] mt-0.5">Instalación y servicio profesional</p>
            </div>
          </article>
        </div>
      </section>

      {/* Categories */}
      <section className="section-el px-[4vw] py-[72px]" id="categorias">
        <div className="text-center mb-[40px]">
          <span className="eye-label text-[var(--c)] text-[12px] font-[800] tracking-[.1em] uppercase flex items-center justify-center gap-2 mb-3">
            <span className="inline-block w-[24px] h-[2px] bg-[var(--c)] rounded-full" />
            Explora rápido
            <span className="inline-block w-[24px] h-[2px] bg-[var(--c)] rounded-full" />
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] tracking-[-.04em] font-[800]">
            Compra por categoría
          </h2>
          <p className="text-[var(--m)] mt-3 max-w-[480px] mx-auto text-[15px]">
            Encuentra la pieza correcta según el sistema de tu vehículo.
          </p>
        </div>
        <div className="cats-grid grid grid-cols-2 md:grid-cols-2 gap-[14px] max-w-[600px] mx-auto">
          {filterCategories.slice(1).map((cat) => (
            <Link
              key={cat.id}
              href={`/catalogo?categoria=${cat.id}`}
              className={`cat-card border bg-white rounded-[18px] p-[28px_16px] text-center no-underline transition-all duration-300 ${
                "border-[var(--l)] hover:border-[var(--c)]/40"
              }`}
            >
              <span className="block text-[38px] mb-[10px] not-italic">{cat.icon}</span>
              <b className="text-[15px] font-[700] text-[var(--i)]">{cat.name}</b>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="catalog-section px-[4vw] py-[72px] bg-[var(--s)]" id="catalogo">
        <div className="section-el">
          <div className="text-center mb-[40px]">
            <span className="eye-label text-[var(--c)] text-[12px] font-[800] tracking-[.1em] uppercase flex items-center justify-center gap-2 mb-3">
              <span className="inline-block w-[24px] h-[2px] bg-[var(--c)] rounded-full" />
              Destacados
              <span className="inline-block w-[24px] h-[2px] bg-[var(--c)] rounded-full" />
            </span>
            <h2 className="text-[clamp(28px,4vw,44px)] tracking-[-.04em] font-[800]">
              Productos destacados
            </h2>
            <p className="text-[var(--m)] mt-3 max-w-[480px] mx-auto text-[15px]">
              Los repuestos más buscados por nuestros clientes.
            </p>
          </div>

          {/* Products Grid - 4 featured */}
          <div className="products-grid grid grid-cols-2 md:grid-cols-4 gap-[18px]">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Ver catálogo completo */}
          <div className="text-center mt-[40px]">
            <Link
              href="/catalogo"
              className="btn-primary inline-flex items-center gap-2"
            >
              Ver catálogo completo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-[4vw] my-8">
        <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-r from-[#151a1f] to-[#1e2530] p-[48px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-[var(--c)] text-[12px] font-[800] tracking-[.1em] uppercase mb-3 block">
              ¿Necesitas ayuda?
            </span>
            <h2 className="text-white text-[clamp(24px,3vw,36px)] tracking-[-.03em] font-[800] mb-4">
              Encuentra el repuesto perfecto para tu vehículo
            </h2>
            <p className="text-[#9ba4ae] text-[15px] mb-6 max-w-[420px]">
              Nuestro equipo de expertos te ayuda a encontrar la pieza correcta. Contáctanos y recibe asesoría personalizada.
            </p>
            <a
              href="https://wa.me/5804241833450?text=Hola%2C%20necesito%20ayuda%20para%20encontrar%20un%20repuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Hablar con un asesor
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-[200px] h-[200px] bg-[var(--c)]/10 rounded-full grid place-items-center">
              <span className="text-[80px]">🔧</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <BrandCarousel />
    </>
  );
}
