import { useEffect, useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    document.querySelector(".hubly-form").classList.toggle("hide");
  }, [clicked]);

  const toggleClick = () => {
    setClicked(!clicked);
  };

  const closeMessage = () => {
    const msgEle = document.querySelector(".message");
    msgEle.classList.add("hide");
  };

  const showForm = () => {
    closeMessage();
    toggleClick();
  };

  return (
    <div className="chatbot">
      <div className="hubly-form hide">
        <div className="status-bar">
          <img src="online.png" alt="online-icon" /> <span>Hubly</span>
        </div>
        <div className="msg-area">
          <div className="bot-msg-cont">
            <div>
              <img
                src="chatbot.png"
                alt="chatbot-icon"
                width="28px"
                height="28px"
              />
            </div>

            <div className="auto-msg">
              <div className="msg">How can I help you?</div>
              <div className="msg">Ask me anything!</div>
            </div>
          </div>
          <div className="msg-form">
            <div className="form-info">
              <p className="form-heading">Introduce Yourself</p>
              <div className="actual-form">
                <div>
                  <label htmlFor="name">Your Name</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone">Your Phone</label>
                  <br />
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+1 (000) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="email">Your Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div>
                  <div className="submit-btn">Thank you!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="query-cont">
          <input
            type="text"
            placeholder="Write a message"
            className="msg"
          ></input>
          <img src="Send.png" alt="aero-icon" />
        </div>
      </div>
      <div className="message">
        <img src="chatbot.png" alt="chatbot-icon" className="bot-icon" />
        <p>
          👋 Want to chat about Hubly? I'm a chatbot here to help you find your
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
        <img src={clicked ? "cross.png" : "msg.png"} alt="message" />
      </div>
    </div>
  );
};
export default Chatbot;
