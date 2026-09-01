import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Sparkles, Menu, X, Calendar, BookOpen, Crown, Search } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { HairQuizModal } from "@/components/HairQuizModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop Formulas", path: "/products" },
    { name: "Salon & Steam Bar", path: "/booking" },
    { name: "Trichology Guides", path: "/resources" },
    { name: "Royal VIP Club", path: "/loyalty" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-sm transition-smooth">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-glow group-hover:scale-105 transition-transform">
                <Crown className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-none">
                  Unique
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-muted-foreground mt-0.5">
                  Hair Treatment
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Clean single-line layout with no awkward line wrapping) */}
            <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-smooth whitespace-nowrap ${
                    isActive(link.path)
                      ? "text-primary bg-secondary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Action Icons & Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Hair Quiz Button (visible on xl+) */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsQuizOpen(true)}
                className="hidden xl:inline-flex items-center gap-1.5 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary font-medium text-xs rounded-full px-4 h-9 whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Find My Regimen
              </Button>

              {/* Booking CTA (visible on tablets & desktops) */}
              <Button
                asChild
                size="sm"
                className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 sm:px-5 h-9 sm:h-10 text-xs font-semibold shadow-glow whitespace-nowrap"
              >
                <Link to="/booking" className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Book Consult
                </Link>
              </Button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full hover:bg-secondary transition-colors text-foreground group"
                aria-label="Open Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center animate-in zoom-in-50">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile/Tablet Menu Toggle (visible below xl) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-2 rounded-xl border border-border hover:bg-secondary text-foreground transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Drawer Menu */}
        {isOpen && (
          <div className="xl:hidden border-t border-border bg-card px-4 sm:px-6 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
            <div className="grid sm:grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm sm:text-base font-medium flex items-center justify-between transition-colors ${
                    isActive(link.path)
                      ? "text-primary bg-secondary font-semibold"
                      : "text-foreground hover:bg-secondary/60"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-2.5 pt-3 border-t border-border">
              <Button
                onClick={() => {
                  setIsOpen(false);
                  setIsQuizOpen(true);
                }}
                variant="outline"
                className="w-full justify-center gap-2 border-primary/40 text-primary rounded-xl h-11"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                Hair Diagnostic Quiz
              </Button>
              <Button
                asChild
                onClick={() => setIsOpen(false)}
                className="w-full justify-center gap-2 bg-primary text-primary-foreground rounded-xl h-11"
              >
                <Link to="/booking">
                  <Calendar className="w-4 h-4" />
                  Book Salon / Consult
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Hair Quiz Modal */}
      <HairQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </>
  );
};

export default Header;
