import { useSelector } from "react-redux";
import "./ChatBotEditor.css";
import ChatBotBackground from "./Components/ChatBotBackground";
import ChatBotHeader from "./Components/ChatBotHeader";
import ChatBotSample from "./Components/ChatBotSample";
import CustomizeMessage from "./Components/CustomizeMessage";
import IntroductionForm from "./Components/IntroductionForm";
import MissedChatTimer from "./Components/MissedChatTimer";
import Welcome from "./Components/Welcome";
import { useEffect } from "react";
import { apiGet, apiPost } from "../../api";
import { useDispatch } from "react-redux";
import { updateChatbot } from "../../redux/chatbotReducer";

const ChatBotEditor = () => {
  const chatbot = useSelector((state) => state.chatbot);
  const dispatch = useDispatch();

  useEffect(() => {
    const getChatBotSettings = async () => {
      try {
        const getCh = await apiGet("/get-chatbot-settings");
        dispatch(updateChatbot(getCh));
      } catch (error) {
        console.log(error);
      }
    };

    getChatBotSettings();
  }, []);

  const saveChatBotSettings = async () => {
    try {
      await apiPost("/save-chatbot-settings", chatbot);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="editor-cont">
      <div className="chat-text">Chat Bot</div>
      <button className="save-btn" onClick={saveChatBotSettings}>
        Save
      </button>
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
