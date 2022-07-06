import "../style/Search.css";
import "../style/App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import LogoSearch from "../assets/search.png";
import ArrowDown from "../assets/arrowdown.png";
import ArrowUp from "../assets/arrowup.png";
import CardMasterclass from "../components/CardMasterclass";

export default function Search() {
  const [showTheme, setShowTheme] = useState(false);
  const [showMetiers, setShowMetiers] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const navigate = useNavigate();

  const handleShowTheme = () => {
    setShowTheme((current) => !current);
  };
  const handleShowMetiers = () => {
    setShowMetiers((current) => !current);
  };
  const handleSearch = () => {
    setSearchBar(!searchBar);
  };

  function filterSearch(filter) {
    localStorage.setItem("user", JSON.stringify(filter));
  }

  const getSearch = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:4000/api/search", {
        searchBar,
      })
      .then((response) => {
        filterSearch(response.data);
        navigate("/search");
      });
  };

  return (
    <div className="search-page">
      <div className="div-title">
        <h2 className="title">
          Les <span className="span-title">M</span>asterclass
        </h2>
      </div>
      <section className="search-section">
        <div className="search-bar">
          <input
            className="searching"
            type="text"
            placeholder="Rechercher"
            onChange={handleSearch}
          />
          <button className="btnlogo" type="button" onClick={getSearch}>
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
              <h3 className="recherche">Recherche par</h3>

              <h3 className="hematiques">HEMATIQUE</h3>
            </div>
            {showTheme ? (
              <img src={ArrowUp} alt="arrowdown" className="logo-arrow" />
            ) : (
              <img src={ArrowDown} alt="arrowleft" className="logo-arrow" />
            )}
          </button>{" "}
          {showTheme && (
            <div className="result-theme">
              <ul className="list-theme">
                <li>Freelance</li>
                <li>Startup</li>
                <li>Méthodes agiles</li>
                <li>Cybersécurité</li>
                <li>Data</li>
                <li>IA</li>
                <li>Machine Learning & Deep learning</li>
                <li>RGPD</li>
                <li>UX/UI Design</li>
                <li>No code</li>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>Angular</li>
                <li>SEO</li>
                <li>Blockchain</li>
              </ul>
            </div>
          )}
        </div>

        <div className="search-metier">
          <button
            className="btnSearchMetier"
            type="button"
            onClick={handleShowMetiers}
          >
            <span className="letter-m">M</span>
            <div>
              <h3 className="recherche">Recherche par</h3>

              <h3 className="etiers">ETIERS</h3>
            </div>
            {showMetiers ? (
              <img src={ArrowUp} alt="arrowdown" className="logo-arrow" />
            ) : (
              <img src={ArrowDown} alt="arrowleft" className="logo-arrow" />
            )}
          </button>
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
      </section>
      <section className="result-masterclass">
        <CardMasterclass />
        <CardMasterclass />
        <CardMasterclass />
        <CardMasterclass />
      </section>
    </div>
  );
}
