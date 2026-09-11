"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { X, Trash2 } from "lucide-react";

export default function CartDrawer() {
  const { items, removeItem, totalPrice, totalItems, isOpen, setIsOpen } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const names = items.map((item) => item.product.name).join(", ");
    window.open(
      `https://wa.me/584242704828?text=${encodeURIComponent(
        `Hola Tu Repuesto Ya, quisiera consultar: ${names}`
      )}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay fixed inset-0 bg-[#0c10137a] z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Drawer */}
        <aside
          className={`drawer absolute right-0 top-0 w-[min(430px,100%)] h-full bg-white transform transition-transform duration-300 flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="drawer-head px-[22px] py-[22px] border-b border-[var(--l)] flex justify-between items-start">
            <div>
              <b className="text-[16px]">Tu carrito</b>
              <div className="text-[var(--m)] text-[13px]">Revisa tus repuestos</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="close-btn border-0 bg-[var(--s)] rounded-full w-[38px] h-[38px] grid place-items-center cursor-pointer text-[14px]"
            >
              ✕
            </button>
          </div>

          {/* Cart List */}
          <div className="cart-list p-[20px] grid gap-[11px] overflow-auto flex-1">
            {items.length === 0 ? (
              <div className="empty-cart text-center text-[var(--m)] py-[55px] px-[15px]">
                Tu carrito está vacío.<br />Agrega productos desde el catálogo.
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="cart-item grid grid-cols-[50px_1fr_auto] gap-[11px] items-center border border-[var(--l)] rounded-[14px] p-[10px]"
                >
                  <div className="thumb h-[50px] bg-[var(--s)] rounded-[9px] grid place-items-center relative overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain p-2"
                      sizes="50px"
                    />
                  </div>
                  <div>
                    <b className="text-[14px] block">{item.product.name}</b>
                    <small className="text-[var(--m)] text-[13px]">
                      ${item.product.price.toFixed(2)} × {item.quantity}
                    </small>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="remove-btn border-0 bg-transparent text-[var(--c)] cursor-pointer text-[13px] font-[600]"
                  >
                    Eliminar
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="drawer-foot p-[20px] border-t border-[var(--l)]">
            <div className="total flex justify-between mb-[14px]">
              <span>Total estimado</span>
              <b className="text-[16px]">${totalPrice.toFixed(2)}</b>
            </div>
            <button
              onClick={handleCheckout}
              className="checkout-btn w-full border-0 bg-[var(--c)] text-white rounded-[14px] p-[15px] font-[800] cursor-pointer hover:bg-[#e63a30] transition-colors"
            >
              Consultar pedido por WhatsApp
            </button>
          </div>
        </aside>
      </div>

    </>
  );
}
