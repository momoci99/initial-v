import React from "react";

import "./assets/styles/App.css";
import "./assets/styles/reset.css";
import Header from "./Header";
import Hero from "./Hero";
import SubHero from "./SubHero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero></Hero>
      <SubHero></SubHero>
    </div>
  );
}

export default App;
