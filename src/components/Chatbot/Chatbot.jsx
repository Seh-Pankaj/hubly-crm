import "./Chatbot.css";

const Chatbot = () => {
  const closeMessage = () => {
    const msgEle = document.querySelector(".message");
    msgEle.classList.add("hide");
  };

  const showForm = () => {
    const msgEle = document.querySelector(".message");
    msgEle.classList.add("hide");
  };

  return (
    <div className="chatbot">
      <div className="hubly-form">
        <div className="status-bar">
          <img src="online.png" alt="online-icon" /> <span>Hubly</span>
        </div>
        <div className="msg-area"></div>
        <div></div>
      </div>
      <div className="message">
        <img src="chatbot.png" alt="chatbot-icon" className="bot-icon" />
        <p>
          👋 Want to chat about Hubly? I'm an chatbot here to help you find your
          way.
        </p>
        <img
          src="Close.png"
          onClick={closeMessage}
          alt="cross"
          className="cross"
        />
      </div>
      <div className="msg-icon" onClick={showForm}>
        <img src="msg.png" alt="message" />
      </div>
    </div>
  );
};
export default Chatbot;
