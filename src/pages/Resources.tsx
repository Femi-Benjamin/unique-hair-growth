import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { educationalGuides } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, User, Sparkles, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HairQuizModal } from "@/components/HairQuizModal";

const Resources = () => {
  const [selectedGuide, setSelectedGuide] = useState(educationalGuides[0]);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-primary">
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              Trichology Knowledge Base
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Science-Backed Hair & Scalp Education
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Explore clinical guides, ancestral African botanical techniques, and trichologist-authored blueprints for lasting length retention.
            </p>
          </div>

          {/* Interactive Diagnostic Quiz Promotion Banner */}
          <div className="p-8 rounded-3xl bg-secondary/50 border border-border mb-16 grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Unsure About Your Hair Porosity?</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Take the 60-Second Custom Hair Diagnostic Quiz
              </h3>
              <p className="text-xs text-muted-foreground">
                Get an instant analysis of your curl density and receive a tailored step-by-step product regimen.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Button
                onClick={() => setIsQuizOpen(true)}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3.5 rounded-full font-semibold shadow-glow text-sm"
              >
                <Sparkles className="w-4 h-4 text-accent mr-2" />
                Launch Diagnostic Quiz
              </Button>
            </div>
          </div>

          {/* Guide Reader & Index Layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Guide List / Navigation */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                Featured Guides
              </h3>

              <div className="space-y-3">
                {educationalGuides.map((guide) => (
                  <div
                    key={guide.id}
                    onClick={() => setSelectedGuide(guide)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-smooth ${
                      selectedGuide.id === guide.id
                        ? "bg-secondary/40 border-primary shadow-sm"
                        : "bg-card border-border hover:border-primary/40"
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold text-accent tracking-wider">
                      {guide.category} • {guide.readTime}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-foreground mt-1 line-clamp-2">
                      {guide.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {guide.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Guide Article View */}
            <div className="lg:col-span-8 bg-card rounded-3xl border border-border p-6 md:p-10 shadow-elegant space-y-6">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={selectedGuide.coverImage}
                  alt={selectedGuide.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 border-b border-border pb-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="px-2.5 py-1 rounded-full bg-secondary text-primary font-semibold">
                    {selectedGuide.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedGuide.readTime}
                  </span>
                  <span>•</span>
                  <span>{selectedGuide.date}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {selectedGuide.title}
                </h2>

                <p className="text-xs font-medium text-foreground flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-primary" />
                  Written by {selectedGuide.author}
                </p>
              </div>

              {/* Guide Content */}
              <div className="prose prose-sm max-w-none text-foreground leading-relaxed space-y-4">
                <p className="text-sm font-medium text-muted-foreground italic border-l-2 border-primary pl-4 py-1">
                  "{selectedGuide.summary}"
                </p>

                <div className="space-y-4 text-xs sm:text-sm text-muted-foreground">
                  {selectedGuide.content.split("\n\n").map((paragraph, idx) => {
                    if (paragraph.startsWith("###")) {
                      return (
                        <h3 key={idx} className="font-serif text-lg font-bold text-foreground mt-6 mb-2">
                          {paragraph.replace("###", "").trim()}
                        </h3>
                      );
                    }
                    return <p key={idx}>{paragraph}</p>;
                  })}
                </div>
              </div>

              {/* Regimen recommendation at bottom of guide */}
              <div className="mt-8 p-6 rounded-2xl bg-secondary/40 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif font-bold text-base text-foreground">Ready to start your growth ritual?</h4>
                  <p className="text-xs text-muted-foreground">Explore the handcrafted Chebe and rosemary formulas mentioned in this guide.</p>
                </div>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0">
                  <Link to="/products">Shop Botanical Range</Link>
                </Button>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
      <HairQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
};

export default Resources;
