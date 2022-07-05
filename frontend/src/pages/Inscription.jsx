import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Hugo from "../assets/hugoclement.png";
import Harry from "../assets/harryroselmack.png";
import Xavier from "../assets/xavierniel.png";
import OpenEye from "../assets/visOn.png";
import ClosedEye from "../assets/visOff.png";

import "../style/Inscription.css";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Le prénom est obligatoire"),
  lastname: Yup.string().required("Le nom est obligatoire"),
  email: Yup.string()
    .required("L'adresse e-mail est obligatoire")
    .email("Veuillez entrer une adresse e-mail valide"),
  password: Yup.string()
    .required("Le mot de passe est obligatoire")
    .min(8, "Le mot de passe doit avoir 8 caractères"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password")],
    "Les mots de passe ne correspondent pas"
  ),
  gcu: Yup.boolean().oneOf(
    [true],
    "Veuillez accepter les conditions d'utilisation"
  ),
});

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
    try {
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
    } catch (error) {
      console.error(error);
    }
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    gcu: false,
    newsletter: false,
  };

  return (
    <div>
      <div className="introSinscrire">
        <h2 className="titleInsc">
          S' <span className="monoLetter">I</span>nscrire
        </h2>
      </div>
      <div className="pageInsc">
        <div className="divPicIntro">
          <img className="picStar" src={Hugo} alt="Hugo Clément" />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={postUser}
          validateOnMount
        >
          {(formik) => (
            <form className="formInsc">
              <div onChange={handleLastname}>
                <Field
                  name="lastname"
                  placeholder="Nom"
                  type="text"
                  className="login-input"
                />
                <ErrorMessage
                  name="lastname"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div onChange={handleLastname}>
                <Field
                  name="firstname"
                  placeholder="Prénom"
                  type="text"
                  className="login-input"
                />
                <ErrorMessage
                  name="firstname"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div onChange={handleLastname}>
                <Field
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="login-input"
                />
                <ErrorMessage
                  name="email"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div className="passInput">
                <div onChange={handleLastname}>
                  <Field
                    name="password"
                    placeholder="Mot de passe"
                    type={show ? "password" : "text"}
                    className="inputPassText"
                  />
                  <ErrorMessage
                    name="password"
                    className="text-danger"
                    component="span"
                  />
                </div>
                <button
                  className="buttonShow"
                  type="button"
                  onClick={handleClick}
                >
                  {show ? (
                    <img src={ClosedEye} alt="icone eye" className="iconeEye" />
                  ) : (
                    <img src={OpenEye} alt="icone eye" className="iconeEye" />
                  )}
                </button>
              </div>
              <div className="checkBinsc">
                <Field name="gcu" type="checkbox" className="blabla" id="gcu" />
                <label className="custom-control-label" htmlFor="gcu">
                  J'accepte{" "}
                  <a
                    href="https://www.wildcodeschool.com/fr-FR?utm_campaign=FR_SEARCH+-+Marque&utm_term=wild%20code%20school&utm_source=adwords&utm_medium=ppc&hsa_grp=130792156507&hsa_src=g&hsa_cam=14821000047&hsa_ad=595760405168&hsa_ver=3&hsa_kw=wild%20code%20school&hsa_net=adwords&hsa_tgt=aud-1076963982371:kwd-440435778420&hsa_mt=p&hsa_acc=4421706736&gclid=CjwKCAjwwo-WBhAMEiwAV4dybY8c4tTC1QjQCps18MU8qam8IMJ7ocS0H2CLC7z4p0d4kSEdLtKo-RoCw2IQAvD_BwE"
                    _target="blank"
                  >
                    les conditions d'utilisation
                  </a>
                </label>
                <ErrorMessage
                  name="gcu"
                  className="text-danger"
                  component="div"
                />
              </div>
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
              <Link className="linkInsc" to="/">
                <button
                  type="submit"
                  className="login-button"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Je m'inscris
                </button>
              </Link>
            </form>
          )}
        </Formik>
        <div className="secoPart">
          <div className="mosaicStar">
            <img className="picStar" src={Hugo} alt="hugo clement" />
            <img className="picStar" src={Harry} alt="harry roselmack" />
            <img className="picStar" src={Xavier} alt="xiavier niel" />
          </div>
          <div className="goInscrip">
            <p className="textInsc">Déjà un compte ?</p>
            <Link className="linkInsc" to="/connexion">
              <button type="submit" className="login-button">
                Se connecter
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
