import "../style/Admin.css";
import "../style/App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import AdminAbonne from "../components/AdminAbonne";
import AdminMasterclass from "../components/AdminMasterclass";

export default function Admin() {
  const [showClients, setShowClients] = useState(true);
  const [showMasterclass, setShowMasterclass] = useState(false);
  const [masterclassDashboard, setMasterclassDashboard] = useState([]);
  const [usersDashboard, setUsersDashboard] = useState([]);

  const handleClients = () => {
    setShowClients((current) => !current);
    setShowMasterclass(!true);
  };
  const handleMasterclass = () => {
    setShowMasterclass((current) => !current);
    setShowClients(!true);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/masterclass`)
      .then((res) => {
        setMasterclassDashboard(res.data.data);
      });
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user`).then((res) => {
      setUsersDashboard(res.data);
    });
  }, []);

  const masterclassQuantity = masterclassDashboard.length;
  const usersQuantity = usersDashboard.filter(
    (users) => users.role !== "pro" && users.role !== "admin"
  );
  const employeQuantity = usersDashboard.filter(
    (employe) => employe.role === "pro"
  );
  return (
    <div className="container-admin">
      <section className="title-admin">
        <h2>
          <span className="span-A">A</span>dministrateur
        </h2>
      </section>
      <section className="dashboard">
        <p className="text-dashboard">
          <span className="span-number">{usersQuantity.length}</span>
          <br />
          Utilisateurs
        </p>
        <p className="text-dashboard">
          <span className="span-number">{employeQuantity.length}</span>
          <br />
          Entreprises
        </p>
        <p className="text-dashboard text-masterclass">
          <span className="span-number">{masterclassQuantity}</span>
          <br />
          Masterclass
        </p>
      </section>
      <section className="selectTask">
        <div className="select-clients">
          <button className="btn-blue" type="button" onClick={handleClients}>
            {" "}
            <span className="span-task">C</span>lients
          </button>
        </div>
        <div className="select-masterclass">
          <button className="btn-red" type="button" onClick={handleMasterclass}>
            {" "}
            <span className="span-task">M</span>asterclass
          </button>
        </div>
      </section>
      {showClients && (
        <AdminAbonne users={usersQuantity} professionals={employeQuantity} />
      )}
      {showMasterclass && <AdminMasterclass />}
    </div>
  );
}
