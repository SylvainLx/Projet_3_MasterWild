import { React, useState, useContext } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrentUserContext from "../../contexts/currentUser";

import "../../style/MyProfil.css";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Le prénom est obligatoire"),
  lastname: Yup.string().required("Le nom est obligatoire"),
  email: Yup.string()
    .required("L'adresse e-mail est obligatoire")
    .email("Veuillez entrer une adresse e-mail valide"),
  newPassword: Yup.string()
    .required("Le mot de passe est obligatoire")
    .min(8, "Le mot de passe doit avoir 8 caractères"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("newPassword")],
    "Les mots de passe ne correspondent pas"
  ),
});

export default function EditProfil() {
  const { userProfil, setUserProfil } = useContext(CurrentUserContext);
  const [firstname, setFirstname] = useState(userProfil.firstname);
  const [lastname, setLastname] = useState(userProfil.lastname);
  const [email, setEmail] = useState(userProfil.email);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);

  const ToastEditProfil = () => toast.success("Modification enregistrée !");

  const postUser = () => {
    try {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/api/user/${userProfil.Id}`, {
          firstname,
          lastname,
          email,
          password,
          newPassword,
        })
        .then(() => {
          setUserProfil({
            ...userProfil,
            firstname,
            lastname,
            email,
          });
          navigate("/search");
          ToastEditProfil();
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="my-profil">
      <Formik
        initialValues={{
          lastname,
          firstname,
          email,
          password,
          newPassword,
          passwordConfirmation,
        }}
        validationSchema={validationSchema}
        onSubmit={postUser}
        validateOnMount
      >
        {(formik) => (
          <Form className="user-table">
            <div
              className="input-profile"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            >
              <p>Nom :</p>
              <Field
                name="lastname"
                value={formik.values.lastname}
                type="text"
                size="30"
                className="modify-input"
              />
              <ErrorMessage
                name="lastname"
                className="text-danger-profil"
                component="span"
              />
            </div>
            <div
              className="verif-form"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            >
              <p>Prénom :</p>
              <Field
                name="firstname"
                value={formik.values.firstname}
                type="text"
                size="30"
                className="modify-input"
              />
              <ErrorMessage
                name="firstname"
                className="text-danger-profil"
                component="span"
              />
            </div>
            <div
              className="verif-form"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            >
              <p>Email :</p>
              <Field
                name="email"
                value={formik.values.email}
                type="email"
                size="30"
                className="modify-input"
              />
              <ErrorMessage
                name="email"
                className="text-danger-profil"
                component="span"
              />
            </div>
            <div className="container-password-profil">
              <div
                className="verif-form"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              >
                <p>
                  Mot de passe actuel :{" "}
                  <span className="no-bold">
                    <button
                      className="buttonShow"
                      type="button"
                      onClick={handleClick}
                    >
                      {show ? <p>show</p> : <p>hide</p>}
                    </button>
                  </span>
                </p>

                <Field
                  name="password"
                  type={show ? "password" : "text"}
                  size="30"
                  className="modify-input"
                />
              </div>
            </div>

            <div className="container-password-profil">
              <div
                className="verif-form"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              >
                <p>
                  Nouveau mot de passe :{" "}
                  <button
                    className="buttonShow"
                    type="button"
                    onClick={handleClick}
                  >
                    {show ? <p>show</p> : <p>hide</p>}
                  </button>
                </p>
                <Field
                  name="newPassword"
                  type={show ? "password" : "text"}
                  size="30"
                  className="modify-input"
                />
              </div>
              <ErrorMessage
                name="newPassword"
                className="text-danger-profil"
                component="span"
              />
            </div>
            <div className="container-password-profil">
              <div
                className="verif-form"
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                }}
              >
                <p>
                  Validation mot de passe :{" "}
                  <button
                    className="buttonShow"
                    type="button"
                    onClick={handleClick}
                  >
                    {show ? <p>show</p> : <p>hide</p>}
                  </button>
                </p>
                <Field
                  name="passwordConfirmation"
                  type={show ? "password" : "text"}
                  size="30"
                  className="modify-input"
                />
                <ErrorMessage
                  name="passwordConfirmation"
                  className="text-danger-profil"
                  component="span"
                />
              </div>
            </div>
            <div className="cont-valid-button">
              <button
                className="button-blue button-profil"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Valider
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
