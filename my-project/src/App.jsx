import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import PropertySection from "./Components/PropertySection";
import TestimonialsSection from "../src/Components/TestimonialsSection";
import PropertyListing from "../src/Components/PropertyListing";
import MapSection from "./Components/MapSection";
import JoinTeamSection from "./Components/JoinTeamSection";
import ExclusiveProperties from "./Components/ExclusiveProperties";
import FAQSection from "./Components/FAQSection";
function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <PropertySection />
        <MapSection />
        <TestimonialsSection />
        <PropertyListing />
        <JoinTeamSection />
        <ExclusiveProperties />
        <FAQSection />
      </div>
    </div>
  );
}
export default App;
