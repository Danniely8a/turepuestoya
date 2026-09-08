import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tu Repuesto Ya — Encuentra el repuesto y los accesorios que buscas",
  description:
    "Encuentra repuestos compatibles con tu vehículo. Envíos a toda Venezuela.",
  openGraph: {
    title: "Tu Repuesto Ya",
    description: "Encuentra el repuesto y los accesorios que buscas",
    url: "https://turepuestoya.com.ve",
    siteName: "Tu Repuesto Ya",
    locale: "es_VE",
    type: "website",
    images: ["https://turepuestoya.com.ve/wp-content/uploads/2026/03/T-1-1.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="font-[var(--font-inter)] antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
