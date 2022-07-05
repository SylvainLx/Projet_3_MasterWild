import "../style/Admin.css";
import "../style/App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import VideoSample from "./VideoSample";
import AddMasterclass from "./AddMasterclass";
import EditMasterclass from "./EditMasterclass";

export default function AdminMasterclass() {
  const [showMasterclass, setShowMasterclass] = useState([]);
  const [filterMasterclass, setFilterMasterclass] = useState("");

  const videoExemple = {
    name: "Nom de la Vidéo",
    summary:
      "Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non culpa quod cum temporibus. Lorem ipsum dolor sit amet. Id quod deleniti non non culpa quod cum temporibus.",
    duration: 45,
    srcPicture: "src/assets/harryroselmack.png",
  };

  useEffect(() => {
    axios.get("http://localhost:5001/api/admin/masterclass").then((res) => {
      setShowMasterclass(res.data.data);
    });
  }, []);

  const handleFilter = (e) => {
    setFilterMasterclass(e.target.value);
  };

  const handleDelete = (e) => {
    const id = e.target.getAttribute("data-id");

    axios.delete(`http://localhost:5001/api/admin/masterclass/${id}`);
  };

  return (
    <div className="admin-masterclass">
      <section className="showMasterclass">
        <select
          name="showMasterclass"
          id="showMasterclass"
          onChange={handleFilter}
          className="selectmaster"
        >
          <option value="">Selectionne ta Masterclass</option>
          {showMasterclass.map((masterclass) => (
            <option value={masterclass.title} key={masterclass.Id}>
              {masterclass.title}
            </option>
          ))}
        </select>
        {showMasterclass
          .filter((filtered) => filtered.title === filterMasterclass)
          .map((elem) => (
            <div key={elem.Id}>
              <EditMasterclass
                key={elem.Id}
                titles={elem.title}
                names={elem.entreprise.name}
                specialities={elem.entreprise.speciality}
                descs={elem.description}
                sources={elem.source}
                themes={elem.category.name}
                Id={elem.Id}
              />
            </div>
          ))}
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
        <AddMasterclass />
      </section>
    </div>
  );
}
