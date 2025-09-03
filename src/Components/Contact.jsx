import "../Css/Contact.css";
import Message from "../Components/Message";
import Loading from "../Components/Loading";
import { useState } from "react";
const Contact = () => {
  const [messagePopup, SetmessagePopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleMessage = () => {
    SetmessagePopup(true);
  };
  const handleClosepopup = () => {
    SetmessagePopup(false);
  };
  const handleMessageWithLoading = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);

    handleMessage();
  };
  return (
    <div className="contact-page">
      <article className="contact-layout">
        <h2>Ready to transform your Property?</h2>
        <p>
          Get in touch with us today to schedule a consultation or request a
          quote. We offer seasional deals and referral discounts for our
          services.
        </p>
        <div className="contact-btn">
          <button onClick={handleMessageWithLoading} disabled={loading}>
            Request Quote
          </button>
          <button
            className="btn-two"
            onClick={() => alert("Contact us CTA will be added soon....")}
          >
            Call Us Now
          </button>
        </div>
      </article>
      {loading && <Loading isOpen={loading} onClose={handleClosepopup} />}
      {!loading && <Message isOpen={messagePopup} onClose={handleClosepopup} />}
    </div>
  );
};

export default Contact;
