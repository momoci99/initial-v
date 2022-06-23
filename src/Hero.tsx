import "./assets/styles/Hero.css";
import HeroImage from "./assets/image/hero.png";
function Hero() {
  return (
    <div className="Hero">
      <h1 className="hero-header">DRIVING EMOTION</h1>
      <img className="hero-image" src={HeroImage} alt=""></img>
    </div>
  );
}

export default Hero;
