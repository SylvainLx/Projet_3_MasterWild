import "../style/Admin.css";
import "../style/App.css";
import { useState } from "react";
import PropTypes from "prop-types";

export default function AdminAbonne({ users, professionals }) {
  AdminAbonne.propTypes = {
    users: PropTypes.string.isRequired,
    professionals: PropTypes.string.isRequired,
  };
  const [selectUsers, setSelectUsers] = useState(true);
  const [showNonAbonne, setShowNonAbonne] = useState(false);
  const handleAbonne = () => {
    setSelectUsers((current) => !current);
    setShowNonAbonne(!true);
  };
  const handleNonAbonne = () => {
    setShowNonAbonne((current) => !current);
    setSelectUsers(!true);
  };

  return (
    <section className="showClients">
      <div className="buttonClient">
        {" "}
        <button className="btnAbonne" type="button" onClick={handleAbonne}>
          Abonnés
        </button>
        <button className="btnAbonne" type="button" onClick={handleNonAbonne}>
          Non-Abonnés
        </button>
      </div>

      {selectUsers && (
        <div className="abonnes">
          <select
            name="showUsers"
            className="choose-clients"
            placeholder="Selection Abonné"
          >
            {" "}
            <option value="">Liste des Utilisateurs</option>
            {users.map((user) => (
              <option value={user.name} key={user.Id}>
                {user.Id} - {user.lastname} {user.firstname}
              </option>
            ))}
          </select>
        </div>
      )}
      {showNonAbonne && (
        <div className="non-abonnes">
          <select
            name="showUsers"
            className="choose-clients"
            placeholder="Selection Abonné"
          >
            {" "}
            <option value="">Liste des Entreprises</option>
            {professionals.map((pro) => (
              <option value={pro.name} key={pro.Id}>
                {pro.Id} - {pro.lastname} {pro.firstname}
              </option>
            ))}
          </select>
        </div>
      )}
    </section>
  );
}
