import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import BookingPreview from "@/components/BookingPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <FeaturedProducts />
        <Testimonials />
        <BookingPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
