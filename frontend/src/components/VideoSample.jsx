import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../style/VideoSample.css";
import api from "../services/endpoint";

const userId = 1;

export default function VideoSample({ masterclassId, addVideo = false }) {
  VideoSample.defaultProps = {
    addVideo: false,
  };

  VideoSample.propTypes = {
    masterclassId: PropTypes.number.isRequired,
    addVideo: PropTypes.bool,
  };
  const [masterclass, setMasterclass] = useState([]);
  const [favoriteAsk, setFavoriteAsk] = useState(0);
  const [isFavorite, setIsFavorite] = useState(0);

  const favoritecheck = () => {
    api.get(`/api/favorite/${userId}`).then((res) => {
      setFavoriteAsk(
        res.data.filter((favorite) => favorite.masterclass_Id === 1).length
      );
    });
  };

  const masterclassContent = () => {
    api.get(`api/admin/masterclass/${masterclassId}`).then((res) => {
      setMasterclass(res.data.currentMasterclass);
    });
  };

  useEffect(() => {
    masterclassContent();
    console.error(masterclass);
  }, []);

  useEffect(() => {
    favoritecheck();
    setIsFavorite(favoriteAsk);
  });

  const handleClickFavorite = () => {
    if (!isFavorite) {
      api.post(`/api/favorite/${userId}/${masterclassId}`);
      setIsFavorite(true);
    } else {
      api.delete(`/api/favorite/${userId}/${masterclassId}`);
      setIsFavorite(false);
    }
  };

  return (
    <section>
      <div className="container-video">
        {addVideo === true ? (
          <div>
            <video controls width="1500" className="video">
              <source src={masterclass.source} type="video/webm" />
              <track default kind="captions" srcLang="en" />
            </video>
          </div>
        ) : (
          ""
        )}
        <div className="description-video">
          <div>
            <img src="" alt="Celebrity's portrait" className="picture-video" />
          </div>
          <div className="text">
            <div className="text-top">
              <h1 className="title-video">{masterclass.title}</h1>
              <button
                type="button"
                className={isFavorite ? "isFavorite" : "notFavorite"}
                onClick={handleClickFavorite}
              >
                &nbsp;
              </button>
            </div>
            <p className="text-bottom">{masterclass.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
