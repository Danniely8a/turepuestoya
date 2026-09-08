export const metadata = {
  title: "Términos y Condiciones - Tu Repuesto Ya",
  description: "Términos y condiciones de uso de Tu Repuesto Ya",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-[var(--s)]">
      <div className="px-[4vw] py-[40px] bg-white border-b border-[var(--l)]">
        <div className="max-w-[1450px] mx-auto">
          <span className="eye-label text-[var(--c)] text-[13px] font-[800] tracking-[.08em] uppercase flex items-center gap-2 mb-3">
            <span className="inline-block w-[8px] h-[8px] bg-[var(--c)] rounded-full" />
            Legal
          </span>
          <h1 className="text-[clamp(36px,4vw,54px)] tracking-[-.045em]">
            Términos y Condiciones
          </h1>
        </div>
      </div>
      <div className="max-w-[900px] mx-auto px-[4vw] py-[40px]">
        <div className="bg-white rounded-[22px] p-8 md:p-12 shadow-[var(--sh)] space-y-6 text-[var(--m)] leading-relaxed">
          <div>
            <h2 className="text-[20px] tracking-[-.03em] mb-3 font-[800] text-[var(--i)]">1. Aceptación de los Términos</h2>
            <p>Al acceder y utilizar el sitio web de Tu Repuesto Ya (turepuestoya.com.ve), usted acepta estos términos y condiciones en su totalidad.</p>
          </div>
          <div>
            <h2 className="text-[20px] tracking-[-.03em] mb-3 font-[800] text-[var(--i)]">2. Información de la Empresa</h2>
            <p><strong className="text-[var(--i)]">Grupo Tu Repuesto Ya C.A</strong><br />RIF: J-50400706-4<br />Caracas, Venezuela</p>
          </div>
          <div>
            <h2 className="text-[20px] tracking-[-.03em] mb-3 font-[800] text-[var(--i)]">3. Productos y Precios</h2>
            <p>Todos los precios están expresados en dólares estadounidenses (USD). Los precios pueden cambiar sin previo aviso.</p>
          </div>
          <div>
            <h2 className="text-[20px] tracking-[-.03em] mb-3 font-[800] text-[var(--i)]">4. Métodos de Pago</h2>
            <p>Aceptamos: Pago móvil, Tarjetas de débito/crédito internacionales, Divisas en efectivo, Criptomonedas, Cashea.</p>
          </div>
          <div>
            <h2 className="text-[20px] tracking-[-.03em] mb-3 font-[800] text-[var(--i)]">5. Envíos</h2>
            <p>Realizamos envíos a toda Venezuela. Los tiempos de entrega son estimados y pueden variar.</p>
          </div>
          <div>
            <h2 className="text-[20px] tracking-[-.03em] mb-3 font-[800] text-[var(--i)]">6. Garantías</h2>
            <p>Nuestros productos cuentan con garantía de 6 meses a 2 años dependiendo del tipo de producto.</p>
          </div>
          <div>
            <h2 className="text-[20px] tracking-[-.03em] mb-3 font-[800] text-[var(--i)]">7. Devoluciones</h2>
            <p>Aceptamos devoluciones dentro de los primeros 15 días naturales después de la compra, siempre que el producto esté en su estado original.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
