import React from 'react';
import { Star, Heart, Eye } from 'lucide-react';
import { Product, Currency } from '../types';
import { formatPrice, formatInstallments } from '../utils/currency';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  onOpenDetail: (product: Product) => void;
  onQuickAdd: (product: Product, size: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  onOpenDetail,
  onQuickAdd,
  isWishlisted,
  onToggleWishlist,
}) => {
  return (
    <div className="group bg-white rounded-2xl border border-[#EAE0DA] overflow-hidden flex flex-col justify-between hover:border-[#D5C1BA] hover:shadow-md transition-all duration-300">
      
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] bg-[#F5EFEA] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />

        {/* Fallback pattern */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FAF5F2] to-[#EFE4DE] flex items-center justify-center text-xs text-[#8C767A]">
          {product.name}
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {product.tag ? (
            <span className="text-[10px] font-bold tracking-wider text-[#2D2426] bg-white/95 backdrop-blur px-2.5 py-1 rounded-md shadow-2xs pointer-events-auto uppercase">
              {product.tag}
            </span>
          ) : (
            <span />
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[#6E5B5E] hover:text-[#965A54] transition-colors pointer-events-auto shadow-2xs"
            title={isWishlisted ? 'Eliminar de favoritos' : 'Añadir a favoritos'}
          >
            <Heart
              className={`w-4 h-4 ${
                isWishlisted
                  ? 'fill-[#B67B74] text-[#B67B74]'
                  : 'text-[#6E5B5E]'
              }`}
            />
          </button>
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => onOpenDetail(product)}
            className="w-full py-2 bg-[#2D2426]/90 backdrop-blur text-white text-xs font-semibold rounded-lg hover:bg-[#2D2426] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Vista Rápida & Tallas</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          {/* Category & Color swatch */}
          <div className="flex items-center justify-between text-[11px] text-[#7F6B6F] mb-1.5 uppercase tracking-wider">
            <span>
              {product.category === 'guantes'
                ? 'Guantes Femeninos'
                : product.category === 'sacos'
                ? 'Sacos & Manoplas'
                : product.category === 'cascos-petos'
                ? 'Protección Integral'
                : product.category === 'proteccion'
                ? 'Gel & Nudillos'
                : 'Accesorios'}
            </span>
            <div className="flex items-center gap-1.5" title={product.colorName}>
              <span
                className="w-2.5 h-2.5 rounded-full border border-black/10"
                style={{ backgroundColor: product.colorHex }}
              />
              <span className="normal-case text-[10px] text-[#8C767A]">{product.colorName.split('&')[0].trim()}</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onOpenDetail(product)}
            className="text-sm font-semibold text-[#2D2426] hover:text-[#965A54] transition-colors cursor-pointer line-clamp-1 mb-1.5"
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-xs mb-2">
            <Star className="w-3.5 h-3.5 fill-[#B67B74] text-[#B67B74]" />
            <span className="font-semibold text-[#2D2426] tabular-nums">
              {product.rating}
            </span>
            <span className="text-[#8C767A] text-[11px]">
              ({product.reviewCount})
            </span>
          </div>

          {/* Available sizes */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.sizes.slice(0, 4).map((size) => (
              <span
                key={size}
                className="text-[11px] text-[#5E4E51] bg-[#F7F2EF] px-2 py-0.5 rounded border border-[#ECE0D9]"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & Installments */}
        <div className="pt-3 border-t border-[#F2E8E4]">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-base font-bold text-[#2D2426] tabular-nums">
              {formatPrice(product.price, currency)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#8C767A] line-through tabular-nums">
                {formatPrice(product.originalPrice, currency)}
              </span>
            )}
          </div>

          {/* Everlast-style installment callout */}
          <div className="text-[11px] text-[#7A6468] font-medium mb-3">
            {formatInstallments(product.price, currency, 3)}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => onOpenDetail(product)}
              className="text-xs text-[#6E5B5E] hover:text-[#2D2426] underline font-medium"
            >
              Ver detalles
            </button>
            <button
              type="button"
              onClick={() => onQuickAdd(product, product.sizes[0])}
              className="text-xs font-semibold text-[#965A54] hover:text-[#2D2426] bg-[#FAF2EF] hover:bg-[#F3E5E1] px-2.5 py-1 rounded-md transition-colors"
            >
              Añadir ({product.sizes[0]})
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

