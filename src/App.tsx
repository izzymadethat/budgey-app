import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Tutorial from "./components/Tutorial";
import BigUsers from "./components/BigUsers";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";

function App() {
  return (
    <>
      <Navbar />
      <Announcement />
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <Header />
      </main>
      <BigUsers />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <About />
        <Features />
        <Tutorial />
      </div>
      <Pricing />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}

export default App;
