import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Tag, ShoppingBag } from 'lucide-react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../utils/currency';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onUpdateQuantity: (productId: string, size: string, quantity: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onProceedToCheckout: () => void;
  appliedPromo: string | null;
  onApplyPromo: (code: string) => boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  appliedPromo,
  onApplyPromo,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 60.0;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const discountAmount = appliedPromo === 'AURA10' ? subtotal * 0.1 : 0;
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || items.length === 0;
  const shippingCost = isFreeShipping ? 0 : 4.95;
  const total = Math.max(0, subtotal - discountAmount + shippingCost);

  const progressPercentage = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    if (!promoInput.trim()) return;

    const ok = onApplyPromo(promoInput.trim());
    if (ok) {
      setPromoSuccess('¡Cupón del 10% de descuento aplicado!');
    } else {
      setPromoError('Cupón no válido. Prueba con "AURA10"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#EAE0DA]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#F0E6E1] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#A66D67]" />
              <h2 className="text-lg font-serif text-[#2D2426] font-semibold">
                Tu Cesta de Compra
              </h2>
              <span className="text-xs text-[#8C767A] tabular-nums">
                ({items.reduce((acc, i) => acc + i.quantity, 0)} artículos)
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#6E5B5E] hover:text-[#2D2426] hover:bg-[#FAF7F5]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3 bg-[#FAF5F2] border-b border-[#ECE0D9]">
            <div className="flex justify-between text-xs text-[#5C4C4F] mb-1.5 font-medium">
              <span>
                {isFreeShipping && subtotal > 0
                  ? '¡Enhorabuena! Tienes Envío Gratis 🚚'
                  : `Te faltan ${remainingForFreeShipping.toFixed(2)} € para Envío Gratis`}
              </span>
              <span className="tabular-nums font-semibold text-[#A66D67]">
                {subtotal.toFixed(2)} € / {FREE_SHIPPING_THRESHOLD} €
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#EAE0DA] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#B67B74] rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#F2E8E4]">
            {items.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-[#D8CAC4] mb-3 stroke-[1.5]" />
                <p className="text-base font-serif text-[#2D2426] mb-1">
                  Tu cesta está vacía
                </p>
                <p className="text-xs text-[#7F6B6F] mb-5 max-w-xs">
                  Explora nuestros guantes y protectores ergonómicos con horma adaptada a la mujer.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#2D2426] text-white text-xs font-semibold rounded-xl hover:bg-[#433638] transition-colors"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.product.id}-${item.selectedSize}`} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-xl object-cover border border-[#EAE0DA] shrink-0 bg-[#FAF5F2]"
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs sm:text-sm font-semibold text-[#2D2426] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                          className="text-[#968286] hover:text-[#B67B74] transition-colors p-0.5"
                          title="Eliminar de la cesta"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs text-[#7F6B6F] mt-0.5">
                        Talla: <span className="font-medium text-[#2D2426]">{item.selectedSize}</span> · {item.product.colorName.split('&')[0]}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Stepper */}
                      <div className="flex items-center border border-[#EAE0DA] rounded-lg bg-[#FAF7F5] px-1">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-xs font-semibold text-[#6E5B5E] hover:text-[#2D2426]"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-[#2D2426] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-xs font-semibold text-[#6E5B5E] hover:text-[#2D2426]"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-sm font-bold text-[#2D2426] tabular-nums">
                        {formatPrice(item.product.price * item.quantity, currency)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#F0E6E1] bg-[#FCFAF8] space-y-4">
              
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-[#8C767A] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Código descuento (ej: AURA10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                      className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#EAE0DA] rounded-lg uppercase tracking-wider focus:outline-none focus:border-[#B67B74]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#FAF2EF] text-[#A66D67] hover:bg-[#F3E5E1] border border-[#E8DDD8] rounded-lg text-xs font-semibold transition-colors"
                  >
                    Aplicar
                  </button>
                </div>
                {promoSuccess && (
                  <p className="text-[11px] text-[#2E7D4B] font-medium">{promoSuccess}</p>
                )}
                {promoError && (
                  <p className="text-[11px] text-[#A64646] font-medium">{promoError}</p>
                )}
              </form>

              {/* Price Calculation Breakdown */}
              <div className="space-y-1.5 text-xs text-[#635154] pt-2 border-t border-[#EFE5E0]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="tabular-nums text-[#2D2426]">{formatPrice(subtotal, currency)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#2E7D4B] font-medium">
                    <span>Descuento Promocional (10%)</span>
                    <span className="tabular-nums">-{formatPrice(discountAmount, currency)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Gastos de Envío</span>
                  <span className="tabular-nums text-[#2D2426]">
                    {isFreeShipping ? 'Gratis' : formatPrice(shippingCost, currency)}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-[#2D2426] pt-2 border-t border-[#EFE5E0]">
                  <span>Total Pedido</span>
                  <span className="tabular-nums">{formatPrice(total, currency)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                type="button"
                onClick={onProceedToCheckout}
                className="w-full py-3.5 bg-[#2D2426] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#433638] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Tramitar Pedido Seguro</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#7F6B6F]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D4B]" />
                <span>Pago 100% encriptado SSL & Garantía Aura 30 días</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
