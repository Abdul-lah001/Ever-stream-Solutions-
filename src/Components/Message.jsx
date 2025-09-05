import "../Css/Message.css";
import CheckIcon from "../assets/icons/check.png";
import CloseIcon from "../assets/icons/close.png";
const Message = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="message-popup">
      <section className="message-content">
        <button className="message-close-btn" onClick={onClose}>
          <img src={CloseIcon} alt="close" />
        </button>
        <img src={CheckIcon} alt="check" />
        <h2>Your request has been sent</h2>
        <p>You will get a feedback shortly</p>
      </section>
    </div>
  );
};

export default Message;
