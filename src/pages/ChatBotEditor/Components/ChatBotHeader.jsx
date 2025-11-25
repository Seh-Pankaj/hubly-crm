import { useState } from "react";
import "./ChatBotHeader.css";

const ChatBotHeader = () => {
  const [headerColor, setHeaderColor] = useState("#ffffff");

  const handleChange = (e) => {
    let input = e.target.value;

    if (!input.startsWith("#")) {
      input = "#" + input.replace(/#/g, "");
    }

    input = "#" + input.slice(1).replace(/[^0-9A-Fa-f]/g, "");

    if (input.length > 7) return;

    setHeaderColor(input);
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
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
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
