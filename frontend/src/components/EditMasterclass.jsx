import "../style/Admin.css";
import PropTypes from "prop-types";

import axios from "axios";
import { useState } from "react";

export default function EditMasterclass({
  titles,
  names,
  specialities,
  descs,
  sources,
  keywords,
  themes,
  Id,
}) {
  EditMasterclass.propTypes = {
    titles: PropTypes.string.isRequired,
    names: PropTypes.string.isRequired,
    specialities: PropTypes.string.isRequired,
    descs: PropTypes.string.isRequired,
    sources: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
    themes: PropTypes.string.isRequired,
    Id: PropTypes.number.isRequired,
  };

  const [photo, setPhoto] = useState([]);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [source, setSource] = useState("");
  const [theme, setTheme] = useState("");
  const [keyword, setKeyword] = useState("");
  const [speciality, setSpeciality] = useState("");

  const editMasterclass = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5001/api/admin/masterclass/${Id}`, {
      photo,
      title,
      name,
      desc,
      source,
      theme,
      keyword,
      speciality,
    });
  };
  return (
    <form className="form-masterclass" onSubmit={editMasterclass}>
      <label htmlFor="title">
        <input
          className="input"
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder={titles}
        />
      </label>
      <label htmlFor="name">
        <input
          className="input"
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder={names}
        />
      </label>
      <label htmlFor="speciality">
        <input
          className="input"
          type="text"
          name="speciality"
          onChange={(e) => setSpeciality(e.target.value)}
          placeholder={specialities}
        />
      </label>
      <label htmlFor="source">
        <input
          className="input"
          type="text"
          name="source"
          onChange={(e) => setSource(e.target.value)}
          placeholder={sources}
        />
      </label>
      <label htmlFor="category">
        <input
          className="input"
          type="text"
          name="category"
          onChange={(e) => setTheme(e.target.value)}
          placeholder={themes}
        />
      </label>
      <label htmlFor="keyword">
        <input
          className="input"
          type="text"
          name="keyword"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder={keywords}
        />
      </label>
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
          placeholder={descs}
        />
      </label>
      <input className="btnSend" type="submit" value="Modifier" />
    </form>
  );
}
