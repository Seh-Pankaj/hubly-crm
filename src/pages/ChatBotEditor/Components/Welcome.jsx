import { useSelector } from "react-redux";
import "./Welcome.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateChatbot } from "../../../redux/chatbotReducer";

const MAX_WORDS = 50;

const Welcome = () => {
  const welcomeMessage = useSelector((state) => state.chatbot.welcomeMessage);
  const dispatch = useDispatch();

  const [text, setText] = useState(welcomeMessage);

  const handleChange = (e) => {
    const words = e.target.value.trim().split(/\s+/);

    if (words.length <= MAX_WORDS) {
      setText(e.target.value);
      dispatch(updateChatbot({ welcomeMessage: e.target.value }));
    }
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  return (
    <div className="edit-box">
      <div className="edit-title">Welcome Message</div>
      <div className="message-cont">
        <textarea
          className="message-input"
          value={text}
          onChange={handleChange}
          placeholder="Write your welcome message..."
          disabled
        />
        <div className="word-limit">
          {wordCount}/{MAX_WORDS}
        </div>
        <img
          onClick={() =>
            document.querySelector(".message-input").removeAttribute("disabled")
          }
          src="edit.png"
          alt="edit-icon"
        />
      </div>
    </div>
  );
};
export default Welcome;
