import { React, useState } from "react";
import EditProfil from "./EditProfil";
import "../style/MyProfil.css";
import ChangePassword from "./ChangePassword";
import ChangeAutORenewal from "./ChangeAutoRenewal";

export default function MyProfil() {
  const [editProfil, setEditProfil] = useState(0);

  const EditProfilOpen = () => {
    setEditProfil(!editProfil);
  };

  const [editPassword, setEditPassword] = useState(0);

  const EditPasswordOpen = () => {
    setEditPassword(!editPassword);
  };

  const [autoReneval, setAutoReneval] = useState(0);

  const AutoRenevalOpen = () => {
    setAutoReneval(!autoReneval);
  };

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
      <button
        onClick={EditProfilOpen}
        className="button-pink button-profil"
        type="button"
      >
        Editer mon profil
      </button>
      {editProfil ? <EditProfil /> : ""}
      <button
        onClick={EditPasswordOpen}
        className="button-red button-profil"
        type="button"
      >
        Changer mon mot de passe
      </button>
      {editPassword ? <ChangePassword /> : ""}
      <div className="my-subscription-plan">
        <h1 className="inter-titre">Ma Formule</h1>
        <div className="text-abonnement">
          <p>Vous êtes actuellement abonné Premium jusqu'au 26/08/2024</p>
          <p>
            renouvellement automatique :{" "}
            <span className="autosub-green">activé</span>{" "}
          </p>
        </div>
        <a className="button-link" href="/">
          <button className="button-blue button-profil" type="button">
            Changer ma formule
          </button>
        </a>

        <button
          onClick={AutoRenevalOpen}
          className="button-grey button-profil"
          type="button"
        >
          Désactiver mon renouvelement automatique
        </button>
        {autoReneval ? <ChangeAutORenewal /> : ""}
      </div>
    </div>
  );
}
