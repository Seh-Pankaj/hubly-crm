import { useEffect, useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const formInitialState = {
    name: "",
    email: "",
    phone: "",
  };

  const [formValues, setFormValues] = useState(formInitialState);
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

  const handleFormChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [key]: value });
  };

  const disableThankYouBtn = () => {
    const tBtn = document.querySelector(".submit-btn");
    tBtn.style.backgroundColor = "#2166a7af";
    tBtn.style.cursor = "not-allowed";
    tBtn.setAttribute("disabled", true);
  };

  const disableFormInputs = () => {
    const formInputs = document.querySelectorAll(".form-input");
    formInputs.forEach((input) => {
      input.style.color = "#8e8e8e";
      input.style.cursor = "not-allowed";
      input.setAttribute("disabled", true);
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    disableThankYouBtn();

    disableFormInputs();
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
              <form className="actual-form" onSubmit={submitForm}>
                <div>
                  <label htmlFor="name">Your Name</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={formValues.name}
                    onChange={(e) => handleFormChange(e)}
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="phone">Your Phone</label>
                  <br />
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="true"
                    placeholder="+91 9898989898"
                    value={formValues.phone}
                    onChange={(e) => handleFormChange(e)}
                    required
                    className="form-input"
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
                    value={formValues.email}
                    onChange={(e) => handleFormChange(e)}
                    required
                    className="form-input"
                  />
                </div>

                <div>
                  <button type="submit" className="submit-btn">
                    Thank you!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="query-cont">
          <input
            type="text"
            placeholder="Write a message"
            name="message"
            id="message"
            className="cursor"
          ></input>
          <button title="Please introduce yourself first">
            <img src="Send.png" alt="aero-icon" />
          </button>
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
