import { useState } from "react";

export default function FormContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="divFormContact">
      <div className="askContact">
        <p className="pAsk">Vous n'avez pas trouvé de réponse ?</p>
        <button className="askButton" type="button" onClick={setOpen}>
          Nous contacter
        </button>
      </div>
      <form className={open ? "formContact" : "formHidden"} required>
        <input type="text" className="contactInput" placeholder="Nom" />
        <input type="text" className="contactInput" placeholder="Prénom" />
        <input type="text" className="contactInput" placeholder="Email" />
        <textarea
          type="text"
          className="contactInput"
          placeholder="Saisissez votre demande"
        />
        <button type="submit" className="contactButton">
          Envoyer
        </button>
      </form>
    </div>
  );
}
