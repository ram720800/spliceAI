import React from "react";
import "./App.css";
import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { Features } from "./sections/features";
import { Pricing } from "./sections/pricing";
import { useState , useEffect } from "react";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
export default App;
