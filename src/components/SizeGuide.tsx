import React, { useState } from 'react';
import { Calculator, ShieldCheck, HelpCircle, ArrowRight, Check, Sparkles } from 'lucide-react';

interface SizeGuideProps {
  onSelectSizeFilter?: (size: string) => void;
}

export const SizeGuide: React.FC<SizeGuideProps> = ({ onSelectSizeFilter }) => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'gloves' | 'chest' | 'how-to'>('calculator');
  
  // Calculator states
  const [weight, setWeight] = useState<number>(58);
  const [handCircumference, setHandCircumference] = useState<number>(17.5);
  const [trainingGoal, setTrainingGoal] = useState<'fitness' | 'bag' | 'sparring' | 'competition'>('bag');

  // Compute recommendation
  const calculateRecommendation = () => {
    let oz = '12 oz';
    let rationale = '';
    let categoryTitle = 'Uso polivalente y protección equilibrada';

    if (trainingGoal === 'sparring') {
      if (weight >= 65 || handCircumference > 19) {
        oz = '16 oz';
        categoryTitle = 'Máxima amortiguación para ti y tu compañera';
        rationale = 'En sparring, el peso del guante protege las mandíbulas y pómulos de tu compañera al absorber la inercia del golpe. Con tu complexión, 16 oz ofrece la máxima densidad de acolchado sin sacrificar la ergonomía.';
      } else {
        oz = '14 oz';
        categoryTitle = 'Sparring técnico y control de impacto';
        rationale = 'Para tu peso corporal, 14 oz es el estándar óptimo de seguridad en asaltos de combate. Te permite una defensa cerrada firme y amortiguación frontal generosa.';
      }
    } else if (trainingGoal === 'competition') {
      oz = '10 oz';
      categoryTitle = 'Velocidad y reglamento de combate oficial';
      rationale = '10 oz es la medida reglamentaria estándar en las divisiones de peso femenino federadas. Máxima precisión, mínima resistencia aerodinámica y ajuste ceñido al puño cerrado.';
    } else if (trainingGoal === 'fitness') {
      if (weight < 52 && handCircumference < 17) {
        oz = '10 oz';
        categoryTitle = 'Ligereza y rapidez en fitboxing';
        rationale = 'Ideal para clases de cardio boxing donde se busca agilidad, ritmo rápido y golpeo continuo a saco o manoplas sin fatiga prematura de hombros.';
      } else {
        oz = '12 oz';
        categoryTitle = 'Protección articular y dinamismo';
        rationale = '12 oz te brinda protección superior en nudillos mientras mantienes un ritmo dinámico en circuitos y sacos ligeros.';
      }
    } else {
      // Bag & Mitts
      if (weight < 50 || handCircumference < 16.5) {
        oz = '10 oz';
        categoryTitle = 'Ajuste ceñido para manos menudas en saco';
        rationale = 'Con menos de 50 kg y mano compacta, 10 oz evita el balanceo interno de la mano y te ayuda a clavar el golpe con precisión.';
      } else if (weight > 68 || handCircumference > 19) {
        oz = '14 oz';
        categoryTitle = 'Amortiguación reforzada para pegada fuerte';
        rationale = 'Para absorber la resistencia de sacos pesados de más de 35 kg sin resentir las muñecas ni la cápsula articular.';
      } else {
        oz = '12 oz';
        categoryTitle = 'La medida estrella para entrenamiento diario';
        rationale = 'El balance perfecto entre protección metacarpiana, velocidad de contragolpe y comodidad en sesiones intensas de saco y manoplas.';
      }
    }

    return { oz, rationale, categoryTitle };
  };

  const recommendation = calculateRecommendation();

  return (
    <section id="guia-tallas" className="py-16 md:py-24 bg-[#F8F4F1] border-y border-[#ECE2DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-wider text-[#A66D67] font-semibold">
            Ergonomía & Ajuste Clínico
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#2D2426]">
            Guía de Tallas & Calculadora Femenina
          </h2>
          <p className="mt-4 text-base text-[#6E5B5E] leading-relaxed">
            Las manos femeninas poseen una estructura ósea más compacta y muñecas más esbeltas. 
            Nuestra guía te ayuda a encontrar la onza y protección exacta sin conjeturas.
          </p>
        </div>

        {/* Tab Controls (Clean Segmented Control) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-white/80 backdrop-blur border border-[#E8DDD8] rounded-xl shadow-xs gap-1 max-w-full overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'calculator'
                  ? 'bg-[#EBDAD6] text-[#2D2426] shadow-xs font-semibold'
                  : 'text-[#6E5B5E] hover:text-[#2D2426] hover:bg-[#FDFBF9]'
              }`}
            >
              <Calculator className="w-4 h-4 text-[#A66D67]" />
              Calculadora de Onzas
            </button>
            <button
              onClick={() => setActiveTab('gloves')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'gloves'
                  ? 'bg-[#EBDAD6] text-[#2D2426] shadow-xs font-semibold'
                  : 'text-[#6E5B5E] hover:text-[#2D2426] hover:bg-[#FDFBF9]'
              }`}
            >
              Tabla de Guantes
            </button>
            <button
              onClick={() => setActiveTab('chest')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'chest'
                  ? 'bg-[#EBDAD6] text-[#2D2426] shadow-xs font-semibold'
                  : 'text-[#6E5B5E] hover:text-[#2D2426] hover:bg-[#FDFBF9]'
              }`}
            >
              Petos & Protectores
            </button>
            <button
              onClick={() => setActiveTab('how-to')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'how-to'
                  ? 'bg-[#EBDAD6] text-[#2D2426] shadow-xs font-semibold'
                  : 'text-[#6E5B5E] hover:text-[#2D2426] hover:bg-[#FDFBF9]'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-[#A66D67]" />
              Cómo Medirse
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Calculator */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Input Controls Column */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE0DA] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F0E6E1] mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D2426]">Tus Parámetros de Boxeo</h3>
                    <p className="text-xs text-[#7F6B6F]">Ajusta tus datos para un cálculo biomecánico en tiempo real</p>
                  </div>
                  <span className="text-xs bg-[#FBF3F1] text-[#A66D67] font-medium px-2.5 py-1 rounded-md border border-[#F2DFDA]">
                    Recomendación en directo
                  </span>
                </div>

                {/* Weight slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-[#2D2426]">
                      Peso Corporal
                    </label>
                    <span className="text-base font-semibold text-[#965A54] tabular-nums">
                      {weight} kg
                    </span>
                  </div>
                  <input
                    type="range"
                    min="42"
                    max="90"
                    step="1"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full h-2 bg-[#F0E6E1] rounded-lg appearance-none cursor-pointer accent-[#B67B74]"
                  />
                  <div className="flex justify-between text-[11px] text-[#8C767A] mt-1 tabular-nums">
                    <span>42 kg (Pluma)</span>
                    <span>65 kg (Medio)</span>
                    <span>90 kg (Pesado)</span>
                  </div>
                </div>

                {/* Hand Circumference slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-[#2D2426]">
                      Contorno de Mano (sin vendaje)
                    </label>
                    <span className="text-base font-semibold text-[#965A54] tabular-nums">
                      {handCircumference} cm
                    </span>
                  </div>
                  <input
                    type="range"
                    min="14"
                    max="22"
                    step="0.5"
                    value={handCircumference}
                    onChange={(e) => setHandCircumference(Number(e.target.value))}
                    className="w-full h-2 bg-[#F0E6E1] rounded-lg appearance-none cursor-pointer accent-[#B67B74]"
                  />
                  <div className="flex justify-between text-[11px] text-[#8C767A] mt-1 tabular-nums">
                    <span>14 cm (Mano menuda)</span>
                    <span>17.5 cm (Promedio)</span>
                    <span>22 cm (Mano amplia)</span>
                  </div>
                </div>

                {/* Training Goal Selector */}
                <div>
                  <label className="block text-sm font-medium text-[#2D2426] mb-2.5">
                    ¿Cuál será tu entrenamiento principal?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    {[
                      { id: 'bag', title: 'Saco & Manoplas', desc: 'Golpeo potente regular' },
                      { id: 'sparring', title: 'Sparring & Combate', desc: 'Asaltos entre compañeras' },
                      { id: 'fitness', title: 'Cardio & Fitboxing', desc: 'Ritmo rápido y coreografía' },
                      { id: 'competition', title: 'Competición Amateur', desc: 'Combate reglado' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTrainingGoal(item.id as any)}
                        className={`text-left p-3 rounded-xl border transition-all ${
                          trainingGoal === item.id
                            ? 'border-[#B67B74] bg-[#FDF6F4] ring-1 ring-[#B67B74]'
                            : 'border-[#EAE0DA] bg-white hover:border-[#D5C1BA] hover:bg-[#FAF7F5]'
                        }`}
                      >
                        <div className="text-xs sm:text-sm font-semibold text-[#2D2426]">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-[#7E6A6E] mt-0.5 line-clamp-1">
                          {item.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pro Tip note */}
              <div className="mt-6 pt-4 border-t border-[#F0E6E1] flex items-center gap-3 text-xs text-[#6E5B5E]">
                <ShieldCheck className="w-4 h-4 text-[#A66D67] shrink-0" />
                <span>
                  Todos los guantes Aura incluyen hueco para vendas de 4 m sin perder compresión en la muñeca.
                </span>
              </div>
            </div>

            {/* Interactive Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#FAF2EF] to-[#F5E6E1] rounded-2xl p-6 sm:p-8 border border-[#E4D1CA] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#A66D67] font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Tu Resultado Personalizado
                </div>
                
                <div className="flex items-baseline gap-3 my-3">
                  <span className="text-5xl sm:text-6xl font-bold font-serif text-[#2D2426] tracking-tight">
                    {recommendation.oz}
                  </span>
                  <span className="text-xs text-[#7A6468] uppercase font-medium">
                    (Onzas recomendadas)
                  </span>
                </div>

                <div className="p-3 bg-white/70 backdrop-blur rounded-xl border border-[#E9DAD3] mb-4">
                  <h4 className="text-sm font-semibold text-[#2D2426]">
                    {recommendation.categoryTitle}
                  </h4>
                  <p className="mt-1 text-xs text-[#6E5B5E] leading-relaxed">
                    {recommendation.rationale}
                  </p>
                </div>

                {/* Compatibility Badges */}
                <div className="space-y-2 text-xs text-[#5C4B4E]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A66D67]" />
                    <span>Ajuste estrecho verificado para {handCircumference} cm de contorno</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A66D67]" />
                    <span>Amortiguación certificada para {weight} kg de impacto</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A66D67]" />
                    <span>Cambio de talla 100% gratuito en tu primer pedido</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[#E8D7D0]">
                {onSelectSizeFilter ? (
                  <button
                    onClick={() => {
                      onSelectSizeFilter(recommendation.oz);
                      const el = document.getElementById('tienda');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#2D2426] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#433638] transition-colors shadow-xs"
                  >
                    <span>Ver guantes en {recommendation.oz}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href="#tienda"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#2D2426] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#433638] transition-colors shadow-xs"
                  >
                    <span>Explorar catálogo con {recommendation.oz}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Gloves Table */}
        {activeTab === 'gloves' && (
          <div className="bg-white rounded-2xl border border-[#EAE0DA] shadow-xs overflow-hidden">
            <div className="p-6 border-b border-[#F0E6E1]">
              <h3 className="text-lg font-semibold text-[#2D2426]">
                Tabla Comparativa de Onzas para Manos Femeninas
              </h3>
              <p className="text-xs text-[#7F6B6F] mt-1">
                A diferencia de los guantes unisex genéricos, cada una de nuestras onzas mantiene el compartimento de mano ceñido.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#FAF5F2] text-[#634E52] uppercase text-[11px] font-semibold border-b border-[#EAE0DA]">
                  <tr>
                    <th className="py-3 px-4 sm:px-6">Onzas (oz)</th>
                    <th className="py-3 px-4 sm:px-6">Peso Boxeadora</th>
                    <th className="py-3 px-4 sm:px-6">Perímetro Mano</th>
                    <th className="py-3 px-4 sm:px-6">Uso Recomendado</th>
                    <th className="py-3 px-4 sm:px-6">Nivel de Amortiguación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F2E8E4] text-[#423537]">
                  <tr className="hover:bg-[#FCF9F7] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#2D2426] tabular-nums">10 oz</td>
                    <td className="py-3.5 px-4 sm:px-6 tabular-nums">42 kg – 52 kg</td>
                    <td className="py-3.5 px-4 sm:px-6 tabular-nums">14.0 – 16.5 cm</td>
                    <td className="py-3.5 px-4 sm:px-6">Fitboxing, velocidad y competición</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[#A66D67] font-medium">Ligera / Ágil</td>
                  </tr>
                  <tr className="bg-[#FAF3F0] font-medium">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#965A54] tabular-nums">12 oz ★ Más habitual</td>
                    <td className="py-3.5 px-4 sm:px-6 tabular-nums">50 kg – 65 kg</td>
                    <td className="py-3.5 px-4 sm:px-6 tabular-nums">16.0 – 18.5 cm</td>
                    <td className="py-3.5 px-4 sm:px-6">Saco pesado, manoplas y técnica</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[#965A54] font-semibold">Media-Alta (Polivalente)</td>
                  </tr>
                  <tr className="hover:bg-[#FCF9F7] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#2D2426] tabular-nums">14 oz</td>
                    <td className="py-3.5 px-4 sm:px-6 tabular-nums">58 kg – 75 kg</td>
                    <td className="py-3.5 px-4 sm:px-6 tabular-nums">17.5 – 20.0 cm</td>
                    <td className="py-3.5 px-4 sm:px-6">Sparring controlado y protección articular</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[#A66D67] font-medium">Alta protección</td>
                  </tr>
                  <tr className="hover:bg-[#FCF9F7] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#2D2426] tabular-nums">16 oz</td>
                    <td className="py-3.5 px-4 sm:px-6 tabular-nums">&gt; 70 kg</td>
                    <td className="py-3.5 px-4 sm:px-6 tabular-nums">&gt; 19.5 cm</td>
                    <td className="py-3.5 px-4 sm:px-6">Sparring libre de alta intensidad</td>
                    <td className="py-3.5 px-4 sm:px-6 text-[#A66D67] font-medium">Máxima amortiguación</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Chest & Guards Table */}
        {activeTab === 'chest' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-2xl border border-[#EAE0DA] p-6 shadow-xs">
              <h3 className="text-base sm:text-lg font-semibold text-[#2D2426] mb-3">
                Petos Anatómicos Femeninos
              </h3>
              <p className="text-xs text-[#6E5B5E] mb-4 leading-relaxed">
                El tejido mamario carece de musculatura interna protectora y está sostenido por los ligamentos de Cooper. 
                Nuestros protectores usan copas cóncavas independientes que desvían el golpe sin aplastar el pecho.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF5F2] text-[#634E52] uppercase text-[10px] font-semibold border-b border-[#EAE0DA]">
                    <tr>
                      <th className="py-2.5 px-3">Talla</th>
                      <th className="py-2.5 px-3">Contorno Bajo Pecho</th>
                      <th className="py-2.5 px-3">Copa Sujetador</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2E8E4]">
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-[#2D2426]">S</td>
                      <td className="py-2.5 px-3 tabular-nums">68 – 76 cm</td>
                      <td className="py-2.5 px-3">Copa A / B</td>
                    </tr>
                    <tr className="bg-[#FAF3F0]">
                      <td className="py-2.5 px-3 font-semibold text-[#965A54]">M</td>
                      <td className="py-2.5 px-3 tabular-nums">76 – 85 cm</td>
                      <td className="py-2.5 px-3 font-medium">Copa B / C</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-[#2D2426]">L</td>
                      <td className="py-2.5 px-3 tabular-nums">85 – 96 cm</td>
                      <td className="py-2.5 px-3">Copa C / D / E</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#EAE0DA] p-6 shadow-xs">
              <h3 className="text-base sm:text-lg font-semibold text-[#2D2426] mb-3">
                Cascos con Apertura para Coleta
              </h3>
              <p className="text-xs text-[#6E5B5E] mb-4 leading-relaxed">
                Diseñados para impedir que el casco rote o baile cuando llevas el cabello recogido en moño o trenza.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF5F2] text-[#634E52] uppercase text-[10px] font-semibold border-b border-[#EAE0DA]">
                    <tr>
                      <th className="py-2.5 px-3">Talla Casco</th>
                      <th className="py-2.5 px-3">Perímetro Craneal</th>
                      <th className="py-2.5 px-3">Tipo de Ajuste</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2E8E4]">
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-[#2D2426]">S / M</td>
                      <td className="py-2.5 px-3 tabular-nums">52 – 55 cm</td>
                      <td className="py-2.5 px-3">Canal de coleta alto + velcro occipital</td>
                    </tr>
                    <tr className="bg-[#FAF3F0]">
                      <td className="py-2.5 px-3 font-semibold text-[#965A54]">M / L</td>
                      <td className="py-2.5 px-3 tabular-nums">55 – 59 cm</td>
                      <td className="py-2.5 px-3 font-medium">Canal ampliado + acolchado pómulos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: How To Measure */}
        {activeTab === 'how-to' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#EAE0DA] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF2EF] text-[#A66D67] font-semibold flex items-center justify-center text-sm mb-4 border border-[#F2DFDA]">
                1
              </div>
              <h4 className="text-base font-semibold text-[#2D2426] mb-2">
                Contorno de la Mano
              </h4>
              <p className="text-xs text-[#6E5B5E] leading-relaxed">
                Pasa una cinta métrica flexible alrededor de la palma, justo por debajo de los nudillos, con la mano abierta y los dedos relajados (sin incluir el pulgar).
              </p>
              <div className="mt-4 p-3 bg-[#FAF5F2] rounded-lg text-[11px] text-[#7A6468]">
                💡 Tip: Si estás entre dos medidas, elige la superior si pretendes usar vendas de 4.5 m gruesas.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#EAE0DA] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF2EF] text-[#A66D67] font-semibold flex items-center justify-center text-sm mb-4 border border-[#F2DFDA]">
                2
              </div>
              <h4 className="text-base font-semibold text-[#2D2426] mb-2">
                Contorno de Muñeca
              </h4>
              <p className="text-xs text-[#6E5B5E] leading-relaxed">
                Mide alrededor del hueso de la muñeca. Las muñecas femeninas promedian 14 a 16.5 cm, requiriendo puños de guante con correa de compresión reforzada.
              </p>
              <div className="mt-4 p-3 bg-[#FAF5F2] rounded-lg text-[11px] text-[#7A6468]">
                💡 Tip: Los guantes Aura tienen un doble cierre radial para garantizar bloqueo total sin importar la delgadez.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#EAE0DA] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF2EF] text-[#A66D67] font-semibold flex items-center justify-center text-sm mb-4 border border-[#F2DFDA]">
                3
              </div>
              <h4 className="text-base font-semibold text-[#2D2426] mb-2">
                Bajo Busto (Para Peto)
              </h4>
              <p className="text-xs text-[#6E5B5E] leading-relaxed">
                Mide horizontalmente la caja torácica justo en la línea donde descansa la banda de tu sujetador deportivo favorito.
              </p>
              <div className="mt-4 p-3 bg-[#FAF5F2] rounded-lg text-[11px] text-[#7A6468]">
                💡 Tip: Si tienes dudas entre dos tallas de copa, las copas Aura tienen borde con foam amoldable.
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
