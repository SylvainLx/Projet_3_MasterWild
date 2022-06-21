import { React } from "react";
import "../style/MyProfil.css";

export default function EditProfil() {
  return (
    <div className="my-profil">
      <table className="user-table">
        <tbody>
          <tr>
            <td>Nom :</td>
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
            <td>Prénom :</td>
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
            <td>Email :</td>
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
          <tr>
            <td>Date de naissance :</td>
            <td>
              <input
                readOnly="readonly"
                type="text"
                name="date de naissance"
                value="02/10/1987"
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
