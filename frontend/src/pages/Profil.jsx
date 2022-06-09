import { React, useState } from "react";
import MyProfil from "../components/MonProfil";
import MyMCFavorites from "../components/MyMCFavorites";
import "../style/Profil.css";

export default function Profil() {
  const [selectOnglet, setSelectOnglet] = useState(0);

  const profilChange = () => {
    setSelectOnglet(0);
  };

  const mcFavoriteChange = () => {
    setSelectOnglet(1);
  };

  return (
    <div>
      <div className="contBtn">
        <button
          type="button"
          onClick={mcFavoriteChange}
          className={`ongletLeft ${selectOnglet ? "ongletLeftActive" : ""}`}
        >
          Mes Masterclass
        </button>
        <button
          type="button"
          onClick={profilChange}
          className={`ongletRight ${!selectOnglet ? "ongletRightActive" : ""}`}
        >
          {" "}
          Mon Profil
        </button>
      </div>

      <div className="container">
        {selectOnglet ? <MyMCFavorites /> : <MyProfil />}
      </div>
    </div>
  );
}
