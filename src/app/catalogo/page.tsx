"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const categoryIcons: Record<string, string> = {
  suspension: "🔩",
  motor: "⚙️",
};

const filterCategories = [
  { id: "all", name: "Todos", icon: "▦" },
  ...categories.map((c) => ({ id: c.id, name: c.name, icon: categoryIcons[c.id] || "📦" })),
];

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    return result;
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[var(--s)]">
      {/* Header */}
      <div className="px-[4vw] py-[48px] bg-white border-b border-[var(--l)]">
        <div className="max-w-[1450px] mx-auto">
          <span className="eye-label text-[var(--c)] text-[12px] font-[800] tracking-[.1em] uppercase flex items-center gap-2 mb-3">
            <span className="inline-block w-[24px] h-[2px] bg-[var(--c)] rounded-full" />
            Catálogo completo
          </span>
          <h1 className="text-[clamp(32px,4vw,50px)] tracking-[-.04em] font-[800]">
            Repuestos disponibles
          </h1>
          <p className="text-[var(--m)] mt-3 max-w-[500px] text-[15px]">
            Explora nuestro catálogo completo de repuestos automotrices. Encuentra lo que necesitas para tu vehículo.
          </p>
        </div>
      </div>

      <div className="px-[4vw] py-[40px]">
        <div className="max-w-[1450px] mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-[30px]">
            <div className="filters flex gap-[8px] flex-wrap">
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`filter-btn border rounded-full py-[10px] px-[18px] cursor-pointer text-[13px] font-[600] transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-[var(--i)] text-white border-[var(--i)] shadow-md"
                      : "bg-white border-[var(--l)] text-[var(--i)] hover:border-[var(--m)] hover:shadow-sm"
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
            <span className="text-[13px] text-[var(--m)] whitespace-nowrap bg-white px-4 py-2 rounded-full border border-[var(--l)]">
              {filteredProducts.length} productos
            </span>
          </div>

          {/* Products Grid */}
          <div className="products-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[var(--m)] text-[16px]">No se encontraron productos en esta categoría.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--s)] flex items-center justify-center">Cargando...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
