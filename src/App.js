import { useRef } from "react";
import DataSection from "./components/DataSection/DataSection";
import FaqSection from "./components/FaqSection/FaqSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PartnerSection from "./components/PartnersSection/PartnerSection";
import ServiceSection from "./components/ServicesSection/ServiceSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <DataSection />
      <ServiceSection />
      <PartnerSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
