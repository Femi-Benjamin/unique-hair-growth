import { Crown, Phone, Mail, MapPin, Instagram, Facebook, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    toast.success("Welcome to the Royal Circle! Your 10% voucher code has been emailed.");
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-card border-t border-border text-foreground pt-16 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Top Newsletter & Brand Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-secondary/50 border border-border mb-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Join the Royal Circle</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Receive 10% Off Your First Order + Weekly Trichology Tips
            </h3>
            <p className="text-xs text-muted-foreground">
              Direct access to our hair specialists, private flash drops, and science-backed natural growth regimens.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2.5">
              <Input
                type="email"
                required
                placeholder="Enter your email address..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-background h-12 text-sm rounded-xl"
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 rounded-xl font-semibold flex-shrink-0">
                Join VIP Club
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-glow">
                <Crown className="w-4 h-4 text-accent" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                Unique Hair Treatment
              </span>
            </Link>
            
            <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
              Hand-crafted botanical hair treatments, cold-pressed scalp elixirs, and professional salon trichology care designed to restore natural hair to regal glory.
            </p>

            <div className="flex gap-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth text-muted-foreground"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth text-muted-foreground"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/2347054405537"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth text-muted-foreground"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Formulas */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-foreground uppercase tracking-wider">
              Formulations
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/products" className="hover:text-primary transition-colors">Growth & Scalp Oils</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Deep Moisture Masques</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Anti-Dandruff Serums</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Edge Restoration Balms</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Clarifying Black Soaps</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Complete Bundles (Save 15%)</Link></li>
            </ul>
          </div>

          {/* Services & Salon */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-foreground uppercase tracking-wider">
              Salon & Care
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/booking" className="hover:text-primary transition-colors">Book Salon Steam Bar</Link></li>
              <li><Link to="/booking" className="hover:text-primary transition-colors">Virtual Video Consult</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Trichology Knowledge Base</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Porosity & Hair Quiz</Link></li>
              <li><Link to="/loyalty" className="hover:text-primary transition-colors">Royal VIP Membership</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-foreground uppercase tracking-wider">
              Assistance
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><span className="block text-foreground font-semibold">Phone:</span> +234 705 440 5537</li>
              <li><span className="block text-foreground font-semibold">Email:</span> care@uniquehairtreatment.com</li>
              <li><span className="block text-foreground font-semibold">Delivery:</span> Nationwide 1-3 Business Days</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Unique Hair Treatment. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-primary" />
              100% Guaranteed Authentic African Botanicals
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
