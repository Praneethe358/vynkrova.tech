import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Semantic header landmark wrapping the navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main content landmark */}
      <main
        id="main-content"
        style={{ background: "#141414", minHeight: "100vh" }}
      >
        <Hero />
        <Overview />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
