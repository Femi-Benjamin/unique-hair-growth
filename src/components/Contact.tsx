import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { toast } from "sonner";
import { ScrollReveal } from "@/components/ui/ScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Hair Regimen Inquiry",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message received! Our trichology care team will respond within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Hair Regimen Inquiry",
        message: ""
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        <ScrollReveal direction="down" className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-primary">
            <MessageSquare className="w-3.5 h-3.5 text-accent" />
            Direct Specialist Access
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Connect With Our <span className="text-primary italic font-normal">Care Concierge.</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Have questions about an ingredient, shipping, or need advice selecting the right formulation for your hair porosity? We are here to guide you.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} className="max-w-5xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Contact Details Left Card */}
          <div className="lg:col-span-5 bg-primary text-primary-foreground p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-elegant flex flex-col justify-between gap-8 relative overflow-hidden">
            {/* Subtle background luxury glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="space-y-6 relative z-10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent/90 block mb-1">
                  Direct Inquiries
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary-foreground">
                  Headquarters & Consultation Suite
                </h3>
                <p className="text-xs sm:text-sm text-primary-foreground/80 leading-relaxed mt-2">
                  Reach out directly or visit our flagship studios for in-person product testing and professional scalp diagnostics.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 pt-1">
                {/* Phone Link */}
                <a
                  href="tel:+2347054405537"
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-all group border border-primary-foreground/10"
                >
                  <div className="p-2.5 rounded-xl bg-primary-foreground/15 text-accent group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-primary-foreground/70 font-medium">Direct Care Line</p>
                    <p className="text-sm sm:text-base font-semibold group-hover:text-accent transition-colors">+234 705 440 5537</p>
                  </div>
                </a>

                {/* Email Link */}
                <a
                  href="mailto:care@uniquehairtreatment.com"
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-all group border border-primary-foreground/10"
                >
                  <div className="p-2.5 rounded-xl bg-primary-foreground/15 text-accent group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-primary-foreground/70 font-medium">Specialist Concierge</p>
                    <p className="text-sm sm:text-base font-semibold truncate group-hover:text-accent transition-colors">care@uniquehairtreatment.com</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/10">
                  <div className="p-2.5 rounded-xl bg-primary-foreground/15 text-accent shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-primary-foreground/70 font-medium">Flagship Locations</p>
                    <p className="text-sm sm:text-base font-semibold">Victoria Island, Lagos & Maitama, Abuja</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/10">
                  <div className="p-2.5 rounded-xl bg-primary-foreground/15 text-accent shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-primary-foreground/70 font-medium">Consultation Hours</p>
                    <p className="text-sm sm:text-base font-semibold">Mon – Sat: 9:00 AM – 6:00 PM WAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personalized Advice Card */}
            <div className="p-4 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/15 text-xs text-primary-foreground/90 space-y-1.5 relative z-10">
              <p className="font-semibold text-accent flex items-center gap-1.5">
                Complimentary Regimen Guidance
              </p>
              <p className="text-[11px] sm:text-xs text-primary-foreground/80 leading-relaxed">
                Need guidance selecting products for low or high porosity hair? Our specialist team reviews your hair profile and responds within 24 hours.
              </p>
            </div>
          </div>

          {/* Form Right Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-card rounded-2xl sm:rounded-3xl border border-border shadow-elegant flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Send a Consultation Message
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Fill in your hair goals and inquiries below. A trichologist will get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Your Full Name *</label>
                    <Input
                      required
                      placeholder="e.g. Amina Bello"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background h-11 text-base sm:text-sm rounded-xl border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Email Address *</label>
                    <Input
                      required
                      type="email"
                      placeholder="amina@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background h-11 text-base sm:text-sm rounded-xl border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background h-11 text-base sm:text-sm rounded-xl border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border border-border bg-background text-base sm:text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                    >
                      <option value="Hair Regimen Inquiry">Hair Regimen Inquiry</option>
                      <option value="Salon Booking Question">Salon Booking Question</option>
                      <option value="Order & Tracking">Order & Shipping Status</option>
                      <option value="Wholesale / Partnership">Wholesale & Stockist Inquiries</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Message / Hair Goals *</label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Tell us about your hair type, scalp concerns, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background resize-none text-base sm:text-sm rounded-xl p-3.5 leading-relaxed border-border focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 min-h-[50px] px-8 py-3.5 text-base font-semibold shadow-glow rounded-full cursor-pointer transition-all"
                >
                  {isSubmitting ? (
                    "Sending your inquiry..."
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Submit Message to Care Team
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
};

export default Contact;
