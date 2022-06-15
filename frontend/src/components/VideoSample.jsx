import { useState } from "react";
import harryroselmack from "../assets/harryroselmack.png";
import flower from "../assets/flower.webm";
import "../style/VideoSample.css";

export default function VideoSample() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section>
      <div className="container-video">
        <div>
          <video controls width="1500" className="video">
            <source src={flower} type="video/webm" />
            <track default kind="captions" srcLang="en" />
          </video>
        </div>
        <div className="description-video">
          <div>
            <img
              src={harryroselmack}
              alt="Celebrity's portrait"
              className="picture-video"
            />
          </div>
          <div className="text">
            <div className="text-top">
              <h1 className="title-video">Titre de la vidéo</h1>
              <button
                type="button"
                className={isFavorite ? "isFavorite" : "notFavorite"}
                onClick={handleClickFavorite}
              >
                &nbsp;
              </button>
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
