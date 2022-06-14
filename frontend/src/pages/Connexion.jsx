import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Hugo from "../assets/hugoclement.png";
import Harry from "../assets/harryroselmack.png";
import Xavier from "../assets/xavierniel.png";
import OpenEye from "../assets/visOn.png";
import ClosedEye from "../assets/visOff.png";
import Close from "../assets/close.png";
import "../style/Connexion.css";

const customStyles = {
  content: {
    top: "12rem",
    left: "20rem",
    right: "20rem",
    bottom: "12rem",
    borderRadius: "1rem",
    fontFamily: "Roboto",
  },
  overlay: {
    background: "rgba(0,0,0,0.6)",
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
            >
              <div className="modalTitleBtn">
                <h2 className="modalTitle">Changer de mot de passe</h2>
                <button
                  className="modalClose"
                  type="button"
                  onClick={closeModal}
                >
                  <img
                    className="modalImgClose"
                    src={Close}
                    alt="boutton croix"
                  />
                </button>
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
                <label htmlFor="NvxPass">
                  <input
                    className="modalInput"
                    type="text"
                    placeholder="Nouveau mot de passe"
                  />
                </label>
                <label htmlFor="NvxPass">
                  <input
                    className="modalInput"
                    type="text"
                    placeholder="Confirmer votre nouveau mot de passe"
                  />
                </label>
                <button className="modalSubmit" type="submit">
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
