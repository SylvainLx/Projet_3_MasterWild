// import useState from "react";
import harryroselmack2 from "../assets/harryroselmack2.png";
import heart from "../assets/heart.png";
import flower from "../assets/flower.webm";
import "../style/VideoSample.css";

export default function VideoSample() {
  // const [isFavorite, setIsFavorite] = useState(item.isFavorite);
  // const handleClickFavorite = () => {
  //   setIsFavorite(!isFavorite);
  // };

  return (
    <section>
      <div className="container-video">
        <div className="video">
          <video controls width="950">
            <source src={flower} type="video/webm" />
            <track default kind="captions" srcLang="en" />
          </video>
        </div>
        <div className="description-video">
          <div className="picture-video">
            <img src={harryroselmack2} alt="Celebrity's portrait" />
          </div>
          <div className="text">
            <div className="text-top">
              <h1 className="title-video">Harry Roselmack</h1>
              <img
                src={heart}
                id="favorite"
                // className={isFavorite ? "isFavorite" : "notFavorite"}
                // onClick={handleClickFavorite}
                alt="Heart for favorite"
              />
            </div>
            <p className="text-bottom">
              Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum
              temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non culpa
              quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti
              non non culpa quod cum temporibus.
            </p>
            <p className="time-video">&bull; 30 min</p>
          </div>
        </div>
      </div>
    </section>
  );
}
