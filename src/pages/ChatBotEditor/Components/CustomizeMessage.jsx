import { useSelector } from "react-redux";
import "./CustomizeMessage.css";
import { useDispatch } from "react-redux";
import { updateChatbot } from "../../../redux/chatbotReducer";

const CustomizeMessage = () => {
  const { introLineOne, introLineTwo } = useSelector((state) => state.chatbot);
  const dispatch = useDispatch();
  return (
    <div className="edit-box">
      <div className="edit-title">Customize Message</div>
      <div style={{ position: "relative" }}>
        <input
          className="intro"
          type="text"
          name="intro-one"
          id="intro-one"
          disabled
          value={introLineOne}
          onChange={(e) =>
            dispatch(updateChatbot({ introLineOne: e.target.value }))
          }
        />
        <img
          onClick={() =>
            document.querySelector("#intro-one").removeAttribute("disabled")
          }
          src="edit.png"
          alt="edit-icon"
          id="edit-icon"
        />
      </div>
      <div style={{ position: "relative" }}>
        <input
          className="intro"
          type="text"
          name="intro-two"
          id="intro-two"
          disabled
          value={introLineTwo}
          onChange={(e) =>
            dispatch(updateChatbot({ introLineTwo: e.target.value }))
          }
        />
        <img
          onClick={() =>
            document.querySelector("#intro-two").removeAttribute("disabled")
          }
          src="edit.png"
          alt="edit-icon"
          id="edit-icon"
        />
      </div>
    </div>
  );
};
export default CustomizeMessage;
