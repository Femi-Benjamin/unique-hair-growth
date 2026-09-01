import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, ProductItem } from "@/lib/data";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Star, ShoppingBag, Plus, Minus, ArrowLeft, ShieldCheck, Truck, Sparkles, Check, Share2 } from "lucide-react";
import { toast } from "sonner";
import { ScrollReveal } from "@/components/ui/ScrollAnimation";
import { motion } from "motion/react";
import { ProductReviews } from "@/components/ProductReviews";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"benefits" | "ingredients" | "howToUse">("benefits");

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Formulation Not Found</h2>
          <p className="text-muted-foreground text-sm mb-6">The requested product could not be located in our catalog.</p>
          <Button asChild className="bg-primary text-primary-foreground">
            <Link to="/products">Return to All Formulations</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.isBestseller))
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Product link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Breadcrumb & Navigation */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Catalog
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <Share2 className="w-3.5 h-3.5" />
              Share
            </button>
          </div>

          {/* Main Product Layout with ScrollReveal */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 space-y-4">
              <ScrollReveal direction="right" delay={0.1}>
                <div className="rounded-3xl overflow-hidden bg-secondary/50 border border-border shadow-elegant relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  
                  {product.isBestseller && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground shadow-md">
                      #1 Top Pick
                    </span>
                  )}
                </div>
              </ScrollReveal>

              {/* Trust Badges under image */}
              <ScrollReveal direction="up" delay={0.2}>
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-card border border-border text-center text-xs">
                  <div className="space-y-1">
                    <Sparkles className="w-4 h-4 text-accent mx-auto" />
                    <p className="font-semibold text-foreground">100% Organic</p>
                    <p className="text-[10px] text-muted-foreground">Cold-Pressed</p>
                  </div>
                  <div className="space-y-1 border-x border-border">
                    <Truck className="w-4 h-4 text-primary mx-auto" />
                    <p className="font-semibold text-foreground">Fast Delivery</p>
                    <p className="text-[10px] text-muted-foreground">1-3 Days</p>
                  </div>
                  <div className="space-y-1">
                    <ShieldCheck className="w-4 h-4 text-primary mx-auto" />
                    <p className="font-semibold text-foreground">Trichology Tested</p>
                    <p className="text-[10px] text-muted-foreground">Proven Efficacy</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Product Buy Box & Info */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">
                      {product.category} • {product.size}
                    </span>
                    <a
                      href="#customer-reviews"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("customer-reviews")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="flex items-center gap-1 text-accent font-bold text-xs hover:underline cursor-pointer group"
                    >
                      <Star className="w-4 h-4 fill-accent" />
                      <span>{product.rating}</span>
                      <span className="text-muted-foreground font-normal group-hover:text-foreground">({product.reviews} customer reviews)</span>
                    </a>
                  </div>

                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                    {product.name}
                  </h1>

                  <div className="font-serif text-3xl font-bold text-primary pt-1">
                    {product.priceDisplay}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.detailedDescription || product.description}
                </p>
              </ScrollReveal>

              {/* Suitable Hair Types */}
              <ScrollReveal direction="left" delay={0.3}>
                <div className="space-y-2 pt-1">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider">
                    Recommended For Hair Types:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.hairTypes.map((ht, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-primary font-medium">
                        {ht}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Quantity & Add to Cart Controls */}
              <ScrollReveal direction="left" delay={0.4}>
                <div className="p-6 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border rounded-xl bg-background p-1">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 text-sm font-bold text-foreground min-w-[36px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <Button
                      onClick={() => {
                        addToCart(product, quantity);
                        setIsCartOpen(true);
                      }}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 min-h-[50px] px-8 py-3.5 text-base font-semibold shadow-glow rounded-full"
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Bag • ₦{(product.price * quantity).toLocaleString()}
                    </Button>
                  </div>

                  <div className="text-[11px] text-muted-foreground flex items-center justify-between border-t border-border/80 pt-3">
                    <span>✓ In Stock • Ready for Dispatch</span>
                    <span>Free shipping on orders over ₦25,000</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Information Tabs */}
              <ScrollReveal direction="left" delay={0.5}>
                <div className="space-y-4 pt-2">
                  <div className="flex border-b border-border">
                    {(
                      [
                        { id: "benefits" as const, label: "Key Benefits" },
                        { id: "ingredients" as const, label: "Full Ingredients" },
                        { id: "howToUse" as const, label: "How to Apply" },
                      ] as const
                    ).map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
                          activeTab === tab
                            ? "text-primary border-b-2 border-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="text-xs leading-relaxed text-muted-foreground pt-1">
                    {activeTab === "benefits" && (
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {product.benefits.map((b, i) => (
                          <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary/30 text-foreground">
                            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === "ingredients" && (
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">100% Active Natural Components:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {product.ingredients.map((ing, i) => (
                            <span key={i} className="px-2.5 py-1 rounded bg-secondary text-foreground text-xs">
                              {ing}
                            </span>
                          ))}
                        </div>
                        <p className="text-[11px] text-muted-foreground pt-2">
                          Formulated without parabens, mineral oils, silicones, sulfates, or artificial fragrance.
                        </p>
                      </div>
                    )}

                    {activeTab === "howToUse" && (
                      <div className="p-4 rounded-xl bg-secondary/30 space-y-2 text-foreground">
                        <p className="font-semibold text-primary">Specialist Application Ritual:</p>
                        <p className="text-xs leading-relaxed text-muted-foreground">{product.howToUse}</p>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>

          {/* Customer Reviews & Social Proof Section */}
          <ProductReviews product={product} />

          {/* Related Formulations */}
          {relatedProducts.length > 0 && (
            <ScrollReveal direction="up" className="pt-12 border-t border-border space-y-6">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Complementary Botanical Formulations
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <motion.div
                    key={rel.id}
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-2xl bg-card border border-border hover:border-primary/40 transition-smooth flex items-center gap-4 group"
                  >
                    <img
                      src={rel.image}
                      alt={rel.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-xl object-cover bg-secondary flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-accent">{rel.category}</span>
                      <Link to={`/product/${rel.id}`} className="block text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {rel.name}
                      </Link>
                      <p className="font-serif text-sm font-bold text-primary">{rel.priceDisplay}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
