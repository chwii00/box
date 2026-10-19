import React from 'react';
import { ArrowRight, Calculator, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F5] to-[#F5ECE8] border-b border-[#ECE2DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-14 lg:pb-20">
        
        {/* Split Hero: Content Left + High-Fidelity Editorial Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Brand Statement & Primary Action */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Soft Editorial Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-wider text-[#A66D67] font-bold">
                GREATNESS IS WITHIN HER · EVERLAST INSPIRED
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B67B74]" />
              <span className="text-xs text-[#8C767A]">Edición Boxeo Femenino 2026</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-serif font-medium text-[#2D2426] leading-[1.12] tracking-tight [text-wrap:balance]">
              El poder es tuyo. Fuerza y precisión esculpidas para la mujer.
            </h1>

            {/* Prose description */}
            <p className="mt-5 text-base sm:text-lg text-[#6E5B5E] leading-relaxed [text-wrap:balance]">
              Equipamiento técnico inspirado en los más de 100 años del boxeo profesional, reinventado con horma estrecha anti-torceduras, petos anatómicos y una paleta soft de tonos blush, arena y oro rosa.
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#tienda"
                className="px-6 py-3.5 bg-[#2D2426] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#433638] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Explorar Colección</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenCalculator}
                className="px-6 py-3.5 bg-white/80 hover:bg-white text-[#2D2426] text-xs sm:text-sm font-semibold rounded-xl border border-[#E0D3CC] transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#A66D67]" />
                <span>Calcular mi Talla de Guante</span>
              </button>
            </div>

            {/* Proof snippet */}
            <div className="mt-8 pt-6 border-t border-[#ECE0D9] flex items-center gap-6">
              <div>
                <span className="block text-2xl font-serif font-bold text-[#2D2426] tabular-nums">
                  4.95 / 5
                </span>
                <span className="text-xs text-[#8C767A]">+850 boxeadoras avalan el ajuste</span>
              </div>
              <div className="h-8 w-px bg-[#E2D5CF]" />
              <div>
                <span className="block text-2xl font-serif font-bold text-[#2D2426] tabular-nums">
                  0 %
                </span>
                <span className="text-xs text-[#8C767A]">Holgura en muñecas estrechas</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-full min-h-[440px] rounded-3xl overflow-hidden border border-[#E6D8D2] shadow-xl group">
              <img
                src="images/hero_female_boxing_1792363551237.jpg"
                alt="Boxeadora con vendas suaves en tono soft blush preparándose para el asalto"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A66D67] block">
                    Diseño Anatómico Certificado
                  </span>
                  <span className="text-sm font-serif font-semibold text-[#2D2426]">
                    Aura Pro Series · Narrow Wrist Fit
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#965A54] bg-[#FAF2EF] px-2.5 py-1 rounded-md border border-[#F2DFDA]">
                  Ver especificaciones
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 3-Column Trust Strip Below Split Hero */}
        <div className="mt-14 pt-8 border-t border-[#ECE0D9] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE0DA] flex items-center justify-center shrink-0 text-[#A66D67] shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#2D2426]">Horma Estrecha Anti-Torceduras</h4>
              <p className="text-xs text-[#7F6B6F] mt-0.5 leading-relaxed">
                El interior del guante ajusta milimétricamente el metacarpo impidiendo rotaciones indeseadas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE0DA] flex items-center justify-center shrink-0 text-[#A66D67] shadow-2xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#2D2426]">Protección Mamaria Homologada</h4>
              <p className="text-xs text-[#7F6B6F] mt-0.5 leading-relaxed">
                Copas preformadas que desvían la energía sin comprimir la respiración diafragmática.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE0DA] flex items-center justify-center shrink-0 text-[#A66D67] shadow-2xs">
              <span className="text-sm font-serif font-bold text-[#A66D67]">24h</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#2D2426]">Cambio de Talla 100% Gratuito</h4>
              <p className="text-xs text-[#7F6B6F] mt-0.5 leading-relaxed">
                Si no te queda como una segunda piel, gestionamos el cambio a tu puerta sin coste alguno.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
