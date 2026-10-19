import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Product, ProductCategory, Currency } from '../types';
import { ProductCard } from './ProductCard';

interface StoreCatalogProps {
  products: Product[];
  currency: Currency;
  onOpenDetail: (product: Product) => void;
  onQuickAdd: (product: Product, size: string) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
  selectedSizeFilter?: string | null;
  onClearSizeFilter?: () => void;
  activeCategory?: ProductCategory;
  onCategoryChange?: (category: ProductCategory) => void;
}

export const StoreCatalog: React.FC<StoreCatalogProps> = ({
  products,
  currency,
  onOpenDetail,
  onQuickAdd,
  wishlist,
  onToggleWishlist,
  selectedSizeFilter,
  onClearSizeFilter,
  activeCategory,
  onCategoryChange,
}) => {
  const [internalCategory, setInternalCategory] = useState<ProductCategory>('todos');
  const selectedCategory = activeCategory !== undefined ? activeCategory : internalCategory;

  const handleCategorySelect = (cat: ProductCategory) => {
    if (onCategoryChange) {
      onCategoryChange(cat);
    } else {
      setInternalCategory(cat);
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'todos', label: 'Toda la Colección' },
    { id: 'guantes', label: 'Guantes de Boxeo' },
    { id: 'sacos', label: 'Sacos & Manoplas' },
    { id: 'cascos-petos', label: 'Petos & Cascos' },
    { id: 'proteccion', label: 'Gel & Nudillos' },
    { id: 'accesorios', label: 'Accesorios & Kits' },
  ];

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory !== 'todos' && p.category !== selectedCategory) {
          return false;
        }
        // Size filter if active from calculator
        if (selectedSizeFilter && !p.sizes.includes(selectedSizeFilter)) {
          return false;
        }
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          const matchColor = p.colorName.toLowerCase().includes(q);
          if (!matchName && !matchDesc && !matchColor) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // default featured
      });
  }, [products, selectedCategory, selectedSizeFilter, searchQuery, sortBy]);

  return (
    <section id="tienda" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Title & Collection Kicker */}
      <div className="max-w-3xl mb-10">
        <span className="text-xs uppercase tracking-wider text-[#A66D67] font-semibold">
          Colección Exclusiva · Horma Femenina
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#2D2426]">
          Tienda de Equipamiento Especializado
        </h2>
        <p className="mt-4 text-base text-[#6E5B5E] leading-relaxed">
          Materiales premium japoneses, espumas multicapa de absorción progresiva y una estética suave pensada para la mujer que busca máxima protección sin renunciar a la elegancia.
        </p>
      </div>

      {/* Filter toolbar */}
      <div className="space-y-4 mb-8">
        
        {/* Categories Segmented Control & Search Input */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#EAE0DA] shadow-2xs overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#FAF0ED] text-[#2D2426] font-semibold shadow-2xs'
                    : 'text-[#6E5B5E] hover:text-[#2D2426] hover:bg-[#FAF7F5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-[#8C767A] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar guantes, sacos, petos, vendas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white border border-[#EAE0DA] rounded-xl focus:outline-none focus:border-[#B67B74] placeholder-[#A08E92]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8C767A] hover:text-[#2D2426]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1 bg-white border border-[#EAE0DA] rounded-xl px-2.5 py-2 text-xs text-[#2D2426]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C767A]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-[#2D2426] focus:outline-none cursor-pointer pr-1"
              >
                <option value="featured">Destacados</option>
                <option value="rating">Mejor valorados</option>
                <option value="price-asc">Precio: Menor a mayor</option>
                <option value="price-desc">Precio: Mayor a menor</option>
              </select>
            </div>
          </div>

        </div>

        {/* Active Size Filter Notification (if arrived from calculator) */}
        {selectedSizeFilter && (
          <div className="flex items-center justify-between p-3 bg-[#FAF2EF] border border-[#E8D7D0] rounded-xl text-xs text-[#2D2426]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#A66D67]" />
              <span>
                Filtrando por tu talla recomendada por la calculadora:{' '}
                <strong className="text-[#965A54]">{selectedSizeFilter}</strong>
              </span>
            </div>
            {onClearSizeFilter && (
              <button
                type="button"
                onClick={onClearSizeFilter}
                className="text-xs text-[#A66D67] hover:underline font-semibold"
              >
                Quitar filtro de talla
              </button>
            )}
          </div>
        )}

      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currency={currency}
              onOpenDetail={onOpenDetail}
              onQuickAdd={onQuickAdd}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-[#EAE0DA] p-8">
          <p className="text-base font-serif text-[#2D2426] mb-2">
            No se encontraron artículos con esos criterios
          </p>
          <p className="text-xs text-[#6E5B5E] mb-4">
            Prueba a restablecer los filtros de búsqueda o categoría.
          </p>
          <button
            onClick={() => {
              handleCategorySelect('todos');
              setSearchQuery('');
              if (onClearSizeFilter) onClearSizeFilter();
            }}
            className="px-4 py-2 bg-[#2D2426] text-white text-xs font-semibold rounded-xl hover:bg-[#433638] transition-colors"
          >
            Ver todos los artículos
          </button>
        </div>
      )}

    </section>
  );
};
