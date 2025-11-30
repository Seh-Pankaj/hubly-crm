const BotMessage = ({ messages }) => {
  return (
    <div className="bot-msg-cont">
      <div>
        <img src="chatbot.png" alt="chatbot-icon" width="28px" height="28px" />
      </div>

      <div className="auto-msg">
        {messages.map((msg, index) => (
          <div key={index} className="msg">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};
export default BotMessage;
