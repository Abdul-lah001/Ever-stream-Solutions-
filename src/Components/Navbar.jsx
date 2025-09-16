import "../Css/Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";
import MenuIcon from "../assets/icons/menu.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(!true);
  };
  return (
    <>
      <div>
        <header className="headbar">
          <div className="header-container">
            <div className="site-logo">
              <span className="site-name">Everstream</span>
              <span>Solutions</span>
            </div>

            <nav className="navbar">
              <div className="nav-link">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link active " : "link"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "link active " : "link"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "link active " : "link"
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to="/reviews"
                  className={({ isActive }) =>
                    isActive ? "link active " : "link"
                  }
                >
                  Reviews
                </NavLink>
              </div>
            </nav>
            <div>
              <button
                className="btn"
                onClick={() => alert("Contact us CTA will be added soon....")}
              >
                Contact us
              </button>
            </div>
            <div div className="menu-icon" onClick={toggleMenu}>
              <img src={MenuIcon} alt="menu" />
            </div>
          </div>
        </header>
      </div>
      <Menu menuOpen={isMenuOpen} menuClose={closeMenu} />
    </>
  );
};

export default Navbar;
