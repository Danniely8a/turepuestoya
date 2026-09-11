"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola, soy ${formData.name}. ${formData.message}. Mi correo es ${formData.email} y mi teléfono es ${formData.phone}. Asunto: ${formData.subject}`;
    window.open(
      `https://wa.me/584242704828?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="bg-white rounded-[22px] p-8 shadow-[var(--sh)]">
        <h2 className="text-[24px] tracking-[-.04em] mb-6">Envíanos un mensaje</h2>
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-[var(--g)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="text-[var(--g)]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[var(--g)] mb-2">¡Mensaje enviado!</h3>
            <p className="text-[var(--m)]">Te responderemos por WhatsApp lo antes posible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[13px] font-[700] text-[var(--i)] mb-1">Nombre completo</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[var(--l)] rounded-[14px] outline-none focus:border-[var(--c)] transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-[700] text-[var(--i)] mb-1">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[var(--l)] rounded-[14px] outline-none focus:border-[var(--c)] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-[13px] font-[700] text-[var(--i)] mb-1">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[var(--l)] rounded-[14px] outline-none focus:border-[var(--c)] transition-colors"
                  placeholder="+58 0424 123 4567"
                />
              </div>
            </div>
            <div>
              <label className="block text-[13px] font-[700] text-[var(--i)] mb-1">Asunto</label>
              <select
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[var(--l)] rounded-[14px] outline-none focus:border-[var(--c)] transition-colors"
              >
                <option value="">Selecciona un asunto</option>
                <option value="repuesto">Consulta sobre repuesto</option>
                <option value="pedido">Estado de pedido</option>
                <option value="garantia">Garantía / Devolución</option>
                <option value="taller">Servicio de taller</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-[13px] font-[700] text-[var(--i)] mb-1">Mensaje</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[var(--l)] rounded-[14px] outline-none focus:border-[var(--c)] transition-colors resize-none"
                placeholder="Describe tu consulta..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--c)] text-white py-3.5 rounded-full font-[800] hover:bg-[#e63a30] transition-colors flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>

      <div className="space-y-6">
        <div className="bg-[#151a1f] text-white rounded-[22px] p-8">
          <h2 className="text-[24px] tracking-[-.04em] mb-6">Información de Contacto</h2>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[var(--c)] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="font-[700]">Ventas</p>
                <p className="text-gray-300 text-[14px]">+58 (0424) 270.48.28</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[var(--c)] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-[700]">Email</p>
                <p className="text-gray-300 text-[14px]">info@turepuestoya.com.ve</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[var(--c)] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-[700]">Ubicación</p>
                <p className="text-gray-300 text-[14px]">Caracas / Venezuela</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[var(--c)] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="font-[700]">Horario</p>
                <p className="text-gray-300 text-[14px]">Lun - Jue: 8am - 5pm</p>
                <p className="text-gray-300 text-[14px]">Vie: 8am - 2pm</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/584242704828?text=Hola,%20necesito%20ayuda"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#25d366] text-white rounded-[22px] p-6 text-center hover:bg-[#1da851] transition-colors"
        >
          <p className="text-[18px] font-[800] mb-1">¿Prefieres WhatsApp?</p>
          <p className="text-white/80 text-[14px]">Chatea directamente con nosotros</p>
        </a>
      </div>
    </div>
  );
}
