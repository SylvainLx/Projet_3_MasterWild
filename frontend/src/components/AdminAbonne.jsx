import "../style/Admin.css";
import "../style/App.css";
import { useState } from "react";
import Select from "react-select";

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
  const optionsAbonne = [
    { value: "Utilisateur 1", label: "Utilisateur 1" },
    { value: "Utilisateur 2", label: "Utilisateur 2" },
    { value: "Utilisateur 3", label: "Utilisateur 3" },
  ];
  const optionsNonAbonne = [
    { value: "Administrateur 1", label: "Administrateur 1" },
    { value: "Administrateur 2", label: "Administrateur 2" },
    { value: "Administrateur 3", label: "Administrateur 3" },
  ];

  const customStyleAbonne = {
    control: (base) => ({
      ...base,
      backgroundColor: "var(--secondary-blue)",
      border: 0,
    }),
    dropdownIndicator: () => ({
      color: "white",
    }),
    placeholder: (base) => ({
      ...base,
      color: "white",
    }),
    menu: () => ({
      marginTop: "0",
      background: "var(--secondary-blue)",
    }),
  };

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

      {showAbonne && (
        <div className="abonnes">
          <Select
            className="choose-clients"
            styles={customStyleAbonne}
            options={optionsAbonne}
            placeholder="Selection Abonné"
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "var(--main-blue)",
                primary: "var(--main-blue)",
              },
            })}
          />
        </div>
      )}
      {showNonAbonne && (
        <div className="non-abonnes">
          <Select
            className="choose-clients"
            styles={customStyleAbonne}
            options={optionsNonAbonne}
            placeholder="Selection Non Abonné"
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "var(--main-blue)",
                primary: "var(--main-blue)",
              },
            })}
          />
        </div>
      )}
    </section>
  );
}
