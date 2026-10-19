import React, { useState } from 'react';
import { ShoppingBag, Heart, Menu, X, Sparkles, Globe } from 'lucide-react';
import { Currency } from '../types';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  currency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  currency,
  onCurrencyChange,
  onOpenCart,
  onOpenWishlist,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top multi-tier promotional announcement bar (Everlast style) */}
      <div className="bg-[#2D2426] text-[#FAF2EF] py-2 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          
          <div className="hidden sm:flex items-center gap-2 text-[#D8A49B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HASTA 6 CUOTAS SIN INTERÉS · ENVÍOS A TODO EL PAÍS</span>
          </div>

          <div className="mx-auto sm:mx-0 flex items-center gap-1.5 text-center">
            <span>30 DÍAS DE CAMBIO DE TALLA GRATIS</span>
            <span className="hidden md:inline text-[#8C767A]">·</span>
            <span className="hidden md:inline text-[#D8A49B]">HORMA ANATÓMICA FEMENINA</span>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-1.5 shrink-0">
            <Globe className="w-3 h-3 text-[#D8A49B]" />
            <select
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value as Currency)}
              className="bg-transparent text-[11px] text-[#FAF2EF] font-semibold cursor-pointer focus:outline-none pr-1"
            >
              <option value="CLP" className="bg-[#2D2426] text-white">CLP ($)</option>
              <option value="EUR" className="bg-[#2D2426] text-white">EUR (€)</option>
              <option value="USD" className="bg-[#2D2426] text-white">USD ($)</option>
            </select>
          </div>

        </div>
      </div>

      {/* Main Navigation (Strict 3-zone contract) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#ECE2DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-bold tracking-tight text-[#2D2426] whitespace-nowrap shrink-0 font-serif flex items-center gap-2"
          >
            <span className="tracking-widest uppercase font-sans text-[11px] bg-[#FAF0ED] text-[#A66D67] px-2 py-0.5 rounded font-bold border border-[#F2DFDA]">
              EVERLAST INSPIRED
            </span>
            <span className="font-serif italic font-normal text-[#965A54] text-xl">AURA</span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#6E5B5E]">
            <a
              href="#tienda"
              className="hover:text-[#2D2426] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Equipamiento
            </a>
            <a
              href="#tecnologia"
              className="hover:text-[#2D2426] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Tecnología Aura-Lock
            </a>
            <a
              href="#guia-tallas"
              className="hover:text-[#2D2426] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Guía de Onzas & Tallas
            </a>
            <a
              href="#resenas"
              className="hover:text-[#2D2426] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Reseñas ({`+850`})
            </a>
            <a
              href="#filosofia"
              className="hover:text-[#2D2426] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Biomecánica
            </a>
          </nav>

          {/* Zone 3: 1 primary action / Cart module */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Wishlist */}
            <button
              type="button"
              onClick={onOpenWishlist}
              className="relative p-2 text-[#6E5B5E] hover:text-[#2D2426] rounded-xl hover:bg-[#FAF7F5] transition-colors"
              title="Ver favoritos"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#B67B74] text-white text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart button */}
            <button
              type="button"
              onClick={onOpenCart}
              className="flex items-center gap-2.5 px-3.5 py-2 bg-[#2D2426] text-white rounded-xl hover:bg-[#433638] transition-colors shadow-xs"
            >
              <ShoppingBag className="w-4 h-4 text-[#EBDAD6]" />
              <span className="text-xs font-semibold whitespace-nowrap hidden sm:inline">
                Cesta
              </span>
              <span className="bg-[#433638] text-[#FAF5F2] text-xs font-semibold px-2 py-0.5 rounded-md tabular-nums">
                {cartCount}
              </span>
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#6E5B5E] hover:text-[#2D2426] rounded-lg"
              aria-label="Abrir menú móvil"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#ECE2DD] bg-white px-6 py-4 space-y-3">
            <a
              href="#tienda"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#2D2426] py-1"
            >
              Tienda & Equipamiento
            </a>
            <a
              href="#tecnologia"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#2D2426] py-1"
            >
              Tecnología Aura-Lock
            </a>
            <a
              href="#guia-tallas"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#2D2426] py-1"
            >
              Guía de Onzas & Calculadora
            </a>
            <a
              href="#resenas"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#2D2426] py-1"
            >
              Reseñas de Boxeadoras
            </a>
            <a
              href="#filosofia"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#2D2426] py-1"
            >
              Biomecánica Femenina
            </a>
          </div>
        )}
      </header>
    </>
  );
};
