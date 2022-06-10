import { useState } from "react";
import { Link } from "react-router-dom";
import Hugo from "../assets/hugoclement.png";
import Harry from "../assets/harryroselmack.png";
import Xavier from "../assets/xavierniel.png";
import OpenEye from "../assets/visOn.png";
import ClosedEye from "../assets/visOff.png";
import "../style/Connexion.css";

export default function Connexion() {
  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);
  return (
    <div>
      <div className="introSeConnecter">
        <h2 className="titleh2">
          Se <span className="monoLetter">C</span>onnecter
        </h2>
      </div>
      <div className="pageCo">
        <div>
          <img src={Hugo} alt="Hugo Clément" />
        </div>
        <form className="formConnection">
          <input
            type="text"
            className="login-input"
            placeholder="Email"
            required
          />
          <div className="login-input">
            <input
              type={show ? "password" : "text"}
              placeholder="Mot de passe"
              required
            />
            <button className="buttonShow" type="button" onClick={handleClick}>
              {show ? (
                <img src={ClosedEye} alt="icone eye" className="iconeEye" />
              ) : (
                <img src={OpenEye} alt="icone eye" className="iconeEye" />
              )}
            </button>
          </div>
          <Link to="/">
            <button type="submit" className="login-button">
              Se connecter
            </button>
          </Link>
          <p className="textConnex">Mot de Passe oublié ?</p>
        </form>
        <div className="secPart">
          <div className="mosaicStar">
            <img src={Hugo} alt="hugo clement" />
            <img src={Harry} alt="harry roselmack" />
            <img src={Xavier} alt="xiavier niel" />
          </div>
          <div className="goInscrip">
            <p className="textConnex">Pas encore de compte ?</p>
            <Link to="/inscription">
              <button type="submit" className="login-button">
                S'inscrire
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
