import React from "react";
import "./App.css";
import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { useState } from "react";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
    </main>
  );
}
export default App;
