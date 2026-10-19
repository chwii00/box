import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#261E20] text-[#E8DFDF] pt-16 pb-12 border-t border-[#3B2F32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3B2F32]">
          
          {/* Brand info */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-block text-xl font-serif text-white mb-3">
              <span className="font-serif italic text-[#D8A49B]">AURORA</span>{' '}
              <span className="font-sans text-xs uppercase tracking-widest text-[#E8DDD8] font-bold">
                BOXING FEMME
              </span>
            </a>
            <p className="text-xs text-[#B5A4A7] leading-relaxed max-w-sm">
              La primera marca de equipamiento de boxeo esculpida en torno a la anatomía femenina. Materiales de alta absorción, paleta soft y ajuste ergonómico que previene lesiones.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#D8A49B]">
              <ShieldCheck className="w-4 h-4 text-[#D8A49B]" />
              <span>Garantía de ajuste perfecto o cambio gratis en 24h</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A4A7]">
              <li><a href="#tienda" className="hover:text-white transition-colors">Tienda Online</a></li>
              <li><a href="#guia-tallas" className="hover:text-white transition-colors">Calculadora de Onzas</a></li>
              <li><a href="#resenas" className="hover:text-white transition-colors">Reseñas de Clientas</a></li>
              <li><a href="#filosofia" className="hover:text-white transition-colors">Ergonomía & Salud</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Atención al Cliente
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A4A7]">
              <li><span>Lunes a Viernes: 9:00 - 19:00</span></li>
              <li><span>asesoria@auroraboxing.es</span></li>
              <li><span>WhatsApp: +34 600 123 456</span></li>
              <li><span>Envíos 24/48h & Devoluciones</span></li>
            </ul>
          </div>

          {/* Newsletter for 10% discount */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-2">
              Únete al Club Aura Boxing
            </h4>
            <p className="text-xs text-[#B5A4A7] mb-3 leading-relaxed">
              Recibe un código del 10% de descuento en tu primer pedido y consejos semanales de entrenamiento y vendaje.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#382B2E] border border-[#523F44] rounded-xl text-xs text-[#D8A49B] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2E7D4B]" />
                <span>¡Te has suscrito con éxito! Usa el cupón <strong className="text-white">AURA10</strong> en tu carrito.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-[#8C767A] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Tu email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-[#32272A] border border-[#48373B] rounded-xl text-white placeholder-[#8C767A] focus:outline-none focus:border-[#D8A49B]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#D8A49B] text-[#261E20] text-xs font-semibold rounded-xl hover:bg-[#E5BFB8] transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>Unirme</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C767A] gap-4">
          <p>© {new Date().getFullYear()} AURORA Boxing Femme S.L. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Aviso Legal</span>
            <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidad</span>
            <span className="hover:text-white cursor-pointer transition-colors">Términos de Compra</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
