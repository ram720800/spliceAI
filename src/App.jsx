import React from "react";
import "./App.css";
import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { Features } from "./sections/features";
import { useState } from "react";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features/>
    </main>
  );
}
export default App;
