import "./assets/styles/Main.scoped.css";

import ImageInje from "./assets/image/inje.png";
import ImageChpungho from "./assets/image/chpungho.jpeg";
import ImageJungmimt from "./assets/image/jungmimt.png";
import ImageLoco from "./assets/image/loco.jpeg";
import ImageKangrung from "./assets/image/kangrung.png";
import ImageYoungjong from "./assets/image/youngjong.jpg";

import ImageCard from "./ImageCard";
function Main() {
  return (
    <div className="Main">
      <h2 className="main-header">Finding Pleasure</h2>
      <p className="main-sub-header">드라이빙의 즐거움을 찾아갑니다.</p>

      <div className="main-image__grid">
        <ImageCard
          customClass="card3"
          imageSrc={ImageInje}
          titlePosition="top-left"
          title="인제"
        ></ImageCard>

        <ImageCard
          customClass="card1"
          imageSrc={ImageYoungjong}
          titlePosition="top-left"
          title="영종도"
        ></ImageCard>

        <ImageCard
          customClass="card2"
          imageSrc={ImageLoco}
          titlePosition="bottom-left"
          title="로코갤러리"
        ></ImageCard>

        <ImageCard
          customClass="card4"
          imageSrc={ImageKangrung}
          titlePosition="top-right"
          title="강릉"
        ></ImageCard>

        <ImageCard
          customClass="card5"
          imageSrc={ImageChpungho}
          titlePosition="bottom-right"
          title="청평호"
        ></ImageCard>

        <ImageCard
          customClass="card6"
          imageSrc={ImageJungmimt}
          titlePosition="top-left"
          title="중미산"
        ></ImageCard>
      </div>
    </div>
  );
}

export default Main;
