import { useEffect } from "react";
import "./Dashboard.css";
import { useState } from "react";
import { apiPost } from "../../api";
import { useSelector } from "react-redux";
import returnTime from "../../components/returnTime";
import { useDispatch } from "react-redux";
import { saveTickets } from "../../redux/ticketsReducer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [searchTickets, setSearchTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [unResolvedTickets, setUnResolvedTickets] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const userId = useSelector((state) => state.authReducer.user.userId);
  const tickets = useSelector((state) => state.tickets);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const res = await apiPost("/get-tickets", { userId });
        dispatch(saveTickets(res.tickets));
      } catch (error) {
        console.log(error);
      }
    };

    getTickets();
  }, []);

  useEffect(() => {
    setResolvedTickets(tickets.filter((ticket) => ticket.status == "Resolved"));
    setUnResolvedTickets(
      tickets.filter((ticket) => ticket.status == "Unresolved")
    );
  }, [tickets]);

  useEffect(() => {
    setSearchTickets(
      tickets.filter((ticket) => ticket.ticketId.includes(searchTerm))
    );
  }, [searchTerm]);

  const openTicket = async () => {};

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
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div className="msg-tab">
        <img src="sms.png" alt="sms-icon" />
        <div
          onClick={() => setSelectedTab("all")}
          className={selectedTab == "all" ? "selected-tab" : ""}
        >
          All tickets
        </div>
        <div
          onClick={() => setSelectedTab("resolved")}
          className={selectedTab == "resolved" ? "selected-tab" : ""}
        >
          Resolved
        </div>
        <div
          onClick={() => setSelectedTab("unresolved")}
          className={selectedTab == "unresolved" ? "selected-tab" : ""}
        >
          Unresolved
        </div>
      </div>
      <div className="separator"></div>
      <div className="tickets-cont">
        {selectedTab == "all" &&
          searchTerm == "" &&
          tickets.map((ticket, index) => (
            <div key={index} className="ticket-block">
              <div className="ticketNo-cont">
                <div style={{ display: "flex", gap: "8px" }}>
                  <div className="color-ball"></div>
                  <div style={{ fontWeight: "600", fontSize: "14px" }}>
                    {ticket.ticketId}
                  </div>
                </div>
                <div style={{ fontSize: "10px" }}>
                  Posted at {returnTime(ticket.createdAt)}
                </div>
              </div>
              <div
                style={{
                  margin: "0 0 3rem 3rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>{ticket.messages[0]?.message}</div>
                <div
                  style={{
                    fontWeight: "600",
                    color: "black",
                    fontSize: "14px",
                  }}
                >
                  {returnTime(ticket.createdAt)}
                </div>
              </div>
              <div className="separator"></div>
              <div className="user-details-cont">
                <div className="img-and-details">
                  <div style={{ padding: "0.5rem 0.5rem 0 0" }}>
                    <img src="user-1.png" alt="user-img" />
                  </div>
                  <div className="details-only">
                    <div>{ticket.customerDetails.name}</div>
                    <div>{ticket.customerDetails.phone}</div>
                    <div>{ticket.customerDetails.email}</div>
                  </div>
                </div>
                <div onClick={openTicket} className="open-ticket-text">
                  Open Ticket
                </div>
              </div>
            </div>
          ))}
        {selectedTab == "all" && searchTerm != "" ? (
          searchTickets.length > 0 ? (
            searchTickets.map((ticket, index) => (
              <div key={index} className="ticket-block">
                <div className="ticketNo-cont">
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div className="color-ball"></div>
                    <div style={{ fontWeight: "600", fontSize: "14px" }}>
                      {ticket.ticketId}
                    </div>
                  </div>
                  <div style={{ fontSize: "10px" }}>
                    Posted at {returnTime(ticket.createdAt)}
                  </div>
                </div>
                <div
                  style={{
                    margin: "0 0 3rem 3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{ticket.messages[0]?.message}</div>
                  <div
                    style={{
                      fontWeight: "600",
                      color: "black",
                      fontSize: "14px",
                    }}
                  >
                    {returnTime(ticket.createdAt)}
                  </div>
                </div>
                <div className="separator"></div>
                <div className="user-details-cont">
                  <div className="img-and-details">
                    <div style={{ padding: "0.5rem 0.5rem 0 0" }}>
                      <img src="user-1.png" alt="user-img" />
                    </div>
                    <div className="details-only">
                      <div>{ticket.customerDetails.name}</div>
                      <div>{ticket.customerDetails.phone}</div>
                      <div>{ticket.customerDetails.email}</div>
                    </div>
                  </div>
                  <div onClick={openTicket} className="open-ticket-text">
                    Open Ticket
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No Ticket Found</div>
          )
        ) : (
          <div></div>
        )}
        {selectedTab == "resolved" &&
          resolvedTickets.map((ticket, index) => (
            <div key={index} className="ticket-block">
              <div className="ticketNo-cont">
                <div style={{ display: "flex", gap: "8px" }}>
                  <div className="color-ball"></div>
                  <div style={{ fontWeight: "600", fontSize: "14px" }}>
                    {ticket.ticketId}
                  </div>
                </div>
                <div style={{ fontSize: "10px" }}>
                  Posted at {returnTime(ticket.createdAt)}
                </div>
              </div>
              <div
                style={{
                  margin: "0 0 3rem 3rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>{ticket.messages[0]?.message}</div>
                <div
                  style={{
                    fontWeight: "600",
                    color: "black",
                    fontSize: "14px",
                  }}
                >
                  {returnTime(ticket.createdAt)}
                </div>
              </div>
              <div className="separator"></div>
              <div className="user-details-cont">
                <div className="img-and-details">
                  <div style={{ padding: "0.5rem 0.5rem 0 0" }}>
                    <img src="user-1.png" alt="user-img" />
                  </div>
                  <div className="details-only">
                    <div>{ticket.customerDetails.name}</div>
                    <div>{ticket.customerDetails.phone}</div>
                    <div>{ticket.customerDetails.email}</div>
                  </div>
                </div>
                <div onClick={openTicket} className="open-ticket-text">
                  Open Ticket
                </div>
              </div>
            </div>
          ))}
        {selectedTab == "unresolved" &&
          unResolvedTickets.map((ticket, index) => (
            <div key={index} className="ticket-block">
              <div className="ticketNo-cont">
                <div style={{ display: "flex", gap: "8px" }}>
                  <div className="color-ball"></div>
                  <div style={{ fontWeight: "600", fontSize: "14px" }}>
                    {ticket.ticketId}
                  </div>
                </div>
                <div style={{ fontSize: "10px" }}>
                  Posted at {returnTime(ticket.createdAt)}
                </div>
              </div>
              <div
                style={{
                  margin: "0 0 3rem 3rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>{ticket.messages[0]?.message}</div>
                <div
                  style={{
                    fontWeight: "600",
                    color: "black",
                    fontSize: "14px",
                  }}
                >
                  {returnTime(ticket.createdAt)}
                </div>
              </div>
              <div className="separator"></div>
              <div className="user-details-cont">
                <div className="img-and-details">
                  <div style={{ padding: "0.5rem 0.5rem 0 0" }}>
                    <img src="user-1.png" alt="user-img" />
                  </div>
                  <div className="details-only">
                    <div>{ticket.customerDetails.name}</div>
                    <div>{ticket.customerDetails.phone}</div>
                    <div>{ticket.customerDetails.email}</div>
                  </div>
                </div>
                <div onClick={openTicket} className="open-ticket-text">
                  Open Ticket
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Dashboard;
