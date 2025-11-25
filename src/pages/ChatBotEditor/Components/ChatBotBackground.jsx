import { useState } from "react";

const ChatBotBackground = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const handleChange = (e) => {
    let input = e.target.value;

    if (!input.startsWith("#")) {
      input = "#" + input.replace(/#/g, "");
    }

    input = "#" + input.slice(1).replace(/[^0-9A-Fa-f]/g, "");

    if (input.length > 7) return;

    setBgColor(input);
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
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
      </div>
      <div className="custom-color-cont">
        <div className="custom-display"></div>
        <input
          type="text"
          className="custom-color-text"
          value={bgColor}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};
export default ChatBotBackground;
