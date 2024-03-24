import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <Header />
        <About />
        <Features />
      </main>
    </>
  );
}

export default App;
