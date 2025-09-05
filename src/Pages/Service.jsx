import "../Css/Service.css";
import Message from "../Components/Message";
import Loading from "../Components/Loading";
import { useState } from "react";

// ✅ Import images directly
import landscapingImg from "../assets/landscaping.jpg";
import lawnMowImg from "../assets/lawn mow.jpg";
import carpetCleaningImg from "../assets/carpet cleaning.jpg";
import photographyImg from "../assets/photography.jpg";
import propertyPreservationImg from "../assets/P-Property.jpg";
import extraPropertyImg from "../assets/c7831cd242a5a56a5c3776ca6b26af9b.jpg";

// ✅ Import icons directly
import scissorsIcon from "../assets/icons/scissors.svg";
import homeIcon from "../assets/icons/home.svg";
import broomIcon from "../assets/icons/broom.svg";
import cameraIcon from "../assets/icons/camera.svg";
import shieldIcon from "../assets/icons/shield-check.svg";

const Service = () => {
  const [messagePopup, setMessagePopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    {
      id: 1,
      title: "Landscaping",
      description:
        "Expert landscaping design and maintenance to enhance your property's curb appeal",
      image: landscapingImg,
      icon: scissorsIcon,
      alt: "Landscaping service",
    },
    {
      id: 2,
      title: "Lawn Mowing",
      description:
        "Regular lawn care service to keep your grass healthy and looking its best",
      image: lawnMowImg,
      icon: homeIcon,
      alt: "Property maintenance service",
    },
    {
      id: 3,
      title: "Carpet Cleaning",
      description:
        "Through carpet cleaning service to remove stains and refresh your indoor spaces",
      image: carpetCleaningImg,
      icon: broomIcon,
      alt: "Visual media service",
    },
    {
      id: 5,
      title: "Photography",
      description:
        "Premium photograph service to showcase your property in the best possible light",
      image: photographyImg,
      icon: cameraIcon,
      alt: "Visual media service",
    },
    {
      id: 6,
      title: "Property Preservation",
      description:
        "Comprehensive property preservation services to maintain security and appeal",
      image: propertyPreservationImg,
      icon: shieldIcon,
      alt: "Visual media service",
    },
    {
      id: 7,
      title: "Property Preservation",
      description:
        "Comprehensive property preservation services to maintain security and appeal",
      image: extraPropertyImg,
      icon: shieldIcon,
      alt: "Visual media service",
    },
  ];

  const handleMessage = () => {
    setMessagePopup(true);
  };

  const handleClosepopup = () => {
    setMessagePopup(false);
    setLoading(false);
  };

  const handleMessageWithLoading = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    handleMessage();
  };

  return (
    <>
      <div className="service-page">
        <section className="service-page-layout">
          <header className="service-headline">
            <h2>Our Services</h2>
            <p>
              We offer comprehensive property care and visual media services to
              enhance your property's value and appeal
            </p>
          </header>

          <div className="service-card-layout">
            {services.map((service) => (
              <article key={service.id} className="service-card-container">
                <div className="card-image-container">
                  <img
                    className="image"
                    src={service.image}
                    alt={service.alt}
                  />
                </div>

                <div className="icon" aria-hidden="true">
                  <img src={service.icon} alt="icon" />
                </div>

                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="btn-container">
            <button
              className="btn-service"
              onClick={handleMessageWithLoading}
              disabled={loading}
            >
              Request a Service
            </button>
          </div>
        </section>
      </div>

      {loading && <Loading isOpen={loading} onClose={handleClosepopup} />}
      {!loading && <Message isOpen={messagePopup} onClose={handleClosepopup} />}
    </>
  );
};

export default Service;
