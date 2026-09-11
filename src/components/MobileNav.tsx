"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid3X3, MessageCircle, Phone } from "lucide-react";

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/catalogo", label: "Catálogo", icon: Grid3X3 },
  {
    href: "https://mobile.cashea.app/merchants/1ca57a42-aef9-4e55-8483-395049ddc7bd",
    label: "Cashea",
    icon: null,
    external: true,
    cashea: true,
  },
  {
    href: "https://wa.me/5804241833450?text=Hola%2C%20quisiera%20consultar%20por%20un%20repuesto",
    label: "WhatsApp",
    icon: null,
    external: true,
    whatsapp: true,
  },
  { href: "/contacto", label: "Contacto", icon: Phone },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[var(--l)] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-around px-2 py-1 safe-area-bottom">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          if (item.cashea) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-0.5 py-2 px-3 rounded-xl transition-all duration-200 active:scale-95"
              >
                <div className="w-[42px] h-[42px] bg-[#ffe033] rounded-[12px] grid place-items-center -mt-4 shadow-[0_4px_12px_rgba(255,224,51,0.4)]">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#1a1a1a">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-[600] text-[var(--i)] mt-1">Cashea</span>
              </a>
            );
          }

          if (item.whatsapp) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-0.5 py-2 px-3 transition-all duration-200 active:scale-95"
              >
                <div className="w-[42px] h-[42px] bg-[#25d366] rounded-[12px] grid place-items-center">
                  <svg viewBox="0 0 32 32" width="22" height="22" fill="white">
                    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.378L1.054 31.25l6.118-1.982A15.907 15.907 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.316 22.594c-.39 1.1-1.93 2.014-3.16 2.27-.836.176-1.926.316-5.594-1.2-4.692-1.918-7.71-6.72-7.94-7.026-.222-.306-1.868-2.49-1.868-4.75s1.18-3.37 1.6-3.83c.39-.46.852-.574 1.134-.574.282 0 .564.002.812.014.26.012.61-.098.948.722.39.954 1.326 3.24 1.44 3.47.114.23.19.5.038.806-.15.31-.282.5-.526.77-.244.27-.464.476-.708.766-.214.25-.456.52-.188.962.268.44 1.192 1.968 2.56 3.188 1.76 1.57 3.184 2.058 3.74 2.286.452.184.722.154.99-.092.274-.252 1.16-1.35 1.47-1.83.308-.48.62-.4 1.052-.24.436.16 2.75 1.296 3.22 1.532.47.236.782.354.898.55.116.196.116 1.14-.274 2.24z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-[600] text-[var(--m)] mt-1">WhatsApp</span>
              </a>
            );
          }

          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 py-2 px-3 transition-all duration-200 active:scale-95 ${
                isActive ? "text-[var(--c)]" : "text-[var(--m)]"
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-[600]">{item.label}</span>
              {isActive && (
                <span className="w-1 h-1 bg-[var(--c)] rounded-full mt-0.5" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
