"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Check, Plus, MessageCircle } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);
  const { addItem, items } = useCart();

  const isInCart = items.some((item) => item.product.id === product.id);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1700);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hola, me interesa el producto: ${product.name}. ¿Está disponible?`);
    window.open(`https://wa.me/584242704828?text=${msg}`, "_blank");
  };

  return (
    <article className="product-card group border border-[var(--l)] bg-white rounded-[20px] overflow-hidden">
      {/* Image */}
      <div className="product-img aspect-square bg-gradient-to-br from-[#f8f9fa] to-[#edf0f2] grid place-items-center relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-[12%] transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="product-body p-[20px]">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1 text-[11px] font-[700] text-[var(--g)] bg-[var(--g)]/10 px-2 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-[var(--g)] rounded-full" />
            Disponible
          </span>
        </div>
        <h3 className="text-[15px] leading-[1.4] font-[600] text-[var(--i)] mb-2 line-clamp-2 min-h-[42px]">
          {product.name}
        </h3>
        <div className="text-[12px] text-[var(--m)] mb-4">
          {product.subcategory} · Varias marcas
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleAdd}
            className={`flex-1 h-[42px] border-0 rounded-[12px] grid place-items-center gap-2 text-[13px] font-[600] cursor-pointer transition-all duration-300 ${
              isInCart || added
                ? "bg-[var(--g)] text-white"
                : "bg-[var(--i)] text-white hover:bg-[var(--c)]"
            }`}
          >
            {isInCart || added ? (
              <>
                <Check size={16} />
                Agregado
              </>
            ) : (
              <>
                <Plus size={16} />
                Agregar
              </>
            )}
          </button>
          <button
            onClick={handleWhatsApp}
            className="w-[42px] h-[42px] border border-[var(--l)] bg-white rounded-[12px] grid place-items-center cursor-pointer hover:bg-[#25d366] hover:text-white hover:border-[#25d366] transition-all duration-300"
          >
            <MessageCircle size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
