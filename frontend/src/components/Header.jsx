import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import { slide as BurgerMenu } from "react-burger-menu";
import { FiLogOut } from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrentUserContext from "../contexts/currentUser";
import "../style/Header.css";

import Logo from "../assets/pictures/LOGOS_WCS_Plan de travail 1.png";
import UserProfile from "../assets/pictures/profile.png";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

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
  const ToastLogout = () => toast.success("A bientôt !");

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
          ToastLogout();
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
            <BurgerMenu
              isOpen={isOpen}
              onOpen={handleIsOpen}
              onClose={handleIsOpen}
            >
              {navlinklist.map(
                (navlink) =>
                  (navlink.isRequiered.includes(userProfil?.role) ||
                    navlink.isRequiered.length === 0) && (
                    <Link
                      key={navlink.text}
                      onClick={closeSideBar}
                      className="menu-item"
                      to={navlink.to}
                    >
                      {navlink.text}
                    </Link>
                  )
              )}
              {userProfil?.role && (
                <button
                  type="submit"
                  onClick={logOut}
                  className="btn-logout bm-item"
                >
                  <FiLogOut size="1.5em" />
                </button>
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
                <FiLogOut size="2.2vw" color="#c7c8c7" />
              </button>
              <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
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
