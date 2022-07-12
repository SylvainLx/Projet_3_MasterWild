import "../style/Search.css";
import "../style/App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import LogoSearch from "../assets/search.png";
import ArrowDown from "../assets/arrowdown.png";
import ArrowUp from "../assets/arrowup.png";
import CardMasterclass from "../components/CardMasterclass";

export default function Search() {
  const [showTheme, setShowTheme] = useState(false);
  const [showEntreprise, setShowEntreprise] = useState(false);

  const handleShowTheme = () => {
    setShowTheme((current) => !current);
  };
  const handleShowEntreprise = () => {
    setShowEntreprise((current) => !current);
  };

  const [searchCategory, setSearchCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/category`)
      .then((res) => {
        setSearchCategory(res.data.data);
      });
  }, []);

  const [listEntreprise, setListEntreprise] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/entreprise`)
      .then((res) => {
        setListEntreprise(res.data.data);
      });
  }, []);

  const [filter, setFilter] = useState([]);
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const [listMasterclass, setListMasterclass] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/masterclass`)
      .then((res) => {
        setListMasterclass(res.data.data);
      });
  }, []);

  return (
    <div className="search-page">
      <div className="div-title">
        <h2 className="title">
          Les <span className="span-title">M</span>asterclass
        </h2>
      </div>
      <section className="search-section">
        <div className="search-bar">
          <input className="searching" type="text" placeholder="Rechercher" />
          <button className="btnlogo" type="button">
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
          </button>
          {showTheme && (
            <div className="result-theme">
              <ul className="list-theme">
                {searchCategory.map((category) => (
                  <button
                    type="button"
                    tabIndex={0}
                    key={category.Id}
                    className="li-theme"
                    onClick={handleChange}
                    onKeyPress={handleChange}
                    value={category.name}
                  >
                    {category.name}
                  </button>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="search-metier">
          <button
            className={showEntreprise ? "btnSearchMetier" : "btnsearchmetier"}
            type="button"
            onClick={handleShowEntreprise}
          >
            <span className="letter-m">E</span>
            <div>
              <h3 className="recherche">Recherche par</h3>

              <h3 className="etiers">NTREPRISE</h3>
            </div>
            {showEntreprise ? (
              <img src={ArrowUp} alt="arrowdown" className="logo-arrow" />
            ) : (
              <img src={ArrowDown} alt="arrowleft" className="logo-arrow" />
            )}
          </button>
          {showEntreprise && (
            <div className="result-metier">
              <ul className="list-metier">
                {listEntreprise.map((entreprise) => (
                  <button
                    type="button"
                    tabIndex={0}
                    key={entreprise.Id}
                    className="li-theme"
                    onClick={handleChange}
                    onKeyPress={handleChange}
                    value={entreprise.name}
                  >
                    {entreprise.name}
                  </button>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <div className="res-search">
        <ul className="result-mastersearch">
          {listMasterclass
            .filter(
              (mastercard) =>
                mastercard.entreprise.name === filter ||
                mastercard.category.name === filter
            )
            .map((mastercard) => (
              <li className="testli">
                <CardMasterclass key={mastercard.id} mastercard={mastercard} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
