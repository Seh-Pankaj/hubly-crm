import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="layout">
      <div className="menu-bar">
        <div className="main-menu">
          <img src="dash-logo.png" alt="logo" width="75%" />
          <div>
            <img src="home.png" alt="home-icon" />
            <div>Dashboard</div>
          </div>
          <div>
            <img src="message.png" alt="message-icon" />
            <div>Contact Center</div>
          </div>
          <div>
            <img src="analytics.png" alt="analytics-icon" />
            <div>Analytics</div>
          </div>
          <div>
            <img src="bot.png" alt="chatbot-icon" />
            <div>Chatbot</div>
          </div>
          <div>
            <img src="team.png" alt="teams-icon" />
            <div>Teams</div>
          </div>
          <div>
            <img src="settings.png" alt="settings-icon" />
            <div>Settings</div>
          </div>
        </div>

        <div>
          <img src="user.png" alt="user-icon" />
        </div>
      </div>
      <div className="dash-area">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
