import { useState } from "react";
import PropTypes from "prop-types";
import harryroselmack from "../assets/harryroselmack.png";
import flower from "../assets/flower.webm";
import "../style/VideoSample.css";

export default function VideoSample({
  addVideo,
  name,
  summary,
  duration,
  srcPicture,
}) {
  VideoSample.propTypes = {
    addVideo: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    srcPicture: PropTypes.string.isRequired,
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section>
      <div className="container-video">
        {addVideo === true ? (
          <div>
            <video controls width="1500" className="video">
              <source src={flower} type="video/webm" />
              <track default kind="captions" srcLang="en" />
            </video>
          </div>
        ) : (
          ""
        )}
        <div className="description-video">
          <div>
            <img
              src={srcPicture}
              alt="Celebrity's portrait"
              className="picture-video"
            />
          </div>
          <div className="text">
            <div className="text-top">
              <h1 className="title-video">{name}</h1>
              <button
                type="button"
                className={isFavorite ? "isFavorite" : "notFavorite"}
                onClick={handleClickFavorite}
              >
                &nbsp;
              </button>
            </div>
            <p className="text-bottom">{summary}</p>
            <p className="time-video">&bull; {duration}min</p>
          </div>
        </div>
      </div>
    </section>
  );
}
