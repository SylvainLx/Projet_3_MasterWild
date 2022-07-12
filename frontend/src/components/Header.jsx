import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import { slide as BurgerMenu } from "react-burger-menu";
import CurrentUserContext from "../contexts/currentUser";
import "../style/Header.css";

import Logo from "../assets/pictures/LOGOS_WCS_Plan de travail 1.png";
import loginIcon from "../assets/pictures/login.png";
import UserProfile from "../assets/pictures/profile.png";

export default function Header() {
  const navlinklist = [
    {
      to: "/",

      text: "Home",
      isRequiered: [],
    },

    {
      to: "/connexion",

      text: "Inscription / Connexion",
      isRequiered: [],
    },

    {
      to: "/search",

      text: "Masterclasses",
      isRequiered: ["user", "admin"],
    },

    {
      to: "/profil",

      text: "Mon Profil",
      isRequiered: ["user", "admin"],
    },

    {
      to: "/contact",

      text: "FAQ / Contact",
      isRequiered: ["user", "admin"],
    },

    {
      to: "/admin",

      text: "Administrateur",
      isRequiered: ["admin"],
    },
  ];

  const { setUserProfil, userProfil } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const logOut = () => {
    try {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`, {
          withCredentials: true,
        })
        .then(() => {
          setUserProfil({});
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
              {navlinklist.map(
                (navlink) =>
                  (navlink.isRequiered.includes(userProfil?.role) ||
                    navlink.isRequiered.length === 0) && (
                    <Link
                      key={navlink.text}
                      // onClick={{ menuOpen: !menuOpen }}
                      className="bm-item menu-item"
                      to={navlink.to}
                    >
                      {navlink.text}
                    </Link>
                  )
              )}
              {userProfil?.role && (
                <ul>
                  <li>
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
                  </li>
                </ul>
              )}
            </BurgerMenu>
          </div>
          <NavLink className="logo-header" to="/">
            <img src={Logo} alt="logowhite" />
          </NavLink>
          {userProfil?.role && (
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
          )}
        </div>
      </div>
    </header>
  );
}
