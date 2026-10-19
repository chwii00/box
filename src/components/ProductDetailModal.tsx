import React, { useState } from 'react';
import { X, Star, Shield, ArrowRight, Heart, ShoppingBag, Truck, RotateCcw, CreditCard } from 'lucide-react';
import { Product, Currency } from '../types';
import { formatPrice, formatInstallments } from '../utils/currency';

interface ProductDetailModalProps {
  product: Product;
  currency: Currency;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
  onOpenSizeGuide: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  currency,
  onClose,
  onAddToCart,
  onOpenSizeGuide,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'descripcion' | 'especificaciones' | 'ergonomia'>('descripcion');
  const [addedEffect, setAddedEffect] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setAddedEffect(true);
    setTimeout(() => setAddedEffect(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-[#EAE0DA] flex flex-col md:flex-row relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur border border-[#EAE0DA] flex items-center justify-center text-[#6E5B5E] hover:text-[#2D2426] hover:bg-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Product Imagery */}
        <div className="md:w-1/2 bg-[#F6EFEA] p-6 sm:p-8 flex flex-col justify-between relative">
          <div className="relative aspect-[4/3] md:aspect-square w-full rounded-2xl overflow-hidden shadow-xs border border-[#E8DDD8] bg-white">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[#6E5B5E]">
            <div className="flex items-center gap-2">
              <span
                className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-2xs"
                style={{ backgroundColor: product.colorHex }}
              />
              <span className="font-medium text-[#2D2426]">{product.colorName}</span>
            </div>
            
            <button
              onClick={() => onToggleWishlist(product.id)}
              className="flex items-center gap-1.5 text-xs font-medium text-[#6E5B5E] hover:text-[#965A54] transition-colors"
            >
              <Heart
                className={`w-4 h-4 ${
                  isWishlisted ? 'fill-[#B67B74] text-[#B67B74]' : ''
                }`}
              />
              <span>{isWishlisted ? 'En tus favoritos' : 'Añadir a lista'}</span>
            </button>
          </div>

          {/* Guarantee Badges */}
          <div className="mt-4 pt-4 border-t border-[#EAE0DA] grid grid-cols-2 gap-3 text-[11px] text-[#5C4C4F]">
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#A66D67]" />
              <span>Envío Express a todo el país</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RotateCcw className="w-3.5 h-3.5 text-[#A66D67]" />
              <span>30 días para cambio de talla gratis</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contiguous Purchase Module */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Category and Rating */}
            <div className="flex items-center justify-between text-xs text-[#7F6B6F] mb-1">
              <span className="uppercase tracking-wider font-semibold text-[#A66D67]">
                {product.category === 'guantes'
                  ? 'Guantes de Boxeo Femeninos'
                  : product.category === 'sacos'
                  ? 'Equipamiento de Estudio & Sacos'
                  : product.category === 'cascos-petos'
                  ? 'Protección Homologada'
                  : 'Equipamiento Técnico'}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#B67B74] text-[#B67B74]" />
                <span className="font-semibold text-[#2D2426] tabular-nums">
                  {product.rating}
                </span>
                <span className="text-[#8C767A]">({product.reviewCount} opiniones)</span>
              </div>
            </div>

            {/* Product Title */}
            <h2 className="text-xl sm:text-2xl font-serif text-[#2D2426] font-semibold leading-tight mb-2">
              {product.name}
            </h2>

            {/* Price & Installments (Everlast Style) */}
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-[#2D2426] tabular-nums">
                  {formatPrice(product.price, currency)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#8C767A] line-through tabular-nums">
                    {formatPrice(product.originalPrice, currency)}
                  </span>
                )}
                <span className="text-[11px] text-[#2E7D4B] font-medium bg-[#EEF7F1] px-2 py-0.5 rounded ml-2">
                  En stock
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#7A6468] font-medium mt-1">
                <CreditCard className="w-3.5 h-3.5 text-[#A66D67]" />
                <span>{formatInstallments(product.price, currency, 3)}</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-[#2D2426]">
                  Selecciona tu Talla / Onzas:
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenSizeGuide();
                  }}
                  className="text-xs text-[#A66D67] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>¿Dudas con tu talla? Abrir calculadora</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-2 text-center rounded-xl text-xs font-medium border transition-all ${
                      selectedSize === size
                        ? 'border-[#B67B74] bg-[#FAF2EF] text-[#2D2426] font-semibold ring-1 ring-[#B67B74]'
                        : 'border-[#EAE0DA] bg-white text-[#6E5B5E] hover:border-[#D5C1BA]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-[#EAE0DA] rounded-xl bg-white p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 flex items-center justify-center text-sm font-semibold text-[#6E5B5E] hover:text-[#2D2426]"
                >
                  -
                </button>
                <span className="w-8 text-center text-xs font-semibold text-[#2D2426] tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 flex items-center justify-center text-sm font-semibold text-[#6E5B5E] hover:text-[#2D2426]"
                >
                  +
                </button>
              </div>

              {/* Add to Cart CTA */}
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 py-3 px-5 bg-[#2D2426] hover:bg-[#433638] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>
                  {addedEffect
                    ? '¡Añadido a tu Cesta!'
                    : `Añadir · ${formatPrice(product.price * quantity, currency)}`}
                </span>
              </button>
            </div>

            {/* Informational Tabs */}
            <div className="border-t border-[#F0E6E1] pt-4">
              <div className="flex gap-4 border-b border-[#F0E6E1] pb-2 mb-3 text-xs">
                <button
                  onClick={() => setActiveTab('descripcion')}
                  className={`font-semibold pb-1 transition-colors ${
                    activeTab === 'descripcion'
                      ? 'text-[#2D2426] border-b-2 border-[#B67B74]'
                      : 'text-[#8C767A] hover:text-[#2D2426]'
                  }`}
                >
                  Descripción
                </button>
                <button
                  onClick={() => setActiveTab('ergonomia')}
                  className={`font-semibold pb-1 transition-colors ${
                    activeTab === 'ergonomia'
                      ? 'text-[#2D2426] border-b-2 border-[#B67B74]'
                      : 'text-[#8C767A] hover:text-[#2D2426]'
                  }`}
                >
                  Fisiología Femenina
                </button>
                <button
                  onClick={() => setActiveTab('especificaciones')}
                  className={`font-semibold pb-1 transition-colors ${
                    activeTab === 'especificaciones'
                      ? 'text-[#2D2426] border-b-2 border-[#B67B74]'
                      : 'text-[#8C767A] hover:text-[#2D2426]'
                  }`}
                >
                  Ficha Técnica
                </button>
              </div>

              {activeTab === 'descripcion' && (
                <div>
                  <p className="text-xs text-[#635054] leading-relaxed mb-3">
                    {product.description}
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#5C4B4E]">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#A66D67] font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'ergonomia' && (
                <div className="bg-[#FAF5F2] rounded-xl p-3 text-xs text-[#635054] space-y-2 border border-[#EFE3DD]">
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-[#A66D67] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#2D2426] block">Horma Estrecha Anti-Torceduras</span>
                      <span>
                        El 73% de las lesiones de muñeca en boxeadoras ocurren por usar guantes unisex con túnel de mano sobredimensionado. Aura ajusta la circunferencia interior para bloquear el metacarpo.
                      </span>
                    </div>
                  </div>
                  <div className="text-[11px] text-[#8C767A] pt-1">
                    Recomendado especialmente para: <strong className="text-[#2D2426]">{product.recommendedFor}</strong>
                  </div>
                </div>
              )}

              {activeTab === 'especificaciones' && (
                <dl className="grid grid-cols-2 gap-2 text-xs text-[#5C4C4F]">
                  <div className="p-2 bg-[#FAF7F5] rounded-lg">
                    <dt className="text-[10px] text-[#8C767A] uppercase font-semibold">Material Exterior</dt>
                    <dd className="font-medium text-[#2D2426] mt-0.5">{product.specs.material}</dd>
                  </div>
                  <div className="p-2 bg-[#FAF7F5] rounded-lg">
                    <dt className="text-[10px] text-[#8C767A] uppercase font-semibold">Sistema de Cierre</dt>
                    <dd className="font-medium text-[#2D2426] mt-0.5">{product.specs.cierre}</dd>
                  </div>
                  <div className="p-2 bg-[#FAF7F5] rounded-lg">
                    <dt className="text-[10px] text-[#8C767A] uppercase font-semibold">Amortiguación</dt>
                    <dd className="font-medium text-[#2D2426] mt-0.5">{product.specs.densidad}</dd>
                  </div>
                  <div className="p-2 bg-[#FAF7F5] rounded-lg">
                    <dt className="text-[10px] text-[#8C767A] uppercase font-semibold">Horma Biomecánica</dt>
                    <dd className="font-medium text-[#2D2426] mt-0.5">{product.specs.horma}</dd>
                  </div>
                </dl>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
