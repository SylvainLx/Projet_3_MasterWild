import ListFAQ from "../components/faq-contact/listFAQ";
import FormContact from "../components/faq-contact/formContact";

import Harry from "../assets/harryroselmack.png";

import "../style/Contact.css";

export default function Contact() {
  return (
    <div>
      <div className="introContact">
        <h2 className="titleContact">
          Des <span className="monoLetter">Q</span>uestions ?
        </h2>
      </div>
      <div className="pageFAQ">
        <div>
          <img className="picStar" src={Harry} alt="harry roselmack" />
        </div>
        <ListFAQ />
        <FormContact />
      </div>
    </div>
  );
}
