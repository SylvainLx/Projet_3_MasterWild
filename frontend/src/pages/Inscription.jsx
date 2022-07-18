import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Pattern from "../assets/pictures/PATTERN_Plan de travail 1.png";
import Logo from "../assets/pictures/logo-HD-fond-transparent.png";
import Login from "../assets/pictures/peopleLogin.jpg";

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
  const [professional, setProfessional] = useState(false);
  const [company, setCompany] = useState();

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
  const handlePro = () => {
    setProfessional(true);
  };
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const ToastInscription = () => toast.success("Inscription validée !");

  const postUser = () => {
    try {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
          firstname,
          lastname,
          email,
          password,
          professional,
          company,
        })
        .then(() => {
          navigate("/connexion");
          ToastInscription();
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
    professional: false,
    company: "",
  };

  return (
    <div>
      <div className="introSinscrire">
        <h2 className="titleInsc">
          <p>
            <span className="accent">Inscription</span> en Ligne
          </p>
        </h2>
      </div>
      <div className="pageInsc">
        <div className="divPicIntro">
          <img className="picStar" src={Pattern} alt="logo wild code school" />
        </div>
        <div>
          <img className="picLogin" src={Login} alt="login" />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={postUser}
          validateOnMount
        >
          {(formik) => (
            <Form className="formInsc">
              <h2 className="titleInscbis">
                <p>S'inscrire</p>
              </h2>
              <div onChange={handleLastname} className="verif-form">
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
              <div onChange={handleFirstname} className="verif-form">
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
              <div onChange={handleCompany} className="verif-form">
                <Field
                  name="company"
                  placeholder="Si vous êtes un professionel, nom de l'entreprise"
                  type="text"
                  className="login-input"
                />
                <ErrorMessage
                  name="company"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div onChange={handleMail} className="verif-form">
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
              <div className="container-password">
                <div onChange={handlePassword} className="verif-form">
                  <Field
                    name="password"
                    placeholder="Mot de passe"
                    type={show ? "password" : "text"}
                    className="login-input"
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
                    <FaRegEyeSlash alt="icone eye" size="1.7em" />
                  ) : (
                    <FaRegEye alt="icone eye" size="1.7em" />
                  )}
                </button>
              </div>
              <div className="container-password">
                <div className="verif-form">
                  <Field
                    name="passwordConfirmation"
                    placeholder="Confirmation"
                    type={show ? "password" : "text"}
                    className="login-input"
                  />
                  <ErrorMessage
                    name="passwordConfirmation"
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
                    <FaRegEyeSlash alt="icone eye" size="1.7em" />
                  ) : (
                    <FaRegEye alt="icone eye" size="1.7em" />
                  )}
                </button>
              </div>
              <div className="container-checkbox">
                <label
                  htmlFor="professional"
                  className="checkBinsc"
                  onChange={handlePro}
                >
                  <input
                    className="cgv-check"
                    type="checkbox"
                    name="professional"
                    id="professional"
                  />
                  Je suis un professionnel.
                </label>
                <div className="checkBinsc">
                  <Field
                    name="gcu"
                    type="checkbox"
                    className="cgv-check"
                    id="gcu"
                  />
                  <div>
                    <label htmlFor="CGV" required>
                      J'accepte{" "}
                      <a
                        href="https://www.wildcodeschool.com/fr-FR/condition-generales-utilisation"
                        _target="blank"
                      >
                        <span>les conditions générales.</span>
                      </a>
                    </label>
                    <ErrorMessage
                      name="gcu"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                </div>
                <label htmlFor="NsL" className="checkBinsc">
                  <input
                    className="cgv-check"
                    type="checkbox"
                    name="name"
                    id="NsL"
                  />
                  Je souhaite recevoir la Wild Flash.
                </label>
              </div>

              <button
                type="submit"
                className="login-button"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Je m'inscris
                <ToastContainer
                  position="bottom-right"
                  autoClose={4000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </button>
            </Form>
          )}
        </Formik>{" "}
        <div className="secoPart">
          <div className="divPicIntrobis">
            <img className="picStar" src={Logo} alt="logo wild code school" />
          </div>
          <div className="goInscrip">
            <p className="textInsc">Déjà un compte ?</p>
            <Link className="linkInsc" to="/connexion">
              <button type="button" className="login-button">
                Je me connecte
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
