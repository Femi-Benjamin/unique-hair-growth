import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, ShoppingBag } from "lucide-react";
import { hairQuizQuestions, products, HairQuizQuestion, ProductItem } from "@/lib/data";
import { useCart } from "@/hooks/useCart";
import { Link } from "react-router-dom";

interface HairQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HairQuizModal = ({ isOpen, onClose }: HairQuizModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const { addToCart, setIsCartOpen } = useCart();

  const currentQuestion: HairQuizQuestion = hairQuizQuestions[currentStep];

  const handleSelectOption = (optionIndex: number) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: optionIndex };
    setAnswers(updatedAnswers);

    if (currentStep < hairQuizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  // Calculate recommended products based on user choices
  const getRecommendedProducts = (): ProductItem[] => {
    const scoreMap: Record<number, number> = {};
    
    hairQuizQuestions.forEach((q) => {
      const selectedIndex = answers[q.id];
      if (selectedIndex !== undefined && q.options[selectedIndex]) {
        const option = q.options[selectedIndex];
        option.productIds.forEach((pid) => {
          scoreMap[pid] = (scoreMap[pid] || 0) + 1;
        });
      }
    });

    const sortedIds = Object.keys(scoreMap)
      .map(Number)
      .sort((a, b) => (scoreMap[b] || 0) - (scoreMap[a] || 0));

    const recs = sortedIds
      .map((id) => products.find((p) => p.id === id))
      .filter(Boolean) as ProductItem[];

    return recs.length > 0 ? recs.slice(0, 3) : products.slice(0, 3);
  };

  const recommended = showResult ? getRecommendedProducts() : [];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl bg-background border-border max-h-[90vh] overflow-y-auto p-0">
        {!showResult ? (
          <div className="p-6 md:p-8 space-y-6">
            <DialogHeader>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-primary">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  Custom Botanical Hair Diagnostic
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  Step {currentStep + 1} of {hairQuizQuestions.length}
                </span>
              </div>
              <DialogTitle className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                {currentQuestion.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {currentQuestion.subtitle}
              </DialogDescription>
            </DialogHeader>

            {/* Progress bar */}
            <div className="w-full bg-border h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-primary h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentStep + 1) / hairQuizQuestions.length) * 100}%` }}
              />
            </div>

            {/* Options */}
            <div className="grid gap-3 pt-2">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className="w-full text-left p-4 rounded-xl border border-border bg-card hover:border-primary hover:bg-secondary/40 transition-smooth group flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                      {option.label}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>

            {currentStep > 0 && (
              <div className="pt-2 flex justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Back
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 md:p-8 space-y-6">
            <div className="text-center space-y-3">
              <div className="inline-flex p-3 rounded-2xl bg-secondary text-primary mx-auto">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Your Custom Botanical Regimen
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Based on your curl density, scalp characteristics, and current priorities, our specialists recommend this targeted 30-day ritual:
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {recommended.map((product, idx) => (
                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-card border border-border/80 hover:border-primary/40 transition-smooth"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover bg-secondary flex-shrink-0"
                    />
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                        Step {idx + 1}: {product.category}
                      </span>
                      <h4 className="font-medium text-sm text-foreground">
                        {product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {product.description}
                      </p>
                      <span className="text-sm font-bold text-primary mt-1 inline-block">
                        {product.priceDisplay}
                      </span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                    <Button
                      size="sm"
                      onClick={() => {
                        addToCart(product);
                        setIsCartOpen(true);
                      }}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 sm:flex-initial"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                      Add to Bag
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      onClick={onClose}
                      className="flex-1 sm:flex-initial"
                    >
                      <Link to={`/product/${product.id}`}>Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={resetQuiz}
                className="text-muted-foreground hover:text-foreground text-xs"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                Retake Diagnostic
              </Button>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button
                  onClick={() => {
                    recommended.forEach((p) => addToCart(p));
                    setIsCartOpen(true);
                    onClose();
                  }}
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                >
                  Add Complete Regimen to Bag
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
