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
  const optionsAbonné = [
    { value: "Abonné 1", label: "Abonné 1" },
    { value: "Abonné 2", label: "Abonné 2" },
    { value: "Abonné 3", label: "Abonné 3" },
  ];
  const optionsNonAbonné = [
    { value: "Non Abonné 1", label: "Non Abonné 1" },
    { value: "Non Abonné 2", label: "Non Abonné 2" },
    { value: "Non Abonné 3", label: "Non Abonné 3" },
  ];

  const customStyleAbonné = {
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
          <Select
            className="choose-clients"
            styles={customStyleAbonné}
            options={optionsAbonné}
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
            styles={customStyleAbonné}
            options={optionsNonAbonné}
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
