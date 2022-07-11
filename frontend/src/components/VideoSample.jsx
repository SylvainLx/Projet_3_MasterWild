import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import CurrentUserContext from "../contexts/currentUser";
import "../style/VideoSample.css";
import api from "../services/endpoint";

export default function VideoSample({ masterclassId, addVideo = false }) {
  const { userProfil, setUserProfil } = useContext(CurrentUserContext);

  VideoSample.defaultProps = {
    addVideo: false,
  };

  VideoSample.propTypes = {
    masterclassId: PropTypes.number.isRequired,
    addVideo: PropTypes.bool,
  };

  const [masterclass, setMasterclass] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    api.get(`api/admin/masterclass/${masterclassId}`).then((res) => {
      setMasterclass(res.data.currentMasterclass);

      if (userProfil.favorites.indexOf(res.data.currentMasterclass.Id) !== -1) {
        setIsFavorite(true);
      }
    });
  }, []);

  const handleClickFavorite = () => {
    if (!isFavorite) {
      api.post(`/api/favorite/${userProfil.Id}/${masterclass.Id}`);
      userProfil.favorites.push(masterclass.Id);
      setUserProfil({ ...userProfil, favorites: userProfil.favorites });
      setIsFavorite(true);
    } else {
      api.delete(`/api/favorite/${userProfil.Id}/${masterclass.Id}`);
      const favoriteIndex = userProfil.favorites.indexOf(masterclass.Id);
      userProfil.favorites.splice(favoriteIndex, 1);
      setUserProfil({ ...userProfil, favorites: userProfil.favorites });
      setIsFavorite(false);
    }
  };

  return (
    <section>
      <div className="container-video">
        {addVideo && (
          <div>
            <iframe
              title={masterclass.title}
              controlsList="nodownload"
              style={{
                width: "50vw",
                height: "28vw",
                left: "0px",
                top: "0px",
              }}
              src={masterclass.source}
            />
          </div>
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
