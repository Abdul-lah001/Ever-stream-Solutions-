import "../Css/Menu.css";
import { Link, NavLink } from "react-router-dom";
import CloseIcon from "../assets/icons/close.png";
const Menu = ({ menuOpen, menuClose }) => {
  if (!menuOpen) return null;
  return (
    <>
      <div className="menu-page">
        <div className="close" onClick={menuClose}></div>
        <div className="side-menu-bar">
          <div className="menu-close-btn" onClick={menuClose}>
            <img src={CloseIcon} alt="close" />
          </div>
          <div className="menu">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              Reviews
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
