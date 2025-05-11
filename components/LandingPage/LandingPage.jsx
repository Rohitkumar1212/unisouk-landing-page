import React from "react";
import Navbar from "./Navbar";
import Hero from "./HeroSection/HeroSection";
import EfficiencyHighlights from "./EfficiencyHighlights/EfficiencyHighlights";

export default function LandingPage() {
  return <div>
    <Navbar/>
    <Hero />
    <EfficiencyHighlights />
  </div>;
}
