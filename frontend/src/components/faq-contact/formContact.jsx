import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function FormContact() {
  const [open, setOpen] = useState(false);
  const [entreprise, setEntreprise] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const postContact = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_58kecic",
        "template_8vvb84j",
        {
          entreprises: entreprise,
          lastname: lastName,
          firstname: firstName,
          mail: email,
          messages: message,
        }.current,
        "VdOV_IwA2lbDCrvNf"
      )
      .then((response) => {
        console.log(response.text, "ok cest bon");
      });
  };

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
      <form
        className={open ? "formContact" : "formHidden"}
        required
        onSubmit={postContact}
        method="post"
      >
        <input
          type="text"
          className="contactInput"
          placeholder="Nom de l'entreprise"
          onChange={(e) => setEntreprise(e.target.value)}
        />
        <input
          type="text"
          className="contactInput"
          placeholder="Nom"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          className="contactInput"
          placeholder="Prénom"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="contactInput"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          type="text"
          className="contactInput"
          placeholder="C'est à vous !"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="contactButton">
          Envoyer
        </button>
      </form>
    </div>
  );
}
