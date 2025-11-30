import { useDispatch } from "react-redux";
import "./ChatBotHeader.css";
import { useSelector } from "react-redux";
import { updateChatbot } from "../../../redux/chatbotReducer";

const ChatBotHeader = () => {
  const headerColor = useSelector((state) => state.chatbot.headerColor);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let input = e.target.value;

    if (!input.startsWith("#")) {
      input = "#" + input.replace(/#/g, "");
    }

    input = "#" + input.slice(1).replace(/[^0-9A-Fa-f]/g, "");

    if (input.length > 7) return;
    dispatch(updateChatbot({ headerColor: input }));
  };

  const handleKeyDown = (e) => {
    if (
      (e.key === "Backspace" || e.key === "Delete") &&
      headerColor.length === 1
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className="edit-box">
      <div className="edit-title">Header Color</div>
      <div className="colors-cont">
        <div
          className="color"
          onClick={() => dispatch(updateChatbot({ headerColor: "#000" }))}
        ></div>
        <div
          className="color"
          style={{ backgroundColor: "#092d7b" }}
          onClick={() => dispatch(updateChatbot({ headerColor: "#092d7b" }))}
        ></div>
        <div
          className="color"
          style={{ backgroundColor: "#026b98" }}
          onClick={() => dispatch(updateChatbot({ headerColor: "#026b98" }))}
        ></div>
      </div>
      <div className="custom-color-cont">
        <div
          style={{ backgroundColor: headerColor }}
          className="custom-display"
        ></div>
        <input
          type="text"
          className="custom-color-text"
          value={headerColor}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};
export default ChatBotHeader;
