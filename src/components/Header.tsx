import { Phone, ShoppingCart, Menu, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Phone/WhatsApp */}
      <div className="bg-secondary border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-secondary/95">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex gap-4 items-center">
            <a 
              href="tel:0814437-4707" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">0814 437 4707</span>
            </a>
            <span className="text-muted-foreground hidden sm:inline">|</span>
            <a 
              href="https://wa.me/27814437-4707" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full h-4 w-4 text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-card/50 border-b border-border sticky top-[52px] z-40 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Crown className="h-8 w-8 text-gold drop-shadow-gold" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-smooth">
                  Dhee's Organic
                </h1>
                <p className="text-xs text-muted-foreground">Hair Treatment</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#products" className="text-foreground hover:text-primary transition-smooth">
                Products
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth">
                About
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth">
                Reviews
              </a>
              <a href="#booking" className="text-foreground hover:text-primary transition-smooth">
                Book Consultation
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="hero" size="lg">
                Shop Products
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-border flex flex-col gap-4">
              <a href="#products" className="text-foreground hover:text-primary transition-smooth py-2">
                Products
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth py-2">
                About
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth py-2">
                Reviews
              </a>
              <a href="#booking" className="text-foreground hover:text-primary transition-smooth py-2">
                Book Consultation
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth py-2">
                Contact
              </a>
              <Button variant="hero" className="w-full">
                Shop Products
              </Button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
