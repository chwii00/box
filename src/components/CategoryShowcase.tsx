import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProductCategory } from '../types';

interface CategoryShowcaseProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  const cards = [
    {
      id: 'guantes' as ProductCategory,
      title: 'Guantes de Boxeo',
      subtitle: 'Horma Estrecha · 10oz a 16oz',
      image: 'images/gloves_rose_gold_1792363553163.jpg',
      badge: 'COLECCIÓN PRINCIPAL',
    },
    {
      id: 'sacos' as ProductCategory,
      title: 'Sacos & Manoplas',
      subtitle: 'Piel Soft Leather & Velocidad',
      image: 'images/heavy_bag_boutique_1792364064998.jpg',
      badge: 'ESTUDIO & HOME',
    },
    {
      id: 'cascos-petos' as ProductCategory,
      title: 'Petos & Cascos',
      subtitle: 'Protección Torácica Anatómica',
      image: 'images/chest_guard_women_1792363553831.jpg',
      badge: 'HOMOLOGADO CE',
    },
    {
      id: 'accesorios' as ProductCategory,
      title: 'Vendas & Accesorios',
      subtitle: 'Algodón Peinado & Combas',
      image: 'images/boxing_accessories_kit_1792363554130.jpg',
      badge: 'KITS COMPLETOS',
    },
  ];

  const handleClick = (category: ProductCategory) => {
    onSelectCategory(category);
    const el = document.getElementById('tienda');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-white border-b border-[#ECE2DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#A66D67] font-semibold">
              Departamentos Everlast-Inspired
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2D2426] mt-1 font-semibold">
              Explorar por Categoría
            </h2>
          </div>
          <button
            onClick={() => handleClick('todos')}
            className="text-xs font-semibold text-[#965A54] hover:text-[#2D2426] flex items-center gap-1 group"
          >
            <span>Ver todo el catálogo</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 4 Category Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleClick(card.id)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer border border-[#EAE0DA] shadow-xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent group-hover:from-black/85 transition-colors" />

              {/* Tag top right */}
              <div className="absolute top-3.5 left-3.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#2D2426] bg-white/90 backdrop-blur px-2.5 py-1 rounded-md">
                  {card.badge}
                </span>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs text-[#E8D1CB] font-medium block mb-0.5">
                  {card.subtitle}
                </span>
                <h3 className="text-lg font-serif font-semibold text-white flex items-center justify-between">
                  <span>{card.title}</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-[#D8A49B] group-hover:text-[#2D2426] transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#2D2426]" />
                  </div>
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
