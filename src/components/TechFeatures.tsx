import React from 'react';
import { Shield, Wind, Sparkles, Layers } from 'lucide-react';

export const TechFeatures: React.FC = () => {
  const technologies = [
    {
      name: 'AURA-LOCK™',
      headline: 'Sujeción Radial de Muñeca',
      description: 'Doble cinta cruzada de 8 cm que inmoviliza la articulación impidiendo giros o hiperextensiones al impactar en saco o manoplas.',
      icon: Shield,
    },
    {
      name: 'COOL-DRY™',
      headline: 'Ventilación Activa Transpirable',
      description: 'Malla microporosa en la palma que disipa el calor y expulsa la humedad, manteniendo la mano seca y libre de olores.',
      icon: Wind,
    },
    {
      name: 'ANATOMIC-CUP™',
      headline: 'Copas Flotantes para Pecho',
      description: 'Geometría cóncava termoformada para la protección mamaria femenina sin opresión torácica ni restricción respiratoria.',
      icon: Sparkles,
    },
    {
      name: 'QUAD-FOAM™',
      headline: '4 Capas de Espuma con Memoria',
      description: 'Estratificación de EVA y gel disipador que absorbe hasta un 96% de la energía cinética del golpe antes de llegar a los nudillos.',
      icon: Layers,
    },
  ];

  return (
    <section className="py-14 bg-[#261E20] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#D8A49B] font-bold">
            TECNOLOGÍA DE COMBATE AURA · INSPIRACIÓN EVERLAST
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white mt-2 font-semibold">
            Ingeniería de Alto Rendimiento para la Mujer
          </h2>
          <p className="text-xs sm:text-sm text-[#B5A4A7] mt-2">
            La innovación técnica tradicional de las grandes marcas del ring, recalculada para la fisionomía y proporciones femeninas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="p-6 rounded-2xl bg-[#32272A] border border-[#48373B] hover:border-[#D8A49B] transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#433236] text-[#D8A49B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-[#D8A49B] uppercase font-bold block mb-1">
                    {tech.name}
                  </span>
                  <h3 className="text-base font-serif font-semibold text-white mb-2">
                    {tech.headline}
                  </h3>
                  <p className="text-xs text-[#B5A4A7] leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#433236] text-[11px] text-[#D8A49B] font-semibold flex items-center gap-1">
                  <span>Tecnología Estándar en Toda la Línea</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
