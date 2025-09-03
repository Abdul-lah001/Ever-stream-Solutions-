import "../Css/Message.css";
const Message = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="message-popup">
      <section className="message-content">
        <button className="message-close-btn" onClick={onClose}>
          <img src="/src/assets/icons/close.png" alt="close" />
        </button>
        <img src="/src/assets/icons/check.png" alt="check" />
        <h2>Your request has been sent</h2>
        <p>You will get a feedback shortly</p>
      </section>
    </div>
  );
};

export default Message;
