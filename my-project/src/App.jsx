import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ این خط خیلی مهم است

import Navbar from "./Components/Navbar";
import Login from "./Components/Login";

import HeroSection from "./Components/HeroSection";
import PropertySection from "./Components/PropertySection";
import TestimonialsSection from "./Components/TestimonialsSection";
import PropertyListing from "./Components/PropertyListing";
import JoinTeamSection from "./Components/JoinTeamSection";
import ExclusiveProperties from "./Components/ExclusiveProperties";
import FAQSection from "./Components/FAQSection";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <PropertySection />
              <TestimonialsSection />
              <PropertyListing />
              <JoinTeamSection />
              <ExclusiveProperties />
              <FAQSection />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
