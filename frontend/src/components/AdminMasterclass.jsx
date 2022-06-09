import "../style/Admin.css";
import "../style/App.css";
import { useState } from "react";

export default function AdminMasterclass() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [theme, setTheme] = useState("");
  const [keyword, setKeyword] = useState("");

  return (
    <div className="admin-masterclass">
      <section className="showMasterclass">
        <div className="selectmaster">
          <select className="thematique">
            <option value="theme">Recettes</option>
            <option value="theme">People</option>
            <option value="theme">Art</option>
          </select>
        </div>
        <div>
          <select className="selectMasterclass">
            <option value="masterclass">Masterclass 1</option>
            <option value="masterclass">Masterclass 2</option>
            <option value="masterclass">Masterclass 3</option>
          </select>
        </div>
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
        <p>ajouter le sample video de lou</p>
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
