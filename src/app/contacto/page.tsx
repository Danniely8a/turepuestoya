import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto - Tu Repuesto Ya",
  description: "Contáctanos para consultas, pedidos y soporte técnico",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--s)]">
      <div className="px-[4vw] py-[40px] bg-white border-b border-[var(--l)]">
        <div className="max-w-[1450px] mx-auto">
          <span className="eye-label text-[var(--c)] text-[13px] font-[800] tracking-[.08em] uppercase flex items-center gap-2 mb-3">
            <span className="inline-block w-[8px] h-[8px] bg-[var(--c)] rounded-full" />
            Contacto
          </span>
          <h1 className="text-[clamp(36px,4vw,54px)] tracking-[-.045em]">
            Escríbenos o llámanos
          </h1>
        </div>
      </div>
      <div className="max-w-[1450px] mx-auto px-[4vw] py-[40px]">
        <ContactForm />
      </div>
    </div>
  );
}
