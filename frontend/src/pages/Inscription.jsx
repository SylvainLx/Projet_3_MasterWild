import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

import Hugo from "../assets/hugoclement.png";
import Harry from "../assets/harryroselmack.png";
import Xavier from "../assets/xavierniel.png";
import OpenEye from "../assets/visOn.png";
import ClosedEye from "../assets/visOff.png";

import "../style/Inscription.css";

export default function Inscription() {
  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  const postUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/users", {
        firstname,
        lastname,
        email,
        password,
      })
      .then((response) => {
        setUser(response.data);
        navigate("/search");
      });
  };
  return (
    <div>
      <div className="introSinscrire">
        <h2 className="titleh2">
          S' <span className="monoLetter">I</span>nscrire
        </h2>
      </div>
      <div className="pageInsc">
        <div className="hugoInsc">
          <img src={Hugo} alt="Hugo Clément" />
        </div>
        <form className="formInsc" onSubmit={postUser}>
          <input
            type="text"
            className="login-input"
            placeholder="Nom"
            onChange={handleLastname}
            required
          />
          <input
            type="text"
            className="login-input"
            placeholder="Prénom"
            onChange={handleFirstname}
            required
          />
          <input
            type="text"
            className="login-input"
            placeholder="Email"
            onChange={handleMail}
            required
          />
          <div className="login-input">
            <input
              type={show ? "password" : "text"}
              placeholder="Mot de passe"
              onChange={handlePassword}
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
          <label htmlFor="CGV" className="checkBinsc">
            <input
              className="blabla"
              type="checkbox"
              name="name"
              id="CGV"
              required
            />
            J'accepte les conditions générales.
          </label>
          <label htmlFor="NsL" className="checkBinsc">
            <input
              className="blabla"
              type="checkbox"
              name="name"
              id="NsL"
              required
            />
            Je souhaite recevoir la newsletter.
          </label>
          <Link to="/">
            <button type="submit" className="login-button">
              Je m'inscris
            </button>
          </Link>
        </form>
        <div className="secoPart">
          <div className="mosaicStar">
            <img src={Hugo} alt="hugo clement" />
            <img src={Harry} alt="harry roselmack" />
            <img src={Xavier} alt="xiavier niel" />
          </div>
          <div className="goInscrip">
            <p className="textInsc">Déjà un compte ?</p>
            <Link to="/connexion">
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
