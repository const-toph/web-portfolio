import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;
