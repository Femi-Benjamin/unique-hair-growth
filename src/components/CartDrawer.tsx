import { useCart } from "@/hooks/useCart";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export const CartDrawer = () => {
  const { items, removeFromCart, updateQuantity, total, itemCount, isCartOpen, setIsCartOpen } = useCart();
  const freeShippingThreshold = 25000;
  const progressToFreeShipping = Math.min(100, (total / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total);

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-background border-l border-border">
        {/* Header */}
        <div className="p-6 border-b border-border/80 bg-card/60 backdrop-blur-md">
          <SheetHeader>
            <div className="flex items-center justify-between">
              <SheetTitle className="font-serif text-2xl font-bold flex items-center gap-2 text-foreground">
                <ShoppingBag className="w-5 h-5 text-primary" />
                Your Bag ({itemCount})
              </SheetTitle>
            </div>
          </SheetHeader>

          {/* Free Shipping Progress bar */}
          <div className="mt-4 p-3 rounded-lg bg-secondary/50 border border-border/50 text-xs">
            {remainingForFreeShipping > 0 ? (
              <div className="space-y-1.5">
                <div className="flex justify-between text-muted-foreground font-medium">
                  <span>Add <strong className="text-foreground">₦{remainingForFreeShipping.toLocaleString()}</strong> for Free Nationwide Delivery</span>
                  <span>{Math.round(progressToFreeShipping)}%</span>
                </div>
                <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent transition-all duration-500 rounded-full"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Truck className="w-4 h-4 text-accent" />
                <span>You qualify for <strong>FREE Nationwide Express Delivery!</strong></span>
              </div>
            )}
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 text-muted-foreground">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-2">Your Bag is Empty</h4>
              <p className="text-sm text-muted-foreground max-w-xs mb-6">
                Discover botanical hair formulas crafted with pure African botanicals.
              </p>
              <Button 
                onClick={() => setIsCartOpen(false)} 
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/products">Explore All Formulations</Link>
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3.5 rounded-xl bg-card border border-border/80 hover:border-primary/30 transition-smooth shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover bg-secondary flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-medium text-sm text-foreground line-clamp-1">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {item.size && (
                      <p className="text-xs text-muted-foreground mt-0.5">{item.size}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/40">
                    <div className="flex items-center border border-border rounded-lg bg-background">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-secondary rounded-l-lg text-muted-foreground hover:text-foreground"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-semibold text-foreground min-w-[28px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-secondary rounded-r-lg text-muted-foreground hover:text-foreground"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-semibold text-sm text-foreground">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-card/80 backdrop-blur-md space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal</span>
                <span className="font-medium text-foreground">₦{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Estimated Shipping</span>
                <span>{total >= freeShippingThreshold ? <span className="text-primary font-semibold">FREE</span> : "Calculated at checkout"}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-foreground pt-2 border-t border-border">
                <span>Total</span>
                <span className="text-primary font-serif text-xl">₦{total.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Button
                asChild
                onClick={() => setIsCartOpen(false)}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-sm font-semibold shadow-glow"
              >
                <Link to="/cart" className="flex items-center justify-center gap-2">
                  Proceed to Secure Checkout
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              
              <p className="text-center text-[11px] text-muted-foreground flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                Secure 256-Bit SSL Encrypted Checkout via Paystack
              </p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
