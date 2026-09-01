import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Video, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/ScrollAnimation";
import { motion } from "motion/react";

const BookingPreview = () => {
  return (
    <section id="booking" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-10 md:space-y-12">
          
          <ScrollReveal direction="up" className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-primary">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Expert Trichology Care</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
              Book Your Scalp & Hair Consultation
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Whether visiting our steam bar salon in person or consulting one-on-one virtually, get clinical analysis and a tailored 90-day growth regimen.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* In-Salon Diagnostic */}
            <ScrollReveal direction="up" delay={0.1}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="h-full">
                <Card className="bg-card border-border hover:border-primary/50 transition-smooth shadow-elegant rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="p-3.5 rounded-2xl bg-secondary text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                        Flagship Salon
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                        In-Salon Trichology Detox
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Experience deep micro-mist ozone steaming, 200x digital scalp scope diagnostic, and relaxing herbal clay therapy.
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      {[
                        "200x Digital Scalp & Follicle Analysis",
                        "Herbal Chebe & Clay Detoxification",
                        "Ozone Micro-Mist Hydration Steam",
                        "Lymphatic Scalp Tension Relief Massage",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 sm:pt-8 mt-6 border-t border-border flex items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-muted-foreground block">Starting from</span>
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-primary">₦18,000</span>
                    </div>
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 sm:px-7 py-3 shadow-glow font-semibold text-sm">
                      <Link to="/booking" className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 mr-1" />
                        Book In-Salon
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>

            {/* Virtual Consultation */}
            <ScrollReveal direction="up" delay={0.2}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="h-full">
                <Card className="bg-card border-border hover:border-primary/50 transition-smooth shadow-elegant rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="p-3.5 rounded-2xl bg-secondary text-primary">
                        <Video className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                        Worldwide Virtual
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                        Virtual Trichology Session
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Connect 1-on-1 via private HD video with our certified hair specialist from anywhere in the world.
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      {[
                        "Complete 45-min Video Hair Assessment",
                        "Ingredient audit of your existing products",
                        "Custom 90-Day Step-by-Step Regimen PDF",
                        "30-day dedicated WhatsApp specialist support",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 sm:pt-8 mt-6 border-t border-border flex items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-muted-foreground block">Session Fee</span>
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-primary">₦12,000</span>
                    </div>
                    <Button asChild variant="outline" size="lg" className="border-2 border-primary/40 text-foreground hover:bg-secondary/70 rounded-full px-6 sm:px-7 py-3 font-semibold text-sm">
                      <Link to="/booking" className="flex items-center gap-1.5">
                        <Video className="w-4 h-4 mr-1" />
                        Book Virtual Call
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingPreview;
