import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, ShieldCheck, Truck, CheckCircle2, Lock, Tag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { usePaystackPayment } from "react-paystack";

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, clearCart, total, itemCount } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "Lagos",
    notes: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const freeShippingThreshold = 25000;
  const shippingFee = total >= freeShippingThreshold || total === 0 ? 0 : 2500;
  const finalTotal = Math.max(0, total - discount + shippingFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode) return;
    if (promoCode.toUpperCase() === "ROYAL10" || promoCode.toUpperCase() === "WELCOME10") {
      const disc = Math.round(total * 0.1);
      setDiscount(disc);
      toast.success("Promo code applied: 10% Royal Discount!");
    } else {
      toast.error("Invalid coupon code. Try ROYAL10");
    }
  };

  // Paystack configuration
  const paystackKey =
    import.meta.env.VITE_PAYSTACK_PUBLIC_KEY ||
    "pk_test_placeholder_key_for_development";

  const config = {
    reference: `UNIQUE_${new Date().getTime()}`,
    email: customer.email || "guest@uniquehairtreatment.com",
    amount: Math.round(finalTotal * 100), // in kobo
    publicKey: paystackKey,
    metadata: {
      custom_fields: [
        { display_name: "Customer Name", variable_name: "customer_name", value: customer.name },
        { display_name: "Phone Number", variable_name: "phone_number", value: customer.phone },
        { display_name: "Delivery Address", variable_name: "delivery_address", value: `${customer.address}, ${customer.city}, ${customer.state}` },
      ]
    }
  };

  const initializePayment = usePaystackPayment(config);

  const handlePaystackSuccess = (reference: unknown) => {
    setIsProcessing(false);
    toast.success("Payment Successful! Your Royal Hair Care parcel is being packaged.");
    clearCart();
    // Redirect or show order receipt
  };

  const handlePaystackClose = () => {
    setIsProcessing(false);
    toast.info("Payment session was cancelled. Your bag items remain saved.");
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.name || !customer.email || !customer.phone || !customer.address) {
      toast.error("Please complete your delivery name, email, phone, and address.");
      return;
    }

    setIsProcessing(true);

    if (paystackKey && !paystackKey.includes("placeholder")) {
      // Real Paystack
      initializePayment({
        onSuccess: handlePaystackSuccess,
        onClose: handlePaystackClose
      });
    } else {
      // Mock simulation for dev environment with immediate confirmation
      setTimeout(() => {
        setIsProcessing(false);
        toast.success(`Order Confirmed! Reference: ${config.reference}. A receipt was sent to ${customer.email}.`);
        clearCart();
      }, 1200);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center mb-6 text-primary">
            <ShoppingBag className="w-10 h-10 opacity-70" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Your Bag is Empty</h1>
          <p className="text-sm text-muted-foreground max-w-sm mb-8">
            You haven't selected any organic formulations yet. Explore our handcrafted botanical range to awaken your crown.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8">
            <Link to="/products">Explore Botanical Catalog</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="mb-8">
            <Link to="/products" className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              Continue Shopping
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
              Review Bag & Express Checkout
            </h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Cart Items List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-card rounded-3xl border border-border p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Selected Items ({itemCount})
                  </h3>
                  <button
                    onClick={clearCart}
                    className="text-xs text-muted-foreground hover:text-destructive transition-colors"
                  >
                    Clear all items
                  </button>
                </div>

                <div className="divide-y divide-border">
                  {items.map((item) => (
                    <div key={item.id} className="py-4 flex gap-4 items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-2xl object-cover bg-secondary flex-shrink-0"
                      />
                      
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold text-sm text-foreground line-clamp-1">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-muted-foreground hover:text-destructive p-1"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        {item.size && (
                          <p className="text-xs text-muted-foreground">{item.size}</p>
                        )}

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-border rounded-lg bg-background">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-secondary rounded-l-lg text-muted-foreground"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 text-xs font-bold text-foreground">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-secondary rounded-r-lg text-muted-foreground"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="font-serif text-base font-bold text-foreground">
                            ₦{(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promo Code Box */}
              <div className="bg-card rounded-2xl border border-border p-4 shadow-sm">
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Have a voucher code? (e.g. ROYAL10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="pl-9 bg-background uppercase text-xs"
                    />
                  </div>
                  <Button type="submit" variant="secondary" className="text-xs font-semibold">
                    Apply Code
                  </Button>
                </form>
              </div>
            </div>

            {/* Right: Checkout Shipping & Payment Form */}
            <div className="lg:col-span-5 space-y-6">
              <form onSubmit={handleCheckout} className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-elegant space-y-6">
                <h3 className="font-serif text-xl font-bold text-foreground border-b border-border pb-3 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  Delivery & Shipping Details
                </h3>

                <div className="space-y-3.5">
                  <div>
                    <label className="text-xs font-semibold text-foreground block mb-1">Full Recipient Name *</label>
                    <Input
                      required
                      placeholder="e.g. Amina Al-Hassan"
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      className="bg-background text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">Email Address *</label>
                      <Input
                        required
                        type="email"
                        placeholder="amina@example.com"
                        value={customer.email}
                        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                        className="bg-background text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">WhatsApp / Phone *</label>
                      <Input
                        required
                        type="tel"
                        placeholder="+234 800..."
                        value={customer.phone}
                        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                        className="bg-background text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-foreground block mb-1">Street Address / Landmark *</label>
                    <Input
                      required
                      placeholder="e.g. 14 Admiralty Way, Lekki Phase 1"
                      value={customer.address}
                      onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      className="bg-background text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">City *</label>
                      <Input
                        required
                        placeholder="Lekki / Ikeja / Garki"
                        value={customer.city}
                        onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                        className="bg-background text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">State *</label>
                      <select
                        value={customer.state}
                        onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-xs font-medium text-foreground focus-visible:outline-none"
                      >
                        <option value="Lagos">Lagos State</option>
                        <option value="Abuja">Abuja (FCT)</option>
                        <option value="Rivers">Rivers (Port Harcourt)</option>
                        <option value="Oyo">Oyo (Ibadan)</option>
                        <option value="Ogun">Ogun State</option>
                        <option value="Enugu">Enugu State</option>
                        <option value="Delta">Delta State</option>
                        <option value="Other">Other States (Nationwide)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="pt-4 border-t border-border space-y-2 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Items Subtotal</span>
                    <span className="font-semibold text-foreground">₦{total.toLocaleString()}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-accent font-semibold">
                      <span>Royal VIP Discount</span>
                      <span>-₦{discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-muted-foreground">
                    <span>Nationwide Express Delivery</span>
                    <span>{shippingFee === 0 ? <strong className="text-primary">FREE</strong> : `₦${shippingFee.toLocaleString()}`}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-foreground pt-2 border-t border-border">
                    <span>Final Total</span>
                    <span className="text-primary font-serif text-2xl">₦{finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Checkout Submit CTA */}
                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-13 text-sm font-semibold shadow-glow rounded-xl"
                >
                  {isProcessing ? (
                    "Connecting to Secure Paystack Gateway..."
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Lock className="w-4 h-4 text-accent" />
                      Pay ₦{finalTotal.toLocaleString()} with Paystack
                    </span>
                  )}
                </Button>

                <p className="text-center text-[11px] text-muted-foreground flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  Supports Debit Cards, Bank Transfer, Apple Pay, and USSD
                </p>
              </form>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
