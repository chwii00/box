import { Review } from '../types';

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Lucía Fernández S.',
    role: 'Boxeadora amateur (2 años entrenando)',
    rating: 5,
    date: 'Hace 3 días',
    title: 'Por fin unos guantes donde no me baila la mano',
    comment: 'Siempre había usado guantes unisex de 12oz de marcas conocidas y tenía que ponerme dos vendajes gruesos porque el compartimento de la mano era gigante para mí. Con los Aura Pro en rosa ceniza la diferencia es abismal: la muñeca queda completamente bloqueada y fija, no he vuelto a sentir dolores en las articulaciones al golpear fuerte en saco.',
    productName: 'Guantes Aura Pro · Rosa Ceniza & Oro Rosa',
    verified: true,
    handFit: 'Ajuste Perfecto',
    wristSupport: 5,
    helpfulCount: 42
  },
  {
    id: 'rev-2',
    author: 'Dra. Marta Gómez R.',
    role: 'Practicante de Fitboxing & Médica Deportiva',
    rating: 5,
    date: 'Hace 1 semana',
    title: 'El peto anatómico protege sin asfixiar la respiración',
    comment: 'Como médico y practicante de boxeo me preocupaba el impacto repetitivo en el tejido mamario durante el sparring. Los petos convencionales son planos como tablas de madera y te cortan la respiración al girar el torso. Este peto abraza la copa natural y desvía la inercia del golpe a los laterales. Un 10 rotundo en ergonomía médica.',
    productName: 'Peto Protector Anatómico Femme Elite',
    verified: true,
    handFit: 'Ajuste Perfecto',
    wristSupport: 5,
    helpfulCount: 38
  },
  {
    id: 'rev-3',
    author: 'Clara Domínguez P.',
    role: 'Competidora en peso pluma (-57kg)',
    rating: 5,
    date: 'Hace 2 semanas',
    title: 'La guía de tallas fue súper exacta. 14oz para sparring es perfecta',
    comment: 'Usé la calculadora de tallas de la web poniendo mis 55 kg y 17 cm de mano. Me recomendó 14oz para sparring y tenía dudas de si serían muy pesados, pero como el peso está equilibrado hacia el puño y la empuñadura es ceñida, se sienten veloces y amortiguan muchísimo el golpe sin castigar a mi compañera.',
    productName: 'Guantes de Sparring Aura · Vainilla Crema',
    verified: true,
    handFit: 'Ajuste Perfecto',
    wristSupport: 5,
    helpfulCount: 29
  },
  {
    id: 'rev-4',
    author: 'Andrea Beltrán',
    role: 'Instructora de Boxing Fitness',
    rating: 5,
    date: 'Hace 3 semanas',
    title: 'El kit de vendas y comba es pura elegancia y suavidad',
    comment: 'El color rosa empolvado es precioso en persona, no es estridente, es muy suave y fino. El tacto del algodón de las vendas no raspa las cutículas ni los nudillos. Las alumnas del gimnasio me preguntan constantemente de dónde son. Y la comba tiene una velocidad increíble.',
    productName: 'Pack Entrenamiento Aura: Vendas Soft + Comba Piel + Gel',
    verified: true,
    handFit: 'Ajuste Perfecto',
    wristSupport: 5,
    helpfulCount: 19
  },
  {
    id: 'rev-5',
    author: 'Paula S. Miranda',
    role: 'Iniciación al Boxeo',
    rating: 4,
    date: 'Hace 1 mes',
    title: 'Calidad superior, la sujeción de muñeca es de 10',
    comment: 'Llegaron en 24 horas con una presentación impecable. Al principio se sienten un pelín rígidos en los primeros 10 minutos de calentamiento, pero una vez cogen calor con las vendas se amoldan como un guante a medida. El acabado mate es súper fácil de limpiar.',
    productName: 'Guantes Aura Pro · Rosa Ceniza & Oro Rosa',
    verified: true,
    handFit: 'Ajuste Firme',
    wristSupport: 5,
    helpfulCount: 14
  },
  {
    id: 'rev-6',
    author: 'Noelia V.',
    role: 'Entrenamiento de Sparring semanal',
    rating: 5,
    date: 'Hace 1 mes',
    title: 'El casco con apertura para coleta es el invento del siglo',
    comment: 'Cualquier mujer que boxee sabe lo que es tener que reajustarse el casco cada dos minutos porque la coleta se resbala hacia abajo. Con esta apertura trasera el casco queda encajado milimétricamente y la visión periférica es impecable.',
    productName: 'Casco de Protección Femenino con Canal para Coleta',
    verified: true,
    handFit: 'Ajuste Perfecto',
    wristSupport: 4,
    helpfulCount: 25
  }
];
