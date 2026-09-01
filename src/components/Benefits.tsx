import { Sprout, TrendingUp, ShieldCheck, Leaf, Droplets } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimation";
import { motion } from "motion/react";

const benefits = [
  {
    icon: Sprout,
    title: "Awakens Dormant Roots",
    description: "Cold-pressed rosemary & Chebe stimulate micro-circulation to dormant hair follicles."
  },
  {
    icon: Droplets,
    title: "Multi-Layer Hydration",
    description: "Deep-penetrating plant lipids prevent water evaporation for up to 5 consecutive days."
  },
  {
    icon: ShieldCheck,
    title: "78% Less Shedding",
    description: "Strengthens the hair cortex against mechanical breakage and protective style tension."
  },
  {
    icon: TrendingUp,
    title: "Edge & Crown Revival",
    description: "Targeted botanical pomades nourish thinning temples and restore fragile baby hairs."
  },
  {
    icon: Leaf,
    title: "100% Chemical-Free",
    description: "Zero sulfates, parabens, phthalates, mineral oils, or synthetic drying alcohols."
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-secondary/40 border-y border-border/60">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal direction="down" className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">Pure Botanical Science</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-1">
            Engineered for Visible Density & Slip
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-elegant transition-smooth group h-full"
              >
                <div className="mb-4 p-3.5 rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Benefits;
