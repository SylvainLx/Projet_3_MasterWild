import "../style/Search.css";
import "../style/App.css";

import LogoSearch from "../assets/search.png";
import Logo from "../assets/logoattente.png";
import ArrowDown from "../assets/arrowdown.png";
import ArrowLeft from "../assets/arrowleft.png";

export default function Search() {
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
          <button type="button" className="test">
            <img src={LogoSearch} alt="search" className="logo-search" />
          </button>
        </div>
        <div className="search-theme">
          <button className="btnSearchTheme" type="button">
            <span className="letter-t">T</span>
            <div>
              <h3 className="recherche">Recherche</h3>

              <h3 className="hematiques">HEMATIQUES</h3>
            </div>
            <img src={ArrowDown} alt="arrowdown" />
            <img src={ArrowLeft} alt="arrowleft" />
          </button>{" "}
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
        </div>

        <div className="search-metier">
          {" "}
          <button className="btnSearchMetier" type="button">
            <h3>Recherche</h3>
            <span>M</span>
            <h3>METIERS</h3>
          </button>
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
        </div>
        <div className="result"> resultat video</div>
      </section>
    </div>
  );
}
