import FAQContent from "@/components/FAQContent";

export const metadata = {
  title: "Preguntas Frecuentes - Tu Repuesto Ya",
  description: "Resolvemos tus dudas sobre nuestros productos y servicios",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[var(--s)]">
      <div className="px-[4vw] py-[40px] bg-white border-b border-[var(--l)]">
        <div className="max-w-[1450px] mx-auto">
          <span className="eye-label text-[var(--c)] text-[13px] font-[800] tracking-[.08em] uppercase flex items-center gap-2 mb-3">
            <span className="inline-block w-[8px] h-[8px] bg-[var(--c)] rounded-full" />
            Ayuda
          </span>
          <h1 className="text-[clamp(36px,4vw,54px)] tracking-[-.045em]">
            Preguntas Frecuentes
          </h1>
        </div>
      </div>
      <FAQContent />
    </div>
  );
}
