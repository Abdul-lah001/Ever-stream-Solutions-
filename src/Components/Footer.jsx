import "../Css/Footer.css";
const Footer = () => {
  const services = [
    "Landscapping",
    "Lawning Mowing",
    "Carpet Cleaning",
    "Photography",
    "Property Preservation",
  ];
  const links = ["Home", "About us", "Service", "Testimonial", "Contact"];
  return (
    <div className="footer-page">
      <footer className="footer-layout">
        <div className="footer-content-one">
          <h3>Everstream Solutions</h3>
          <p>
            Professional property care and visual media services to enhance your
            property's value and appeal.
          </p>
          <div className="icon-cta">
            <img src="/src/assets/icons/facebook.png" alt="fb" />
            <img src="/src/assets/icons/instagram.png" alt="fb" />
            <img src="/src/assets/icons/twitter.png" alt="fb" />
          </div>
        </div>
        <div className="footer-content-two">
          <h3>Services</h3>
          <ul className="service-list" type="none">
            {services.map((service) => (
              <li>{service}</li>
            ))}
          </ul>
        </div>
        <div className="footer-content-three">
          <h3>Quick Links</h3>
          <ul className="service-list" type="none">
            {links.map((link) => (
              <li>{link}</li>
            ))}
          </ul>
        </div>
        <div className="footer-content-four">
          <h3>Contact us</h3>
          <div>
            <img src="/src/assets/icons/telephone.png" alt="phone" />
            <p>(+234)8766 8776</p>
          </div>
          <div>
            <img src="/src/assets/icons/email.png" alt="mail" />
            <p>info@everstreamsolutions.com</p>
          </div>
          <div>
            <img src="/src/assets/icons/pin.png" alt="location" />
            <p>123, Main Street,Anytown, Nigeria</p>
          </div>
        </div>
      </footer>
      <p className="copyright">
        &#x00A9; 2025 Everstream Solutions. All right reserved.
      </p>
    </div>
  );
};

export default Footer;
