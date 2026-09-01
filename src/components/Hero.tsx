import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Award, Leaf, Star, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { HairQuizModal } from "@/components/HairQuizModal";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollAnimation";

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=1200&auto=format&fit=crop&q=80",
    title: "Chebe & Rosemary Growth Elixir",
    tagline: "Awakens dormant follicles & reduces shedding by 78%",
    badge: "#1 Scalp Stimulant",
    rating: "4.9/5 (248 reviews)",
    benefit: "Cold-Pressed Chadian Chebe Extract",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1200&auto=format&fit=crop&q=80",
    title: "Raw Shea & Baobab Moisture Masque",
    tagline: "Intensive 48-hour moisture for 4A-4C curly & kinky crowns",
    badge: "Crown Restorative",
    rating: "4.9/5 (184 reviews)",
    benefit: "Instant Cuticle Slip & Elasticity",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&auto=format&fit=crop&q=80",
    title: "100% Handcrafted African Botanicals",
    tagline: "Zero mineral oils, parabens, or synthetic fragrance",
    badge: "100% Organic",
    rating: "5.0/5 (420 reviews)",
    benefit: "Unrefined Botanical Actives",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&auto=format&fit=crop&q=80",
    title: "Salon Trichology & Steam Therapy",
    tagline: "Micro-mist ozone follicle detox at our Lagos & Abuja spas",
    badge: "Salon Experience",
    rating: "4.9/5 (350+ Bookings)",
    benefit: "Certified Trichology Regimens",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1200&auto=format&fit=crop&q=80",
    title: "Herbal Edge Restoration Balm",
    tagline: "Revives fragile edges and protects against tension damage",
    badge: "Edge Defense",
    rating: "4.8/5 (310 reviews)",
    benefit: "Infused with Pure Plant Silica & Biotin",
  },
];

const marqueeHighlights = [
  "🌿 100% Cold-Pressed Chadian Chebe",
  "👑 Unrefined Ghanaian Shea Butter",
  "🛡️ Zero Sulfates, Silicones or Parabens",
  "🚚 Nationwide Express Delivery in 24-48 Hours",
  "🔬 Formulated by Certified Trichologists",
  "✨ 48-Hour Deep Moisture Lock",
  "💆 Salon Micro-Mist Steam Therapy",
];

const Hero = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll carousel timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero pt-8 pb-12 lg:pt-14 lg:pb-20">
        {/* Soft background ambient blurs */}
        <div className="absolute top-0 right-0 -mr-28 -mt-28 w-[450px] h-[450px] rounded-full bg-accent/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-28 -mb-28 w-[450px] h-[450px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content with staggered fade in */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <ScrollReveal direction="down" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-primary border border-primary/20 text-xs font-semibold tracking-wide">
                  <Leaf className="w-3.5 h-3.5 text-accent" />
                  <span>100% Cold-Pressed African Botanicals & Chebe Extract</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.12] tracking-tight">
                  Royal Restoration <br className="hidden sm:inline" />
                  <span className="text-primary italic font-normal">for Your Sacred Crown.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Hand-crafted organic treatments clinically formulated to eliminate shedding, awaken dormant follicles, and revive fragile edges without harsh chemicals.
                </p>
              </ScrollReveal>

              {/* CTAs */}
              <ScrollReveal delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-9 py-4 h-auto min-h-[52px] text-base font-semibold shadow-glow transition-all"
                  >
                    <Link to="/products" className="flex items-center justify-center gap-2.5">
                      Shop Botanical Formulas
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>

                  <Button
                    onClick={() => setIsQuizOpen(true)}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-2 border-primary/50 text-foreground hover:bg-secondary/80 rounded-full px-8 py-4 h-auto min-h-[52px] text-base font-semibold transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-accent mr-2" />
                    Free Hair Diagnostic
                  </Button>
                </div>
              </ScrollReveal>

              {/* Trust Indicators */}
              <ScrollReveal delay={0.5}>
                <div className="pt-6 border-t border-border/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-accent" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-foreground">4.9 / 5.0 Rating</p>
                    <p className="text-[11px] text-muted-foreground">1,200+ Reviews</p>
                  </div>

                  <div className="space-y-1 border-l border-border/80 pl-4">
                    <p className="text-base font-serif font-bold text-primary">78% Less</p>
                    <p className="text-xs font-bold text-foreground">Shedding</p>
                    <p className="text-[11px] text-muted-foreground">In 4 Weeks</p>
                  </div>

                  <div className="space-y-1 border-l border-border/80 pl-4">
                    <p className="text-base font-serif font-bold text-primary">0% Parabens</p>
                    <p className="text-xs font-bold text-foreground">Chemical-Free</p>
                    <p className="text-[11px] text-muted-foreground">Pure Botanicals</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Visual Frame: Auto-Scrolling Animated Multi-Image Carousel */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal direction="left" delay={0.3}>
                <div
                  className="relative mx-auto max-w-lg lg:max-w-none group"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {/* Outer Frame with glow border */}
                  <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border/90 bg-card p-3.5">
                    
                    {/* Carousel Viewport with AnimatePresence */}
                    <div className="relative h-[430px] sm:h-[480px] lg:h-[520px] w-full rounded-2xl overflow-hidden bg-muted">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeSlide.id}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0"
                        >
                          <img
                            src={activeSlide.image}
                            alt={activeSlide.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />

                          {/* Gradient Vignette for Text Contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </motion.div>
                      </AnimatePresence>

                      {/* Top Carousel Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                        <motion.span
                          key={`badge-${activeSlide.id}`}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs font-bold bg-primary/90 text-primary-foreground backdrop-blur-md px-3 py-1 rounded-full shadow-md flex items-center gap-1.5"
                        >
                          <Award className="w-3.5 h-3.5 text-accent" />
                          {activeSlide.badge}
                        </motion.span>

                        <span className="text-[11px] font-medium bg-black/60 text-white backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                          {currentSlide + 1} / {heroSlides.length}
                        </span>
                      </div>

                      {/* Slide Information Overlay (Animated) */}
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`info-${activeSlide.id}`}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="p-4 rounded-2xl bg-card/90 backdrop-blur-md border border-border/80 shadow-lg space-y-2"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">
                                  {activeSlide.title}
                                </h3>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {activeSlide.tagline}
                                </p>
                              </div>
                              <span className="text-[10px] font-semibold bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-md shrink-0">
                                {activeSlide.rating}
                              </span>
                            </div>

                            <div className="flex items-center justify-between pt-1 border-t border-border/50 text-[11px]">
                              <span className="text-primary font-medium flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                                {activeSlide.benefit}
                              </span>
                              <Link
                                to="/products"
                                className="font-semibold text-primary hover:text-accent transition-colors flex items-center gap-1"
                              >
                                View Details &rarr;
                              </Link>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Navigation Arrow Controls */}
                      <button
                        onClick={handlePrev}
                        aria-label="Previous Slide"
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        onClick={handleNext}
                        aria-label="Next Slide"
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Interactive Slide Dots and Progress Bars */}
                    <div className="flex items-center justify-center gap-2 mt-3.5">
                      {heroSlides.map((slide, index) => (
                        <button
                          key={slide.id}
                          onClick={() => setCurrentSlide(index)}
                          aria-label={`Go to slide ${index + 1}`}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            currentSlide === index
                              ? "w-8 bg-primary"
                              : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                          }`}
                        />
                      ))}
                    </div>

                  </div>

                  {/* Floating Certified Trichology Badge */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -top-3 -right-3 p-3 rounded-2xl bg-primary text-primary-foreground shadow-glow hidden sm:flex items-center gap-2 z-30"
                  >
                    <Award className="w-5 h-5 text-accent" />
                    <div className="text-left">
                      <p className="text-[10px] uppercase font-semibold text-primary-foreground/80 leading-none">Certified</p>
                      <p className="text-xs font-bold">Trichology Formula</p>
                    </div>
                  </motion.div>

                  {/* Floating 100% Organic Shield */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-3 -left-3 p-2.5 rounded-2xl bg-card border border-border shadow-lg hidden sm:flex items-center gap-2 z-30"
                  >
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    <span className="text-xs font-bold text-foreground">100% Pure Botanicals</span>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>

        {/* Continuous Auto-Scrolling Highlight Marquee */}
        <div className="mt-12 lg:mt-16 py-3.5 bg-primary text-primary-foreground overflow-hidden border-y border-primary/20 shadow-inner">
          <div className="flex w-max space-x-8 animate-marquee">
            {[...marqueeHighlights, ...marqueeHighlights].map((item, idx) => (
              <span
                key={idx}
                className="text-xs sm:text-sm font-semibold tracking-wide flex items-center whitespace-nowrap"
              >
                {item}
                <span className="mx-4 text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <HairQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </>
  );
};

export default Hero;
