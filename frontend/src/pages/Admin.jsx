import "../style/Admin.css";
import "../style/App.css";
import { useState } from "react";

import AdminAbonne from "../components/AdminAbonne";
import AdminMasterclass from "../components/AdminMasterclass";

export default function Admin() {
  const [showClients, setShowClients] = useState(true);
  const [showMasterclass, setShowMasterclass] = useState(false);

  const handleClients = () => {
    setShowClients((current) => !current);
    setShowMasterclass(!true);
  };
  const handleMasterclass = () => {
    setShowMasterclass((current) => !current);
    setShowClients(!true);
  };
  return (
    <div className="container-admin">
      <section className="title-admin">
        <h2>
          <span className="span-A">A</span>dministrateur
        </h2>
      </section>
      <section className="dashboard">
        <p className="text-dashboard">
          <span className="span-number">150</span>
          <br />
          Utilisateurs
        </p>
        <p className="text-dashboard">
          <span className="span-number">75</span>
          <br />
          Entreprises
        </p>
        <p className="text-dashboard">
          <span className="span-number">43</span>
          <br />
          Catégories
        </p>
        <p className="text-dashboard">
          <span className="span-number">240</span>
          <br />
          Masterclasses
        </p>
      </section>
      <section className="selectTask">
        <div className="select-clients">
          <button className="btn-blue" type="button" onClick={handleClients}>
            {" "}
            <span className="span-task">U</span>tilisateurs
          </button>
        </div>
        <div className="select-masterclass">
          <button className="btn-red" type="button" onClick={handleMasterclass}>
            {" "}
            <span className="span-task">M</span>asterclasses
          </button>
        </div>
      </section>
      {showClients && <AdminAbonne />}
      {showMasterclass && <AdminMasterclass />}
    </div>
  );
}
