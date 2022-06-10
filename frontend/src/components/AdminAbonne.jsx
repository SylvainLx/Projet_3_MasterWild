import "../style/Admin.css";
import "../style/App.css";
import { useState } from "react";

export default function AdminAbonne() {
  const [showAbonne, setShowAbonne] = useState(true);
  const [showNonAbonne, setShowNonAbonne] = useState(false);

  const handleAbonne = () => {
    setShowAbonne((current) => !current);
    setShowNonAbonne(!true);
  };
  const handleNonAbonne = () => {
    setShowNonAbonne((current) => !current);
    setShowAbonne(!true);
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
      {showAbonne && (
        <div className="abonnes">
          <select className="choose-clients">
            <option>Selection Abonné</option>
            <option>Abonné 2</option>
            <option>Abonné 3</option>
            <option>Abonné 4</option>
          </select>
        </div>
      )}
      {showNonAbonne && (
        <div className="non-abonnes">
          <select className="choose-clients">
            <option className="option">Selection Non-Abonnés</option>
            <option>Abonné 2</option>
            <option>Abonné 3</option>
            <option>Abonné 4</option>
          </select>
        </div>
      )}
    </section>
  );
}
