"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const filterCategories = [
  { id: "all", name: "Todos", icon: "▦" },
  ...categories.map((c) => ({ id: c.id, name: c.name, icon: "📦" })),
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
      <div className="px-[4vw] py-[40px] bg-white border-b border-[var(--l)]">
        <div className="max-w-[1450px] mx-auto">
          <span className="eye-label text-[var(--c)] text-[13px] font-[800] tracking-[.08em] uppercase flex items-center gap-2 mb-3">
            <span className="inline-block w-[8px] h-[8px] bg-[var(--c)] rounded-full" />
            Catálogo
          </span>
          <h1 className="text-[clamp(36px,4vw,54px)] tracking-[-.045em]">
            Repuestos disponibles
          </h1>
        </div>
      </div>

      <div className="px-[4vw] py-[40px]">
        <div className="max-w-[1450px] mx-auto">
          {/* Filters */}
          <div className="flex justify-between gap-[14px] mb-[22px]">
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-[60px] text-[var(--m)]">
              No se encontraron productos.
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
