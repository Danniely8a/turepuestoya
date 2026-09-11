import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b0e10] text-white">
      {/* Main Footer */}
      <div className="px-[4vw] py-[60px] grid grid-cols-1 md:grid-cols-4 gap-[40px]">
        {/* Brand */}
        <div className="md:col-span-1">
          <Image
            src="/logo-try.png"
            alt="Tu Repuesto Ya"
            width={200}
            height={66}
            className="h-[40px] w-auto mb-5 brightness-0 invert"
          />
          <p className="text-[#9da5ac] text-[13px] leading-[1.7] max-w-[280px]">
            Tu Repuesto Ya. La mejor tienda de repuestos automotrices en Venezuela. Calidad, confianza y servicio.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-[14px] font-[700] mb-5 text-white">Tienda</h4>
          <ul className="space-y-3 list-none p-0 m-0">
            <li>
              <Link href="/catalogo" className="text-[13px] text-[#9da5ac] no-underline hover:text-[var(--c)] transition-colors">
                Catálogo completo
              </Link>
            </li>
            <li>
              <a href="#categorias" className="text-[13px] text-[#9da5ac] no-underline hover:text-[var(--c)] transition-colors">
                Categorías
              </a>
            </li>
            <li>
              <a href="#talleres" className="text-[13px] text-[#9da5ac] no-underline hover:text-[var(--c)] transition-colors">
                Talleres aliados
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[14px] font-[700] mb-5 text-white">Empresa</h4>
          <ul className="space-y-3 list-none p-0 m-0">
            <li>
              <Link href="/empresa" className="text-[13px] text-[#9da5ac] no-underline hover:text-[var(--c)] transition-colors">
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-[13px] text-[#9da5ac] no-underline hover:text-[var(--c)] transition-colors">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-[13px] text-[#9da5ac] no-underline hover:text-[var(--c)] transition-colors">
                Preguntas frecuentes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[14px] font-[700] mb-5 text-white">Legal</h4>
          <ul className="space-y-3 list-none p-0 m-0">
            <li>
              <Link href="/politicas/terminos" className="text-[13px] text-[#9da5ac] no-underline hover:text-[var(--c)] transition-colors">
                Términos y condiciones
              </Link>
            </li>
            <li>
              <Link href="/politicas/privacidad" className="text-[13px] text-[#9da5ac] no-underline hover:text-[var(--c)] transition-colors">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/politicas/garantias" className="text-[13px] text-[#9da5ac] no-underline hover:text-[var(--c)] transition-colors">
                Garantías
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1e242b] px-[4vw] py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <small className="text-[#6b7280] text-[12px]">
          © 2026 Grupo Tu Repuesto Ya C.A. Todos los derechos reservados.
        </small>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/584242704828"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[36px] h-[36px] bg-[#1e242b] rounded-full grid place-items-center text-[#9da5ac] hover:bg-[#25d366] hover:text-white transition-all duration-300"
          >
            <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
              <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.378L1.054 31.25l6.118-1.982A15.907 15.907 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.316 22.594c-.39 1.1-1.93 2.014-3.16 2.27-.836.176-1.926.316-5.594-1.2-4.692-1.918-7.71-6.72-7.94-7.026-.222-.306-1.868-2.49-1.868-4.75s1.18-3.37 1.6-3.83c.39-.46.852-.574 1.134-.574.282 0 .564.002.812.014.26.012.61-.098.948.722.39.954 1.326 3.24 1.44 3.47.114.23.19.5.038.806-.15.31-.282.5-.526.77-.244.27-.464.476-.708.766-.214.25-.456.52-.188.962.268.44 1.192 1.968 2.56 3.188 1.76 1.57 3.184 2.058 3.74 2.286.452.184.722.154.99-.092.274-.252 1.16-1.35 1.47-1.83.308-.48.62-.4 1.052-.24.436.16 2.75 1.296 3.22 1.532.47.236.782.354.898.55.116.196.116 1.14-.274 2.24z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/turepuestoya"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[36px] h-[36px] bg-[#1e242b] rounded-full grid place-items-center text-[#9da5ac] hover:bg-[var(--c)] hover:text-white transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
