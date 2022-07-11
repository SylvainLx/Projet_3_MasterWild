import { React, useState, useEffect } from "react";
import axios from "axios";
import EditProfil from "./EditProfil";
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
      <table className="user-table">
        <tbody>
          <tr>
            <td>Nom :</td>
            <td>
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
            <td>Prénom :</td>
            <td>
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
            <td>Email :</td>
            <td>
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
