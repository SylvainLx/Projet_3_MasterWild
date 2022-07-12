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
    emailjs.init(`${import.meta.env.VITE_EMAILJS_ID}`);
    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_EMAILJS_ID}`
      )
      .then((response) => {
        setMessage(response.text, "ok cest bon");
      });
  };

  const ToastExcel = () => toast.success("Demande bien envoyée !");

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
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
}
