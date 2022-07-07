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

import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="Hero"></Element>
      <Hero></Hero>
      <SubHero></SubHero>
      <Element name="Gallery"></Element>
      <Main></Main>
      <Element name="Rule"></Element>
      <Rule></Rule>
      <Element name="Aboutus"></Element>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
