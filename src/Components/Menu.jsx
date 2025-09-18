import "../Css/Menu.css";
import { Link, NavLink } from "react-router-dom";
import CloseIcon from "../assets/icons/close.png";
const Menu = ({ menuOpen, menuClose }) => {
  if (!menuOpen) return null;
  return (
    <>
      <div className="menu-page" onClick={menuClose}>
        <div className="side-menu-bar">
          <div className="menu-close-btn" onClick={menuClose}>
            <img src={CloseIcon} alt="close" />
          </div>
          <div className="menu">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "links active " : "links"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "links active " : "links"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "links active " : "links"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive ? "links active " : "links"
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
