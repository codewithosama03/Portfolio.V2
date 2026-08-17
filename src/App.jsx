

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import BeyondCode from "./components/BeyondCode";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function App() {
  return (
    <div className="bg-white dark:bg-[#0f1115] transition-colors duration-500">

      <Navbar />

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal delay={0.05}>
        <About />
      </Reveal>

      <Reveal delay={0.1}>
        <Projects />
      </Reveal>

      <Reveal delay={0.15}>
        <BeyondCode />
      </Reveal>

      <Reveal delay={0.2}>
        <Footer />
      </Reveal>

    </div>
  );
}