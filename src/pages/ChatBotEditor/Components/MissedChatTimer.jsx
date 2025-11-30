import "./MissedChatTimer.css";
import { TimePicker } from "react-wheel-time-picker";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateChatbot } from "../../../redux/chatbotReducer";

const MissedChatTimer = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.chatbot.missedChatTimer);
  return (
    <div className="edit-box">
      <div className="edit-title">Missed Chat Timer</div>
      <TimePicker
        value={timer}
        onChange={(value) =>
          dispatch(updateChatbot({ missedChatTimer: value }))
        }
      />
    </div>
  );
};
export default MissedChatTimer;
