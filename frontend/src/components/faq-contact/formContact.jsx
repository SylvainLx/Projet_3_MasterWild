import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormContact() {
  const [open, setOpen] = useState(false);
  const [entreprise, setEntreprise] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef({
    entreprise,
    lastName,
    firstName,
    email,
    message,
  });

  const postContact = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_58kecic",
        "template_8vvb84j",
        form.current,
        `${import.meta.env.EMAIL_JS_ID}`
      )
      .then((response) => {
        setMessage(response.text, "ok cest bon");
      });
  };

  const ToastExcel = () => toast("Demande bien envoyée !");

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
        ref={form}
        id="form"
      >
        <input
          type="text"
          name="entreprise"
          className="contactInput"
          placeholder="Nom de l'entreprise"
          onChange={(e) => setEntreprise(e.target.value)}
        />
        <input
          type="text"
          name="lastName"
          className="contactInput"
          placeholder="Nom"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          name="firstName"
          className="contactInput"
          placeholder="Prénom"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          className="contactInput"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          type="text"
          name="message"
          className="contactInput"
          placeholder="C'est à vous !"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="contactButton" onClick={ToastExcel}>
          Envoyer
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
