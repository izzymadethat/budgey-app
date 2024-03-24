import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Tutorial from "./components/Tutorial";
import BigUsers from "./components/BigUsers";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <Header />
      </main>
      <BigUsers />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <About />
        <Features />
        <Tutorial />
        <Pricing />
      </div>
    </>
  );
}

export default App;
