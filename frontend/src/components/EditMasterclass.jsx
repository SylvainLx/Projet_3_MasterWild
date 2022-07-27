import "../style/Admin.css";
import PropTypes from "prop-types";

import axios from "axios";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditMasterclass({
  titles,
  names,
  descs,
  sources,
  keywords,
  themes,
  Id,
}) {
  EditMasterclass.propTypes = {
    titles: PropTypes.string.isRequired,
    names: PropTypes.string.isRequired,
    descs: PropTypes.string.isRequired,
    sources: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
    themes: PropTypes.string.isRequired,
    Id: PropTypes.number.isRequired,
  };

  const [title, setTitle] = useState(titles);
  const [name, setName] = useState(names);
  const [desc, setDesc] = useState(descs);
  const [source, setSource] = useState(sources);
  const [theme, setTheme] = useState(themes);
  const [keyword, setKeyword] = useState(
    keywords.map((key) => key.keyword.name)
  );

  const ToastEditMasterclass = () => toast.success("Masterclass modifiée !");

  const editMasterclass = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("name", name);
    formData.append("source", source);
    formData.append("description", desc);
    formData.append("theme", theme);
    formData.append("keyword", keyword);

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/masterclass/${Id}`,

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => ToastEditMasterclass());
  };
  const ToastDeleteMasterclass = () => toast.success("Masterclass supprimée !");

  const deleteMasterclass = (e) => {
    e.preventDefault();
    axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/api/admin/masterclass/${Id}`
    );
    ToastDeleteMasterclass();
  };

  return (
    <div>
      <form className="form-masterclass" onSubmit={editMasterclass}>
        <label htmlFor="title" className="labelTitle">
          <input
            className="i-title"
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
            value={names}
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
            value={keyword}
          />
        </label>
        <label className="desc" htmlFor="description">
          <textarea
            className="i-desc"
            type="text"
            name="description"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </label>
        <input className="btnPut" type="submit" value="Modifier" />
        <input
          className="btnDel"
          type="submit"
          value="Supprimer"
          onClick={deleteMasterclass}
        />
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>{" "}
    </div>
  );
}
