import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PortfolioSection from "./components/Portfolio";
import ServicesSection from "./components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <AboutUs />
      <PortfolioSection />
      <ServicesSection />
    </main>
  );
}
