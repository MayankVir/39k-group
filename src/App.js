import CareerSection from "./components/CareerSection/CareerSection";
import DataSection from "./components/DataSection/DataSection";
import FaqSection from "./components/FaqSection/FaqSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PartnerSection from "./components/PartnersSection/PartnerSection";
import ServiceSection from "./components/ServicesSection/ServiceSection";

import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      {/* <AnimatedCursor
        color="203,256,123"
        innerSize={20}
        outerSize={0}
        innerScale={1}
        outerScale={1.7}
        // outerAlpha={0}
        // outerStyle={{
        //   mixBlendMode: "exclusion",
        // }}
        innerStyle={{
          backgroundColor: "rgb(58, 0, 141)",
        }}
        // outerStyle={{
        //   border: "3px solid rgb(203,256,123)",
        // }}
      /> */}
      <Header />
      <Hero />
      <DataSection />
      <ServiceSection />
      <PartnerSection />
      <FaqSection />
      <CareerSection />
      <Footer />
    </div>
  );
}

export default App;
