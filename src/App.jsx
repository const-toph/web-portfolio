import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Resume } from "@/sections/Resume";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
