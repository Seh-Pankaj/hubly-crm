import { useEffect } from "react";
import "./ContactCenter.css";
import { useState } from "react";
import { apiGet, apiPost } from "../../api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveTickets } from "../../redux/ticketsReducer";
import formatDate from "../../components/formatDate";
import { useRef } from "react";

const ContactCenter = () => {
  const initialTicketState = {
    ticketId: "",
    customerDetails: {
      name: "",
      email: "",
      phone: "",
    },
    status: "",
    messages: [
      {
        message: "",
        sender: "",
      },
    ],
  };

  const [teamMates, setTeamMates] = useState([]);
  const teamMsgRef = useRef();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const tickets = useSelector((state) => state.tickets);

  const [selectedTicket, setSelectedTicket] = useState(initialTicketState);
  const [transferId, setTransferId] = useState(null);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const res = await apiPost("/get-tickets", { userId: user.userId });
        dispatch(saveTickets(res.tickets));
        setSelectedTicket(res.tickets[0]);
      } catch (error) {
        console.log(error);
      }
    };

    const getTeamMates = async () => {
      try {
        const res = await apiGet("/get-team-mates");
        setTeamMates(res.users);
      } catch (error) {
        console.log(error);
      }
    };

    getTickets();
    getTeamMates();
  }, []);

  const assignProperly = (selector) => {
    document.querySelector(selector).classList.toggle("hide");
  };

  const sendTeamMessage = async () => {
    const message = teamMsgRef.current.value;
    if (!message) return;

    try {
      const updatedTicket = await apiPost("/send-team-message", {
        message,
        ticketId: selectedTicket.ticketId,
        sender: "Agent",
      });

      setSelectedTicket(updatedTicket);
    } catch (error) {
      console.log(error);
    }

    teamMsgRef.current.value = "";
  };

  const resolveTicket = async () => {
    try {
      const ticket = await apiPost("/resolve-ticket", {
        ticketId: selectedTicket.ticketId,
      });
      setSelectedTicket(ticket);
      assignProperly(".modal-resolve");
    } catch (error) {
      console.log(error);
    }
  };

  const transferChat = async () => {
    try {
      const ticket = await apiPost("/transfer-ticket", {
        userId: transferId,
        ticketId: selectedTicket.ticketId,
      });
      setSelectedTicket(ticket);
      assignProperly(".modal-assign");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-center">
      <div className="contact-cont">
        <div className="heading-cont">
          <div className="heading">Contact Center</div>
        </div>

        <div className="chats-text">
          <span>Chats</span>
        </div>
        <div className="chats-cont">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className={`chat-det-img ${ticket.ticketId == selectedTicket.ticketId ? "selected-chat" : ""}`}
              onClick={() => setSelectedTicket(ticket)}
            >
              <img src="user-1.png" alt="user-icon" />
              <div style={{ marginLeft: "8px", lineHeight: "1.2" }}>
                <div className="chat-head">{ticket.ticketId}</div>
                <div className="chat-query">{ticket.messages[0].message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedTicket.status == "Unresolved" ? (
        selectedTicket.userId == user.userId ? (
          <div className="main-cont">
            <div className="main-cont-head">
              <div>{selectedTicket.ticketId}</div>
              <img src="home.png" alt="home-icon" />
            </div>

            <div className="separator"></div>

            <div className="main-msg">
              <div className="date-divider">
                <div className="date-divider-line"></div>
                <div>{formatDate(selectedTicket.createdAt)}</div>
                <div className="date-divider-line"></div>
              </div>
              <div className="user-det-img">
                <img src={`user-1.png`} alt="user-icon" />
                <div style={{ marginLeft: "8px", lineHeight: "1.1" }}>
                  <div className="chat-head">
                    {selectedTicket.customerDetails.name}
                  </div>
                  <div className="chat-query">
                    {selectedTicket.messages[0].message}
                  </div>
                </div>
              </div>
              {selectedTicket.messages.length > 1 ? (
                <div className="agent-det-img">
                  <div className="agent-dets">
                    <div className="chat-head">
                      {user.firstName + " " + user.lastName}
                    </div>
                    {selectedTicket.messages.map((msg, index) => {
                      if (index != 0) {
                        return (
                          <div key={index} className="chat-query">
                            {msg.message}
                          </div>
                        );
                      }
                    })}
                  </div>
                  <div>
                    <img src={`user-3.png`} alt="user-icon" />
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="enter-msg">
              <textarea
                ref={teamMsgRef}
                name="send-message"
                id="send-message"
                placeholder="type here"
              ></textarea>
              <img
                src="send-msg.png"
                onClick={sendTeamMessage}
                alt="send-icon"
                id="send-icon"
              />
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "end", padding: "1rem" }}>
            This chat has been assigned to a different team member.
          </div>
        )
      ) : (
        <div style={{ display: "flex", alignItems: "end", padding: "1rem" }}>
          This chat has been resolved
        </div>
      )}
      <div className="details-cont">
        <div className="icon-title-cont">
          <img src="user-1.png" alt="user-icon" />
          <span>Chat</span>
        </div>
        <div>
          <div className="title">Details</div>
          <div className="icon-cont">
            <img src="name-icon.png" alt="name-icon" className="icon" />
            <div className="disabled-input">
              {selectedTicket.customerDetails.name}
            </div>
          </div>
          <div className="icon-cont">
            <img src="call-icon.png" alt="call-icon" className="icon" />
            <div className="disabled-input">
              +91 {selectedTicket.customerDetails.phone}
            </div>
          </div>
          <div className="icon-cont">
            <img src="mail-icon.png" alt="mail-icon" className="icon" />
            <div className="disabled-input">
              {selectedTicket.customerDetails.email}
            </div>
          </div>
        </div>
        <div className="team-mates">
          <div className="title">Teammates</div>
          <div
            className="icon-cont"
            onClick={() => assignProperly("#show-teams")}
          >
            <img src="user-3.png" alt="user-icon" className="user-icon" />
            <img src="drop.png" alt="dropdown-icon" className="drop-down" />
            <div className="disabled-input">
              {user.firstName + " " + user.lastName}
            </div>
          </div>
          <div className="team-cont hide" id="show-teams">
            {teamMates.map((teamMate, index) => (
              <div
                key={index}
                onClick={() => {
                  setTransferId(teamMate._id);
                  assignProperly(".modal-assign");
                }}
              >
                <img src={`user-${(index + 3) % 5}.png`} alt="usr-icon" />{" "}
                {teamMate.firstName + " " + teamMate.lastName}
              </div>
            ))}
          </div>
          <div
            className="icon-cont"
            onClick={() => assignProperly("#show-status")}
          >
            <img src="ticket.png" alt="user-icon" className="ticket-icon" />
            <img src="drop.png" alt="dropdown-icon" className="drop-down" />
            <div className="disabled-input">Ticket Status</div>
          </div>
          <div className="team-cont hide" id="show-status">
            <div onClick={() => assignProperly(".modal-resolve")}>Resolved</div>
            <div>Unresolved</div>
          </div>
        </div>
        <div className="modal-assign hide">
          <div className="chat-assign">
            <div>Chat would be assigned to different team member</div>
            <div className="btns-cont">
              <span
                className="cancel-btn"
                onClick={() => assignProperly(".modal-assign")}
              >
                Cancel
              </span>
              <span onClick={() => transferChat()} className="confirm-btn">
                Confirm
              </span>
            </div>
          </div>
        </div>
        <div className="modal-resolve hide">
          <div className="chat-resolve">
            <div>Chat will be closed</div>
            <div className="btns-cont">
              <span
                className="cancel-btn"
                onClick={() => assignProperly(".modal-resolve")}
              >
                Cancel
              </span>
              <span onClick={resolveTicket} className="confirm-btn">
                Confirm
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactCenter;
