import "../style/Admin.css";
import "../style/App.css";
import { useState } from "react";
import Select from "react-select";

import VideoSample from "./VideoSample";

export default function AdminMasterclass() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [theme, setTheme] = useState("");
  const [keyword, setKeyword] = useState("");

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
        <form className="form-masterclass" action="post">
          <label htmlFor="title">
            <input
              className="input"
              type="text"
              placeholder="Titre de la video"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="Mots clés">
            <input
              className="input"
              type="text"
              placeholder="Mots Clés"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </label>
          <label htmlFor="Photo">
            <input
              className="input"
              type="text"
              placeholder="Photo"
              onChange={(e) => setPicture(e.target.value)}
            />
          </label>
          <label htmlFor="Name">
            <input
              className="input"
              type="text"
              placeholder="Nom célébrité"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="Url">
            <input
              className="input"
              type="text"
              placeholder="Url"
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <label htmlFor="Theme">
            <input
              className="input"
              type="text"
              placeholder="Thématique"
              onChange={(e) => setTheme(e.target.value)}
            />
          </label>
          <label className="desc" htmlFor="Desc">
            <textarea
              className="input i-desc"
              type="text"
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
            />
          </label>
          <button className="btnSend" type="button">
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
}
