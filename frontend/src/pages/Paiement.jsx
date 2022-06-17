import "../style/Paiement.css";
import { NavLink } from "react-router-dom";

import cardLogo from "../assets/card_logo.png";

export default function Paiement() {
  return (
    <>
      <div className="header-paiement">
        <h2 className="titleh2">
          Plus qu'une <span className="monoLetter">E</span>tape!
        </h2>
      </div>
      <div className="container-paiement">
        <div className="info-abonnement">
          <h1 className="abonnement">Abonnement</h1>
          <p className="text-abonnement">
            Vous avez le choix entre deux formules. L'une vous permet d'acheter
            les vidéos de manière individuelle (10€/vidéo). La seconde vous
            permet d'accèder à toutes les Masterclass de manière illimité
            (15€/mois). Conditions générales d'abonnement.
          </p>
        </div>
        <div className="form">
          <div className="box-logo">
            <img className="card-logo" alt="card-logo" src={cardLogo} />
          </div>
          <form className="form-paiement">
            <label htmlFor="cardName" className="card-info">
              <input
                className="card-input"
                type="text"
                name="name"
                id="cardName"
                placeholder="Nom"
                required
              />
              NOM APPARAISSANT SUR LA CARTE
            </label>
            <label htmlFor="cardNumber" className="card-info">
              <input
                className="card-input"
                type="tel"
                inputMode="numeric"
                pattern="[0-9\s]{13,19}"
                autoComplete="cc-number"
                maxLength="19"
                name="name"
                id="cardName"
                placeholder="&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;"
                required
              />
              NUMÉRO DE CARTE
            </label>
            <div className="form-bottom">
              <label htmlFor="expiration" className="card-info">
                <input
                  className="card-input-bottom"
                  type="text"
                  name="name"
                  id="cardName"
                  placeholder="MM/AA"
                  required
                />
                DATE D'EXPIRATION
              </label>
              <label htmlFor="crypto" className="card-info">
                <input
                  className="card-input-bottom"
                  type="text"
                  name="name"
                  id="cardName"
                  placeholder="&bull;&bull;&bull;"
                  required
                />
                CVV
              </label>
            </div>
          </form>
        </div>
        <button type="submit" className="paiement-button">
          Paiement
        </button>
        <NavLink to="/Home" className="return-to-home">
          <button type="submit" className="button-to-home">
            Retour
          </button>
        </NavLink>
      </div>
    </>
  );
}
