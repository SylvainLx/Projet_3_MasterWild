import { React, useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router";
import * as Yup from "yup";

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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/1`).then((res) => {
      setFirstname(res.data.firstname);
      setLastname(res.data.lastname);
      setEmail(res.data.email);
    });
  }, []);

  const postUser = () => {
    try {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/api/user/1`, {
          firstname,
          lastname,
          email,
          password: newPassword,
        })
        .then(() => {
          navigate("/search");
        });
    } catch (error) {
      console.error(error);
    }
  };
  console.error(firstname, lastname, email, newPassword);

  return (
    <div className="my-profil">
      {lastname.length > 0 && firstname.length > 0 && email.length > 0 && (
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
            <Form className="formProfil">
              <div
                className="verif-form"
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
                  className="login-input"
                />
                <ErrorMessage
                  name="lastname"
                  className="text-danger"
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
                  className="login-input"
                />
                <ErrorMessage
                  name="firstname"
                  className="text-danger"
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
                  className="login-input"
                />
                <ErrorMessage
                  name="email"
                  className="text-danger"
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
                  <p>Mot de passe actuel :</p>
                  <Field
                    name="password"
                    type="text"
                    size="30"
                    className="login-input"
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

              <div className="container-password-profil">
                <div
                  className="verif-form"
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                >
                  <p>Nouveau mot de passe :</p>
                  <Field
                    name="newPassword"
                    type="text"
                    size="30"
                    className="login-input"
                  />
                </div>
                <ErrorMessage
                  name="newPassword"
                  className="text-danger"
                  component="span"
                />
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
              <div className="container-password-profil">
                <div
                  className="verif-form"
                  onChange={(e) => {
                    setPasswordConfirmation(e.target.value);
                  }}
                >
                  <p>Confirmation du mot de passe :</p>
                  <Field
                    name="passwordConfirmation"
                    type="text"
                    size="30"
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
              <div className="cont-valid-button">
                <button
                  className="button-blue button-profil"
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Valider
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}
