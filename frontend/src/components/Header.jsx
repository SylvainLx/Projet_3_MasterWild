import { NavLink } from "react-router-dom";
import "../style/Header.css";

import { pushRotate as BurgerMenu } from "react-burger-menu";
import logowhite from "../assets/logowhite.png";

export default function Header() {
  return (
    <div className="full-header">
      <BurgerMenu className="mobile-burger">
        <NavLink className="menu-item" to="/">
          Home{" "}
        </NavLink>
        <NavLink className="menu-item" to="/inscription">
          Inscription
        </NavLink>
        <NavLink className="menu-item" to="/masterclass">
          Masterclass
        </NavLink>
        <NavLink className="menu-item" to="/search">
          Search
        </NavLink>
        <NavLink className="menu-item" to="/paiement">
          Paiement
        </NavLink>
        <NavLink className="menu-item" to="/profil">
          Profil
        </NavLink>
        <NavLink className="menu-item" to="/contact">
          Contact
        </NavLink>
        <NavLink className="menu-item" to="/admin">
          Admin
        </NavLink>
      </BurgerMenu>

      <img className="logo-header" src={logowhite} alt="logowhite" />

      <div className="menu-right">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/profil">Profil</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
}
