import React from "react";

import "./assets/styles/App.css";
import "./assets/styles/reset.css";
import Header from "./Header";
import Hero from "./Hero";
import SubHero from "./SubHero";
import Main from "./Main";
import Rule from "./Rule";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero></Hero>
      <SubHero></SubHero>
      <Main></Main>
      <Rule></Rule>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
