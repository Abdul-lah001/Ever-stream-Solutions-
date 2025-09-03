import "../Css/Service.css";
import Message from "../Components/Message";
import Loading from "../Components/Loading";
import { useState } from "react";

const Service = () => {
  const [messagePopup, SetmessagePopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    {
      id: 1,
      title: "Landscaping",
      description:
        "Expert landscaping design and maintenance to enhance your property's curb appeal",
      image: "/src/assets/landscaping.jpg",
      icon: "/src/assets/icons/scissors.svg",
      alt: "Landscaping service",
    },
    {
      id: 2,
      title: "Lawn Mowing",
      description:
        "Regular lawn care service to keep your grass healthy and looking its best",
      image: "/src/assets/lawn mow.jpg",
      icon: "/src/assets/icons/home.svg",
      alt: "Property maintenance service",
    },
    {
      id: 3,
      title: "Carpet Cleaning",
      description:
        "Through carpet cleaning service to remove stains and refresh your indoor spaces",
      image: "/src/assets/carpet cleaning.jpg",
      icon: "/src/assets/icons/broom.svg",
      alt: "Visual media service",
    },
    {
      id: 5,
      title: "Photography",
      description:
        "Premium photograph service to showcase your property in the best possible light",
      image: "/src/assets/photography.jpg",
      icon: "/src/assets/icons/camera.svg",
      alt: "Visual media service",
    },
    {
      id: 6,
      title: "Property Perservation",
      description:
        "Comprehensive property preservation services to maintain security and appeal",
      image: "/src/assets/P-Property.jpg",
      icon: "/src/assets/icons/shield-check.svg",
      alt: "Visual media service",
    },
    {
      id: 7,
      title: "Property Perservation",
      description:
        "Comprehensive property preservation services to maintain security and appeal",
      image: "/src/assets/c7831cd242a5a56a5c3776ca6b26af9b.jpg",
      icon: "/src/assets/icons/shield-check.svg",
      alt: "Visual media service",
    },
  ];
  const handleMessage = () => {
    SetmessagePopup(true);
  };

  const handleClosepopup = () => {
    SetmessagePopup(false);
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
