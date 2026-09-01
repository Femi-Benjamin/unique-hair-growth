import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Star, CheckCircle, Quote, Sparkles } from "lucide-react";
import { customerReviews } from "@/lib/data";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimation";
import { motion } from "motion/react";

const Testimonials = () => {
  const [sliderPosition, setSliderPosition] = useState<Record<number, number>>({ 1: 50, 2: 50 });

  const handleSliderMove = (id: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition((prev) => ({ ...prev, [id]: percent }));
  };

  const handleTouchMove = (id: number, e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition((prev) => ({ ...prev, [id]: percent }));
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="down" className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Proven Real Results</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Stories of <span className="text-primary italic font-normal">Transformation.</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            See how our organic trichology formulas have restored confidence, density, and length to thousands of natural hair crowns.
          </p>
        </ScrollReveal>

        {/* Interactive Before & After Showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {customerReviews.filter((r) => r.beforeAfter).map((review) => {
            const pos = sliderPosition[review.id] ?? 50;
            return (
              <ScrollReveal key={review.id} direction="up" delay={0.15}>
                <div
                  className="bg-card rounded-3xl p-6 border border-border/80 shadow-elegant space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground">{review.name}</h3>
                      <p className="text-xs text-muted-foreground">{review.location} • {review.beforeAfter?.timeframe} Routine</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/20 text-accent-foreground">
                      Verified Transformation
                    </span>
                  </div>

                  {/* Interactive Slider Comparison */}
                  <div
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-ew-resize select-none border border-border"
                    onMouseMove={(e) => handleSliderMove(review.id, e)}
                    onTouchMove={(e) => handleTouchMove(review.id, e)}
                  >
                    {/* After Image (Full background) */}
                    <img
                      src={review.beforeAfter?.after}
                      alt="After Result"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute bottom-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-primary/80 text-primary-foreground px-2 py-1 rounded-md backdrop-blur-sm">
                      After
                    </span>

                    {/* Before Image (Clipped with width) */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${pos}%` }}
                    >
                      <img
                        src={review.beforeAfter?.before}
                        alt="Before Result"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ width: "100%", height: "100%" }}
                      />
                      <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white px-2 py-1 rounded-md backdrop-blur-sm">
                        Before
                      </span>
                    </div>

                    {/* Split Divider Line */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize"
                      style={{ left: `${pos}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white shadow-lg flex items-center justify-center text-primary text-[10px] font-bold">
                        ↔
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    "{review.comment}"
                  </p>
                  <div className="text-[11px] font-semibold text-primary">
                    Regimen: {review.productUsed}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Customer Review Cards Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {customerReviews.map((review) => (
            <StaggerItem key={review.id}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <Card
                  className="bg-card border-border/80 hover:border-primary/40 transition-smooth p-6 flex flex-col justify-between h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 text-accent">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-accent" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-primary/20" />
                    </div>

                    <h3 className="font-bold text-sm text-foreground">
                      {review.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover bg-secondary"
                    />
                    <div>
                      <h4 className="font-semibold text-xs text-foreground flex items-center gap-1">
                        {review.name}
                        {review.verified && (
                          <CheckCircle className="w-3 h-3 text-primary" />
                        )}
                      </h4>
                      <p className="text-[11px] text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default Testimonials;
