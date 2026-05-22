import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ background: '#141414', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Overview />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
