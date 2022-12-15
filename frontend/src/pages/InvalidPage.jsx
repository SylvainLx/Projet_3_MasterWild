import React from "react";

import Oops from "../assets/oops.png";

import "../style/InvalidPage.css";

export default function InvalidPage() {
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
