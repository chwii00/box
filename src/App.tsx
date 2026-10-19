import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { StoreCatalog } from './components/StoreCatalog';
import { TechFeatures } from './components/TechFeatures';
import { SizeGuide } from './components/SizeGuide';
import { ReviewsSection } from './components/ReviewsSection';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistModal } from './components/WishlistModal';
import { Footer } from './components/Footer';

import { PRODUCTS } from './data/products';
import { INITIAL_REVIEWS } from './data/reviews';
import { Product, CartItem, Review, Currency, ProductCategory } from './types';

export default function App() {
  // Products and Reviews state
  const [products] = useState<Product[]>(PRODUCTS);
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);

  // Currency state inspired by Everlast Chile (default CLP with switcher to EUR/USD)
  const [currency, setCurrency] = useState<Currency>('CLP');

  // Active Category filter state
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('todos');

  // Cart & Wishlist state
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      selectedSize: '12 oz',
      quantity: 1,
    },
  ]);
  const [wishlist, setWishlist] = useState<string[]>([PRODUCTS[1].id]);

  // Modals & Drawers state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState<string | null>('AURA10');

  // Filter synced with Size Guide
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string | null>(null);

  // Cart operations
  const handleAddToCart = (product: Product, size: string, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );
      if (existingIndex > -1) {
        const nextCart = [...prevCart];
        nextCart[existingIndex].quantity += quantity;
        return nextCart;
      } else {
        return [...prevCart, { product, selectedSize: size, quantity }];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string, size: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedSize === size)
      )
    );
  };

  // Wishlist operations
  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Reviews operations
  const handleAddReview = (
    newReviewData: Omit<Review, 'id' | 'date' | 'helpfulCount' | 'userVotedHelpful'>
  ) => {
    const newRev: Review = {
      ...newReviewData,
      id: `rev-${Date.now()}`,
      date: 'Reciente',
      helpfulCount: 0,
      userVotedHelpful: false,
    };
    setReviews([newRev, ...reviews]);
  };

  const handleVoteHelpful = (reviewId: string) => {
    setReviews((prev) =>
      prev.map((r) => {
        if (r.id === reviewId) {
          const voted = r.userVotedHelpful;
          return {
            ...r,
            helpfulCount: voted ? r.helpfulCount - 1 : r.helpfulCount + 1,
            userVotedHelpful: !voted,
          };
        }
        return r;
      })
    );
  };

  // Promo operations
  const handleApplyPromo = (code: string) => {
    if (code.toUpperCase() === 'AURA10') {
      setAppliedPromo('AURA10');
      return true;
    }
    return false;
  };

  // Checkout operations
  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCart([]);
  };

  // Size Filter from Calculator
  const handleSelectSizeFilter = (size: string) => {
    setSelectedSizeFilter(size);
  };

  const handleClearSizeFilter = () => {
    setSelectedSizeFilter(null);
  };

  const scrollToSizeGuide = () => {
    const el = document.getElementById('guia-tallas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculation for Checkout total
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const discountAmount = appliedPromo === 'AURA10' ? subtotal * 0.1 : 0;
  const isFreeShipping = subtotal >= 60 || cart.length === 0;
  const shippingCost = isFreeShipping ? 0 : 4.95;
  const total = Math.max(0, subtotal - discountAmount + shippingCost);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] selection:bg-[#EBDAD6] selection:text-[#2D2426]">
      {/* Top Navbar with Everlast-style multi-tier announcement & currency switcher */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Campaign Hero Banner */}
        <Hero onOpenCalculator={scrollToSizeGuide} />

        {/* Everlast-style Category Banners Showcase */}
        <CategoryShowcase
          onSelectCategory={(cat) => setActiveCategory(cat)}
        />

        {/* Store Catalog with Category Sync & Currency */}
        <StoreCatalog
          products={products}
          currency={currency}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onOpenDetail={(product) => setSelectedProduct(product)}
          onQuickAdd={(product, size) => handleAddToCart(product, size, 1)}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          selectedSizeFilter={selectedSizeFilter}
          onClearSizeFilter={handleClearSizeFilter}
        />

        {/* Everlast-inspired Proprietary Boxing Technology Section */}
        <div id="tecnologia">
          <TechFeatures />
        </div>

        {/* Interactive Size Guide & Ounce Calculator */}
        <SizeGuide onSelectSizeFilter={handleSelectSizeFilter} />

        {/* Female Biomechanics & Brand Heritage */}
        <BrandPhilosophy />

        {/* Customer Reviews & Community Feedback */}
        <ReviewsSection
          reviews={reviews}
          onAddReview={handleAddReview}
          onVoteHelpful={handleVoteHelpful}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          currency={currency}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onOpenSizeGuide={scrollToSizeGuide}
          isWishlisted={wishlist.includes(selectedProduct.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={handleProceedToCheckout}
        appliedPromo={appliedPromo}
        onApplyPromo={handleApplyPromo}
      />

      {/* Checkout Simulator Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        currency={currency}
        total={total}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        allProducts={products}
        currency={currency}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={(product, size) => handleAddToCart(product, size, 1)}
      />
    </div>
  );
}
