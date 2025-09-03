import "../Css/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";

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
                <Link to="/" className="home-link">
                  Home
                </Link>
                <Link to="/about" className="about-link">
                  About
                </Link>
                <Link to="/services" className="service-link">
                  Services
                </Link>
                <Link to="/reviews" className="review-link">
                  Reviews
                </Link>
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
              <img src="/src/assets/icons/menu.png" alt="menu" />
            </div>
          </div>
        </header>
      </div>
      <Menu menuOpen={isMenuOpen} menuClose={closeMenu} />
    </>
  );
};

export default Navbar;
