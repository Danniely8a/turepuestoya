export const metadata = {
  title: "Devoluciones y Garantías - Tu Repuesto Ya",
  description: "Políticas de devolución y garantía de Tu Repuesto Ya",
};

export default function GarantiasPage() {
  return (
    <div className="min-h-screen bg-[var(--s)]">
      <div className="px-[4vw] py-[40px] bg-white border-b border-[var(--l)]">
        <div className="max-w-[1450px] mx-auto">
          <span className="eye-label text-[var(--c)] text-[13px] font-[800] tracking-[.08em] uppercase flex items-center gap-2 mb-3">
            <span className="inline-block w-[8px] h-[8px] bg-[var(--c)] rounded-full" />
            Legal
          </span>
          <h1 className="text-[clamp(36px,4vw,54px)] tracking-[-.045em]">
            Devoluciones y Garantías
          </h1>
        </div>
      </div>
      <div className="max-w-[900px] mx-auto px-[4vw] py-[40px] space-y-8">
        <div className="bg-white rounded-[22px] p-8 md:p-12 shadow-[var(--sh)]">
          <h2 className="text-[24px] tracking-[-.04em] mb-6">Política de Garantía</h2>
          <div className="space-y-4 text-[var(--m)] leading-relaxed">
            <div className="bg-[var(--c)]/5 border border-[var(--c)]/20 rounded-[14px] p-4">
              <p className="font-[700] text-[var(--i)]">Duración: 6 meses a 2 años</p>
              <p>Dependiendo del tipo de producto y marca.</p>
            </div>
            <p><strong className="text-[var(--i)]">¿Qué cubre?</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Defectos de fabricación</li>
              <li>Fallo prematuro bajo condiciones normales de uso</li>
            </ul>
            <p><strong className="text-[var(--i)]">¿Qué NO cubre?</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Daños por mal uso o instalación incorrecta</li>
              <li>Desgaste natural</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-[22px] p-8 md:p-12 shadow-[var(--sh)]">
          <h2 className="text-[24px] tracking-[-.04em] mb-6">Política de Devoluciones</h2>
          <div className="space-y-4 text-[var(--m)] leading-relaxed">
            <div className="bg-[var(--g)]/5 border border-[var(--g)]/20 rounded-[14px] p-4">
              <p className="font-[700] text-[var(--i)]">Plazo: 15 días naturales</p>
              <p>Después de la fecha de compra.</p>
            </div>
            <p><strong className="text-[var(--i)]">Condiciones:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Producto en estado original, sin usar</li>
              <li>Empaque intacto</li>
              <li>Factura de compra</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#151a1f] text-white rounded-[28px] p-[30px] text-center">
          <h3 className="text-[20px] mb-2">¿Necesitas hacer un reclamo?</h3>
          <p className="text-[#b7bec4] text-[14px] mb-6">Contáctanos y te atenderemos lo antes posible</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5804241833450?text=Hola,%20necesito%20hacer%20un%20reclamo" target="_blank" rel="noopener noreferrer" className="bg-[#25d366] text-white px-6 py-3 rounded-full font-[800] hover:bg-[#1da851] transition-colors">
              WhatsApp
            </a>
            <a href="mailto:info@turepuestoya.com.ve" className="bg-white/10 text-white px-6 py-3 rounded-full font-[800] hover:bg-white/20 transition-colors">
              Correo Electrónico
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
