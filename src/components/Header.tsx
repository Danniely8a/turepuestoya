"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Search, ShoppingBag, MessageCircle, MapPin, Phone, Mail, Clock, X } from "lucide-react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [leadsOpen, setLeadsOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <>
      {/* Top Bar - Cashea Banner */}
      <div className="top-bar flex justify-center items-center px-[4vw] py-[6px] bg-[#ffe033]">
        <Image
          src="/cashea11.png"
          alt="Cashea"
          width={400}
          height={28}
          className="h-[38px] w-auto object-contain"
          priority
        />
      </div>

      {/* Header */}
      <header className="header-el flex items-center gap-[26px] px-[4vw] border-b border-[var(--l)] sticky top-0 bg-[#fffffff2] backdrop-blur-[12px] z-20 h-[82px] relative">
        {/* Logo */}
        <Link href="/" className="brand flex-shrink-0">
          <Image
            src="/logo-try.png"
            alt="Tu Repuesto Ya"
            width={2172}
            height={724}
            className="block h-[56px] w-auto"
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
          <button
            onClick={() => setLeadsOpen(!leadsOpen)}
            className="text-[var(--i)] text-[14px] font-[650] bg-transparent border-0 cursor-pointer hover:text-[var(--c)] transition-colors"
          >
            Contacto
          </button>
        </nav>

        {/* Mobile Contact Button */}
        <button
          onClick={() => setLeadsOpen(!leadsOpen)}
          className="md:hidden flex items-center gap-1.5 text-[var(--c)] bg-transparent border-0 cursor-pointer ml-auto"
        >
          <Phone size={20} />
        </button>

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

      {/* Leads Panel */}
      <div
        className={`leads-panel fixed left-0 right-0 bg-white border-b border-[var(--l)] shadow-lg z-[19] transition-all duration-300 overflow-hidden ${
          leadsOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{ top: "128px" }}
      >
        <div className="px-[4vw] py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[20px] font-[800] text-[var(--i)]">Contacto</h3>
              <button
                onClick={() => setLeadsOpen(false)}
                className="w-[32px] h-[32px] border-0 bg-[var(--s)] rounded-full grid place-items-center cursor-pointer text-[14px] hover:bg-[var(--c)] hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] bg-[var(--c)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[var(--c)]" />
                </div>
                <div>
                  <p className="font-[700] text-[14px]">WhatsApp</p>
                  <a
                    href="https://wa.me/584242704828?text=Hola%2C%20necesito%20ayuda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--m)] text-[14px] no-underline hover:text-[var(--c)] transition-colors"
                  >
                    +58 (0424) 270.48.28
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] bg-[var(--c)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[var(--c)]" />
                </div>
                <div>
                  <p className="font-[700] text-[14px]">Email</p>
                  <p className="text-[var(--m)] text-[14px]">info@turepuestoya.com.ve</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] bg-[var(--c)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[var(--c)]" />
                </div>
                <div>
                  <p className="font-[700] text-[14px]">Ubicación</p>
                  <p className="text-[var(--m)] text-[14px]">Caracas / Venezuela</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] bg-[var(--c)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[var(--c)]" />
                </div>
                <div>
                  <p className="font-[700] text-[14px]">Horario</p>
                  <p className="text-[var(--m)] text-[14px]">Lun - Jue: 8am - 5pm</p>
                  <p className="text-[var(--m)] text-[14px]">Vie: 8am - 2pm</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/584242704828?text=Hola%2C%20quiero%20consultar%20por%20un%20repuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] text-white px-6 py-3 rounded-full font-[800] hover:bg-[#1da851] transition-colors mt-4"
            >
              <MessageCircle size={18} />
              Chatear por WhatsApp
            </a>
          </div>

          {/* Google Map */}
          <div className="rounded-[16px] overflow-hidden h-[350px] border border-[var(--l)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.123456789!2d-66.9!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMwJzAwLjAiTiA2NsKwNTQnMDAuMCJX!5e0!3m2!1ses!2sve!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Tu Repuesto Ya"
            />
          </div>
        </div>
      </div>
    </>
  );
}
