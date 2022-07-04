import "../style/Admin.css";
import "../style/App.css";
import axios from "axios";
import { useState } from "react";

import Select from "react-select";
import VideoSample from "./VideoSample";

export default function AdminMasterclass() {
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

  const [photo, setPhoto] = useState([]);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [source, setSource] = useState("");
  const [theme, setTheme] = useState("");
  const [keyword, setKeyword] = useState("");
  const [speciality, setSpeciality] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("name", name);
    formData.append("source", source);
    formData.append("file", name);
    formData.append("description", desc);
    formData.append("speciality", speciality);
    formData.append("theme", theme);
    formData.append("keyword", keyword);
    formData.append("file", photo[0]);

    axios.post(
      "http://localhost:5001/masterclass",

      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  const handleDelete = (e) => {
    const id = e.target.getAttribute("data-id");

    axios.delete(`http://localhost:5001/masterclass/${id}`);
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
          <button onClick={handleDelete} className="btnDel" type="button">
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
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre de la masterclass"
            />
          </label>
          <label htmlFor="name">
            <input
              className="input"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Nom de l'entreprisee"
            />
          </label>
          <label htmlFor="speciality">
            <input
              className="input"
              type="text"
              name="speciality"
              onChange={(e) => setSpeciality(e.target.value)}
              placeholder="Spécialité - domaine"
            />
          </label>
          <label htmlFor="source">
            <input
              className="input"
              type="text"
              name="source"
              onChange={(e) => setSource(e.target.value)}
              placeholder="Lien YT de la video"
            />
          </label>
          <label htmlFor="category">
            <input
              className="input"
              type="text"
              name="category"
              onChange={(e) => setTheme(e.target.value)}
              placeholder="Thématique"
            />
          </label>
          {/* <label htmlFor="keyword">
            <input
              className="input"
              type="text"
              name="keyword"
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Mots Clés"
            />
          </label> */}
          <label htmlFor="logo_source">
            <input
              onChange={(e) => setPhoto(e.target.files)}
              className="input"
              type="file"
              name="logo_source"
            />
          </label>
          <label className="desc" htmlFor="description">
            <textarea
              className="input i-desc"
              type="text"
              name="description"
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Description de la masterclass"
            />
          </label>
          <input className="btnSend" type="submit" />
        </form>
        <form className="form-masterclass" onSubmit={handlePost}>
          <label htmlFor="keyword">
            <input
              className="input"
              type="text"
              name="keyword"
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Mots Clés"
            />
          </label>
          <input className="btnSend" type="submit" />
        </form>
      </section>
    </div>
  );
}
