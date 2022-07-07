import { useState } from "react";

export default function FormContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="divFormContact">
      <div className="sep"> </div>
      <div className="askContact">
        <p className="pAsk">
          Vous êtes un professionnel de la tech <br /> et vous souhaitez
          proposer une masterclass ?
        </p>
        <button className="askButton" type="button" onClick={setOpen}>
          Contactez-nous !
        </button>
      </div>
      <form className={open ? "formContact" : "formHidden"} required>
        <input
          type="text"
          className="contactInput"
          placeholder="Nom de l'entreprise"
        />
        <input type="text" className="contactInput" placeholder="Nom" />
        <input type="text" className="contactInput" placeholder="Prénom" />
        <input type="text" className="contactInput" placeholder="Email" />
        <textarea
          type="text"
          className="contactInput"
          placeholder="C'est à vous !"
        />
        <button type="submit" className="contactButton">
          Envoyer
        </button>
      </form>
    </div>
  );
}
