import { React, useState, useContext } from "react";
import CurrentUserContext from "../../contexts/currentUser";
import EditProfil from "./EditProfil";
import ProfilePic from "../../assets/pictures/pexels-canva-studio-3153204.jpg";
import "../../style/MyProfil.css";

export default function MyProfil() {
  const { userProfil } = useContext(CurrentUserContext);
  const [editProfil, setEditProfil] = useState(0);

  const EditProfilOpen = () => {
    setEditProfil(!editProfil);
  };

  return (
    <div className="my-profil">
      <img
        className="logo-profile"
        src={ProfilePic}
        alt="logo wild code school"
      />
      <table className="user-table">
        <tbody>
          <tr>
            <p>Nom :</p>
            <td className="input-profile">
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
            <p>Prénom :</p>
            <td className="input-profile">
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
            <p>Email :</p>
            <td className="input-profile">
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
        <button
          onClick={EditProfilOpen}
          className="button-pink button-profil"
          type="button"
        >
          Editer mon profil
        </button>
      </table>
      {editProfil ? <EditProfil /> : ""}
    </div>
  );
}
