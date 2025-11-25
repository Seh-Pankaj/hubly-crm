import { useState } from "react";
import "./MissedChatTimer.css";
import { TimePicker } from "react-wheel-time-picker";

const MissedChatTimer = () => {
  const [value, setValue] = useState("12:00");
  return (
    <div className="edit-box">
      <div className="edit-title">Missed Chat Timer</div>
      <TimePicker value={value} onChange={setValue} />
    </div>
  );
};
export default MissedChatTimer;
