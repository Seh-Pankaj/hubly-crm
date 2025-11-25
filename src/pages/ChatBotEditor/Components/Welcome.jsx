import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="edit-box">
      <div className="edit-title">Welcome Message</div>
      <div className="message-cont">
        👋 Want to chat about Hubly? I'm a chatbot here to help you find your
        way.
        <div className="word-limit">15/50</div>
        <img src="edit.png" alt="edit-icon" />
      </div>
    </div>
  );
};
export default Welcome;
