import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import CurrentUserContext from "../contexts/currentUser";
import "../style/VideoSample.css";
import api from "../services/endpoint";

export default function VideoSample({
  masterclassId,
  addVideo = false,
  addButton = false,
}) {
  const { userProfil, setUserProfil } = useContext(CurrentUserContext);

  VideoSample.defaultProps = {
    addVideo: false,
    addButton: false,
  };

  VideoSample.propTypes = {
    masterclassId: PropTypes.number.isRequired,
    addVideo: PropTypes.bool,
    addButton: PropTypes.bool,
  };

  const [masterclass, setMasterclass] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const [entreprise, setEntreprise] = useState(false);

  useEffect(() => {
    api.get(`api/admin/masterclass/${masterclassId}`).then((res) => {
      setMasterclass(res.data.currentMasterclass);

      if (userProfil.favorites.indexOf(res.data.currentMasterclass.Id) !== -1) {
        setIsFavorite(true);
      }
    });
  }, [masterclassId]);

  useEffect(() => {
    api.get(`api/entreprise/${masterclass.entreprise_Id}`).then((res) => {
      setEntreprise(res.data.currentEntreprise);
    });
  }, [masterclass]);

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

  const mastercardLink = `/masterclass/${masterclassId}`;

  const nav = useNavigate();

  const goToMasterclass = () => {
    nav(mastercardLink);
  };

  return (
    <section>
      <div className="container-video">
        {addVideo && (
          <iframe
            className="video"
            title={masterclass.title}
            controlsList="nodownload"
            src={masterclass.source}
          />
        )}
        <div className="description-video">
          <img
            className="picture-video"
            src={`${import.meta.env.VITE_BACKEND_URL}/data/uploads/${
              entreprise.logo_name
            }`}
            alt={entreprise.name}
          />

          <div className="text">
            <div className="text-top">
              <h1 className="title-video">{masterclass.title}</h1>
              {addButton && (
                <button
                  type="button"
                  className="voir-vid"
                  onClick={goToMasterclass}
                >
                  Voir
                </button>
              )}
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
