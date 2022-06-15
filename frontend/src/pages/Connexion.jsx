import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Hugo from "../assets/hugoclement.png";
import Harry from "../assets/harryroselmack.png";
import Xavier from "../assets/xavierniel.png";
import OpenEye from "../assets/visOn.png";
import ClosedEye from "../assets/visOff.png";
import "../style/Connexion.css";

const customStyles = {
  overlay: {
    background: "rgba(0,0,0,0.88)",
  },
};

export default function Connexion() {
  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="introSeConnecter">
        <h2 className="titleConnexion">
          Se <span className="monoLetter">C</span>onnecter
        </h2>
      </div>
      <div className="pageCo">
        <div className="divPicConnexion">
          <img className="picStar" src={Hugo} alt="Hugo Clément" />
        </div>
        <form className="formConnection">
          <input
            type="text"
            className="login-input"
            placeholder="Email"
            required
          />
          <div className="passInput">
            <input
              className="inputPassText"
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
          <Link className="linkInsc" to="/">
            <button type="submit" className="login-button">
              Se connecter
            </button>
          </Link>

          <button className="textConnex" type="button" onClick={openModal}>
            Mot de Passe oublié ?
          </button>
          <div>
            <Modal
              setIsOpen={setIsOpen}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Modal"
              className="Modal"
            >
              <div className="modalTitleBtn">
                <button
                  className="modalClose"
                  type="button"
                  onClick={closeModal}
                >
                  x
                </button>{" "}
                <h2 className="modalTitle">Mot de passe oublié ?</h2>
              </div>
              <br />
              <form className="modalForm">
                <label htmlFor="Email" className="modalEmail">
                  <input
                    className="modalInput"
                    type="text"
                    placeholder="Email"
                  />
                </label>

                <button className="login-button" type="submit">
                  Enregistrer
                </button>
              </form>
            </Modal>
          </div>
        </form>
        <div className="secPart">
          <div className="mosaicStar">
            <img className="picStar" src={Hugo} alt="hugo clement" />
            <img className="picStar" src={Harry} alt="harry roselmack" />
            <img className="picStar" src={Xavier} alt="xiavier niel" />
          </div>
          <div className="goInscrip">
            <p className="textConnex">Pas encore de compte ?</p>
            <Link className="linkInsc" to="/inscription">
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
