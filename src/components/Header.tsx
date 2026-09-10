"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Search, ShoppingBag } from "lucide-react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, setIsOpen } = useCart();

  return (
    <>
      {/* Header */}
      <header className="header-el flex items-center gap-[26px] px-[4vw] border-b border-[var(--l)] sticky top-0 bg-[#fffffff2] backdrop-blur-[12px] z-20 h-[82px]">
        {/* Logo */}
        <Link href="/" className="brand flex-shrink-0">
          <Image
            src="/logo-try.png"
            alt="Tu Repuesto Ya"
            width={2172}
            height={724}
            className="block h-[42px] w-auto"
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="nav-el hidden md:flex gap-[25px] ml-auto">
          <a href="#categorias" className="text-[var(--i)] text-[14px] font-[650] no-underline hover:text-[var(--c)] transition-colors">
            Categorías
          </a>
          <a href="#catalogo" className="text-[var(--i)] text-[14px] font-[650] no-underline hover:text-[var(--c)] transition-colors">
            Catálogo
          </a>
          <a href="#talleres" className="text-[var(--i)] text-[14px] font-[650] no-underline hover:text-[var(--c)] transition-colors">
            Talleres aliados
          </a>
          <a href="#ayuda" className="text-[var(--i)] text-[14px] font-[650] no-underline hover:text-[var(--c)] transition-colors">
            Ayuda
          </a>
        </nav>

        {/* Search */}
        <div className="search-el hidden md:flex items-center gap-2 w-[min(280px,23vw)] py-[11px] px-[15px] border border-[var(--l)] rounded-full">
          <Search size={16} className="text-[var(--m)] flex-shrink-0" />
          <input
            type="text"
            placeholder="Buscar repuesto o código"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 outline-0 w-full text-sm"
          />
        </div>

        {/* Cart Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="cart-btn relative w-[46px] h-[46px] border border-[var(--l)] bg-white rounded-full cursor-pointer flex items-center justify-center ml-auto md:ml-0"
        >
          <ShoppingBag size={20} className="text-[var(--i)]" />
          {totalItems > 0 && (
            <span className="count absolute -top-[5px] -right-[4px] bg-[var(--c)] text-white w-[20px] h-[20px] rounded-full grid place-items-center text-[11px] font-bold">
              {totalItems}
            </span>
          )}
        </button>
      </header>
    </>
  );
}
