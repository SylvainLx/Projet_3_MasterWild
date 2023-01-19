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
      <div className="user-table">
        <h2 className="titleInscbis">
          <span className="accent">I</span>nformations
        </h2>
        <div>
          <p>Nom :</p>
          <input
            readOnly="readonly"
            type="text"
            name="nom"
            size="30"
            value={userProfil?.lastname}
          />

          <div>
            <p>Prénom :</p>
            <input
              readOnly="readonly"
              type="text"
              name="prenom"
              value={userProfil?.firstname}
              size="30"
            />
          </div>
          <div>
            <p>Email :</p>
            <input
              readOnly="readonly"
              type="text"
              name="email"
              value={userProfil?.email}
              size="30"
            />
          </div>
        </div>
        <button
          onClick={EditProfilOpen}
          className="button-pink button-profil"
          type="button"
        >
          Editer mon profil
        </button>
      </div>
      {editProfil ? <EditProfil /> : ""}
    </div>
  );
}
