import { useEffect, useState } from "react";
import "./Chatbot.css";
import { apiGet, apiPost } from "../../api";
import BotMessage from "./BotMessage";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateChatbot } from "../../redux/chatbotReducer";

const Chatbot = () => {
  const formInitialState = {
    name: "",
    email: "",
    phone: "",
  };

  const [formValues, setFormValues] = useState(formInitialState);
  const [clicked, setClicked] = useState(false);
  const [ticketNumber, setTicketNumber] = useState(null);
  const [userMessage, setUserMessage] = useState("");
  const msgRef = useRef();

  const dispatch = useDispatch();

  const chatbot = useSelector((state) => state.chatbot);

  useEffect(() => {
    document.querySelector(".hubly-form").classList.toggle("hide");
  }, [clicked]);

  useEffect(() => {
    const getChatBotSettings = async () => {
      try {
        const chbt = await apiGet("/get-chatbot-settings");

        dispatch(updateChatbot(chbt));
      } catch (error) {
        console.log(error);
      }
    };

    getChatBotSettings();
  }, []);

  const toggleClick = () => {
    setClicked(!clicked);
  };

  const closeMessage = () => {
    const msgEle = document.querySelector(".chat-bot-message");
    msgEle.classList.add("hide");
  };

  const showForm = () => {
    closeMessage();
    toggleClick();
  };

  const handleFormChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    if (key === "phone" && value.length > 10) return;

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

  const enableMessaging = () => {
    const msgInput = document.querySelector("#message");
    msgInput.removeAttribute("disabled");
    msgInput.classList.remove("cursor");
    msgInput.removeAttribute("title");
  };

  const disableMessaging = () => {
    const msgInput = document.querySelector("#message");
    msgInput.setAttribute("disabled", true);
    msgInput.classList.add("cursor");
  };

  const submitForm = async (e) => {
    e.preventDefault();

    disableThankYouBtn();
    disableFormInputs();
    enableMessaging();

    setTicketNumber((await apiPost("/create-ticket", formValues)).ticketId);
  };

  const sendMessage = async () => {
    const msgValue = msgRef.current.value;
    if (!msgValue) return;

    setUserMessage(msgValue);
    await apiPost("/intro-message", {
      ticketId: ticketNumber,
      message: msgValue,
      sender: "User",
    });

    msgRef.current.value = "";
    disableMessaging();
  };

  return (
    <div className="chatbot">
      <div className="hubly-form hide">
        <div
          className="status-bar"
          style={{ backgroundColor: `${chatbot.headerColor}` }}
        >
          <img src="online.png" alt="online-icon" /> <span>Hubly</span>
        </div>
        <div
          className="msg-area"
          style={{ backgroundColor: `${chatbot.backgroundColor}` }}
        >
          <BotMessage messages={[chatbot.introLineOne, chatbot.introLineTwo]} />
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
                    pattern="^.{10,}$"
                    id="phone"
                    placeholder="+91 9898989898"
                    value={formValues.phone}
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                      handleFormChange(e);
                    }}
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
          {ticketNumber && (
            <BotMessage
              messages={[
                `Your ticked Id is ${ticketNumber}. If you have a query please leave the message below`,
              ]}
            />
          )}
          {userMessage && (
            <div className="msg-form">
              <div className="form-info">{userMessage}</div>
            </div>
          )}
          {userMessage && (
            <BotMessage
              messages={["Thank you! Our team will revert back to you soon"]}
            />
          )}
        </div>
        <div className="query-cont">
          <input
            ref={msgRef}
            type="text"
            placeholder="Write a message"
            name="message"
            id="message"
            className="cursor"
            disabled
            title="Please introduce yourself first"
          ></input>
          <button onClick={sendMessage} title="Please introduce yourself first">
            <img src="Send.png" alt="aero-icon" />
          </button>
        </div>
      </div>
      <div className="chat-bot-message">
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
