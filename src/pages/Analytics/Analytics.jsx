import "./Analytics.css";
import MissedChatsChart from "./MissedChatChart";
import ProgressBar from "./ProgressBar";

const Analytics = () => {
  return (
    <div className="analytics-cont">
      <div style={{ marginBottom: "1rem", fontWeight: "500" }}>Analytics</div>
      <div className="section-title">Missed Chats</div>

      <MissedChatsChart />
      <div className="reply-time-section">
        <div className="section-title">Average Reply time</div>
        <div className="cont">
          <div className="desc">
            For highest customer satisfaction rates you should aim to reply to
            an incoming customer's message in 15 seconds or less. Quick
            responses will get you more conversations, help you earn customers
            trust and make more sales.
          </div>
          <div className="reply-value">0 secs</div>
        </div>
      </div>

      <div className="resolved-section">
        <div>
          <div className="section-title">Resolved Tickets</div>
          <div className="desc">
            A callback system on a website, as well as proactive invitations,
            help to attract even more customers. A separate round button for
            ordering a call with a small animation helps to motivate more
            customers to make calls.
          </div>
        </div>
        <div className="progress-bar-wrapper">
          <ProgressBar />
        </div>
      </div>

      <div style={{ color: "black" }} className="section-title">
        Total Chats
      </div>
      <div className="cont">
        <div className="total-chats-label">
          This metric Shows the total number of chats for all Channels for the
          selected period
        </div>
        <div className="total-chats-value">122 Chats</div>
      </div>
    </div>
  );
};

export default Analytics;
