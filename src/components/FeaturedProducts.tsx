import { useState } from "react";
import { products, ProductItem } from "@/lib/data";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, ArrowRight, Eye, Sparkles, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimation";
import { motion } from "motion/react";

const FeaturedProducts = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeTab, setActiveTab] = useState<"All" | "Bestsellers" | "Oils & Serums" | "Treatments">("All");

  const filterProducts = () => {
    if (activeTab === "Bestsellers") return products.filter((p) => p.isBestseller);
    if (activeTab === "Oils & Serums") return products.filter((p) => p.category === "Oils" || p.category === "Serums");
    if (activeTab === "Treatments") return products.filter((p) => p.category === "Treatments" || p.category === "Bundles");
    return products.slice(0, 6);
  };

  const displayedProducts = filterProducts();

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header with ScrollReveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal direction="left" className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-primary">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Targeted Organic Formulas</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
              Formulated for <span className="text-primary italic font-normal">Every Hair Texture.</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Small-batch handcrafted treatments infused with cold-pressed botanical oils, raw Chebe, and essential trichological nutrients.
            </p>
          </ScrollReveal>

          {/* Filter Pills */}
          <ScrollReveal direction="right" className="flex flex-wrap gap-2">
            {(["All", "Bestsellers", "Oils & Serums", "Treatments"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-smooth ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </ScrollReveal>
        </div>

        {/* Products Grid with Stagger Container */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProducts.map((product) => (
            <StaggerItem key={product.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-smooth shadow-sm hover:shadow-elegant overflow-hidden flex flex-col justify-between h-full"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/3] bg-secondary/40 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Badge overlay */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {product.isBestseller && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-accent text-accent-foreground shadow-sm">
                        Bestseller
                      </span>
                    )}
                    {product.isNew && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary text-primary-foreground shadow-sm">
                        New Formula
                      </span>
                    )}
                  </div>

                  {/* Quick view button */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="absolute bottom-3 right-3 p-2.5 rounded-full bg-card/90 backdrop-blur-md text-foreground hover:text-primary hover:bg-card shadow-md opacity-0 group-hover:opacity-100 transition-smooth"
                    title="Quick View"
                    aria-label={`Quick view ${product.name}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="text-muted-foreground uppercase tracking-wider font-semibold text-[11px]">
                        {product.category} • {product.size}
                      </span>
                      <div className="flex items-center gap-1 text-accent font-bold">
                        <Star className="w-3 h-3 fill-accent" />
                        <span>{product.rating}</span>
                        <span className="text-muted-foreground font-normal">({product.reviews})</span>
                      </div>
                    </div>

                    <Link
                      to={`/product/${product.id}`}
                      className="block font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1"
                    >
                      {product.name}
                    </Link>

                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>

                    {/* Benefit chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {product.benefits.slice(0, 2).map((benefit, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-secondary/70 text-secondary-foreground"
                        >
                          <Check className="w-3 h-3 text-primary" />
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Add to Bag */}
                  <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs text-muted-foreground block">Price</span>
                      <span className="font-serif text-xl font-bold text-foreground">
                        {product.priceDisplay}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => {
                          addToCart(product);
                          setIsCartOpen(true);
                        }}
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-4 text-xs font-semibold shadow-glow"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                        Add to Bag
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View all formulas CTA with ScrollReveal */}
        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-secondary/60 rounded-xl px-8"
          >
            <Link to="/products" className="flex items-center gap-2">
              Browse Complete Catalog ({products.length} Formulations)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="sm:max-w-2xl bg-background border-border max-h-[90vh] overflow-y-auto p-6">
            <div className="grid sm:grid-cols-2 gap-6 items-start">
              <div className="rounded-xl overflow-hidden bg-secondary">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              <div className="space-y-4">
                <DialogHeader className="p-0 text-left">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {selectedProduct.category}
                  </span>
                  <DialogTitle className="font-serif text-2xl font-bold text-foreground">
                    {selectedProduct.name}
                  </DialogTitle>
                  <DialogDescription className="text-xs text-muted-foreground">
                    {selectedProduct.size} • Clinically Formulated
                  </DialogDescription>
                </DialogHeader>

                <div className="text-xl font-bold text-primary font-serif">
                  {selectedProduct.priceDisplay}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {selectedProduct.detailedDescription || selectedProduct.description}
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider">Key Ingredients:</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedProduct.ingredients.map((ing, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <Button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                      setIsCartOpen(true);
                    }}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Bag
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    onClick={() => setSelectedProduct(null)}
                  >
                    <Link to={`/product/${selectedProduct.id}`}>Full Page</Link>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default FeaturedProducts;
