import "../Css/Menu.css";
import { Link } from "react-router-dom";
const Menu = ({ menuOpen, menuClose }) => {
  if (!menuOpen) return null;
  return (
    <div className="menu-page">
      <div className="side-menu-bar">
        <div className="menu-close-btn" onClick={menuClose}>
          <img src="/src/assets/icons/close.png" alt="close" />
        </div>
        <div className="menu">
          <Link to="/" className="menu-home-link">
            Home
          </Link>
          <Link to="/about" className="menu-about-link">
            About
          </Link>
          <Link to="/services" className="menu-service-link">
            Services
          </Link>
          <Link to="/reviews" className="menu-review-link">
            Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
