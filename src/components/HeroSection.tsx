"use client";

import { Search } from "lucide-react";

export default function HeroSection() {
  const scrollToCatalog = () => {
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="hero-section relative overflow-hidden"
      style={{
        padding: "55px 4vw 44px",
        background: "radial-gradient(circle at 85% 20%, #ffe2d7, transparent 35%), linear-gradient(#fff, #fff9f5)",
      }}
    >
      <div className="hero-grid max-w-[1450px] mx-auto grid grid-cols-[1.05fr_.95fr] gap-[52px] items-center">
        {/* Left Content */}
        <div>
          <span className="eye-label text-[var(--c)] text-[13px] font-[800] tracking-[.08em] uppercase flex items-center gap-2">
            <span className="inline-block w-[8px] h-[8px] bg-[var(--c)] rounded-full" />
            Repuestos para tu vehículo
          </span>
          <h1
            className="text-[clamp(46px,5.4vw,78px)] leading-[.96] tracking-[-.055em] my-[17px] mb-[20px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            La pieza correcta, sin vueltas.
          </h1>
          <p className="text-[var(--m)] text-[18px] leading-[1.6] max-w-[640px]">
            Busca por marca, modelo y año. Te mostramos opciones compatibles, disponibilidad y asesoría antes de comprar.
          </p>

          {/* Finder */}
          <div className="finder bg-white p-[13px] rounded-[22px] shadow-[var(--sh)] grid grid-cols-[1fr_1fr_1fr_auto] gap-[8px] mt-[28px]">
            <div className="field bg-[var(--s)] rounded-[14px] p-[10px_13px]">
              <small className="block text-[10px] text-[#8d959b] font-[800]">MARCA</small>
              <select className="border-0 bg-transparent outline-0 w-full font-[700] text-[14px]">
                <option>Selecciona la marca</option>
                <option>Chevrolet</option>
                <option>Ford</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>Mazda</option>
                <option>Nissan</option>
              </select>
            </div>
            <div className="field bg-[var(--s)] rounded-[14px] p-[10px_13px]">
              <small className="block text-[10px] text-[#8d959b] font-[800]">MODELO</small>
              <select className="border-0 bg-transparent outline-0 w-full font-[700] text-[14px]">
                <option>Selecciona el modelo</option>
                <option>Aveo</option>
                <option>Fiesta</option>
                <option>Corolla</option>
                <option>Civic</option>
                <option>Mazda 3</option>
              </select>
            </div>
            <div className="field bg-[var(--s)] rounded-[14px] p-[10px_13px]">
              <small className="block text-[10px] text-[#8d959b] font-[800]">AÑO</small>
              <select className="border-0 bg-transparent outline-0 w-full font-[700] text-[14px]">
                <option>Selecciona el año</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>
            <button
              onClick={scrollToCatalog}
              className="find-btn bg-[var(--c)] text-white rounded-[14px] px-[21px] py-[14px] font-[800] cursor-pointer border-0 flex items-center justify-center"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Actions */}
          <div className="actions flex gap-[11px] mt-[22px]">
            <a
              href="#catalogo"
              className="btn-primary bg-[var(--c)] text-white rounded-full px-[21px] py-[14px] font-[800] no-underline inline-flex justify-center"
            >
              Ver catálogo
            </a>
            <a
              href="https://wa.me/5804241833450?text=Hola%20Tu%20Repuesto%20Ya%2C%20necesito%20ayuda%20con%20un%20repuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border border-[var(--l)] text-[var(--i)] bg-white rounded-full px-[21px] py-[14px] font-[800] no-underline inline-flex justify-center"
            >
              Hablar con un asesor
            </a>
          </div>
        </div>

        {/* Right Art */}
        <div
          className="hero-art relative min-h-[500px] rounded-[35px] overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #fff0ea, #ffc8af 52%, #ff874f)",
          }}
        >
          {/* Decorative circle */}
          <div
            className="absolute"
            style={{
              width: "410px",
              height: "410px",
              border: "75px solid #ffffff50",
              borderRadius: "50%",
              right: "-100px",
              top: "-105px",
            }}
          />
          {/* Car emoji */}
          <div
            className="absolute inset-[60px_20px] grid place-items-center text-[185px]"
            style={{ filter: "drop-shadow(0 28px 20px #5b2b1d35)" }}
          >
            🚗
          </div>
          {/* Badges */}
          <div className="hero-badge absolute bg-white rounded-[17px] p-[13px_16px] shadow-[var(--sh)] text-[12px] text-[var(--m)] left-[24px] top-[28px]">
            <b className="block text-[var(--i)] text-[16px]">+2.500 repuestos</b>
            organizados por vehículo
          </div>
          <div className="hero-badge absolute bg-white rounded-[17px] p-[13px_16px] shadow-[var(--sh)] text-[12px] text-[var(--m)] right-[22px] bottom-[25px]">
            <b className="block text-[var(--i)] text-[16px]">Compatibilidad verificada</b>
            compra con confianza
          </div>
        </div>
      </div>
    </section>
  );
}
