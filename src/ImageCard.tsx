import "./assets/styles/ImageCard.scoped.css";

type ImageCardProps = {
  customClass: string;
  imageSrc: string;
  title: string;
  titlePosition: string;
};

function ImageCard(props: ImageCardProps) {
  return (
    <div className={"ImageCard " + props.customClass}>
      <p className={"image-card--title " + props.titlePosition}>
        {props.title}
      </p>
      <img className="image-card--image" src={props.imageSrc} alt=""></img>
    </div>
  );
}

export default ImageCard;
