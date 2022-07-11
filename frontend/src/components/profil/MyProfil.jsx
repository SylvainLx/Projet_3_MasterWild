import { React, useState, useEffect } from "react";
import axios from "axios";
import EditProfil from "./EditProfil";
import ProfilePic from "../../assets/pictures/pexels-canva-studio-3153204.jpg";
import "../../style/MyProfil.css";

export default function MyProfil() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [editProfil, setEditProfil] = useState(0);

  const EditProfilOpen = () => {
    setEditProfil(!editProfil);
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/1`).then((res) => {
      setFirstname(res.data.firstname);
      setLastname(res.data.lastname);
      setEmail(res.data.email);
    });
  });

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
                onChange={(e) => setLastname(e.target.value)}
                readOnly="readonly"
                type="text"
                name="nom"
                size="30"
                value={lastname}
              />
            </td>
          </tr>
          <tr>
            <p>Prénom :</p>
            <td className="input-profile">
              <input
                onChange={(e) => setFirstname(e.target.value)}
                readOnly="readonly"
                type="text"
                name="prenom"
                value={firstname}
                size="30"
              />
            </td>
          </tr>
          <tr>
            <p>Email :</p>
            <td className="input-profile">
              <input
                onChange={(e) => setEmail(e.target.value)}
                readOnly="readonly"
                type="text"
                name="email"
                value={email}
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
