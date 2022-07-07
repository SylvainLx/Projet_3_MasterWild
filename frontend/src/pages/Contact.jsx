import ListFAQ from "../components/faq-contact/listFAQ";
import FormContact from "../components/faq-contact/formContact";

import Login from "../assets/pictures/peopleLogin.jpg";

import "../style/Contact.css";

export default function Contact() {
  return (
    <div className="main-div-contact">
      <div className="introContact">
        <h2 className="titleContact">
          FAQ <span className="span-title">/</span> Contact
        </h2>
      </div>
      <div className="pageFAQ">
        <img className="imglongin" src={Login} alt="login" />
        <div className="componentFAQ">
          <ListFAQ />
          <FormContact />
        </div>
      </div>
    </div>
  );
}
