/* eslint-disable react/prop-types */
import "../style/CardMasterclass.css";

export default function CardMasterclass({ mastercard }) {
  return (
    <div className="card-container">
      <p className="pCardNameEntreprise">
        {mastercard.entreprise.name} ( {mastercard.entreprise.speciality} )
      </p>
      <div className="contenu-card">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/data/uploads/${
            mastercard.entreprise.logo_name
          }`}
          alt="logo entreprise"
          className="logo2"
        />
        <div className="title-desc">
          <h2 className="title-card">{mastercard.title}</h2>
          <p className="overflow-ellipsis">{mastercard.description}</p>
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
