import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { React, useState, useEffect } from "react";
import MyProfil from "../components/profil/MyProfil";
import MyMCFavoritesList from "../components/profil/MyMCFavoritesList";
import "../style/Profil.css";

export default function Profil({ isOnline }) {
  Profil.propTypes = {
    isOnline: PropTypes.string.isRequired,
  };
  const [selectOnglet, setSelectOnglet] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isOnline) navigate("/403");
  }, []);

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
          <p>
            Mes <span className="accent">F</span>avoris
          </p>
        </button>
        <button
          type="button"
          onClick={profilChange}
          className={`ongletRight ${!selectOnglet ? "ongletRightActive" : ""}`}
        >
          <p>
            Mon <span className="accent">P</span>rofil
          </p>
        </button>
      </div>

      <div>{selectOnglet ? <MyMCFavoritesList /> : <MyProfil />}</div>
    </div>
  );
}
