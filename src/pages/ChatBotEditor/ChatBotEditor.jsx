import "./ChatBotEditor.css";
import ChatBotBackground from "./Components/ChatBotBackground";
import ChatBotHeader from "./Components/ChatBotHeader";
import ChatBotSample from "./Components/ChatBotSample";
import CustomizeMessage from "./Components/CustomizeMessage";
import IntroductionForm from "./Components/IntroductionForm";
import MissedChatTimer from "./Components/MissedChatTimer";
import Welcome from "./Components/Welcome";

const ChatBotEditor = () => {
  return (
    <div className="editor-cont">
      <div className="chat-text">Chat Bot</div>
      <ChatBotSample />

      <div className="edit-options">
        <ChatBotHeader />
        <ChatBotBackground />
        <CustomizeMessage />
        <IntroductionForm />
        <Welcome />
        <MissedChatTimer />
      </div>
    </div>
  );
};
export default ChatBotEditor;
