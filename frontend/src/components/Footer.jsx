import { NavLink } from "react-router-dom";
import "../style/Footer.css";
import Logo from "../assets/logoattente.png";
import Facebook from "../assets/iconeFacebook.png";
import Instagram from "../assets/iconeInsta.png";
import Twitter from "../assets/iconeTwitter.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="divLogoFooter">
        <NavLink className="linkFooter" to="/">
          <img className="logoFooter" src={Logo} alt="logo aspiraction" />
        </NavLink>
      </div>
      <div>
        <ul className="linksFooter">
          <NavLink className="linkFooter" to="/contact">
            <li className="linkIntern">Foire aux questions</li>
          </NavLink>
          <NavLink className="linkFooter" to="/">
            <li className="linkIntern">Offres</li>
          </NavLink>
          <NavLink className="linkFooter" to="/">
            <li className="linkIntern">Mentions légales</li>
          </NavLink>
        </ul>
      </div>
      <div className="listeRSfooter">
        <div>Retrouvez nous sur les réseaux sociaux :</div>
        <div className="listeRes">
          <ul className="listIconesRS">
            <li className="liIcone">
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="logoFacebook"
                  src={Facebook}
                  alt="logo facebook"
                />
              </a>
            </li>
            <li className="liIcone">
              <a
                href="http://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="logoInstagram"
                  src={Instagram}
                  alt="logo instagram"
                />
              </a>
            </li>
            <li className="liIcone">
              <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
                <img className="logoTwitter" src={Twitter} alt="logo twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
