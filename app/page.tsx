import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div style={{ background: '#141414', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
    </div>
  );
}
