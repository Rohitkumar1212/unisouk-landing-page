import React, { lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Hero from "./HeroSection/HeroSection";

// Lazy-loaded components
const EfficiencyHighlights = lazy(() => import("./EfficiencyHighlights/EfficiencyHighlights"));
const Features = lazy(() => import("./Features/Features"));
const TeamSection = lazy(() => import("./Team/TeamSection"));
const BlogShowcaseSection = lazy(() => import("./BlogShowcase/BlogShowcaseSection"));
const FooterSection = lazy(() => import("./Footer/FooterSection"));

export default function LandingPage() {
  return <div className="">
    <Navbar/>
    <Hero />
    
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <EfficiencyHighlights />
        <Features />
        <TeamSection />
        <BlogShowcaseSection />
        <FooterSection />
    </Suspense>
  </div>;
}
