import { React } from "react";
import "../style/MyProfil.css";

export default function ChangeAutORenewal() {
  return (
    <div className="my-profil">
      <p className="text-auto-renewal">
        Confirmer-vous l'arret de votre renouvelement automatique ?
      </p>
      <div className="cont-valid-button">
        <button className="button-red button-profil" type="button">
          Valider
        </button>
        <button className="button-grey button-profil" type="button">
          Abbandonner
        </button>
      </div>
    </div>
  );
}
