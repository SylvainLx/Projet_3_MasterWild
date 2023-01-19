import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../contexts/currentUser";

import IntroHome from "../components/home/IntroHome";
import IntroWCS from "../components/home/IntroWCS";
import CardMasterclass from "../components/CardMasterclass";
import CarouselHome from "../components/CarouselHome";

import Solutions909 from "../assets/logo_partenaires/solutions909.jpeg";
import Anssi from "../assets/logo_partenaires/anssi.png";
import Mydatafit from "../assets/logo_partenaires/mydatafit.jpeg";
import Alectio from "../assets/logo_partenaires/alectio.png";
import Keyrus from "../assets/logo_partenaires/keyrus.png";
import Tricky from "../assets/logo_partenaires/tricky.png";

import "../style/Home.css";

export default function Home() {
  const [listMasterclass, setListMasterclass] = useState([]);
  const { userProfil } = useContext(CurrentUserContext);

  const mobileVersionLogo = [
    { src: Alectio, alt: "logo-alectio" },
    { src: Solutions909, alt: "logo-solution909" },
    { src: Mydatafit, alt: "logo-mydatafit" },
    { src: Tricky, alt: "logo-tricky" },
    { src: Keyrus, alt: "logo-keyrus" },
    { src: Anssi, alt: "logo-anssi" },
  ];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/masterclass`)
      .then((res) => {
        setListMasterclass(res.data.data);
      });
  }, []);
  return (
    <div className="container-home">
      <IntroHome />
      <h2 className="partnairPics">
        Ils nous font <span className="accent">confiance</span> :
      </h2>
      <div className="carousel-home">
        <CarouselHome />
      </div>
      <div className="home-mosaic">
        {mobileVersionLogo.map((logo) => (
          <img className="square-pic" src={logo.src} alt={logo.alt} />
        ))}
      </div>
      <div className="video-sample-area">
        <div className="video-sample">
          <iframe
            className="iframeHome"
            title="pres"
            controlsList="nodownload"
            style={{
              width: "1000px",
              height: "320px",
              left: "0px",
              top: "0px",
            }}
            src="https://www.youtube-nocookie.com/embed/RmKB474UE2A"
          />
          <track default kind="captions" srcLang="en" />
          <div className="divMastHome">
            <h3 className="info-wsc">Un large choix de contenu</h3>
            <p className="video-desc">
              Parcourez l'ensemble de nos masterclasses. La Wild Code School
              vous propose des domaines variés à découvrir, grâce à nos
              différents partenaires et nos nombreux intervenants.
            </p>
            <div className="flex-mbutton">
              {userProfil ? (
                <NavLink to="/search">
                  <button type="button" className="button-discover">
                    Nos masterclasses
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/connexion">
                  <button type="button" className="button-discover">
                    Nos masterclasses
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="search-exemples">
        <div className="first-block">
          <h2>Découvrez de nombreux métiers ...</h2>
          <ul className="carousel-items">
            {listMasterclass
              .filter(
                (mastercard) => mastercard.entreprise.speciality === "Solutions"
              )
              .map((mastercard) => (
                <li className="carousel-item" key={mastercard.Id}>
                  <CardMasterclass
                    key={mastercard.Id}
                    mastercard={mastercard}
                  />
                </li>
              ))}
          </ul>
        </div>

        <div className="second-block">
          <h2>... et différents domaines technologiques.</h2>
          <ul className="carousel-items">
            {listMasterclass.map((mastercard) => (
              <li className="carousel-item" key={mastercard.Id}>
                <CardMasterclass key={mastercard.Id} mastercard={mastercard} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <IntroWCS />
    </div>
  );
}
