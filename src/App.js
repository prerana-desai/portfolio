// App.js
import React, { useState } from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div style={{
      background: darkMode 
        ? "linear-gradient(270deg, #0f2027, #203a43, #2c5364)" 
        : "linear-gradient(135deg, #ffecb3, #fff8e1, #ffe0b2)",
      color: darkMode ? "#fff" : "#000",
      transition: "all 0.5s ease"
    }}>
      <Navbar scrollToSection darkMode={darkMode} toggleMode={toggleMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}



export default App;
