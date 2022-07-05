import "../style/CardMasterclass.css";
import Pattern from "../assets/pictures/patter-rose-2.png";
import LogoIntervenant from "../assets/pictures/logo-HD-fond-transparent.png";

export default function CardMasterclass() {
  return (
    <div className="card-container">
      <div className="top-card">
        <div className="inter">
          <p>intervenant</p>
        </div>
        <div className="logo-wild">
          <img src={Pattern} alt="logo simple wild" className="logo1" />
        </div>
      </div>
      <div className="contenu-card">
        <div className="logo-inter">
          <img src={LogoIntervenant} alt="logo simple wild" className="logo2" />
        </div>
        <div className="title-desc">
          <div className="title-card">
            <h2>IA et nouvelles technologies</h2>
          </div>
          <div className="desc-card">
            <p>
              Découverte d'une entreprise dans le domaine de l'intelligence
              artificielle.
            </p>
          </div>
        </div>
      </div>
      <div className="button-start">
        <button type="button" className="voir-vid">
          visionner la masterclass
        </button>
      </div>
    </div>
  );
}
