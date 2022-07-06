import { React } from "react";
import "../../style/MyProfil.css";

export default function ChangePassword() {
  return (
    <div className="my-profil">
      <table className="user-table">
        <tbody>
          <tr>
            <td>Mot de passe actuel :</td>
            <td>
              <input
                readOnly="readonly"
                type="text"
                name="nom"
                size="30"
                value=""
              />
            </td>
          </tr>
          <tr>
            <td>Nouveau mot de passe :</td>
            <td>
              <input
                readOnly="readonly"
                type="text"
                name="prenom"
                value=""
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
                value=""
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
      </div>
    </div>
  );
}
