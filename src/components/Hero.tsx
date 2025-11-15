import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-products.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            TRUE ROYALTY ALWAYS USE{" "}
            <span className="text-primary drop-shadow-glow">
              DHEE'S ORGANIC
            </span>{" "}
            HAIR TREATMENT
          </h1>
          
          <p className="text-xl sm:text-2xl text-cream/90 mb-8 max-w-2xl">
            Experience chemical-free, nourishing hair care that promotes natural growth and restores your crown's royal glory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl">
              Shop Products
            </Button>
            <Button variant="outline" size="xl">
              Book Consultation
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>100% Chemical-Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>Natural Plant Oils</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
