import "./ContactCenter.css";

const ContactCenter = () => {
  const chats = [
    {
      img: "user-1.png",
      heading: "Chat 1",
      query: "I have a question",
    },
    {
      img: "user-2.png",
      heading: "Chat 2",
      query: "Ask me anything",
    },
  ];

  const teamMates = [
    {
      name: "Rohan",
      userImage: "user-1.png",
    },
    {
      name: "Mohan",
      userImage: "user-2.png",
    },
    {
      name: "Rohan",
      userImage: "user-3.png",
    },
    {
      name: "Rohan",
      userImage: "user-4.png",
    },
  ];

  const assignProperly = (selector) => {
    document.querySelector(selector).classList.toggle("hide");
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
          {chats.map((chat, index) => (
            <div key={index} className="chat-det-img">
              <img src={chat.img} alt="user-icon" />
              <div style={{ marginLeft: "8px", lineHeight: "1.2" }}>
                <div className="chat-head">{chat.heading}</div>
                <div className="chat-query">{chat.query}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="main-cont">
        <div className="main-cont-head">
          <div>Ticket# 2025-00123</div>
          <img src="home.png" alt="home-icon" />
        </div>

        <div className="separator"></div>

        <div className="main-msg">
          <div className="date-divider">
            <div className="date-divider-line"></div>
            <div>March 7, 2025</div>
            <div className="date-divider-line"></div>
          </div>
          <div className="chat-det-img">
            <img src={chats[0].img} alt="user-icon" />
            <div style={{ marginLeft: "8px", lineHeight: "1.1" }}>
              <div className="chat-head">{chats[0].heading}</div>
              <div className="chat-query">{chats[0].query}</div>
            </div>
          </div>
        </div>
        <div className="enter-msg">
          <textarea
            name="send-message"
            id="send-message"
            placeholder="type here"
          ></textarea>
          <img src="send-msg.png" alt="send-icon" id="send-icon" />
        </div>
      </div>
      <div className="details-cont">
        <div className="icon-title-cont">
          <img src="user-1.png" alt="user-icon" />
          <span>Chat</span>
        </div>
        <div>
          <div className="title">Details</div>
          <div className="icon-cont">
            <img src="name-icon.png" alt="name-icon" className="icon" />
            <div className="disabled-input">John Doe</div>
          </div>
          <div className="icon-cont">
            <img src="call-icon.png" alt="call-icon" className="icon" />
            <div className="disabled-input">+91 9998887776</div>
          </div>
          <div className="icon-cont">
            <img src="mail-icon.png" alt="mail-icon" className="icon" />
            <div className="disabled-input">example@gmail.com</div>
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
            <div className="disabled-input">John doe</div>
          </div>
          <div className="team-cont hide" id="show-teams">
            {teamMates.map((teamMate) => (
              <div
                key={teamMate.userImage}
                onClick={() => assignProperly(".modal-assign")}
              >
                <img src={teamMate.userImage} alt="usr-icon" /> {teamMate.name}
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
              <span className="confirm-btn">Confirm</span>
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
              <span className="confirm-btn">Confirm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactCenter;
