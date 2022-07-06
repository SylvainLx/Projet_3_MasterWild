import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import Pattern from "../assets/pictures/PATTERN_Plan de travail 1.png";
import Picto from "../assets/pictures/PICTOS_WCS-11.png";
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
          <p>
            <span className="accent">C</span>onnexion
          </p>
        </h2>
      </div>
      <div className="pageCo">
        <div className="divPicConnexion">
          <img className="picStar" src={Pattern} alt="Hugo Clément" />
        </div>
        <div className="divPicConnexionbis">
          <img className="picStar" src={Picto} alt="logo wild code school" />
        </div>
        <form className="formConnection">
          <h2 className="titleInscbis">
            <p>
              <span className="accent">C</span>onnexion
            </p>
          </h2>
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
