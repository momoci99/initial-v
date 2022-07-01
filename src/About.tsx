import ImageAboutus from "./assets/image/aboutus.jpeg";
import "./assets/styles/About.scoped.css";
function About() {
  return (
    <div className="About">
      <img
        className="about--image"
        src={ImageAboutus}
        alt="동아리 소개 이미지"
      ></img>
      <article className="about__contents">
        <p className="about__contents--title">About us</p>

        <p className="about__contents--description">
          <a href="https://virnect.com/">VIRNECT</a> 사내 드라이빙 동호회로
          활동하고 있습니다. 가입 문의는 사내 동아리로 문의 부탁드립니다.
        </p>
      </article>
    </div>
  );
}

export default About;
