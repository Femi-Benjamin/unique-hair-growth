import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Crown, Sparkles, Gift, Award, CheckCircle2, Star, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Loyalty = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast.error("Please provide both your name and email.");
      return;
    }
    setJoined(true);
    toast.success("Welcome to the Royal VIP Circle! You have earned 100 Crown Points & a 10% voucher.");
  };

  const tiers = [
    {
      name: "Silver Crown",
      spend: "Free to Join",
      pointsRate: "1 Point per ₦100 Spent",
      perks: [
        "10% Welcome Discount Voucher",
        "Birthday Gift & Exclusive Flash Sales",
        "Free Access to Trichology Guides",
      ],
      current: true,
    },
    {
      name: "Gold Crown",
      spend: "₦100,000 Annual Spend",
      pointsRate: "1.5 Points per ₦100 Spent",
      perks: [
        "All Silver Perks",
        "Free Nationwide Express Delivery on All Orders",
        "Early Access to Limited Botanical Drops",
        "Quarterly Free Gift with Orders",
      ],
      current: false,
      popular: true,
    },
    {
      name: "Imperial Royalty",
      spend: "₦250,000+ Annual Spend",
      pointsRate: "2 Points per ₦100 Spent",
      perks: [
        "All Gold Perks",
        "Complimentary Annual Virtual Trichology Session",
        "Custom Formulations on Request",
        "Dedicated VIP WhatsApp Concierge",
      ],
      current: false,
    },
  ];

  const earnWays = [
    { title: "Create an Account", points: "+100 Points", desc: "Instantly credited upon registration." },
    { title: "Place an Order", points: "1 Pt / ₦100", desc: "Redeemable for cash discounts at checkout." },
    { title: "Leave a Verified Review", points: "+150 Points", desc: "Share your transformation review with photos." },
    { title: "Refer a Friend", points: "+500 Points", desc: "Give 15% off, get ₦2,500 off your next order." },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Header Banner */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary text-primary border border-primary/20 text-xs font-semibold">
              <Crown className="w-3.5 h-3.5 text-accent" />
              <span>Royal VIP Rewards Program</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Your Crown Deserves <span className="text-primary italic font-normal">Royal Treatment.</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Earn Crown Points on every botanical formulation, unlock exclusive VIP drops, and enjoy complimentary salon trichology perks.
            </p>
          </div>

          {/* Join VIP Box */}
          {!joined ? (
            <div className="max-w-2xl mx-auto bg-card rounded-3xl border border-border p-8 md:p-10 shadow-elegant mb-16 space-y-6 text-center">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Join the Royal Circle & Get 10% Off
                </h3>
                <p className="text-xs text-muted-foreground">
                  Enter your details below to activate your VIP membership and immediately receive 100 Crown Points.
                </p>
              </div>

              <form onSubmit={handleJoin} className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                <Input
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background text-xs"
                />
                <Input
                  required
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background text-xs"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="sm:col-span-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3.5 text-sm font-semibold shadow-glow rounded-full min-h-[48px]"
                >
                  <Crown className="w-4 h-4 mr-1.5 text-accent" />
                  Activate Royal VIP Membership
                </Button>
              </form>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-card rounded-3xl border border-border p-8 text-center space-y-4 shadow-elegant mb-16">
              <div className="w-12 h-12 rounded-full bg-secondary text-primary mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">Welcome to the Royal Circle, {name}!</h3>
              <p className="text-xs text-muted-foreground">
                Your account is active. Use promo code <strong className="text-primary font-bold">ROYAL10</strong> at checkout for 10% off your first order.
              </p>
              <Button asChild className="bg-primary text-primary-foreground">
                <Link to="/products">Shop Botanical Formulas</Link>
              </Button>
            </div>
          )}

          {/* Tiers Breakdown */}
          <div className="mb-20">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                VIP Membership Tiers
              </h2>
              <p className="text-xs text-muted-foreground">
                Progress through our royal tiers to unlock elevated perks and private salon sessions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-smooth ${
                    tier.popular
                      ? "bg-secondary/40 border-2 border-primary shadow-elegant relative"
                      : "bg-card border border-border shadow-sm"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground">
                      Most Popular Tier
                    </span>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">{tier.name}</h3>
                      <p className="text-xs font-semibold text-primary mt-0.5">{tier.spend}</p>
                    </div>

                    <p className="text-xs text-muted-foreground bg-background/60 p-2.5 rounded-xl border border-border/60">
                      ⚡ {tier.pointsRate}
                    </p>

                    <div className="space-y-2 pt-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Tier Benefits:</p>
                      {tier.perks.map((perk, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border">
                    <Button
                      asChild
                      variant={tier.popular ? "default" : "outline"}
                      className="w-full text-xs font-semibold rounded-xl"
                    >
                      <Link to="/products">Start Earning Points</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ways to Earn Points */}
          <div className="max-w-4xl mx-auto bg-card rounded-3xl border border-border p-8 md:p-12 shadow-sm space-y-8">
            <div className="text-center space-y-2">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                How to Earn Crown Points
              </h3>
              <p className="text-xs text-muted-foreground">
                Every interaction earns points redeemable for discounts, gifts, and salon treatments.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {earnWays.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-secondary/30 border border-border/80 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-primary text-primary-foreground shadow-sm">
                    <Star className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                      <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {item.points}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Loyalty;
