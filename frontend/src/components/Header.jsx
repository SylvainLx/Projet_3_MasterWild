import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
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
    to: "/connexion",

    text: "Inscription / Connexion",
  },

  {
    to: "/masterclass",

    text: "Masterclass",
  },

  {
    to: "/search",

    text: "Recherche / Filtres",
  },

  {
    to: "/profil",

    text: "Mon Profil",
  },

  {
    to: "/contact",

    text: "FAQ / Contact",
  },

  {
    to: "/admin",

    text: "Administrateur",
  },
];

export default function Header() {
  const navigate = useNavigate();

  const logOut = () => {
    try {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`, {
          withCredentials: true,
        })
        .then(() => {
          localStorage.clear();
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

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
            <button
              type="button"
              onClick={logOut}
              className="navlink-menu-right"
            >
              <img
                className="menu-right-icon"
                src={loginIcon}
                alt="logowhite"
              />
            </button>
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
