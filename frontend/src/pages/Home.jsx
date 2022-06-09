import { useState } from "react";

import Harry from "../assets/harryroselmack.png";
import Xavier from "../assets/xavierniel.png";
import LogoBleu from "../assets/logoattente.png";
import Arrow from "../assets/downarrow.png";
import "../style/Home.css";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="container-home">
      <div className="logo-top">
        <h1>
          <img src={LogoBleu} alt="logo-inspiraction" />
        </h1>
      </div>
      <div className="intro-text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1 500s, when an unknown printer took a galley of type and
          scrambled it to make.
        </p>
      </div>
      <div className="home-mosaic">
        <div className="square-one">
          <div className="text-one">
            <p>Prénom</p> <p>Nom</p> <p>Métier</p>
          </div>
        </div>
        <div className="square-one-pic">
          <img src={Xavier} alt="logo-inspiraction" />
        </div>
        <div className="square-two-pic">
          <img src={Harry} alt="logo-inspiraction" />
        </div>
        <div className="square-two">
          <div className="text-two">
            <p>Prénom</p> <p>Nom</p> <p>Métier</p>
          </div>
        </div>
        <div className="square-three">
          <div className="text-three">
            <p>Prénom</p> <p>Nom</p> <p>Métier</p>
          </div>
        </div>
        <div className="square-three-pic">
          <img src={Xavier} alt="logo-inspiraction" />
        </div>
      </div>
      <div className="video-sample-area">
        <div className="video-sample">
          <img src={LogoBleu} alt="logo-inspiraction" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1 500s, when an unknown printer took a galley of type
            and scrambled it to make.
          </p>
        </div>
      </div>
      <div className="subscribing-area">
        <h2>2 Offres au choix</h2>
        <div className="subscribe-one">
          <div className="niania">
            <div className="subscribe-title">
              <h3>Vidéo à la demande</h3>
              <p>
                5,99€ <span>/ vidéo</span>
              </p>
            </div>
            <div>
              <button className="butbut" type="button" onClick={handleClick}>
                <img
                  className="arrow"
                  src={Arrow}
                  alt="flèche pour dérouler le menu"
                />
              </button>
            </div>
          </div>
          {show && (
            <div className="bouh">texte qui apparait comme par magie !</div>
          )}
        </div>
        {/* <div className="subscribe-two">
          <div className="subscribe-title">
            <h3>Abonnement mensuel</h3>
            <p>
              14,99€ <span>/ mois</span>
            </p>
          </div>
          <div className="button-two">
            <button type="button">
              <img
                className="arrow"
                src={Arrow}
                alt="flèche pour dérouler le menu"
              />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
