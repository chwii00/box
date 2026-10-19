import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'gloves-aurora-rose-gold',
    name: 'Guantes Aura Pro · Rosa Ceniza & Oro Rosa',
    category: 'guantes',
    price: 89.0,
    originalPrice: 105.0,
    rating: 4.95,
    reviewCount: 312,
    tag: 'MÁS VENDIDO',
    image: '/src/assets/images/gloves_rose_gold_1792363553163.jpg',
    colorName: 'Rosa Ceniza Mate & Oro Rosa',
    colorHex: '#D8A49B',
    sizes: ['10 oz', '12 oz', '14 oz', '16 oz'],
    description: 'Inspirados en la ingeniería de combate más avanzada, adaptados a la fisionomía de la mano femenina. Con túnel de muñeca estrechado un 18% para anular deslizamientos, espuma de cuatro densidades con memoria de impacto y cuero sintético de microfibra premium con tacto aterciopelado.',
    features: [
      'Horma anatómica estrecha: se adapta sin holguras a manos femeninas',
      'Cierre de muñeca Aura-Lock™ con doble tira envolvente anti-torceduras',
      'Forro interior Cool-Dry™ transpirable de secado ultra-rápido',
      'Pulgar precurvado ergonómico que evita hiperextensiones al golpear'
    ],
    recommendedFor: 'Saco pesado, manoplas y sparring técnico',
    specs: {
      material: 'Microfibra japonesa de polipiel mate hidrófuga',
      cierre: 'Velcro ancho reforzado de 8 cm con sujeción radial',
      densidad: 'Cuádruple capa de espuma EVA + gel disipador',
      horma: 'Anatómica femenina estrecha (Narrow Fit)'
    },
    inStock: true
  },
  {
    id: 'heavy-bag-boutique-rose',
    name: 'Saco de Boxeo Pesado Boutique Leather 35 kg',
    category: 'sacos',
    price: 189.0,
    originalPrice: 219.0,
    rating: 4.98,
    reviewCount: 86,
    tag: 'EDICIÓN STUDIO',
    image: '/src/assets/images/heavy_bag_boutique_1792364064998.jpg',
    colorName: 'Rosa Blush & Cuero Caramelo',
    colorHex: '#CFA499',
    sizes: ['35 kg (110 cm)', '45 kg (135 cm)'],
    description: 'El icono del boxeo de estudio elegante. Confeccionado en piel sintética texturizada de máxima resistencia a la abrasión con cinchas de nylon de grado militar y cadenas de acero pulido giratorias de 360° para un balanceo silencioso y uniforme.',
    features: [
      'Relleno textil reciclado con núcleo homogeneizador de choque',
      'Sistema de suspensión de 4 puntos silencioso con mosquetón reforzado',
      'Costuras de triple remache en cruz que soportan más de 50.000 impactos',
      'Acabado soft luxury mate que decora el estudio o gimnasio en casa'
    ],
    recommendedFor: 'Entrenamiento de pegada, cardio boxing y acondicionamiento',
    specs: {
      material: 'Cuero sintético multicapa de alta resiliencia 1.4 mm',
      cierre: 'Cremallera superior de seguridad oculta con solapa',
      densidad: 'Núcleo de absorción densa con amortiguación progresiva',
      horma: 'Cilíndrico estándar profesional (110 cm / 135 cm)'
    },
    inStock: true
  },
  {
    id: 'training-mitts-focus-pads',
    name: 'Manoplas Curvas de Golpeo Aura Speed Pro',
    category: 'sacos',
    price: 59.0,
    originalPrice: 69.0,
    rating: 4.93,
    reviewCount: 114,
    tag: 'NUEVO',
    image: '/src/assets/images/female_boxer_training_1792364064297.jpg',
    colorName: 'Rosa Ceniza & Grafito Mate',
    colorHex: '#C59EA5',
    sizes: ['Talla Única (Ajuste Ergonómico)'],
    description: 'Ideadas para entrenadoras y compañeras de entrenamiento. Su forma cóncava recoge con precisión la trayectoria de jabs, ganchos y combinaciones rápidas sin sobrecargar las articulaciones del codo ni los hombros de la persona que las sostiene.',
    features: [
      'Diana cóncava de absorción con punto dulce central acolchado',
      'Guantelete interior anatómico con bola de agarre para la palma',
      'Protector de dedos y muñequera de bloqueo con velcro rápido',
      'Ultraligeras para permitir combinaciones rápidas y esquivas'
    ],
    recommendedFor: 'Trabajo de precisión, rapidez de contragolpe y combinaciones',
    specs: {
      material: 'Piel sintética premium con canal de ventilación',
      cierre: 'Correa de muñeca acolchada ajustable',
      densidad: 'Espuma estratificada de alta densidad de 5 cm',
      horma: 'Horma de mano con soporte esférico palmar'
    },
    inStock: true
  },
  {
    id: 'chest-guard-aurora-elite',
    name: 'Peto Protector Anatómico Femme Elite',
    category: 'cascos-petos',
    price: 74.0,
    originalPrice: 85.0,
    rating: 4.92,
    reviewCount: 148,
    tag: 'CERTIFICADO CE',
    image: '/src/assets/images/chest_guard_women_1792363553831.jpg',
    colorName: 'Malva Suave & Carbón Neutro',
    colorHex: '#B28795',
    sizes: ['S (Copa A-B)', 'M (Copa B-C)', 'L (Copa C-D)'],
    description: 'El primer protector pectoral de boxeo que respeta la curvatura mamaria natural sin crear presión opresiva en la caja torácica. Diseñado con copas rígidas termomoldeadas de polímero ultraligero que disipan la energía hacia el perímetro costal.',
    features: [
      'Copas anatómicas preformadas independientes de alto impacto',
      'Estructura de malla transpirable antirozaduras tipo segunda piel',
      'Tirantes elásticos regulables en X para libertad total de hombros al tirar ganchos',
      'Homologación CE para competiciones de boxeo aficionado y artes marciales'
    ],
    recommendedFor: 'Sparring libre, combate reglado y asaltos de contacto',
    specs: {
      material: 'Polímero termoformado antichoque + Malla de compresión',
      cierre: 'Hebillas elásticas de liberación rápida en espalda',
      densidad: 'Placas disipadoras de 4 mm con recubrimiento acolchado',
      horma: 'Específica contorno busto femenino'
    },
    inStock: true
  },
  {
    id: 'gloves-aurora-pearl-vanilla',
    name: 'Guantes de Sparring Aura · Vainilla Crema',
    category: 'guantes',
    price: 94.0,
    rating: 4.97,
    reviewCount: 167,
    tag: 'SPARRING PRO',
    image: '/src/assets/images/gloves_rose_gold_1792363553163.jpg',
    colorName: 'Blanco Crema & Detalles Champán',
    colorHex: '#ECE3D4',
    sizes: ['12 oz', '14 oz', '16 oz'],
    description: 'Concebidos para sesiones intensas de sparring donde la protección de tu compañera y de tus propias muñecas es primordial. Acolchado extra mullido en la zona del impacto frontal con distribución homogénea del peso.',
    features: [
      'Almohadillado frontal sobredimensionado pero con ajuste ceñido en el puño',
      'Rejilla de ventilación en palma para evitar acumulación térmica',
      'Tratamiento antimicrobiano que previene olores en uso frecuente',
      'Costuras reforzadas con hilo de alta tenacidad en puntos de tensión'
    ],
    recommendedFor: 'Sparring seguro entre compañeras y asaltos largos',
    specs: {
      material: 'Piel vegana Premium Luxe con acabado satinado',
      cierre: 'Muñequera rígida con tira de estabilización anatómica',
      densidad: '5 capas progresivas anti-trauma',
      horma: 'Horma femenina ergonómica'
    },
    inStock: true
  },
  {
    id: 'wraps-accessories-kit',
    name: 'Pack Entrenamiento Aura: Vendas Soft + Comba Piel + Gel',
    category: 'accesorios',
    price: 38.0,
    originalPrice: 46.0,
    rating: 4.89,
    reviewCount: 204,
    tag: 'PACK COMPLETO',
    image: '/src/assets/images/boxing_accessories_kit_1792363554130.jpg',
    colorName: 'Rosa Empolvado & Bronce',
    colorHex: '#E5BFB8',
    sizes: ['Talla Única (Vendas 4.5m)'],
    description: 'El kit de inicio y mantenimiento esencial para la boxeadora moderna. Contiene 2 pares de vendas semi-elásticas de algodón peinado suave de 4.5 m (para evitar ampollas), sub-guantes de gel rápido y comba de cuero con rodamientos ultra-rápidos.',
    features: [
      'Vendas elásticas extra suaves que no irritan nudillos sensibles',
      'Sub-guantes de gel de colocación en 5 segundos con soporte metatarsal',
      'Comba de cuero genuino con mangos de aluminio pulido tono oro rosa',
      'Neceser de tela transpirable lavable incluido'
    ],
    recommendedFor: 'Rutinas de calentamiento, entrenamiento diario y cardio boxing',
    specs: {
      material: 'Algodón peinado orgánico, gel de silicona médica y cuero natural',
      cierre: 'Velcro hipoalergénico de bajo perfil',
      densidad: 'Almohadilla de gel de 6 mm en nudillos',
      horma: 'Adaptable a manos delgadas'
    },
    inStock: true
  },
  {
    id: 'headgear-aurora-shield',
    name: 'Casco de Protección Femenino con Canal para Coleta',
    category: 'cascos-petos',
    price: 82.0,
    originalPrice: 95.0,
    rating: 4.91,
    reviewCount: 95,
    tag: 'DISEÑO PATENTADO',
    image: '/src/assets/images/chest_guard_women_1792363553831.jpg',
    colorName: 'Rosa Palo & Ciruela',
    colorHex: '#C59EA5',
    sizes: ['S (52-55 cm)', 'M (55-58 cm)'],
    description: 'Se acabó tener que llevar la coleta aplastada o incómoda bajo cascos masculinos voluminosos. Incorpora una apertura trasera anatómica para recoger el cabello sin perder protección occipital ni estabilidad.',
    features: [
      'Apertura occipital Hair-Flow para coleta alta o moño deportivo',
      'Protección pómulos y mentón con campo de visión periférica al 100%',
      'Forro suave de micro-ante que no resbala con el sudor',
      'Estructura 22% más ligera que los cascos unisex estándar'
    ],
    recommendedFor: 'Sparring de contacto y preparación para combates',
    specs: {
      material: 'Espuma multicapa de alta densidad + Cuero sintético suave',
      cierre: 'Barboquejo acolchado y doble velcro occipital',
      densidad: 'Protección facial de 30 mm absorbe-impactos',
      horma: 'Perímetro craneal femenino estilizado'
    },
    inStock: true
  },
  {
    id: 'gel-knuckle-guards-rose',
    name: 'Protectores Rápidos de Nudillos con Gel Aura Shield',
    category: 'proteccion',
    price: 24.0,
    rating: 4.88,
    reviewCount: 188,
    tag: 'FITBOXING ESSENTIAL',
    image: '/src/assets/images/boxing_accessories_kit_1792363554130.jpg',
    colorName: 'Rosa Nude & Blanco',
    colorHex: '#E8D5CE',
    sizes: ['S/M (Mano fina)', 'M/L (Mano estándar)'],
    description: 'Diseñados para sustituir o complementar el vendaje tradicional cuando tienes poco tiempo o sufres de rozaduras en la piel de los nudillos. Deslízalos bajo el guante y consigue protección profesional en 10 segundos.',
    features: [
      'Capa de polímero de silicona viscoelástica de 8 mm sobre los nudillos',
      'Tejido elástico de compresión que mantiene los huesos metacarpianos alineados',
      'Venda de muñeca integrada de 1.5 metros para fijación articular',
      'Lavables en lavadora con bolsa protectora'
    ],
    recommendedFor: 'Clases de fitboxing, entrenamientos rápidos y protección extra',
    specs: {
      material: 'Neopreno transpirable con elastano y gel activo',
      cierre: 'Tira de compresión elástica con velcro suave',
      densidad: '8 mm gel viscoelástico amortiguador',
      horma: 'Horma ajustada específica para mujer'
    },
    inStock: true
  }
];
