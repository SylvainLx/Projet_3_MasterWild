import { NavLink } from "react-router-dom";
import "../style/Header.css";

import { pushRotate as BurgerMenu, menuOpen } from "react-burger-menu";
import logowhite from "../assets/logowhite.png";
import loginIcon from "../assets/login.png";
import languageIcon from "../assets/language.png";
import alternateEmailIcon from "../assets/alternate_email.png";

export default function Header() {
  return (
    <div>
      <div className="mobile-burger">
        <BurgerMenu>
          <NavLink
            onClick={{ menuOpen: !menuOpen }}
            className="menu-item"
            to="/"
          >
            Home{" "}
          </NavLink>
          <NavLink
            onClick={{ menuOpen: !menuOpen }}
            className="menu-item"
            to="/inscription"
          >
            Inscription
          </NavLink>
          <NavLink
            onClick={{ menuOpen: !menuOpen }}
            className="menu-item"
            to="/masterclass"
          >
            Masterclass
          </NavLink>
          <NavLink
            onClick={{ menuOpen: !menuOpen }}
            className="menu-item"
            to="/search"
          >
            Search
          </NavLink>
          <NavLink
            onClick={{ menuOpen: !menuOpen }}
            className="menu-item"
            to="/paiement"
          >
            Paiement
          </NavLink>
          <NavLink
            onClick={{ menuOpen: !menuOpen }}
            className="menu-item"
            to="/profil"
          >
            Profil
          </NavLink>
          <NavLink
            onClick={{ menuOpen: !menuOpen }}
            className="menu-item"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={{ menuOpen: !menuOpen }}
            className="menu-item"
            to="/admin"
          >
            Admin
          </NavLink>
        </BurgerMenu>
      </div>
      <div className="full-desktop-header">
        <NavLink className="logo-header" to="/">
          <img src={logowhite} alt="logowhite" />
        </NavLink>

        <div className="menu-right">
          <NavLink className="navlink-menu-right" to="/login">
            <img className="menu-right-icon" src={loginIcon} alt="logowhite" />
          </NavLink>
          <NavLink className="navlink-menu-right" to="/profil">
            <img
              className="menu-right-icon"
              src={languageIcon}
              alt="logowhite"
            />
          </NavLink>
          <NavLink className="navlink-menu-right" to="/contact">
            <img
              className="menu-right-icon"
              src={alternateEmailIcon}
              alt="logowhite"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
