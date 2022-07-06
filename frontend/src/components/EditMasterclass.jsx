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
  const [title, setTitle] = useState(titles);
  const [name, setName] = useState(names);
  const [desc, setDesc] = useState(descs);
  const [source, setSource] = useState(sources);
  const [theme, setTheme] = useState(themes);
  const [keyword, setKeyword] = useState(keywords);
  const [speciality, setSpeciality] = useState(specialities);

  const editMasterclass = (e) => {
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

    axios.put(
      `http://localhost:5001/api/admin/masterclass/${Id}`,

      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  const mapKeywords = keywords.map((key) => key.keyword.name);

  return (
    <form className="form-masterclass" onSubmit={editMasterclass}>
      <label htmlFor="title" className="labelTitle">
        <input
          className="input i-title"
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label htmlFor="name">
        <input
          className="input"
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label htmlFor="speciality">
        <input
          className="input"
          type="text"
          name="speciality"
          onChange={(e) => setSpeciality(e.target.value)}
          value={speciality}
        />
      </label>
      <label htmlFor="source">
        <input
          className="input"
          type="text"
          name="source"
          onChange={(e) => setSource(e.target.value)}
          value={source}
        />
      </label>
      <label htmlFor="category">
        <input
          className="input"
          type="text"
          name="category"
          onChange={(e) => setTheme(e.target.value)}
          value={theme}
        />
      </label>
      <label htmlFor="keyword">
        <input
          className="input"
          type="text"
          name="keyword"
          onChange={(e) => setKeyword(e.target.value)}
          value={mapKeywords}
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
          value={desc}
        />
      </label>
      <input className="btnSend" type="submit" value="Modifier" />
      <input className="btnSend" type="submit" value="Supprimer" />
    </form>
  );
}
