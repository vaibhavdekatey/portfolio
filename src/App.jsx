import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hello from "./components/Hello";
import Exp from "./components/Exp";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import Mailto from "./components/Mailto";
import Icons from "./components/Socials";
import Blob from "./components/Blob";

function App() {
  return (
    <>
      <div className="overflow-clip">
        <Blob />
        <div style={{ zIndex: 20 }}>
          <Navbar />
          <Mailto />
          <Icons />
          <Hello />
          <Hero />
          <Exp />
          <Projects />
          <GetInTouch />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
