import { useNavigate } from "react-router";
/* eslint-disable react/prop-types */
import "../style/CardMasterclass.css";

export default function CardMasterclass({ mastercard }) {
  const mastercardLink = `/masterclass/${mastercard.Id}`;
  const nav = useNavigate();

  const goToMasterclass = () => {
    nav(mastercardLink);
  };

  return (
    <div className="card-container">
      <div className="contenu-card">
        <div className="pPresEntreprise">
          <p className="pCardNameEntreprise">{mastercard.entreprise.name}</p>
          <p className="pCardSpecialityEntreprise">
            ( {mastercard.entreprise.speciality} )
          </p>
        </div>

        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/data/uploads/${
            mastercard.entreprise.logo_name
          }`}
          alt="logo entreprise"
          className="logo2"
        />
      </div>
      <div className="title-desc">
        <h2 className="title-card">{mastercard.title}</h2>
        <p className="overflow-ellipsis">{mastercard.description}</p>
      </div>
      <div className="button-start">
        <button type="button" className="voir-vid" onClick={goToMasterclass}>
          Voir
        </button>
      </div>
    </div>
  );
}
