import React from 'react';
import { Shield, Sparkles, HeartHandshake, CheckCircle } from 'lucide-react';

export const BrandPhilosophy: React.FC = () => {
  return (
    <section id="filosofia" className="py-16 md:py-24 bg-white border-t border-[#ECE2DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-wider text-[#A66D67] font-semibold">
            Nuestra Razón de Ser
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#2D2426]">
            ¿Por qué el Boxeo Femenino Necesita su Propia Biomecánica?
          </h2>
          <p className="mt-4 text-base text-[#6E5B5E] leading-relaxed">
            Durante décadas, la industria deportiva se limitó a "encoger y pintar de rosa" guantes masculinos unisex. En Aura rediseñamos cada pieza desde cero a partir de escaneos 3D de manos y torsos de boxeadoras reales.
          </p>
        </div>

        {/* 3 Editorial Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="p-8 rounded-2xl bg-[#FAF7F5] border border-[#EAE0DA] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE0DA] flex items-center justify-center text-[#A66D67] mb-5 shadow-2xs">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#2D2426] mb-2">
                01. Túnel de Muñeca Estrechado
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5B5E] leading-relaxed mb-4">
                El perímetro radial de la muñeca femenina es en promedio 2.5 cm menor. Un guante holgado permite micro-movimientos en el impacto que derivan en esguinces y sobrecargas en el ligamento del carpo.
              </p>
            </div>
            <div className="pt-4 border-t border-[#EFE5DF] flex items-center gap-2 text-xs text-[#2D2426] font-medium">
              <CheckCircle className="w-4 h-4 text-[#A66D67]" />
              <span>Doble cierre con compresión de 360°</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl bg-[#FAF7F5] border border-[#EAE0DA] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE0DA] flex items-center justify-center text-[#A66D67] mb-5 shadow-2xs">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#2D2426] mb-2">
                02. Protección Mamaria Anatómica
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5B5E] leading-relaxed mb-4">
                Los petos rígidos tradicionales aplastan el pecho e impiden la expansión pulmonar al lanzar combinaciones. Nuestras copas suspendidas disipan la onda de choque hacia la caja torácica externa.
              </p>
            </div>
            <div className="pt-4 border-t border-[#EFE5DF] flex items-center gap-2 text-xs text-[#2D2426] font-medium">
              <CheckCircle className="w-4 h-4 text-[#A66D67]" />
              <span>Aprobado para sparring y asaltos reglados</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl bg-[#FAF7F5] border border-[#EAE0DA] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE0DA] flex items-center justify-center text-[#A66D67] mb-5 shadow-2xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#2D2426] mb-2">
                03. Estética Soft & Resiliencia
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5B5E] leading-relaxed mb-4">
                Tonos rosa ceniza, nude y oro rosa en acabados mate hidrófugos. No se manchan ni se cuartean, conservando una presencia refinada y pulcra asalto tras asalto.
              </p>
            </div>
            <div className="pt-4 border-t border-[#EFE5DF] flex items-center gap-2 text-xs text-[#2D2426] font-medium">
              <CheckCircle className="w-4 h-4 text-[#A66D67]" />
              <span>Microfibra antibacteriana sin olor</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
