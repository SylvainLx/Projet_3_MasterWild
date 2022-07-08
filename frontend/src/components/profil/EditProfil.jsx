import { React, useState, useEffect } from "react";
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
});

export default function EditProfil() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleMail = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/1`).then((res) => {
      setUser(res.data);
    });
  });

  const postUser = () => {
    try {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/api/user/:id`, {
          firstname,
          lastname,
          email,
        })
        .then((res) => {
          res.sendStatus(200);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="my-profil">
      <Formik
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
                placeholder={user.lastname}
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
                value={user.firstname}
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
            <div onChange={handleMail} className="verif-form">
              <p>Email :</p>
              <Field
                name="email"
                value={user.email}
                type="text"
                size="30"
                className="login-input"
              />
              <ErrorMessage
                name="email"
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
