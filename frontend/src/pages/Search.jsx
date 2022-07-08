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
  const [searchCategory, setSearchCategory] = useState([]);

  const navigate = useNavigate();

  const handleShowTheme = (e) => {
    setShowTheme((current) => !current);
    e.preventDefault();
    axios.get("http://localhost:5001/api/category").then((response) => {
      setSearchCategory(response.data.data);
    });
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
                {searchCategory.map((category) => (
                  <li key={category.Id} className="li-theme">
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="search-metier">
          <button
            className={showMetiers ? "btnSearchMetier" : "btnsearchmetier"}
            type="button"
            onClick={handleShowMetiers}
          >
            <span className="letter-m">M</span>
            <div>
              <h3 className="recherche">Recherche par</h3>

              <h3 className="etiers">ETIER</h3>
            </div>
            {showMetiers ? (
              <img src={ArrowUp} alt="arrowdown" className="logo-arrow" />
            ) : (
              <img src={ArrowDown} alt="arrowleft" className="logo-arrow" />
            )}
          </button>
          {showMetiers && (
            <div className="result-metier">
              <ul className="list-metier">
                <li className="li-theme">DevOps Engineer</li>
                <li className="li-theme">Frontend Engineer</li>
                <li className="li-theme">Backend Engineer</li>
                <li className="li-theme">Entrepreneur</li>
                <li className="li-theme">Data Scientist</li>
                <li className="li-theme">Consultant</li>
                <li className="li-theme">UX Designer</li>
                <li className="li-theme">Spécialiste Marketing</li>
                <li className="li-theme">Data Analyst</li>
              </ul>
            </div>
          )}
        </div>
      </section>
      <div className="result-mastersearch">
        <section className="result-masterclass">
          <CardMasterclass />
          <CardMasterclass />
          <CardMasterclass />
          <CardMasterclass />
          <CardMasterclass />
          <CardMasterclass />
          <CardMasterclass />
          <CardMasterclass />
          <CardMasterclass />
        </section>
      </div>
    </div>
  );
}
