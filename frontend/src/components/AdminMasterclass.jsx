import "../style/Admin.css";
import "../style/App.css";
import axios from "axios";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Select from "react-select";
import VideoSample from "./VideoSample";

// function formAsyncSubmission(formValues) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(Error("Form submitted"));
//     }, 2000);
//   });
// }

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Le nom de la masterclass est obligatoire"),
  firstname: Yup.string().required("Le nom est obligatoire"),
  lastname: Yup.string().required("Le prénom est obligatoire"),
  category: Yup.string().required("Le thème est obligatoire"),
  keyword: Yup.string().required("Le mot clé est obligatoire"),
  photo: Yup.mixed().required("La photo est obligatoire"),
  description: Yup.string().required("La description est obligatoire"),
});

function AdminMasterclass() {
  // eslint-disable-next-line no-unused-vars
  const [files, setFiles] = useState([]);

  const optionsTheme = [
    { value: "theme1", label: "theme 1" },
    { value: "theme1", label: "theme 2" },
    { value: "theme1", label: "theme 3" },
  ];
  const optionsMasterclass = [
    { value: "Masterclass", label: "Masterclass 1" },
    { value: "Masterclass", label: "Masterclass 2" },
    { value: "Masterclass", label: "Masterclass 3" },
  ];

  const videoExemple = {
    name: "Nom de la Vidéo",
    summary:
      "Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non non culpa quod cum temporibus.",
    duration: 45,
    srcPicture: "src/assets/harryroselmack.png",
  };

  const customStyleTheme = {
    control: (base) => ({
      ...base,
      backgroundColor: "var(--secondary-red)",
      border: 0,
    }),
    dropdownIndicator: () => ({
      color: "white",
    }),
    placeholder: (base) => ({
      ...base,
      color: "white",
    }),
    menu: () => ({
      marginTop: "0",
      background: "var(--secondary-red)",
    }),
  };

  const initialValues = {
    name: "",
    firstname: "",
    lastname: "",
    category: "",
    keyword: "",
    photo: "",
    description: "",
  };

  const handlePost = (e) => {
    e.preventDefault();

    const formData = new FormData();
    // for (let value in values) {
    //   formData.append(value, values[value]);
    // }

    axios.post("http://localhost:5001/masterclass", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // .then((res) => console.log(res));
  };

  async function handleSubmit(formValues, onSubmittingProps) {
    try {
      // await formAsyncSubmission(formValues);
      // console.log(formValues);
      onSubmittingProps.resetForm();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="admin-masterclass">
      <section className="showMasterclass">
        <Select
          className="selectmaster"
          styles={customStyleTheme}
          options={optionsTheme}
          placeholder="Selection Abonné"
          theme={(themes) => ({
            ...themes,
            colors: {
              ...themes.colors,
              primary25: "var(--secondary-red)",
              primary: "var(--main-red)",
            },
          })}
        />

        <Select
          className="selectmaster"
          styles={customStyleTheme}
          options={optionsMasterclass}
          placeholder="Selection Abonné"
          theme={(themes) => ({
            ...themes,
            colors: {
              ...themes.colors,
              primary25: "var(--main-red)",
              primary: "var(--main-red)",
            },
          })}
        />
        <div className="buttonPutDelete">
          <button className="btnPut" type="button">
            Modifier
          </button>
        </div>
        <div className="buttonPutDelete">
          <button className="btnDel" type="button">
            Supprimer
          </button>
        </div>
      </section>
      <section className="sample-video">
        <VideoSample
          addVideo
          name={videoExemple.name}
          summary={videoExemple.summary}
          duration={videoExemple.duration}
          srcPicture={videoExemple.srcPicture}
        />
      </section>
      <section className="add-masterclass">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(handlePost, handleSubmit)}
        >
          {(formik) => (
            <Form>
              <div>
                <Field
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Titre de la vidéo"
                  id="name"
                />
                <ErrorMessage
                  name="name"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div>
                <Field
                  name="category"
                  type="email"
                  className="input"
                  placeholder="Catégories"
                  id="category"
                />
                <ErrorMessage
                  name="category"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div>
                <Field
                  name="keyword"
                  type="email"
                  className="input"
                  placeholder="Mots-clés"
                  id="keyword"
                />
                <ErrorMessage
                  name="keyword"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div>
                <Field
                  name="lastname"
                  type="text"
                  className="input"
                  placeholder="Nom de la célébrité"
                  id="lastname"
                />
                <ErrorMessage
                  name="lastname"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div>
                <Field
                  name="firstname"
                  type="text"
                  className="input"
                  placeholder="Prénom de la célébrité"
                  id="firstname"
                />
                <ErrorMessage
                  name="firstname"
                  className="text-danger"
                  component="span"
                />
              </div>
              <input
                onChange={(event) => {
                  setFiles("file", event.currentTarget.files[0]);
                }}
                className="input"
                type="file"
                name="upload_picture"
                placeholder="Photo"
                id="upload_picture"
              />
              <div>
                <Field
                  name="source"
                  type="text"
                  className="input"
                  placeholder="Lien de la vidéo"
                  id="source"
                />
                <ErrorMessage
                  name="source"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div>
                <Field
                  name="description"
                  type="text"
                  className="input"
                  placeholder="Description de la masterclass"
                  id="description"
                />
                <ErrorMessage
                  name="description"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btnSend"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Valider
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
}

export default AdminMasterclass;
