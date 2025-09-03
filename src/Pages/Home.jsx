import React from "react";
import "../Css/Home.css";
import Service from "./Service";
import About from "./About";
import Reviews from "../Components/Reviews";
import Contact from "../Components/Contact";
const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-section-img">
          <img
            className="image"
            src="/src/assets/lawn mow.jpg"
            alt="hero-section"
          />
          <div className="hero-content">
            <h1>Professional Property Care & Visual Media Services</h1>
            <p>
              Enhance Property value through expert landscaping, cleaning and
              photography service.
            </p>
            <span>
              <button className="hero-btn-1">Explore our service</button>
              <button className="hero-btn-2">Get a quote</button>
            </span>
          </div>
        </div>
      </section>
      <Service />
      <About />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
