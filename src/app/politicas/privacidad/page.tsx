export const metadata = {
  title: "Política de Privacidad - Tu Repuesto Ya",
  description: "Política de privacidad y protección de datos de Tu Repuesto Ya",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[var(--s)]">
      <div className="px-[4vw] py-[40px] bg-white border-b border-[var(--l)]">
        <div className="max-w-[1450px] mx-auto">
          <span className="eye-label text-[var(--c)] text-[13px] font-[800] tracking-[.08em] uppercase flex items-center gap-2 mb-3">
            <span className="inline-block w-[8px] h-[8px] bg-[var(--c)] rounded-full" />
            Legal
          </span>
          <h1 className="text-[clamp(36px,4vw,54px)] tracking-[-.045em]">
            Política de Privacidad
          </h1>
        </div>
      </div>
      <div className="max-w-[900px] mx-auto px-[4vw] py-[40px]">
        <div className="bg-white rounded-[22px] p-8 md:p-12 shadow-[var(--sh)] space-y-6 text-[var(--m)] leading-relaxed">
          <div>
            <h2 className="text-[20px] tracking-[-.03em] mb-3 font-[800] text-[var(--i)]">1. Información que Recopilamos</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nombre y apellidos</li>
              <li>Correo electrónico y teléfono</li>
              <li>Dirección de envío</li>
              <li>Información de pago</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] tracking-[-.03em] mb-3 font-[800] text-[var(--i)]">2. Uso de la Información</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Procesar y despachar tus pedidos</li>
              <li>Responder a tus consultas</li>
              <li>Mejorar nuestros productos y servicios</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] tracking-[-.03em] mb-3 font-[800] text-[var(--i)]">3. Protección de Datos</h2>
            <p>Implementamos medidas de seguridad para proteger tu información personal contra acceso no autorizado.</p>
          </div>
          <div>
            <h2 className="text-[20px] tracking-[-.03em] mb-3 font-[800] text-[var(--i)]">4. Contacto</h2>
            <p>
              <strong className="text-[var(--i)]">Grupo Tu Repuesto Ya C.A</strong><br />
              Email: info@turepuestoya.com.ve<br />
              Teléfono: +58 (0424) 183.34.50<br />
              Caracas, Venezuela
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
