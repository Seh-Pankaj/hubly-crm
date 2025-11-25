import "./CustomizeMessage.css";

const CustomizeMessage = () => {
  return (
    <div className="edit-box">
      <div className="edit-title">Customize Message</div>
      <div style={{ position: "relative" }}>
        <input
          className="intro"
          type="text"
          name="intro-one"
          id="intro-one"
          defaultValue="How can I help you?"
        />
        <img src="edit.png" alt="edit-icon" id="edit-icon" />
      </div>
      <div style={{ position: "relative" }}>
        <input
          className="intro"
          type="text"
          name="intro-two"
          id="intro-two"
          defaultValue="Ask me anything!"
        />
        <img src="edit.png" alt="edit-icon" id="edit-icon" />
      </div>
    </div>
  );
};
export default CustomizeMessage;
