import "../style/Search.css";
import "../style/App.css";
import { useState } from "react";

import LogoSearch from "../assets/search.png";
import Logo from "../assets/logoattente.png";
import ArrowDown from "../assets/arrowdown.png";
import ArrowLeft from "../assets/arrowleft.png";

export default function Search() {
  const [showTheme, setShowTheme] = useState(false);
  const [showMetiers, setShowMetiers] = useState(false);

  const handleShowTheme = () => {
    setShowTheme((current) => !current);
  };
  const handleShowMetiers = () => {
    setShowMetiers((current) => !current);
  };
  return (
    <div className="search-page">
      <img className="logo-inspiraction" src={Logo} alt="Logo InspirAction" />
      <div className="div-title">
        <h2 className="title">
          Les <span className="span-title">M</span>asterclass
        </h2>
      </div>
      <section className="search-section">
        <div className="search-bar">
          <input className="searching" type="text" placeholder="Rechercher" />
          <button type="button">
            <img src={LogoSearch} alt="search" className="logo-search" />
          </button>
        </div>
        <div className="search-theme">
          <button
            className="btnSearchTheme"
            type="button"
            onClick={handleShowTheme}
          >
            <span className="letter-t">T</span>
            <div>
              <h3 className="recherche">Recherche</h3>

              <h3 className="hematiques">HEMATIQUES</h3>
            </div>
            {showTheme ? (
              <img src={ArrowDown} alt="arrowdown" className="logo-arrow" />
            ) : (
              <img src={ArrowLeft} alt="arrowleft" className="logo-arrow" />
            )}
          </button>{" "}
          {showTheme && (
            <div className="result-theme">
              <ul className="list-theme">
                <li>Art & Entertainment</li>
                <li>Music</li>
                <li>Writing</li>
                <li>Food</li>
                <li>Business</li>
                <li>Design & Style</li>
                <li>Sport & Gaming</li>
                <li>Science & Tech</li>
                <li>Community & Gouvernment</li>
                <li>Wellness</li>
              </ul>
            </div>
          )}
        </div>

        <div className="search-metier">
          {" "}
          <button
            className="btnSearchMetier"
            type="button"
            onClick={handleShowMetiers}
          >
            <span className="letter-m">M</span>
            <div>
              <h3 className="recherche">Recherche</h3>

              <h3 className="etiers">ETIERS</h3>
            </div>
            {showMetiers ? (
              <img src={ArrowDown} alt="arrowdown" className="logo-arrow" />
            ) : (
              <img src={ArrowLeft} alt="arrowleft" className="logo-arrow" />
            )}
          </button>{" "}
          {showMetiers && (
            <div className="result-metier">
              {" "}
              <ul className="list-metier">
                <li>Dirigeants</li>
                <li>Entrepreneurs</li>
                <li>Journalistes</li>
                <li>Politiques</li>
                <li>Artistes</li>
                <li>Sportifs</li>
              </ul>
            </div>
          )}
        </div>
        <div className="result"> resultat video</div>
      </section>
    </div>
  );
}
