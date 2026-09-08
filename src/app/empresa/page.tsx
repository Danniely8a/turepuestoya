export const metadata = {
  title: "La Empresa - Tu Repuesto Ya",
  description: "Conoce más sobre Grupo Tu Repuesto Ya C.A",
};

export default function EmpresaPage() {
  return (
    <div className="min-h-screen bg-[var(--s)]">
      <div className="px-[4vw] py-[40px] bg-white border-b border-[var(--l)]">
        <div className="max-w-[1450px] mx-auto">
          <span className="eye-label text-[var(--c)] text-[13px] font-[800] tracking-[.08em] uppercase flex items-center gap-2 mb-3">
            <span className="inline-block w-[8px] h-[8px] bg-[var(--c)] rounded-full" />
            La Empresa
          </span>
          <h1 className="text-[clamp(36px,4vw,54px)] tracking-[-.045em]">
            Conoce Tu Repuesto Ya
          </h1>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-[4vw] py-[40px]">
        <div className="bg-white rounded-[22px] p-8 md:p-12 shadow-[var(--sh)]">
          <h2 className="text-[24px] tracking-[-.04em] mb-6">Nuestra Historia</h2>
          <div className="space-y-4 text-[var(--m)] leading-relaxed">
            <p>
              <strong className="text-[var(--i)]">Grupo Tu Repuesto Ya C.A</strong> fue fundada el{" "}
              <strong className="text-[var(--i)]">25 de Septiembre del año 2023</strong> con la visión de
              crear una plataforma de repuestos automotrices que ofreciera calidad, confianza y conveniencia
              a los conductores venezolanos.
            </p>
            <p>
              Desde nuestros inicios, nos hemos dedicado a seleccionar cuidadosamente las mejores marcas
              internacionales para ofrecer a nuestros clientes productos que cumplan con los más altos
              estándares de calidad y seguridad.
            </p>
            <p>
              Actualmente somos una oficina comercial ubicada en la ciudad de{" "}
              <strong className="text-[var(--i)]">Caracas, Venezuela</strong>, pero nuestro alcance se
              extiende a todo el país a través de nuestra plataforma digital y nuestra red de distribución.
            </p>
            <p>
              No solo vendemos repuestos: también ofrecemos servicio de{" "}
              <strong className="text-[var(--i)]">reparación, mantenimiento y mecánica ligera a domicilio</strong>,
              porque creemos que la comodidad del cliente es parte fundamental de la experiencia.
            </p>
          </div>
        </div>
      </div>

      {/* Trust */}
      <section className="mx-[4vw] mb-[65px] bg-[#151a1f] text-white rounded-[28px] p-[30px] grid grid-cols-[repeat(3,1fr)] gap-[20px]">
        <article className="flex gap-[13px]">
          <span className="text-[27px] not-italic">✓</span>
          <div>
            <b className="text-[15px]">Compatibilidad verificada</b>
            <p className="my-[4px] text-[#b7bec4] text-[13px]">
              Te ayudamos a elegir la pieza adecuada.
            </p>
          </div>
        </article>
        <article className="flex gap-[13px]">
          <span className="text-[27px] not-italic">🚚</span>
          <div>
            <b className="text-[15px]">Envíos a toda Venezuela</b>
            <p className="my-[4px] text-[#b7bec4] text-[13px]">
              Recibe tus repuestos donde estés.
            </p>
          </div>
        </article>
        <article className="flex gap-[13px]">
          <span className="text-[27px] not-italic">🔧</span>
          <div>
            <b className="text-[15px]">Talleres aliados</b>
            <p className="my-[4px] text-[#b7bec4] text-[13px]">
              Instalación y servicio profesional.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
