import React from "react";

import Hero from "./components/Hero/Hero";
import Probrem from "./components/Probrem/Probrem";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Instructor from "./components/Instructor/Instructor";
import Voice from "./components/Voice/Voice";
import Plan from "./components/Plan/Plan";
import Faq from "./components/Faq/Faq";
import Company from "./components/Company/Company";
import Other from "./components/Other/Other";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <main className="main">
      <Hero />
      <Probrem />
      <About className="content" />
      <Features className="content" />
      <Instructor className="content" />
      <Voice />
      <Plan />
      <Faq />
      <Company />
      <Other />
      <Footer />
    </main>
  );
}

export default App;
