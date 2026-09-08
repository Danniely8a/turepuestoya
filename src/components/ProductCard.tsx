"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Check, Plus } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);
  const { addItem, items } = useCart();

  const isInCart = items.some((item) => item.product.id === product.id);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1700);
  };

  return (
    <article className="product-card border border-[var(--l)] bg-white rounded-[21px] overflow-hidden transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[var(--sh)]">
      {/* Image */}
      <div className="product-img aspect-square bg-gradient-to-br from-white to-[#edf0f2] grid place-items-center relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-[10%]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="product-body p-[17px]">
        <span className="stock text-[12px] text-[var(--g)] font-[800]">
          ● Disponible
        </span>
        <h3 className="text-[16px] my-[7px] font-[700]">{product.name}</h3>
        <div className="meta text-[13px] text-[#818990]">
          {product.category} · Varias marcas
        </div>
        <div className="flex justify-end mt-[17px]">
          <button
            onClick={handleAdd}
            className={`add-btn w-[38px] h-[38px] border-0 rounded-full grid place-items-center text-[20px] cursor-pointer transition-colors ${
              isInCart || added
                ? "bg-[var(--g)] text-white"
                : "bg-[var(--i)] text-white"
            }`}
          >
            {isInCart || added ? <Check size={18} /> : <Plus size={18} />}
          </button>
        </div>
      </div>
    </article>
  );
}
