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

  const [entrepriseLogo, setEntrepriseLogo] = useState("");
  const [entrepriseName, setEntrepriseName] = useState("");
  const [heartClass, setHeartClass] = useState("notFavorite");

  useEffect(() => {
    api.get(`api/admin/masterclass/${masterclassId}`).then((res) => {
      setMasterclass({
        ...res.data.currentMasterclass,
        source: `https://www.youtube-nocookie.com/embed/${res.data.currentMasterclass.source
          .split("/")
          .pop()
          .split("=")
          .pop()}`,
      });

      if (userProfil.favorites.indexOf(res.data.currentMasterclass.Id) !== -1) {
        setHeartClass("isFavorite");
      } else {
        setHeartClass("notFavorite");
      }
    });
  }, [masterclassId]);

  useEffect(() => {
    if (masterclass.entreprise_Id) {
      api.get(`api/entreprise/${masterclass.entreprise_Id}`).then((res) => {
        setEntrepriseName(
          `${import.meta.env.VITE_BACKEND_URL}/data/uploads/${
            res.data.currentEntreprise.name
          }`
        );
        setEntrepriseLogo(
          `${import.meta.env.VITE_BACKEND_URL}/data/uploads/${
            res.data.currentEntreprise.logo_name
          }`
        );
      });
    }
  }, [masterclass]);

  const handleClickFavorite = () => {
    if (userProfil.favorites !== undefined) {
      if (heartClass === "notFavorite") {
        api.post(`/api/favorite/${userProfil.Id}/${masterclass.Id}`);
        userProfil.favorites.push(masterclass.Id);
        setUserProfil({ ...userProfil, favorites: userProfil.favorites });
        setHeartClass("isFavorite");
      } else {
        api.delete(`/api/favorite/${userProfil.Id}/${masterclass.Id}`);
        const favoriteIndex = userProfil.favorites.indexOf(masterclass.Id);
        userProfil.favorites.splice(favoriteIndex, 1);
        setUserProfil({ ...userProfil, favorites: userProfil.favorites });
        setHeartClass("notFavorite");
      }
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
        <div className="like-button">
          <button
            type="button"
            className={heartClass}
            onClick={handleClickFavorite}
          >
            &nbsp;
          </button>
        </div>
        <div className="description-video">
          <div className="logo-container">
            <img
              className="picture-video"
              src={entrepriseLogo}
              alt={entrepriseName}
            />
          </div>

          <div className="text">
            <div className="text-top">
              <h1 className="title-video">{masterclass.title}</h1>
            </div>
            <p className="text-bottom">{masterclass.description}</p>
          </div>
        </div>
        <div className="button-watch">
          {addButton && (
            <button
              type="button"
              className="watch-vid"
              onClick={goToMasterclass}
            >
              Voir
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
