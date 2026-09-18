"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock, Calendar, LayoutGrid, MessageCircle } from "lucide-react";

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/catalogo", label: "Catálogo", icon: Clock },
  {
    href: "https://wa.me/584242704828?text=Hola%2C%20quisiera%20consultar%20por%20un%20repuesto",
    label: "WhatsApp",
    external: true,
    whatsapp: true,
  },
  { href: "/contacto", label: "Contacto", icon: Calendar },
  { href: "/empresa", label: "Más", icon: LayoutGrid },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="mx-3 mb-3 bg-white rounded-[20px] shadow-[0_-4px_24px_rgba(0,0,0,0.08)] border border-[var(--l)]/30 safe-area-bottom">
        <div className="flex items-center justify-between px-2 py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            if (item.whatsapp) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center -mt-5"
                >
                  <div className="w-[54px] h-[54px] bg-[var(--c)] rounded-[16px] grid place-items-center shadow-[0_4px_16px_rgba(255,79,64,0.35)] active:scale-95 transition-transform duration-200">
                    <MessageCircle size={26} className="text-white" strokeWidth={2} />
                  </div>
                  <span className="text-[10px] font-[700] text-[var(--m)] mt-1.5">{item.label}</span>
                </a>
              );
            }

            const Icon = item.icon!;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1.5 py-2 px-3 transition-all duration-200 active:scale-95 ${
                  isActive ? "text-[var(--c)]" : "text-[var(--m)]"
                }`}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 1.5} />
                <span className="text-[10px] font-[700]">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
