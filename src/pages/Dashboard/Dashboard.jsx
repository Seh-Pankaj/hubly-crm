import "./Dashboard.css";

const messages = [
  {
    ticketNo: "Ticket# 2023-00123",
    messageDetails: {
      message: "Hey!",
      time: "10:00",
    },
    time: "12:45 AM",
    userDetais: {
      name: "John Snow",
      phone: "+91 9998887776",
      email: "example@gmail.com",
    },
  },
];

const Dashboard = () => {
  return (
    <div className="dash-cont">
      <div>Dashboard</div>
      <div className="search-cont">
        <img src="search.png" alt="search-icon" />
        <input
          type="text"
          name="ticketId"
          id="ticketId"
          placeholder="Search for ticket"
        />
      </div>
      <div className="msg-tab">
        <div className="selected-tab">
          <img src="sms.png" alt="sms-icon" />
          <span>All tickets</span>
        </div>
        <div>Resolved</div>
        <div>Unresolved</div>
      </div>
      <div className="separator"></div>
      <div className="tickets-cont">
        <div className="ticket-block">
          <div className="ticketNo-cont">
            <div style={{ display: "flex", gap: "8px" }}>
              <div className="color-ball"></div>
              <div style={{ fontWeight: "600", fontSize: "14px" }}>
                {messages[0].ticketNo}
              </div>
            </div>
            <div style={{ fontSize: "10px" }}>Posted {messages[0].time}</div>
          </div>
          <div
            style={{
              margin: "0 0 3rem 3rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>{messages[0].messageDetails.message}</div>
            <div
              style={{ fontWeight: "600", color: "black", fontSize: "14px" }}
            >
              {messages[0].messageDetails.time}
            </div>
          </div>
          <div className="separator"></div>
          <div className="user-details-cont">
            <div className="img-and-details">
              <div style={{ padding: "0.5rem 0.5rem 0 0" }}>
                <img src="user-1.png" alt="user-img" />
              </div>
              <div className="details-only">
                <div>{messages[0].userDetais.name}</div>
                <div>{messages[0].userDetais.phone}</div>
                <div>{messages[0].userDetais.email}</div>
              </div>
            </div>
            <div className="open-ticket-text">Open Ticket</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
