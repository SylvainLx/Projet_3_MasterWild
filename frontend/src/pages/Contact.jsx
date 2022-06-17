import ListFAQ from "../components/faq-contact/listFAQ";
import FormContact from "../components/faq-contact/formContact";

import Harry from "../assets/harryroselmack.png";
import Hugo from "../assets/hugoclement.png";
import Xavier from "../assets/xavierniel.png";

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
        <div className="picFAQmobile">
          <img className="picStar" src={Harry} alt="harry roselmack" />
        </div>
        <div className="mosaicPicStar">
          <img className="mosaicStarFaq" src={Hugo} alt="hugo clement" />
          <img className="mosaicStarHidden" src={Hugo} alt="hugo clement" />
          <img className="mosaicStarHidden" src={Harry} alt="harry roselmack" />
          <img className="mosaicStarFaq" src={Harry} alt="harry roselmack" />
          <img className="mosaicStarFaq" src={Xavier} alt="xiavier niel" />
          <img className="mosaicStarHidden" src={Xavier} alt="xiavier niel" />
        </div>
        <div className="componentFAQ">
          <ListFAQ />
          <FormContact />
        </div>
      </div>
    </div>
  );
}
