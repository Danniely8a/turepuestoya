"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    category: "General",
    questions: [
      { q: "¿Son empresa registrada?", a: "Sí, estamos registrados en los entes gubernamentales como Grupo Tu Repuesto Ya C.A, RIF: J-50400706-4." },
      { q: "¿Cuánto tiempo tienen en el mercado?", a: "Fuimos fundados el 25 de Septiembre del año 2023, con más de dos años de experiencia." },
      { q: "¿Son local físico?", a: "Somos oficina comercial ubicada en la ciudad de Caracas / Venezuela." },
    ],
  },
  {
    category: "Pagos",
    questions: [
      { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos: Pago móvil, Tarjetas de débito/crédito internacionales, Divisas en efectivo, Criptomonedas (Bitcoin, Ethereum, y otras)." },
      { q: "¿Aceptan Cashea?", a: "Sí, somos aliados comerciales de Cashea. Paga solo una inicial y el resto en cuotas sin intereses." },
      { q: "¿Puedo pagar con criptomonedas?", a: "Sí, aceptamos Bitcoin (BTC), Ethereum (ETH) y otras. El proceso es seguro y rápido." },
    ],
  },
  {
    category: "Productos",
    questions: [
      { q: "¿Ofrecen garantía?", a: "Sí, ofrecemos garantía de 6 meses a 2 años dependiendo del producto, incluyendo piezas eléctricas." },
      { q: "¿Venden repuestos originales?", a: "Trabajamos con marcas reconocidas internacionalmente que cumplen con estándares de calidad OE." },
    ],
  },
  {
    category: "Envíos",
    questions: [
      { q: "¿Hacen envíos a todo el país?", a: "Sí, envíos a toda Venezuela. 24-72h para Caracas y 3-7 días para el resto del país." },
    ],
  },
  {
    category: "Servicios",
    questions: [
      { q: "¿Cuentan con servicio de taller?", a: "Ofrecemos servicio de reparación, mantenimiento y mecánica ligera a domicilio." },
      { q: "¿Cuál es el horario?", a: "Lunes a Jueves de 8:00am a 5:00pm. Viernes de 8:00am a 2:00pm. Online 24/7." },
    ],
  },
];

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="max-w-[900px] mx-auto px-[4vw] py-[40px]">
      {faqData.map((section, si) => (
        <div key={si} className="mb-10">
          <h2 className="text-[20px] tracking-[-.03em] mb-4 font-[800]">{section.category}</h2>
          <div className="space-y-[8px]">
            {section.questions.map((faq, qi) => {
              const key = `${si}-${qi}`;
              const isOpen = openIndex === key;
              return (
                <div key={qi} className="bg-white rounded-[17px] overflow-hidden border border-[var(--l)]">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : key)}
                    className="w-full flex items-center justify-between p-[18px] text-left"
                  >
                    <span className="font-[700] pr-4">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[var(--m)] flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-[18px] pb-[18px]">
                      <p className="text-[var(--m)] leading-relaxed text-[14px]">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="bg-[#151a1f] text-white rounded-[28px] p-[30px] text-center mt-10">
        <h3 className="text-[20px] mb-2">¿No encontraste tu respuesta?</h3>
        <p className="text-[#b7bec4] text-[14px] mb-6">Contáctanos directamente y te ayudaremos</p>
        <a
          href="https://wa.me/5804241833450?text=Hola,%20tengo%20una%20pregunta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25d366] text-white px-8 py-3 rounded-full font-[800] hover:bg-[#1da851] transition-colors"
        >
          Chatear por WhatsApp
        </a>
      </div>
    </div>
  );
}
