import { React } from "react";
import "../style/MyProfil.css";

export default function MyProfil() {
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
      <button className="button-pink button-profil" type="button">
        Editer mon profil
      </button>
      <button className="button-red button-profil" type="button">
        Changer mon mot de passe
      </button>
      <div className="my-subscription-plan">
        <h1 className="inter-titre">Ma Formule</h1>
        <div className="text-abonnement">
          <p>Vous êtes actuellement abonné Prenium jusqu'au 26/08/2024</p>
          <p>
            renouvelement automatique :{" "}
            <span className="autosub-green">activé</span>{" "}
          </p>
        </div>
        <button className="button-blue button-profil" type="button">
          Changer ma formule
        </button>
        <button className="button-grey button-profil" type="button">
          Désactiver mon renouvelement automatique
        </button>
      </div>
    </div>
  );
}
