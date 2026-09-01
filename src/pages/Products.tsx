import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, ProductItem } from "@/lib/data";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Search, Star, Sparkles, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { HairQuizModal } from "@/components/HairQuizModal";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimation";
import { motion } from "motion/react";

const Products = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedHairType, setSelectedHairType] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const categories = ["All", "Oils", "Treatments", "Serums", "Shampoos", "Sprays", "Styling", "Bundles"];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;

      const matchesHairType =
        selectedHairType === "All" ||
        product.hairTypes.some((ht) => ht.toLowerCase().includes(selectedHairType.toLowerCase()));

      return matchesSearch && matchesCategory && matchesHairType;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedHairType, sortBy]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Banner Header */}
        <section className="bg-gradient-hero py-12 md:py-16 border-b border-border/80">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal direction="down" className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-primary">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Pure Botanical Craftsmanship
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Targeted Hair & Scalp Formulations
              </h1>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Discover our complete collection of cold-pressed oils, clarifying washes, restorative masques, and high-potency edge balms.
              </p>
              
              <Button
                onClick={() => setIsQuizOpen(true)}
                variant="outline"
                size="sm"
                className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-medium text-xs rounded-full mt-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent mr-1.5" />
                Take Hair Diagnostic Quiz to Find Your Match
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {/* Filter & Controls Bar */}
        <section className="sticky top-20 z-30 bg-card/95 backdrop-blur-md border-b border-border py-4 shadow-sm">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              
              {/* Search input */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by ingredient, concern (e.g., Chebe, edges, dandruff)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-background h-10 rounded-xl text-xs sm:text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Sort selector */}
              <div className="flex items-center gap-3 self-end lg:self-auto">
                <span className="text-xs text-muted-foreground whitespace-nowrap hidden sm:inline">
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "featured" | "price-asc" | "price-desc" | "rating")}
                  className="h-10 px-3 rounded-xl border border-input bg-background text-xs font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="featured">Featured / Bestsellers</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pt-3 pb-1 scrollbar-none">
              <span className="text-xs font-semibold text-muted-foreground mr-1 hidden sm:inline">
                Categories:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-smooth ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                      : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Catalog Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs text-muted-foreground">
                Showing <strong className="text-foreground font-semibold">{filteredProducts.length}</strong> botanical formulations
              </p>

              {(selectedCategory !== "All" || searchQuery || selectedHairType !== "All") && (
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedHairType("All");
                    setSearchQuery("");
                  }}
                  className="text-xs text-primary hover:underline font-semibold"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-card rounded-3xl border border-border p-8 space-y-4">
                <Search className="w-12 h-12 text-muted-foreground mx-auto opacity-50" />
                <h3 className="font-serif text-2xl font-bold text-foreground">No Formulations Found</h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  We couldn't find any products matching your current filters. Try changing your search query or reset the filters.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedHairType("All");
                    setSearchQuery("");
                  }}
                  className="bg-primary text-primary-foreground"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <StaggerItem key={product.id}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="group rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-smooth shadow-sm hover:shadow-elegant overflow-hidden flex flex-col justify-between h-full"
                    >
                      {/* Image Area */}
                      <div className="relative aspect-square bg-secondary/40 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        />

                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                          {product.isBestseller && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent text-accent-foreground shadow-sm">
                              Bestseller
                            </span>
                          )}
                          {product.isNew && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-primary-foreground shadow-sm">
                              New
                            </span>
                          )}
                        </div>

                        <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium">
                          {product.size}
                        </span>
                      </div>

                      {/* Content Area */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-accent font-semibold uppercase tracking-wider text-[10px]">
                              {product.category}
                            </span>
                            <div className="flex items-center gap-1 text-accent font-bold text-xs">
                              <Star className="w-3 h-3 fill-accent" />
                              <span>{product.rating}</span>
                              <span className="text-muted-foreground font-normal">({product.reviews})</span>
                            </div>
                          </div>

                          <Link
                            to={`/product/${product.id}`}
                            className="block font-serif text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1"
                          >
                            {product.name}
                          </Link>

                          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                            {product.description}
                          </p>

                          <div className="space-y-1 pt-1">
                            {product.benefits.slice(0, 2).map((b, i) => (
                              <div key={i} className="flex items-center gap-1.5 text-[11px] text-foreground">
                                <Check className="w-3 h-3 text-primary flex-shrink-0" />
                                <span className="line-clamp-1">{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Pricing & CTA */}
                        <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                          <div>
                            <span className="font-serif text-lg font-bold text-foreground">
                              {product.priceDisplay}
                            </span>
                          </div>

                          <Button
                            onClick={() => {
                              addToCart(product);
                              setIsCartOpen(true);
                            }}
                            size="sm"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-3.5 text-xs font-semibold shadow-glow"
                          >
                            <ShoppingBag className="w-3.5 h-3.5 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}

          </div>
        </section>
      </main>

      <Footer />
      <HairQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
};

export default Products;
