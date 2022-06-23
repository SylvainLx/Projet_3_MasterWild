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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [desc, setDesc] = useState("");
  const [source, setSource] = useState("");
  const [theme, setTheme] = useState("");
  const [keyword, setKeyword] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData();

    formData.append("text", title);
    formData.append("text", firstname);
    formData.append("text", lastname);
    formData.append("text", source);
    formData.append("text", theme);
    formData.append("text", keyword);
    formData.append("file", photo[0]);
    formData.append("text", desc);

    axios
      .post(
        "http://localhost:5001/masterclass",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => console.log(res.data));
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
              placeholder="Titre de la video"
            />
          </label>
          <label htmlFor="firstname">
            <input
              className="input"
              type="text"
              name="firstname"
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Prénom Célébrité"
            />
          </label>
          <label htmlFor="lastname">
            <input
              className="input"
              type="text"
              name="lastname"
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Nom Célébrité"
            />
          </label>
          <label htmlFor="source">
            <input
              className="input"
              type="text"
              name="source"
              onChange={(e) => setSource(e.target.value)}
              placeholder="Lien de la video"
            />
          </label>
          <label htmlFor="category">
            <input
              className="input"
              type="text"
              name="category"
              onChange={(e) => setTheme(e.target.firstname)}
              placeholder="Thématique"
            />
          </label>
          <label htmlFor="keyword">
            <input
              className="input"
              type="text"
              name="keyword"
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Mots Clés"
            />
          </label>
          <label htmlFor="uploaded_picture">
            <input
              onChange={(e) => setPhoto(e.target.files)}
              className="input"
              type="file"
              name="photo"
              placeholder="Photo"
            />
          </label>
          <label className="desc" htmlFor="description">
            <textarea
              className="input i-desc"
              type="text"
              name="description"
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Description"
            />
          </label>
          <input className="btnSend" type="submit" />
        </form>
      </section>
    </div>
  );
}
