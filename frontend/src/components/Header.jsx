import { NavLink } from "react-router-dom";
import "../style/Header.css";

import { slide as BurgerMenu, menuOpen } from "react-burger-menu";
import Logo from "../assets/pictures/LOGOS_WCS_Plan de travail 1.png";
import loginIcon from "../assets/pictures/login.png";
import UserProfile from "../assets/pictures/profile.png";

const navlinklist = [
  {
    to: "/",

    text: "Home",
  },

  {
    to: "/inscription",

    text: "Inscription",
  },

  {
    to: "/masterclass",

    text: "Masterclass",
  },

  {
    to: "/search",

    text: "Search",
  },

  {
    to: "/paiement",

    text: "Paiement",
  },

  {
    to: "/profil",

    text: "Profil",
  },

  {
    to: "/contact",

    text: "Contact",
  },

  {
    to: "/admin",

    text: "Admin",
  },
];

export default function Header() {
  return (
    <header>
      <div className="container-header">
        <div className="full-desktop-header">
          <div className="mobile-burger">
            <BurgerMenu>
              {navlinklist.map((navlink) => (
                <NavLink
                  key={navlink.text}
                  onClick={{ menuOpen: !menuOpen }}
                  className="menu-item"
                  to={navlink.to}
                >
                  {navlink.text}
                </NavLink>
              ))}
            </BurgerMenu>
          </div>
          <NavLink className="logo-header" to="/">
            <img src={Logo} alt="logowhite" />
          </NavLink>

          <div className="menu-right">
            <NavLink className="navlink-menu-right" to="/connexion">
              <img
                className="menu-right-icon"
                src={loginIcon}
                alt="logowhite"
              />
            </NavLink>
            <NavLink className="navlink-menu-right" to="/profil">
              <img
                className="menu-right-icon"
                src={UserProfile}
                alt="logowhite"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
