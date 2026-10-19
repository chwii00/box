import React, { useState } from 'react';
import { Star, ThumbsUp, CheckCircle, Plus, X } from 'lucide-react';
import { Review } from '../types';
import { PRODUCTS } from '../data/products';

interface ReviewsSectionProps {
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id' | 'date' | 'helpfulCount' | 'userVotedHelpful'>) => void;
  onVoteHelpful: (reviewId: string) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  onAddReview,
  onVoteHelpful,
}) => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New review form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newProduct, setNewProduct] = useState(PRODUCTS[0].name);
  const [newRating, setNewRating] = useState(5);
  const [newHandFit, setNewHandFit] = useState<'Ajuste Perfecto' | 'Ligeramente Holgado' | 'Ajuste Firme'>('Ajuste Perfecto');
  const [newWristSupport, setNewWristSupport] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [formSubmittedToast, setFormSubmittedToast] = useState(false);

  const filteredReviews = reviews.filter((r) => {
    if (filterRating === 'all') return true;
    return r.rating === filterRating;
  });

  const averageRating = (
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
  ).toFixed(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim() || !newTitle.trim()) return;

    onAddReview({
      author: newAuthor.trim(),
      role: newRole.trim() || 'Boxeadora aficionada',
      rating: newRating,
      title: newTitle.trim(),
      comment: newComment.trim(),
      productName: newProduct,
      verified: true,
      handFit: newHandFit,
      wristSupport: newWristSupport,
    });

    // Reset and close
    setNewAuthor('');
    setNewRole('');
    setNewTitle('');
    setNewComment('');
    setIsModalOpen(false);
    setFormSubmittedToast(true);
    setTimeout(() => setFormSubmittedToast(false), 4000);
  };

  return (
    <section id="resenas" className="py-16 md:py-24 bg-[#FAF7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-wider text-[#A66D67] font-semibold">
            Opiniones de la Comunidad
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-[#2D2426]">
            Reseñas Reales de Boxeadoras
          </h2>
          <p className="mt-4 text-base text-[#6E5B5E] leading-relaxed">
            Descubre las experiencias de practicantes de fitboxing, competidoras federadas y entrenadoras que ya no aceptan el compromiso de usar equipo unisex sobredimensionado.
          </p>
        </div>

        {/* Global Rating Scorecard & Summary Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE0DA] shadow-xs">
          
          {/* Main Score Column */}
          <div className="lg:col-span-4 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#F0E6E1] pb-6 lg:pb-0 lg:pr-8">
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-bold font-serif text-[#2D2426] tracking-tight tabular-nums">
                {averageRating}
              </span>
              <span className="text-xs text-[#8A7478]">de 5.0 estrellas</span>
            </div>
            
            <div className="flex items-center gap-1 my-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-[#B67B74] text-[#B67B74]"
                />
              ))}
            </div>

            <p className="text-xs text-[#7F6B6F] mt-1">
              Basado en <span className="font-semibold text-[#2D2426] tabular-nums">{reviews.length + 840}</span> valoraciones verificadas de clientas
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#2D2426] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#433638] transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Escribir una Reseña</span>
            </button>
          </div>

          {/* Breakdown Aspects */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-[#A66D67] font-semibold">
              Desglose Biomecánico & Percepción Femenina
            </h4>

            {/* Metric 1 */}
            <div>
              <div className="flex justify-between text-xs text-[#2D2426] font-medium mb-1">
                <span>Ajuste a la fisionomía de la mano</span>
                <span className="tabular-nums font-semibold text-[#965A54]">4.9 / 5.0 (98% ajuste perfecto)</span>
              </div>
              <div className="w-full h-2 bg-[#F3EBE7] rounded-full overflow-hidden">
                <div className="h-full bg-[#B67B74] rounded-full" style={{ width: '98%' }} />
              </div>
            </div>

            {/* Metric 2 */}
            <div>
              <div className="flex justify-between text-xs text-[#2D2426] font-medium mb-1">
                <span>Soporte e inmovilización de muñeca</span>
                <span className="tabular-nums font-semibold text-[#965A54]">5.0 / 5.0 (Cero torceduras)</span>
              </div>
              <div className="w-full h-2 bg-[#F3EBE7] rounded-full overflow-hidden">
                <div className="h-full bg-[#B67B74] rounded-full" style={{ width: '100%' }} />
              </div>
            </div>

            {/* Metric 3 */}
            <div>
              <div className="flex justify-between text-xs text-[#2D2426] font-medium mb-1">
                <span>Tacto suave, confort y transpirabilidad</span>
                <span className="tabular-nums font-semibold text-[#965A54]">4.8 / 5.0</span>
              </div>
              <div className="w-full h-2 bg-[#F3EBE7] rounded-full overflow-hidden">
                <div className="h-full bg-[#B67B74] rounded-full" style={{ width: '96%' }} />
              </div>
            </div>
          </div>

        </div>

        {/* Success Toast */}
        {formSubmittedToast && (
          <div className="mb-6 p-4 bg-[#F2F8F4] border border-[#CDE5D5] text-[#245B38] rounded-xl text-xs sm:text-sm flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#2E7D4B]" />
              <span>¡Muchas gracias por tu reseña! Ha sido añadida a la comunidad Aura.</span>
            </div>
            <button onClick={() => setFormSubmittedToast(false)} className="text-[#2E7D4B] hover:text-[#184527]">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Filter controls */}
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-lg border border-[#EAE0DA]">
            <button
              onClick={() => setFilterRating('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterRating === 'all'
                  ? 'bg-[#FAF2EF] text-[#2D2426] font-semibold'
                  : 'text-[#6E5B5E] hover:text-[#2D2426]'
              }`}
            >
              Todas las Reseñas ({reviews.length})
            </button>
            <button
              onClick={() => setFilterRating(5)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterRating === 5
                  ? 'bg-[#FAF2EF] text-[#2D2426] font-semibold'
                  : 'text-[#6E5B5E] hover:text-[#2D2426]'
              }`}
            >
              5 Estrellas
            </button>
            <button
              onClick={() => setFilterRating(4)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterRating === 4
                  ? 'bg-[#FAF2EF] text-[#2D2426] font-semibold'
                  : 'text-[#6E5B5E] hover:text-[#2D2426]'
              }`}
            >
              4 Estrellas
            </button>
          </div>

          <div className="text-xs text-[#7F6B6F]">
            Mostrando <span className="font-semibold text-[#2D2426] tabular-nums">{filteredReviews.length}</span> testimonios
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-[#EAE0DA] shadow-xs flex flex-col justify-between hover:border-[#D5C1BA] transition-all"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${
                          s <= review.rating
                            ? 'fill-[#B67B74] text-[#B67B74]'
                            : 'text-[#E2D4CE]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8C767A]">{review.date}</span>
                </div>

                {/* Review Title */}
                <h3 className="text-sm font-semibold text-[#2D2426] mb-2 leading-snug">
                  {review.title}
                </h3>

                {/* Comment body */}
                <p className="text-xs text-[#635054] leading-relaxed mb-4">
                  "{review.comment}"
                </p>

                {/* Clean unboxed metadata indicators (no pill badges) */}
                <div className="pt-3 border-t border-[#F2E8E4] space-y-1 text-[11px] text-[#7A6468]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#A66D67] font-medium">Producto:</span>
                    <span className="text-[#2D2426] font-medium truncate">{review.productName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#A66D67] font-medium">Horma:</span>
                    <span>{review.handFit} · Muñeca: {review.wristSupport}/5</span>
                  </div>
                </div>
              </div>

              {/* Footer: Author & Helpful vote */}
              <div className="mt-5 pt-3 border-t border-[#F2E8E4] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-[#2D2426]">
                      {review.author}
                    </span>
                    {review.verified && (
                      <span className="text-[10px] text-[#2E7D4B] flex items-center gap-0.5 font-medium" title="Compra verificada en la tienda">
                        <CheckCircle className="w-3 h-3" />
                        Verificada
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-[#8C767A]">{review.role}</div>
                </div>

                <button
                  type="button"
                  onClick={() => onVoteHelpful(review.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                    review.userVotedHelpful
                      ? 'bg-[#FAF0ED] text-[#965A54] font-semibold'
                      : 'text-[#7F6B6F] hover:bg-[#F8F1EE] hover:text-[#2D2426]'
                  }`}
                  title="¿Te ha resultado útil esta opinión?"
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span className="tabular-nums">{review.helpfulCount}</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Write Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#EAE0DA] shadow-xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-[#8C767A] hover:text-[#2D2426] p-1 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-[#A66D67] font-semibold">
                Tu Experiencia en el Ring
              </span>
              <h3 className="text-xl font-serif text-[#2D2426] mt-1">
                Escribir una Reseña
              </h3>
              <p className="text-xs text-[#7F6B6F] mt-1">
                Ayuda a otras compañeras boxeadoras a elegir el modelo y ajuste ideal para sus manos.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2D2426] mb-1">
                  Tu Nombre o Apodo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Sara Martínez"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F5] border border-[#E0D3CC] rounded-xl focus:outline-none focus:border-[#B67B74]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2426] mb-1">
                  Tu Perfil o Experiencia de Boxeo
                </label>
                <input
                  type="text"
                  placeholder="Ej: Cardio boxing 3 días/semana o Sparring amateur"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F5] border border-[#E0D3CC] rounded-xl focus:outline-none focus:border-[#B67B74]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2426] mb-1">
                  Producto que Has Usado
                </label>
                <select
                  value={newProduct}
                  onChange={(e) => setNewProduct(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F5] border border-[#E0D3CC] rounded-xl focus:outline-none focus:border-[#B67B74]"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating selection */}
              <div>
                <label className="block text-xs font-semibold text-[#2D2426] mb-1">
                  Puntuación General
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewRating(star)}
                      className="p-1 text-[#B67B74] hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newRating
                            ? 'fill-[#B67B74] text-[#B67B74]'
                            : 'text-[#E0D3CC]'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-[#7F6B6F] ml-2">
                    {newRating} de 5 estrellas
                  </span>
                </div>
              </div>

              {/* Hand Fit selector */}
              <div>
                <label className="block text-xs font-semibold text-[#2D2426] mb-1">
                  ¿Cómo sentiste la horma en tu mano?
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {(['Ajuste Firme', 'Ajuste Perfecto', 'Ligeramente Holgado'] as const).map(
                    (fit) => (
                      <button
                        type="button"
                        key={fit}
                        onClick={() => setNewHandFit(fit)}
                        className={`py-2 px-2 text-center rounded-lg border transition-all ${
                          newHandFit === fit
                            ? 'bg-[#FAF0ED] border-[#B67B74] text-[#2D2426] font-semibold'
                            : 'bg-[#FAF7F5] border-[#E0D3CC] text-[#6E5B5E]'
                        }`}
                      >
                        {fit}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2426] mb-1">
                  Título de tu Reseña
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Excelente amortiguación y sujeción de muñeca"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F5] border border-[#E0D3CC] rounded-xl focus:outline-none focus:border-[#B67B74]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D2426] mb-1">
                  Tu Comentario Detallado
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Cuéntanos cómo se sienten al golpear el saco, la comodidad de las vendas y el tacto..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F5] border border-[#E0D3CC] rounded-xl focus:outline-none focus:border-[#B67B74]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-[#6E5B5E] hover:text-[#2D2426]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#2D2426] text-white text-xs font-semibold rounded-xl hover:bg-[#433638] transition-colors"
                >
                  Publicar Reseña
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
