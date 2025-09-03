import React from "react";
import "../Css/About.css";

const About = () => {
  return (
    <>
      <div className="about-page">
        <section className="about-content">
          <h2 className="about-headline">About Us</h2>
          <article className="about-paragraphs">
            <p>
              Everstream Solution provides comprehensive property care and
              visual media services designed to enhance your property's value
              and appeal with our team of professionals, we deliver quality,
              affordable and reliablity to homeworkers and business alike
            </p>

            <p>
              Our mission is to transform ordinary spaces into extraordinary
              environments through our expert landscaping, cleaning, and visual
              media services. We take pride in our attention to detail and
              commitment to customer satisfaction.
            </p>
          </article>
          <div className="about-list">
            <ol type="a">
              <li>Boost property value with professional care</li>
              <li>Enhance living environments through expert services</li>
              <li>Keep Spaces secures and visually appealing</li>
              <li> Seasonal deal to maximum your budget</li>
              <li>Referral discounts for loyal customer</li>
            </ol>
          </div>
        </section>

        <div className="about-image">
          <img
            src="/src/assets/WhatsApp Image 2025-06-26 at 11.56.04_3de38894.jpg"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default About;
