import { Sprout, TrendingUp, Scissors, Shield, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Sprout,
    title: "Nourishes & Strengthens",
    description: "Deep conditioning with natural oils"
  },
  {
    icon: TrendingUp,
    title: "Promotes Growth",
    description: "Stimulates healthy hair growth"
  },
  {
    icon: Scissors,
    title: "Repairs Split Ends",
    description: "Restores damaged hair structure"
  },
  {
    icon: Shield,
    title: "Reduces Breakage",
    description: "Strengthens hair from root to tip"
  },
  {
    icon: Leaf,
    title: "Chemical-Free",
    description: "100% natural plant-based formula"
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 hover:shadow-glow transition-smooth group"
            >
              <div className="mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
