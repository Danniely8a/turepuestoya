import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-el px-[4vw] py-[38px] bg-[#0b0e10] text-white flex items-center justify-between">
      <Image
        src="https://turepuestoya.com.ve/wp-content/uploads/2026/03/T-1-1.png"
        alt="Tu Repuesto Ya"
        width={185}
        height={35}
        style={{ filter: "brightness(0) invert(1)" }}
      />
      <small className="text-[#9da5ac]">
        Grupo Tu Repuesto Ya C.A · Todos los derechos reservados
      </small>
    </footer>
  );
}
