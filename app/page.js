import AboutUs from "./components/AboutUs";
import TrustedClientsSection from "./components/Clients";
import ContactSection from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PortfolioSection from "./components/Portfolio";
import ServicesSection from "./components/Services";
import TestimonialsSection from "./components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <AboutUs />
      <PortfolioSection />
      <ServicesSection />
      <TrustedClientsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
