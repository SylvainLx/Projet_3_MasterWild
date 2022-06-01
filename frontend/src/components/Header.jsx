import { NavLink } from "react-router-dom";

function Header() {
  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return { color: "green" };
    }
    return null;
  };
  return (
    <div>
      <nav className="navbar">
        <div className="pages">
          <NavLink className="link-nav" to="/" style={getActiveLinkStyle}>
            Home
          </NavLink>
          <NavLink className="link-nav" to="/login" style={getActiveLinkStyle}>
            Login
          </NavLink>
          <NavLink
            className="link-nav"
            to="/masterclass"
            style={getActiveLinkStyle}
          >
            Masterclass
          </NavLink>
          <NavLink className="link-nav" to="/search" style={getActiveLinkStyle}>
            Search
          </NavLink>
          <NavLink
            className="link-nav"
            to="/paiement"
            style={getActiveLinkStyle}
          >
            Paiement
          </NavLink>
          <NavLink className="link-nav" to="/profil" style={getActiveLinkStyle}>
            Profil
          </NavLink>
          <NavLink
            className="link-nav"
            to="/contact"
            style={getActiveLinkStyle}
          >
            Contact
          </NavLink>
          <NavLink className="link-nav" to="/admin" style={getActiveLinkStyle}>
            Admin
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
