import "./ChatBotSample.css";

const ChatBotSample = () => {
  return (
    <div className="bot-sample-cont">
      <div className="chatbota">
        <div className="hubly-form">
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
      </div>
      <div className="bot-message">
        <img src="chatbot.png" alt="chatbot-icon" className="bot-icon" />
        <p className="bot-intro-para">
          👋 Want to chat about Hubly? I'm a chatbot here to help you find your
          way.
        </p>
        <img src="Close.png" alt="cross" className="cross" />
      </div>
    </div>
  );
};
export default ChatBotSample;
