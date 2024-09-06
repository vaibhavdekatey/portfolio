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

function App() {
  return (
    <>
      <div>
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
    </>
  );
}

export default App;
