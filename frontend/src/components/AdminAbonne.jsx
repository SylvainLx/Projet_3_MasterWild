import "../style/Admin.css";
import "../style/App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CSVLink } from "react-csv";
import PropTypes from "prop-types";
import UsersList from "./UsersList";
import ProList from "./ProList";

export default function AdminAbonne({ users, professionals }) {
  AdminAbonne.propTypes = {
    users: PropTypes.string.isRequired,
    professionals: PropTypes.string.isRequired,
  };
  const [selectUsers, setSelectUsers] = useState(true);
  const [showNonAbonne, setShowNonAbonne] = useState(false);
  const [filterUsers, setFilterUsers] = useState([]);
  const [excel, setExcel] = useState([]);
  const [filterPro, setFilterPro] = useState([]);
  const handleAbonne = () => {
    setSelectUsers((current) => !current);
    setShowNonAbonne(!true);
  };
  const handleNonAbonne = () => {
    setShowNonAbonne((current) => !current);
    setSelectUsers(!true);
  };

  const handleFilter = (e) => {
    setFilterUsers(e.target.value);
  };
  const handleProFilter = (e) => {
    setFilterPro(e.target.value);
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/excel`).then((res) => {
      setExcel(res.data);
    });
  }, []);

  const ToastExcel = () => toast.success("Donées téléchargées !");

  return (
    <section className="showClients">
      <div className="buttonClient">
        <button className="btnAbonne" type="button" onClick={handleAbonne}>
          Utilisateurs
        </button>
        <button className="btnAbonne" type="button" onClick={handleNonAbonne}>
          Administrateurs
        </button>
      </div>
      {selectUsers && (
        <div className="abonnes">
          <select
            name="showUsers"
            className="choose-clients"
            placeholder="Selection Abonné"
            onChange={handleFilter}
          >
            {" "}
            <option value="">Liste des Utilisateurs</option>
            {users.map((user) => (
              <option value={user.lastname} key={user.Id}>
                {user.Id} - {user.lastname} {user.firstname}
              </option>
            ))}
          </select>
          {users
            .filter((filtered) => filtered.lastname === filterUsers)
            // console.log(users)
            .map((elem) => (
              <UsersList users={elem} key={elem.Id} />
            ))}
        </div>
      )}
      {showNonAbonne && (
        <div className="non-abonnes">
          <select
            name="showUsers"
            className="choose-clients"
            placeholder="Selection Abonné"
            onChange={handleProFilter}
          >
            {" "}
            <option value="">Liste des Entreprises</option>
            {professionals.map((pro) => (
              <option value={pro.firstname} key={pro.Id}>
                {pro.Id} - {pro.lastname} {pro.firstname}
              </option>
            ))}
          </select>
          {professionals
            .filter((filtered) => filtered.firstname === filterPro)
            .map((elem) => (
              <ProList pro={elem} key={elem.Id} />
            ))}
        </div>
      )}
      <CSVLink data={excel} className="excel" onClick={ToastExcel}>
        Exporter les données
      </CSVLink>
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
    </section>
  );
}
