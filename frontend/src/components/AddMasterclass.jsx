import "../style/Admin.css";

import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddMasterclass() {
  const [photo, setPhoto] = useState([]);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [source, setSource] = useState("");
  const [theme, setTheme] = useState("");
  const [keyword, setKeyword] = useState("");
  const [speciality, setSpeciality] = useState("");

  const ToastAddMasterclass = () => toast.success("Masterclass ajoutée !");
  const ToastErrorAddMasterclass = () =>
    toast.error("Erreur lors de la création d'une masterclass !");

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
    try {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/admin/masterclass`,

          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          ToastAddMasterclass();
          window.location.reload();
        });
    } catch (err) {
      console.error(err);
      ToastErrorAddMasterclass();
    }
  };

  return (
    <div className="divAdd-masterclass">
      <form className="formAdd-masterclass" onSubmit={handlePost}>
        <label className="labelTitle" htmlFor="title">
          <input
            className="i-title"
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre de la masterclass"
            required
            maxLength="150"
            pattern="[^@&()!_$*€£`+=/;?#]+"
          />
        </label>
        <label htmlFor="name">
          <input
            className="input"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom de l'entreprise"
            required
            maxLength="150"
            pattern="[^@&()!_$*€£`+=/;?#]+"
          />
        </label>
        <label htmlFor="speciality">
          <input
            className="input"
            type="text"
            name="speciality"
            onChange={(e) => setSpeciality(e.target.value)}
            placeholder="Spécialité - domaine"
            required
            maxLength="150"
            pattern="[^@&()!_$*€£`+=/;?#]+"
          />
        </label>
        <label htmlFor="source">
          <input
            className="input"
            type="url"
            name="source"
            onChange={(e) => setSource(e.target.value)}
            placeholder="Lien YT de la video"
            required
            maxLength="1000"
            pattern="((https?:\/\/)|(\/)|(..\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?"
          />
        </label>
        <label htmlFor="category">
          <input
            className="input"
            type="text"
            name="category"
            onChange={(e) => setTheme(e.target.value)}
            placeholder="Thématique"
            required
            maxLength="150"
            pattern="[^@&()!_$*€£`+=/;?#]+"
          />
        </label>
        <label htmlFor="keyword">
          <input
            className="input"
            type="text"
            name="keyword"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Mots Clés"
            required
            maxLength="150"
            pattern="[^@&()!_$*€£`+=/;?#]+"
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
            className="i-desc"
            type="text"
            name="description"
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description de la masterclass"
            maxLength="2500"
            required
            pattern="[@_$*€£`+=/;#]+"
          />
        </label>
        <input className="btnPostMasterclass" type="submit" />
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
      </form>
    </div>
  );
}
