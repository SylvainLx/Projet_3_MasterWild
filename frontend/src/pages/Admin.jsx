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
      <section className="title">
        <h2>
          <span className="span-title">A</span>dministrateur
        </h2>
      </section>
      <section className="dashboard">
        <p className="text-dashboard">
          <span className="span-number">150</span>
          <br />
          Clients
        </p>
        <p className="text-dashboard">
          <span className="span-number">75</span>
          <br />
          Abonnés
        </p>
        <p className="text-dashboard">
          <span className="span-number">43</span>
          <br />
          Masterclass
        </p>
        <p className="text-dashboard">
          <span className="span-number">240</span>
          <br />
          Ventes
        </p>
      </section>
      <section className="selectTask">
        <div className="select-clients">
          <button type="button" onClick={handleClients}>
            {" "}
            <span className="span-task">C</span>lients
          </button>
        </div>
        <div className="select-masterclass">
          <button type="button" onClick={handleMasterclass}>
            {" "}
            <span className="span-task">M</span>asterclass
          </button>
        </div>
      </section>
      {showClients && <AdminAbonne />}
      {showMasterclass && <AdminMasterclass />}
    </div>
  );
}
