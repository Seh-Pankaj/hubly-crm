import { Outlet, useNavigate } from "react-router-dom";
import "./DashboardLayout.css";
import { useState } from "react";

const menuList = [
  {
    title: "Dashboard",
    imgSrc: "home.png",
    alt: "home-icon",
    url: "dashboard",
  },
  {
    title: "Contact Center",
    imgSrc: "message.png",
    alt: "message-icon",
    url: "tickets",
  },
  {
    title: "Analytics",
    imgSrc: "analytics.png",
    alt: "analytics-icon",
    url: "analytics",
  },
  {
    title: "Chatbot",
    imgSrc: "bot.png",
    alt: "chatbot-icon",
    url: "chatbot",
  },
  {
    title: "Teams",
    imgSrc: "team.png",
    alt: "teams-icon",
    url: "teams",
  },
  {
    title: "Settings",
    imgSrc: "settings.png",
    alt: "settings-icon",
    url: "settings",
  },
];

const DashboardLayout = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const navigate = useNavigate();

  const navigateToPage = (url, index) => {
    navigate(url);
    setSelectedMenu(index);
  };

  return (
    <div className="layout">
      <div className="menu-bar">
        <div className="main-menu">
          <img src="dash-logo.png" alt="logo" />
          {menuList.map((menu, index) => (
            <div key={index} onClick={() => navigateToPage(menu.url, index)}>
              <img src={menu.imgSrc} alt={menu.alt} />
              {selectedMenu === index && (
                <div className="menu-title">{menu.title}</div>
              )}
            </div>
          ))}
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
