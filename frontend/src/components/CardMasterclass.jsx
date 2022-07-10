/* eslint-disable react/prop-types */
import "../style/CardMasterclass.css";

export default function CardMasterclass({ mastercard }) {
  return (
    <div className="card-container">
      <div className="top-card">
        <div className="inter">
          <p>{mastercard.entreprise.name}</p>
        </div>
        <div className="logo-wild">
          <img
            src={mastercard.entreprise.logo_name}
            alt="logo simple wild"
            className="logo1"
          />
        </div>
      </div>
      <div className="contenu-card">
        <div className="logo-inter">
          <img
            src={mastercard.entreprise.logo_source}
            alt="logo simple wild"
            className="logo2"
          />
        </div>
        <div className="title-desc">
          <div className="title-card">
            <h2>{mastercard.title}</h2>
          </div>
          <div className="desc-card">
            <p>{mastercard.description}</p>
          </div>
        </div>
      </div>
      <div className="button-start">
        <button type="button" className="voir-vid">
          Voir
        </button>
      </div>
    </div>
  );
}
