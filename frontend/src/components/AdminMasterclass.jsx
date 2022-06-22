import "../style/Admin.css";
import "../style/App.css";
<<<<<<< HEAD
import axios from "axios";
import { useState } from "react";
=======
import Select from "react-select";
>>>>>>> ce840e2febba130bbd9d5e609df6898418287240

import Select from "react-select";
import VideoSample from "./VideoSample";

export default function AdminMasterclass() {
<<<<<<< HEAD
  const [files, setFiles] = useState([]);

=======
>>>>>>> ce840e2febba130bbd9d5e609df6898418287240
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

  const handlePost = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", files[0]);

    axios
      .post("http://localhost:5001/masterclass", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res));
  };
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
        <form className="form-masterclass" onSubmit={handlePost}>
          <label htmlFor="title">
            <input
              className="input"
              type="text"
              placeholder="Titre de la video"
            />
          </label>
          <label htmlFor="Mots clés">
            <input className="input" type="text" placeholder="Mots Clés" />
          </label>
<<<<<<< HEAD
          <label htmlFor="uploaded_picture">
            <input
              onChange={(e) => setFiles(e.target.files)}
              className="input"
              type="file"
              name="upload_picture"
              placeholder="Photo"
            />
=======
          <label htmlFor="Photo">
            <input className="input" type="text" placeholder="Photo" />
>>>>>>> ce840e2febba130bbd9d5e609df6898418287240
          </label>
          <label htmlFor="Name">
            <input className="input" type="text" placeholder="Nom célébrité" />
          </label>
<<<<<<< HEAD
          <label htmlFor="uploaded_masterclass">
            <input
              className="input"
              type="text"
              name="upload_masterclass"
              placeholder="Url"
            />
=======
          <label htmlFor="Url">
            <input className="input" type="text" placeholder="Url" />
>>>>>>> ce840e2febba130bbd9d5e609df6898418287240
          </label>
          <label htmlFor="Theme">
            <input className="input" type="text" placeholder="Thématique" />
          </label>
          <label className="desc" htmlFor="Desc">
            <textarea
              className="input i-desc"
              type="text"
              placeholder="Description"
            />
          </label>
          <input className="btnSend" type="submit" />
        </form>
      </section>
    </div>
  );
}
