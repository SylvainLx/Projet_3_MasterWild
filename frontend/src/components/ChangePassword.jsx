import { React } from "react";
import "../style/MyProfil.css";

export default function ChangePassword() {
  return (
    <div className="my-profil">
      <table className="user-table">
        <tbody>
          <tr>
            <td>password actuel :</td>
            <td>
              <input
                readOnly="readonly"
                type="text"
                name="nom"
                size="30"
                value="Dupont"
              />
            </td>
          </tr>
          <tr>
            <td>Nouveau password :</td>
            <td>
              <input
                readOnly="readonly"
                type="text"
                name="prenom"
                value="Léo"
                size="30"
              />
            </td>
          </tr>
          <tr>
            <td>Confirmation :</td>
            <td>
              <input
                readOnly="readonly"
                type="text"
                name="email"
                value="léo.dupont@gmail.com"
                size="30"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="cont-valid-button">
        <button className="button-blue button-profil" type="button">
          Valider
        </button>
        <button className="button-grey button-profil" type="button">
          Abbandonner
        </button>
      </div>
    </div>
  );
}
