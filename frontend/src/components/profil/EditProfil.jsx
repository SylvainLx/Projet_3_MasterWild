import { React, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../../style/MyProfil.css";

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

export default function EditProfil() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handleBirthday = (e) => {
    setBirthday(e.target.value);
  };

  const postUser = () => {
    try {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/api/user/:id`, {
          firstname,
          lastname,
          email,
          birthday,
        })
        .then((res) => {
          res.sendStatus(200);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    birthday: "",
  };

  return (
    <div className="my-profil">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={postUser}
        validateOnMount
      >
        {(formik) => (
          <Form className="formProfil">
            <p>Nom :</p>
            <div onChange={handleLastname} className="verif-form">
              <Field
                name="lastname"
                value="Nom"
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
            <div onChange={handleFirstname} className="verif-form">
              <p>Prénom :</p>
              <Field
                name="firstname"
                value="Prénom"
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
            <div onChange={handleMail} className="verif-form">
              <p>Email :</p>
              <Field
                name="email"
                value="léo.dupont@gmail.com"
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
            <div onChange={handleBirthday} className="verif-form">
              <p>Date de naissance :</p>
              <Field
                name="birthday"
                value="02/10/1987"
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
    </div>
  );
}
