import React, { useState } from 'react';
import { X, CheckCircle, CreditCard, ShieldCheck, ArrowRight, Package } from 'lucide-react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../utils/currency';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  total: number;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  total,
  onOrderSuccess,
}) => {
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmed'>('shipping');
  
  // Form fields
  const [name, setName] = useState('Elena');
  const [lastName, setLastName] = useState('Serrano');
  const [email, setEmail] = useState('elena.box@example.com');
  const [phone, setPhone] = useState('+34 612 345 678');
  const [address, setAddress] = useState('Calle Serrano 42, 3º B');
  const [city, setCity] = useState('Madrid');
  const [postalCode, setPostalCode] = useState('28001');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bizum' | 'applepay'>('card');
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleFinishOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNumber = `AUR-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderNumber(generatedOrderNumber);
    setStep('confirmed');
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#EAE0DA] relative p-6 sm:p-8">
        
        {/* Close Button */}
        {step !== 'confirmed' && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#8C767A] hover:text-[#2D2426] p-1.5 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Step Indicator */}
        <div className="flex items-center justify-between pb-6 border-b border-[#F0E6E1] mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#A66D67] font-semibold">
              Checkout Seguro
            </span>
            <span className="text-xs text-[#8C767A]">· Pasarela Cifrada SSL</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-[#6E5B5E]">
            <span className={step === 'shipping' ? 'text-[#2D2426] font-bold underline' : ''}>1. Envío</span>
            <span>→</span>
            <span className={step === 'payment' ? 'text-[#2D2426] font-bold underline' : ''}>2. Pago</span>
            <span>→</span>
            <span className={step === 'confirmed' ? 'text-[#2D2426] font-bold underline' : ''}>3. Confirmación</span>
          </div>
        </div>

        {/* STEP 1: Shipping Form */}
        {step === 'shipping' && (
          <form onSubmit={handleProceedToPayment} className="space-y-4">
            <h3 className="text-xl font-serif text-[#2D2426]">
              Datos de Envío & Entrega
            </h3>
            <p className="text-xs text-[#7F6B6F]">
              Introduce la dirección donde deseas recibir tu equipamiento Aura.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-[#2D2426] mb-1">Nombre</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F5] border border-[#E0D3CC] rounded-xl focus:outline-none focus:border-[#B67B74]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2D2426] mb-1">Apellidos</label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F5] border border-[#E0D3CC] rounded-xl focus:outline-none focus:border-[#B67B74]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#2D2426] mb-1">Email de confirmación</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F5] border border-[#E0D3CC] rounded-xl focus:outline-none focus:border-[#B67B74]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2D2426] mb-1">Teléfono móvil</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F5] border border-[#E0D3CC] rounded-xl focus:outline-none focus:border-[#B67B74]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2D2426] mb-1">Dirección completa</label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Calle, número, piso o puerta"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F5] border border-[#E0D3CC] rounded-xl focus:outline-none focus:border-[#B67B74]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#2D2426] mb-1">Ciudad</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F5] border border-[#E0D3CC] rounded-xl focus:outline-none focus:border-[#B67B74]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#2D2426] mb-1">Código Postal</label>
                <input
                  type="text"
                  required
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F5] border border-[#E0D3CC] rounded-xl focus:outline-none focus:border-[#B67B74]"
                />
              </div>
            </div>

            {/* Order Items Recap */}
            <div className="p-3 bg-[#FAF5F2] rounded-xl border border-[#ECE0D9] text-xs text-[#5C4C4F]">
              <div className="flex justify-between font-semibold text-[#2D2426] mb-1">
                <span>Resumen ({items.length} productos)</span>
                <span className="tabular-nums font-bold text-[#2D2426]">{formatPrice(total, currency)}</span>
              </div>
              <p className="text-[11px] text-[#7F6B6F]">
                Incluye garantía de cambio de talla gratuita y caja protectora Aura.
              </p>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#6E5B5E] hover:text-[#2D2426]"
              >
                Volver a la cesta
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#2D2426] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#433638] transition-colors flex items-center gap-2"
              >
                <span>Continuar al Pago</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Payment */}
        {step === 'payment' && (
          <form onSubmit={handleFinishOrder} className="space-y-4">
            <h3 className="text-xl font-serif text-[#2D2426]">
              Método de Pago Seguro
            </h3>
            <p className="text-xs text-[#7F6B6F]">
              Selecciona tu forma de pago preferida con encriptación de grado bancario.
            </p>

            {/* Payment methods selector */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  paymentMethod === 'card'
                    ? 'border-[#B67B74] bg-[#FAF2EF] ring-1 ring-[#B67B74]'
                    : 'border-[#EAE0DA] bg-white'
                }`}
              >
                <CreditCard className="w-4 h-4 mx-auto text-[#A66D67] mb-1" />
                <span className="text-xs font-semibold text-[#2D2426] block">Tarjeta</span>
                <span className="text-[10px] text-[#7F6B6F]">Visa / Master</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('bizum')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  paymentMethod === 'bizum'
                    ? 'border-[#B67B74] bg-[#FAF2EF] ring-1 ring-[#B67B74]'
                    : 'border-[#EAE0DA] bg-white'
                }`}
              >
                <div className="w-4 h-4 mx-auto font-bold text-[#00A99D] mb-1 text-xs">B</div>
                <span className="text-xs font-semibold text-[#2D2426] block">Bizum</span>
                <span className="text-[10px] text-[#7F6B6F]">Instantáneo</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('applepay')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  paymentMethod === 'applepay'
                    ? 'border-[#B67B74] bg-[#FAF2EF] ring-1 ring-[#B67B74]'
                    : 'border-[#EAE0DA] bg-white'
                }`}
              >
                <div className="w-4 h-4 mx-auto font-bold text-[#2D2426] mb-1 text-xs"></div>
                <span className="text-xs font-semibold text-[#2D2426] block">Apple Pay</span>
                <span className="text-[10px] text-[#7F6B6F]">1 Click</span>
              </button>
            </div>

            {/* Card Inputs if card */}
            {paymentMethod === 'card' && (
              <div className="p-4 bg-[#FAF7F5] rounded-xl border border-[#EAE0DA] space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#2D2426] mb-1">Número de Tarjeta</label>
                  <input
                    type="text"
                    required
                    placeholder="4500 •••• •••• 8912"
                    defaultValue="4500 1284 9912 8912"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#E0D3CC] rounded-lg focus:outline-none focus:border-[#B67B74] font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#2D2426] mb-1">Caducidad</label>
                    <input
                      type="text"
                      required
                      placeholder="MM/AA"
                      defaultValue="08/28"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#E0D3CC] rounded-lg focus:outline-none focus:border-[#B67B74] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-[#2D2426] mb-1">CVC / CVV</label>
                    <input
                      type="password"
                      maxLength={4}
                      required
                      placeholder="•••"
                      defaultValue="381"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#E0D3CC] rounded-lg focus:outline-none focus:border-[#B67B74] font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'bizum' && (
              <div className="p-4 bg-[#FAF7F5] rounded-xl border border-[#EAE0DA] text-xs text-[#5C4C4F]">
                <p className="font-semibold text-[#2D2426] mb-1">Pago mediante Bizum</p>
                <p>Recibirás una notificación push en la app de tu banco con el importe de {formatPrice(total, currency)} para autorizar el cargo al número {phone}.</p>
              </div>
            )}

            {paymentMethod === 'applepay' && (
              <div className="p-4 bg-[#FAF7F5] rounded-xl border border-[#EAE0DA] text-xs text-[#5C4C4F]">
                <p className="font-semibold text-[#2D2426] mb-1">Apple Pay Express</p>
                <p>Haz doble clic en el botón lateral de tu dispositivo Touch ID / Face ID para confirmar el pago con tu tarjeta vinculada.</p>
              </div>
            )}

            {/* Total Recap */}
            <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-[#EAE0DA]">
              <span className="text-sm font-semibold text-[#2D2426]">Total a Cargar:</span>
              <span className="text-xl font-bold text-[#2D2426] tabular-nums">{formatPrice(total, currency)}</span>
            </div>

            <div className="pt-4 flex justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep('shipping')}
                className="px-4 py-2 text-xs font-medium text-[#6E5B5E] hover:text-[#2D2426]"
              >
                Volver a datos de envío
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#2D2426] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#433638] transition-colors flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#A66D67]" />
                <span>Pagar & Confirmar Pedido</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Confirmed */}
        {step === 'confirmed' && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EBF5EE] text-[#2E7D4B] flex items-center justify-center mx-auto mb-2 border border-[#CDE5D5]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-wider text-[#A66D67] font-semibold">
              ¡Pedido Realizado con Éxito!
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#2D2426]">
              Gracias por tu confianza, {name}
            </h3>

            <p className="text-xs sm:text-sm text-[#6E5B5E] max-w-md mx-auto leading-relaxed">
              Hemos enviado el comprobante a <strong className="text-[#2D2426]">{email}</strong>. Tu equipamiento está siendo preparado por nuestro equipo de embalaje especializado.
            </p>

            {/* Order Details Ticket */}
            <div className="my-6 p-5 bg-[#FAF7F5] rounded-2xl border border-[#EAE0DA] text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="flex justify-between pb-2 border-b border-[#ECE0D9]">
                <span className="text-[#8C767A]">Referencia de Pedido:</span>
                <span className="font-mono font-bold text-[#2D2426]">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C767A]">Destino:</span>
                <span className="text-[#2D2426]">{address}, {city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C767A]">Plazo de entrega:</span>
                <span className="text-[#2E7D4B] font-medium">24 - 48 Horas laborales</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#ECE0D9] font-semibold text-[#2D2426]">
                <span>Total Abonado:</span>
                <span className="tabular-nums font-bold">{formatPrice(total, currency)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#2D2426] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#433638] transition-colors flex items-center justify-center gap-2"
              >
                <Package className="w-4 h-4" />
                <span>Seguir Comprando</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
