import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrentUserContext from "../contexts/currentUser";

import Logo from "../assets/pictures/logo-HD-fond-transparent.png";
import Login from "../assets/pictures/peopleLogin.jpg";
import "../style/Connexion.css";

const customStyles = {
  overlay: {
    background: "rgba(0,0,0,0.88)",
  },
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("L'adresse e-mail est obligatoire")
    .email("Veuillez entrer une adresse e-mail valide"),
  password: Yup.string()
    .required("Le mot de passe est obligatoire")
    .min(8, "Le mot de passe doit avoir 8 caractères"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function Connexion() {
  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setUserProfil } = useContext(CurrentUserContext);

  function openModal() {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const ToastConnexion = () => toast.success("Connexion réussie !");
  const ToastEditPassword = () => toast.success("Mot de passe modifié !");

  const searchUser = () => {
    try {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
          {
            email,
            password,
          },
          { withCredentials: true }
        )
        .then((response) => {
          setUserProfil(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          navigate("/search");
          ToastConnexion();
        });
    } catch (error) {
      console.error(error);
    }
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
        <div className="divPicConnexionbis">
          <img className="logoWild" src={Login} alt="logo wild code school" />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={searchUser}
          validateOnMount
        >
          {(formik) => (
            <Form className="formConnection">
              <h2 className="titleInscbis">
                <p>
                  <span className="accent">C</span>onnexion
                </p>
              </h2>
              <div onChange={handleMail} className="verif-form">
                <Field
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="login-input"
                  required
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
              <button
                type="submit"
                className="login-button"
                onClick={ToastConnexion}
              >
                Se connecter
              </button>
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

                    <button
                      className="login-button"
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                      onClick={ToastEditPassword}
                    >
                      Enregistrer
                    </button>
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
                  </form>
                </Modal>
              </div>
            </Form>
          )}
        </Formik>
        <div className="secPart">
          <div className="divPicIntrobis">
            <img className="logoWildR" src={Logo} alt="logo wild code school" />
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
