import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import BookingPreview from "@/components/BookingPreview";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HairQuizModal } from "@/components/HairQuizModal";
import { ScrollReveal } from "@/components/ui/ScrollAnimation";

const Index = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Benefits Grid */}
        <Benefits />

        {/* Featured Products Catalog */}
        <FeaturedProducts />

        {/* Interactive Hair Diagnostic Banner */}
        <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl space-y-6">
            <ScrollReveal direction="down" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-foreground/10 text-accent border border-primary-foreground/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Personalized Botanical Hair Care</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Don't Know Where to Begin? Take the 60-Second Diagnostic.
              </h2>

              <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed max-w-xl mx-auto">
                Answer 4 simple questions about your curl texture, scalp moisture, and growth priorities to receive a custom 30-day organic regimen.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <Button
                onClick={() => setIsQuizOpen(true)}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-9 py-4 h-auto min-h-[52px] text-base font-bold shadow-lg cursor-pointer"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Start My Free Hair Diagnostic
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {/* Verified Results & Testimonials with Interactive Slider */}
        <Testimonials />

        {/* About & Philosophy */}
        <About />

        {/* Salon & Steam Bar Services */}
        <BookingPreview />

        {/* Contact & Consultation */}
        <Contact />
      </main>

      <Footer />

      {/* Global Hair Quiz Modal */}
      <HairQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
};

export default Index;
