import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ value }) => {
  const percentage = Math.floor(value * 100);

  return (
    <div style={{ flexShrink: "0", width: "80px", height: "80px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#000",
          pathColor: "#00d827",
          trailColor: "#f0f4ff",
          textSize: "22px",
          strokeLinecap: "round",
        })}
      />
    </div>
  );
};

export default ProgressBar;
