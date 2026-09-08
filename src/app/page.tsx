"use client";

import { useState, useMemo } from "react";
import HeroSlider from "@/components/HeroSlider";
import BrandCarousel from "@/components/BrandCarousel";
import ProductCard from "@/components/ProductCard";
import { products as allProducts, categories } from "@/data/products";

const categoryIcons: Record<string, string> = {
  suspension: "🔩",
  motor: "⚙️",
};

const filterCategories = [
  { id: "all", name: "Todos", icon: "▦" },
  ...categories.map((c) => ({ id: c.id, name: c.name, icon: categoryIcons[c.id] || "📦" })),
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery) {
      const term = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.brand.toLowerCase().includes(term)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Banner - Taller Aliado */}
      <section
        className="mx-[4vw] mt-6 rounded-[27px] overflow-hidden min-h-[210px] grid grid-cols-[1.2fr_.8fr] text-white"
        style={{ background: "linear-gradient(105deg, #151a1f 0 60%, var(--c) 60%)" }}
      >
        <div className="p-[32px_40px]">
          <span className="eye-label text-[var(--c)] text-[13px] font-[800] tracking-[.08em] uppercase flex items-center gap-2">
            <span className="inline-block w-[8px] h-[8px] bg-[var(--c)] rounded-full" />
            Programa tu servicio
          </span>
          <h2 className="text-[clamp(28px,3vw,42px)] tracking-[-.04em] my-[8px]">
            Compra el repuesto y encuentra un taller aliado.
          </h2>
          <p className="text-[#c4cbd0]">Todo lo que tu vehículo necesita, desde una sola experiencia.</p>
          <a
            href="#talleres"
            className="inline-flex bg-[var(--c)] text-white rounded-full px-[21px] py-[14px] font-[800] no-underline mt-4"
          >
            Conocer talleres
          </a>
        </div>
        <div className="grid place-items-center text-[100px]">
          🔧🚙
        </div>
      </section>

      {/* Categories */}
      <section className="section-el px-[4vw] py-[64px]" id="categorias">
        <div className="section-head flex justify-between items-end gap-[25px] mb-[27px]">
          <div>
            <span className="eye-label text-[var(--c)] text-[13px] font-[800] tracking-[.08em] uppercase flex items-center gap-2">
              <span className="inline-block w-[8px] h-[8px] bg-[var(--c)] rounded-full" />
              Explora rápido
            </span>
            <h2 className="text-[clamp(32px,4vw,50px)] tracking-[-.045em] my-[6px]">
              Compra por categoría
            </h2>
          </div>
          <p className="text-[var(--m)] max-w-[500px]">
            Encuentra la pieza correcta según el sistema de tu vehículo.
          </p>
        </div>
        <div className="cats-grid grid grid-cols-[repeat(2,1fr)] gap-[12px]">
          {filterCategories.slice(1).map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`cat-card border bg-white rounded-[19px] p-[22px_10px] text-center cursor-pointer transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_30px_#ff4f401c] hover:border-[var(--c)] ${
                activeCategory === cat.id
                  ? "border-[var(--c)] shadow-[0_12px_30px_#ff4f401c]"
                  : "border-[var(--l)]"
              }`}
            >
              <span className="block text-[34px] mb-[9px] not-italic">{cat.icon}</span>
              <b className="text-[14px]">{cat.name}</b>
            </button>
          ))}
        </div>
      </section>

      {/* Catalog */}
      <section className="section-el catalog-section px-[4vw] py-[64px] bg-[var(--s)]" id="catalogo">
        <div className="section-head flex justify-between items-end gap-[25px] mb-[27px]">
          <div>
            <span className="eye-label text-[var(--c)] text-[13px] font-[800] tracking-[.08em] uppercase flex items-center gap-2">
              <span className="inline-block w-[8px] h-[8px] bg-[var(--c)] rounded-full" />
              Catálogo
            </span>
            <h2 className="text-[clamp(32px,4vw,50px)] tracking-[-.045em] my-[6px]">
              Repuestos disponibles
            </h2>
          </div>
          <p className="text-[var(--m)] max-w-[500px]">
            Productos de ejemplo para visualizar la tienda. Luego podrá conectarse el inventario real.
          </p>
        </div>

        {/* Tools */}
        <div className="tools flex justify-between gap-[14px] mb-[22px]">
          <div className="filters flex gap-[8px] flex-wrap">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-btn border rounded-full py-[10px] px-[15px] cursor-pointer text-[13px] font-[600] transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[var(--i)] text-white border-[var(--i)]"
                    : "bg-white border-[var(--l)] text-[var(--i)] hover:border-[var(--m)]"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
          <span className="text-[13px] text-[var(--m)] whitespace-nowrap">
            {filteredProducts.length} productos
          </span>
        </div>

        {/* Products Grid */}
        <div className="products-grid grid grid-cols-[repeat(4,1fr)] gap-[17px]">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="trust-section mx-[4vw] bg-[#151a1f] text-white rounded-[28px] p-[30px] grid grid-cols-[repeat(3,1fr)] gap-[20px]" id="talleres">
        <article className="flex gap-[13px]">
          <span className="text-[27px] not-italic">✓</span>
          <div>
            <b className="text-[15px]">Compatibilidad verificada</b>
            <p className="my-[4px] text-[#b7bec4] text-[13px]">
              Te ayudamos a elegir la pieza adecuada.
            </p>
          </div>
        </article>
        <article className="flex gap-[13px]">
          <span className="text-[27px] not-italic">🚚</span>
          <div>
            <b className="text-[15px]">Envíos a toda Venezuela</b>
            <p className="my-[4px] text-[#b7bec4] text-[13px]">
              Recibe tus repuestos donde estés.
            </p>
          </div>
        </article>
        <article className="flex gap-[13px]">
          <span className="text-[27px] not-italic">🔧</span>
          <div>
            <b className="text-[15px]">Talleres aliados</b>
            <p className="my-[4px] text-[#b7bec4] text-[13px]">
              Instalación y servicio profesional.
            </p>
          </div>
        </article>
      </section>

      {/* Brand Carousel */}
      <BrandCarousel />
    </>
  );
}
