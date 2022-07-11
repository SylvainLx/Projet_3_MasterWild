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

  useEffect(() => {
    axios.get("http://localhost:5001/api/admin/masterclass").then((res) => {
      setShowMasterclass(res.data.data);
    });
  }, []);

  const handleFilter = (e) => {
    setFilterMasterclass(e.target.value);
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
                keywords={elem.keywords}
                descs={elem.description}
                sources={elem.source}
                themes={elem.category.name}
                Id={elem.Id}
              />{" "}
            </div>
          ))}
      </section>
      <section className="sample-video">
        <VideoSample masterclassId={1} addVideo />
      </section>
      <section className="add-masterclass">
        <AddMasterclass />
      </section>
    </div>
  );
}
