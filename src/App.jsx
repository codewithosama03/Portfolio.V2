import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import GithubActivity from "./components/GithubActivity";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-gray-800 dark:bg-[#0f1115] dark:text-gray-300 transition-colors duration-500 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <GithubActivity />
      <Footer />
    </div>
  );
}

export default App;