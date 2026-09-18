"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Search, ShoppingBag, MessageCircle, MapPin, Phone, Mail, Clock, X, Menu } from "lucide-react";

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
      <header className="header-el sticky top-0 z-20 bg-white/95 backdrop-blur-[12px]">
        {/* Main Header Row */}
        <div className="flex items-center gap-4 px-[4vw] h-[70px]">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setLeadsOpen(!leadsOpen)}
            className="md:hidden flex items-center justify-center w-[40px] h-[40px] bg-[var(--s)] rounded-full border-0 cursor-pointer"
          >
            <Menu size={20} className="text-[var(--i)]" />
          </button>

          {/* Logo */}
          <Link href="/" className="brand flex-shrink-0">
            <Image
              src="/logo-try.png"
              alt="Tu Repuesto Ya"
              width={2172}
              height={724}
              className="block h-[48px] w-auto"
              priority
            />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-[520px] mx-auto">
            <div className="flex items-center gap-3 w-full bg-[var(--s)] rounded-full px-5 py-3 border border-transparent hover:border-[var(--l)] focus-within:border-[var(--c)] focus-within:bg-white transition-all duration-300">
              <Search size={18} className="text-[var(--m)] flex-shrink-0" />
              <input
                type="text"
                placeholder="¿Qué repuesto necesitas?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 outline-0 bg-transparent w-full text-[14px] text-[var(--i)] placeholder:text-[var(--m)]"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 ml-auto md:ml-0">
            {/* WhatsApp - Desktop */}
            <a
              href="https://wa.me/584242704828?text=Hola%2C%20necesito%20ayuda"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center w-[42px] h-[42px] bg-[#25d366]/10 rounded-full hover:bg-[#25d366] hover:text-white text-[#25d366] transition-all duration-300"
            >
              <MessageCircle size={20} />
            </a>

            {/* Cart Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative w-[42px] h-[42px] bg-[var(--s)] rounded-full cursor-pointer flex items-center justify-center border-0 hover:bg-[var(--c)] hover:text-white text-[var(--i)] transition-all duration-300"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-[2px] -right-[2px] bg-[var(--c)] text-white w-[18px] h-[18px] rounded-full grid place-items-center text-[10px] font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile (below header) */}
        <div className="md:hidden px-[4vw] pb-3">
          <div className="flex items-center gap-3 w-full bg-[var(--s)] rounded-full px-4 py-2.5 border border-transparent focus-within:border-[var(--c)] focus-within:bg-white transition-all duration-300">
            <Search size={16} className="text-[var(--m)] flex-shrink-0" />
            <input
              type="text"
              placeholder="¿Qué repuesto necesitas?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 outline-0 bg-transparent w-full text-[13px] text-[var(--i)] placeholder:text-[var(--m)]"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-8 px-[4vw] py-3 border-t border-[var(--l)]">
          <a href="#categorias" className="text-[13px] font-[600] text-[var(--m)] no-underline hover:text-[var(--c)] transition-colors">
            Categorías
          </a>
          <a href="#catalogo" className="text-[13px] font-[600] text-[var(--m)] no-underline hover:text-[var(--c)] transition-colors">
            Catálogo
          </a>
          <a href="#talleres" className="text-[13px] font-[600] text-[var(--m)] no-underline hover:text-[var(--c)] transition-colors">
            Talleres aliados
          </a>
          <a href="#ayuda" className="text-[13px] font-[600] text-[var(--m)] no-underline hover:text-[var(--c)] transition-colors">
            Ayuda
          </a>
          <button
            onClick={() => setLeadsOpen(!leadsOpen)}
            className="text-[13px] font-[600] text-[var(--m)] bg-transparent border-0 cursor-pointer hover:text-[var(--c)] transition-colors"
          >
            Contacto
          </button>
        </nav>
      </header>

      {/* Leads Panel - Mobile */}
      <div
        className={`leads-panel fixed inset-0 bg-white z-50 transition-all duration-300 overflow-auto md:hidden ${
          leadsOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[var(--l)]">
          <h3 className="text-[18px] font-[800]">Contacto</h3>
          <button
            onClick={() => setLeadsOpen(false)}
            className="w-[36px] h-[36px] border-0 bg-[var(--s)] rounded-full grid place-items-center cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <a
            href="https://wa.me/584242704828?text=Hola%2C%20necesito%20ayuda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#25d366] text-white p-4 rounded-[16px] no-underline"
          >
            <div className="w-[48px] h-[48px] bg-white/20 rounded-full grid place-items-center">
              <MessageCircle size={24} />
            </div>
            <div>
              <p className="font-[700] text-[15px]">WhatsApp</p>
              <p className="text-white/80 text-[13px]">+58 (0424) 270.48.28</p>
            </div>
          </a>

          <div className="bg-[var(--s)] rounded-[16px] p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] bg-[var(--c)]/10 rounded-full grid place-items-center flex-shrink-0">
                <Phone size={18} className="text-[var(--c)]" />
              </div>
              <div>
                <p className="font-[700] text-[13px]">Teléfono</p>
                <p className="text-[var(--m)] text-[13px]">+58 (0424) 270.48.28</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] bg-[var(--c)]/10 rounded-full grid place-items-center flex-shrink-0">
                <Mail size={18} className="text-[var(--c)]" />
              </div>
              <div>
                <p className="font-[700] text-[13px]">Email</p>
                <p className="text-[var(--m)] text-[13px]">info@turepuestoya.com.ve</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] bg-[var(--c)]/10 rounded-full grid place-items-center flex-shrink-0">
                <MapPin size={18} className="text-[var(--c)]" />
              </div>
              <div>
                <p className="font-[700] text-[13px]">Ubicación</p>
                <p className="text-[var(--m)] text-[13px]">Caracas / Venezuela</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] bg-[var(--c)]/10 rounded-full grid place-items-center flex-shrink-0">
                <Clock size={18} className="text-[var(--c)]" />
              </div>
              <div>
                <p className="font-[700] text-[13px]">Horario</p>
                <p className="text-[var(--m)] text-[13px]">Lun - Jue: 8am - 5pm</p>
                <p className="text-[var(--m)] text-[13px]">Vie: 8am - 2pm</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-[16px] overflow-hidden h-[250px] border border-[var(--l)]">
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

      {/* Leads Panel - Desktop */}
      <div
        className={`leads-panel hidden md:block fixed left-0 right-0 bg-white border-b border-[var(--l)] shadow-lg z-[19] transition-all duration-300 overflow-hidden ${
          leadsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{ top: "168px" }}
      >
        <div className="px-[4vw] py-6 grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-[18px] font-[800]">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-[36px] h-[36px] bg-[var(--c)]/10 rounded-full grid place-items-center">
                  <Phone size={16} className="text-[var(--c)]" />
                </div>
                <div>
                  <p className="font-[700] text-[13px]">WhatsApp</p>
                  <a href="https://wa.me/584242704828" className="text-[var(--m)] text-[13px] no-underline">+58 (0424) 270.48.28</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[36px] h-[36px] bg-[var(--c)]/10 rounded-full grid place-items-center">
                  <Mail size={16} className="text-[var(--c)]" />
                </div>
                <div>
                  <p className="font-[700] text-[13px]">Email</p>
                  <p className="text-[var(--m)] text-[13px]">info@turepuestoya.com.ve</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[36px] h-[36px] bg-[var(--c)]/10 rounded-full grid place-items-center">
                  <MapPin size={16} className="text-[var(--c)]" />
                </div>
                <div>
                  <p className="font-[700] text-[13px]">Ubicación</p>
                  <p className="text-[var(--m)] text-[13px]">Caracas / Venezuela</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[36px] h-[36px] bg-[var(--c)]/10 rounded-full grid place-items-center">
                  <Clock size={16} className="text-[var(--c)]" />
                </div>
                <div>
                  <p className="font-[700] text-[13px]">Horario</p>
                  <p className="text-[var(--m)] text-[13px]">Lun-Jue 8am-5pm · Vie 8am-2pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[16px] overflow-hidden h-[300px] border border-[var(--l)]">
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
