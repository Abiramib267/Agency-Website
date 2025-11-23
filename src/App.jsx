import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/Home";
import Clients from "../src/components/Clients";
import Community from "../src/components/Community";
import Pixelgrade from "../src/components/Pixelgrade";
import Hero from "../src/components/Hero";
import Stats from "../src/components/Stats";
import FooterDesign from "../src/components/FooterDesign";
import Testimonial from "../src/components/Testimonial";
import BlogSection from "../src/components/BlogSection";
import CTA from "../src/components/CTA";
import Footer from "../src/components/Footer";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Clients />
              <Community />
              <Pixelgrade />
              <FooterDesign />
              <Testimonial />
              <BlogSection />
              <CTA />
              <Footer />
              <Hero />
              <Stats />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
