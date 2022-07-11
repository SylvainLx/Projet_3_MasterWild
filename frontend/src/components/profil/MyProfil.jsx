import { React, useState, useContext } from "react";
import CurrentUserContext from "../../contexts/currentUser";
import EditProfil from "./EditProfil";
import "../../style/MyProfil.css";

export default function MyProfil() {
  const { userProfil } = useContext(CurrentUserContext);
  const [editProfil, setEditProfil] = useState(0);

  const EditProfilOpen = () => {
    setEditProfil(!editProfil);
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
                value={userProfil.lastname}
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
                value={userProfil.firstname}
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
                value={userProfil.email}
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
    </div>
  );
}
