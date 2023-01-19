import { useEffect } from "react";
import { useNavigate } from "react-router";
import Oops from "../assets/oops.png";

import "../style/InvalidPage.css";

export default function InvalidPage() {
  const navigate = useNavigate();

  const wait = (num) =>
    new Promise((res) => {
      setTimeout(() => res(num), num * 1000);
    });

  useEffect(() => {
    wait(3).then(() => navigate("/"));
  }, []);

  return (
    <div className="page403">
      <div className="imgContainer">
        <img src={Oops} alt="oops" className="img" />
      </div>
      <div className="textContainer">
        <p>La page que vous essayez d'accéder est restreinte !</p>
        <p>Redirection automatique vers la page principale...</p>
      </div>
    </div>
  );
}
