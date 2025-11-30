import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateChatbot } from "../../../redux/chatbotReducer";

const ChatBotBackground = () => {
  const backgroundColor = useSelector((state) => state.chatbot.backgroundColor);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let input = e.target.value;

    if (!input.startsWith("#")) {
      input = "#" + input.replace(/#/g, "");
    }

    input = "#" + input.slice(1).replace(/[^0-9A-Fa-f]/g, "");

    if (input.length > 7) return;

    dispatch(updateChatbot({ backgroundColor: input }));
  };

  const handleKeyDown = (e, value) => {
    if ((e.key === "Backspace" || e.key === "Delete") && value.length === 1) {
      e.preventDefault();
    }
  };

  return (
    <div className="edit-box">
      <div className="edit-title">Custom Background Color</div>
      <div className="colors-cont">
        <div
          style={{ backgroundColor: "#fff" }}
          onClick={() => dispatch(updateChatbot({ backgroundColor: "#fff" }))}
          className="color"
        ></div>
        <div
          style={{ backgroundColor: "#9ea7ba" }}
          onClick={() =>
            dispatch(updateChatbot({ backgroundColor: "#9ea7ba" }))
          }
          className="color"
        ></div>
        <div
          style={{ backgroundColor: "#76829d" }}
          onClick={() =>
            dispatch(updateChatbot({ backgroundColor: "#76829d" }))
          }
          className="color"
        ></div>
      </div>
      <div className="custom-color-cont">
        <div
          style={{ backgroundColor: backgroundColor }}
          className="custom-display"
        ></div>
        <input
          type="text"
          className="custom-color-text"
          value={backgroundColor}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};
export default ChatBotBackground;
