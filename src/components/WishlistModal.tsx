import React from 'react';
import { X, Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product, Currency } from '../types';
import { formatPrice } from '../utils/currency';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  allProducts: Product[];
  currency: Currency;
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  allProducts,
  currency,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = allProducts.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] overflow-hidden shadow-2xl border border-[#EAE0DA] flex flex-col relative">
        
        {/* Header */}
        <div className="p-6 border-b border-[#F0E6E1] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#B67B74] fill-[#B67B74]" />
            <h3 className="text-lg font-serif text-[#2D2426] font-semibold">
              Tus Artículos Favoritos
            </h3>
            <span className="text-xs text-[#8C767A] tabular-nums">
              ({wishlistedProducts.length})
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#6E5B5E] hover:text-[#2D2426] hover:bg-[#FAF7F5]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto divide-y divide-[#F2E8E4] flex-1">
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-12 h-12 text-[#E8D1CB] mx-auto mb-3" />
              <p className="text-base font-serif text-[#2D2426] mb-1">
                Aún no has guardado favoritos
              </p>
              <p className="text-xs text-[#7F6B6F]">
                Pulsa el icono de corazón en cualquier producto de la tienda para guardarlo aquí.
              </p>
            </div>
          ) : (
            wishlistedProducts.map((product) => (
              <div key={product.id} className="py-4 first:pt-0 last:pb-0 flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-xl object-cover border border-[#EAE0DA] bg-[#FAF5F2] shrink-0"
                />

                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2D2426] line-clamp-1">
                    {product.name}
                  </h4>
                  <div className="text-xs text-[#8C767A] mt-0.5 tabular-nums">
                    {formatPrice(product.price, currency)} · {product.sizes[0]}
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => {
                        onAddToCart(product, product.sizes[0]);
                      }}
                      className="text-xs font-semibold text-[#965A54] hover:text-[#2D2426] flex items-center gap-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Añadir a la cesta</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onRemoveFromWishlist(product.id)}
                      className="text-xs text-[#8C767A] hover:text-[#A64646]"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#F0E6E1] bg-[#FCFAF8] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#2D2426] text-white text-xs font-semibold rounded-xl hover:bg-[#433638] transition-colors flex items-center gap-1.5"
          >
            <span>Continuar Navegando</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
