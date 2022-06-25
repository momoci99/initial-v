import "./assets/styles/SubHero.scoped.css";
import SubHeroImageTop from "./assets/image/SubHero1.png";
import SubHeroImageBottom from "./assets/image/SubHero2.png";
function SubHero() {
  return (
    <div className="SubHero">
      <div className="sub-hero__wrapper">
        <img className="sub-hero__image" src={SubHeroImageTop} alt=""></img>
        <h2 className="sub-hero__text right">
          DRIVING<br></br>TOGETHER
        </h2>
      </div>
      <div className="sub-hero__wrapper">
        <img className="sub-hero__image" src={SubHeroImageBottom} alt=""></img>
        <h2 className="sub-hero__text left">
          LEARNING<br></br>SKILLS
        </h2>
      </div>
    </div>
  );
}

export default SubHero;
