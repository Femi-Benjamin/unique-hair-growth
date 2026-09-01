import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { salonServices } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Video, MapPin, Sparkles, CheckCircle2, Clock, ShieldCheck, User, Phone, Mail, Award } from "lucide-react";
import { toast } from "sonner";

const Booking = () => {
  const [selectedService, setSelectedService] = useState(salonServices[0]);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("10:00 AM");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hairType: "4A-4C Coily",
    notes: ""
  });
  const [isBooked, setIsBooked] = useState(false);

  const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "3:30 PM", "5:00 PM"];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !bookingDate) {
      toast.error("Please fill in all required booking details.");
      return;
    }

    setIsBooked(true);
    toast.success("Consultation Request Received! A specialist will confirm your slot via WhatsApp.");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-primary">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Certified Trichology Clinic
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Book Your Scalp & Hair Consultation
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Targeted treatments designed to diagnose root causes of hair loss, eliminate persistent scalp irritation, and formulate your personalized 90-day recovery blueprint.
            </p>
          </div>

          {!isBooked ? (
            <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Service Selector */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  1. Select Clinical Service
                </h3>

                <div className="space-y-3">
                  {salonServices.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-smooth ${
                        selectedService.id === service.id
                          ? "bg-secondary/40 border-primary shadow-sm"
                          : "bg-card border-border hover:border-primary/40"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-accent tracking-wider">
                            {service.category} • {service.duration}
                          </span>
                          <h4 className="font-serif font-bold text-base text-foreground mt-0.5">
                            {service.name}
                          </h4>
                        </div>
                        <span className="font-serif text-lg font-bold text-primary">
                          {service.priceDisplay}
                        </span>
                      </div>

                      <p className="text-xs text-muted-foreground mb-3">
                        {service.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-border/60">
                        {service.includes.map((inc, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] text-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Studio Location card */}
                <div className="p-4 rounded-2xl bg-card border border-border flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-xs space-y-0.5">
                    <p className="font-bold text-foreground">Flagship Steam Bar & Clinic</p>
                    <p className="text-muted-foreground">Plot 12, Victoria Island, Lagos & Wuse 2, Abuja</p>
                    <p className="text-muted-foreground">Appointments available Monday – Saturday.</p>
                  </div>
                </div>
              </div>

              {/* Right Booking Details & Form */}
              <div className="lg:col-span-6">
                <form onSubmit={handleBooking} className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-elegant space-y-6">
                  <h3 className="font-serif text-xl font-bold text-foreground border-b border-border pb-3">
                    2. Appointment Details & Contact
                  </h3>

                  {/* Date & Time */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground block">Preferred Date *</label>
                      <Input
                        required
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="bg-background text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground block">Preferred Time Slot *</label>
                      <select
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-xs font-medium text-foreground focus-visible:outline-none"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-3.5 pt-2 border-t border-border">
                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">Your Full Name *</label>
                      <Input
                        required
                        placeholder="e.g. Zainab Adeleke"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background text-xs"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-foreground block mb-1">Email *</label>
                        <Input
                          required
                          type="email"
                          placeholder="zainab@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-background text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-foreground block mb-1">WhatsApp / Phone *</label>
                        <Input
                          required
                          type="tel"
                          placeholder="+234 800..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-background text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">Current Hair State / Texture</label>
                      <select
                        value={formData.hairType}
                        onChange={(e) => setFormData({ ...formData, hairType: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-xs font-medium text-foreground focus-visible:outline-none"
                      >
                        <option value="4A-4C Coily">Type 4 (Coily / Kinky)</option>
                        <option value="3A-3C Curly">Type 3 (Curly)</option>
                        <option value="Locs / Sisterlocks">Locs / Sisterlocks</option>
                        <option value="Transitioning / Relaxed">Transitioning / Relaxed</option>
                        <option value="Severe Alopecia / Thinning">Experiencing Thinning / Receding Edges</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-foreground block mb-1">Notes or Primary Scalp Concerns</label>
                      <Textarea
                        rows={3}
                        placeholder="Any prior chemical treatments, sensitivities, or specific goals..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="bg-background resize-none text-xs"
                      />
                    </div>
                  </div>

                  {/* Summary & Submit */}
                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Consultation Total:</span>
                      <span className="font-serif text-xl font-bold text-primary">{selectedService.priceDisplay}</span>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-sm font-semibold shadow-glow rounded-xl"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Confirm Consultation Booking
                    </Button>
                    
                    <p className="text-center text-[11px] text-muted-foreground flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                      No immediate prepayment required. Pay at the salon or prior to virtual call.
                    </p>
                  </div>

                </form>
              </div>

            </div>
          ) : (
            <div className="max-w-xl mx-auto bg-card rounded-3xl border border-border p-8 text-center space-y-6 shadow-elegant">
              <div className="w-16 h-16 rounded-full bg-secondary text-primary mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <div className="space-y-2">
                <h2 className="font-serif text-3xl font-bold text-foreground">Appointment Requested!</h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Thank you, <strong className="text-foreground">{formData.name}</strong>. We have reserved your provisional slot for <strong>{selectedService.name}</strong> on <strong>{bookingDate} at {bookingTime}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/30 text-xs text-left space-y-1.5 border border-border/80">
                <p className="font-semibold text-primary">What happens next?</p>
                <p className="text-muted-foreground">Our trichology care desk will reach out to <strong>{formData.phone}</strong> via WhatsApp with appointment confirmation details and preparation instructions.</p>
              </div>

              <Button onClick={() => setIsBooked(false)} className="bg-primary text-primary-foreground">
                Book Another Session
              </Button>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
