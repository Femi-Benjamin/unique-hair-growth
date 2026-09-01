import { Crown, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollAnimation";
import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Composition with ScrollReveal */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl overflow-hidden shadow-elegant border border-border bg-card p-3">
                  <img
                    src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=900&auto=format&fit=crop&q=80"
                    alt="Natural Hair Crown & Trichology Botanical Therapy"
                    referrerPolicy="no-referrer"
                    className="w-full h-[460px] object-cover rounded-2xl"
                  />
                </div>

                {/* Floating Stat Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 p-5 rounded-2xl bg-card border border-border shadow-xl space-y-1 hidden sm:block max-w-[210px]"
                >
                  <p className="font-serif text-3xl font-bold text-primary">100%</p>
                  <p className="text-xs font-bold text-foreground">Plant-Powered</p>
                  <p className="text-[11px] text-muted-foreground">Cold-pressed botanical actives with no chemical silicones.</p>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content Column with ScrollReveal */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-primary border border-primary/20 text-xs font-semibold">
                <Crown className="w-3.5 h-3.5 text-accent" />
                <span>Our Heritage & Philosophy</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Honoring Your Crown With <span className="text-primary italic font-normal">Pure African Wisdom.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  At Unique Hair Treatment, we believe natural hair is sacred royalty. Too often, commercial haircare is saturated with sulfates, drying alcohols, and petroleum fillers that provide synthetic shine while weakening cuticles over time.
                </p>
                <p>
                  Our small-batch formulations combine ancient Chadian Chebe rituals, raw Nilotica Shea butter, and modern trichology science. Each drop is engineered to nourish the scalp microbiome, seal the cortex, and stimulate sustained length retention.
                </p>
              </div>
            </ScrollReveal>

            {/* Value Pillars */}
            <ScrollReveal direction="left" delay={0.4}>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-secondary/40 border border-border/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Ethically Sourced
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Direct partnership with women-led farming cooperatives across Chad and Ghana.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-secondary/40 border border-border/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Small-Batch Purity
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Freshly blended without parabens, mineral oils, or synthetic fragrance.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.5}>
              <div className="pt-3 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3.5 shadow-glow font-semibold">
                  <Link to="/products">Explore Formulations</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-2 border-primary/40 text-foreground hover:bg-secondary/70 rounded-full px-8 py-3.5 font-semibold">
                  <Link to="/booking">Book a Scalp Diagnostic</Link>
                </Button>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
